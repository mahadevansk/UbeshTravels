/**
 * Ubesh Travels - Client Application
 * Editorial Language Switcher, Form Validation, and WhatsApp Enquiry Deep-linking.
 */

(function () {
  "use strict";

  // Application State
  let currentLanguage = "en";

  // DOM Elements
  const langButtons = document.querySelectorAll(".lang-btn");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const primaryNav = document.getElementById("primary-navigation");
  const navBackdrop = document.getElementById("navBackdrop");
  const enquiryForm = document.getElementById("enquiryForm");
  const formFeedback = document.getElementById("formFeedback");

  /**
   * Initialize Application
   */
  function init() {
    // 1. Determine Initial Language: Saved preference -> Config default -> 'en'
    const savedLang = localStorage.getItem("ubeshtravels_lang");
    if (savedLang && ["en", "ta", "hi"].includes(savedLang)) {
      currentLanguage = savedLang;
    } else if (window.UBESH_CONFIG && window.UBESH_CONFIG.defaultLanguage) {
      currentLanguage = window.UBESH_CONFIG.defaultLanguage;
    }

    // 2. Apply Initial Language
    setLanguage(currentLanguage);

    // 3. Bind Dynamic Links & Phone Numbers from Config
    bindConfigData();

    // 4. Attach Event Listeners
    setupEventListeners();
  }

  /**
   * Bind dynamic configuration values across the page
   */
  function bindConfigData() {
    const config = window.UBESH_CONFIG || {};
    const rawNumber = config.phoneNumberRaw || "919042482403";
    const displayPhone = config.phoneNumberDisplay || "+91 90424 82403";

    // Bind phone display text
    document.querySelectorAll(".cfg-phone-display").forEach(el => {
      el.textContent = displayPhone;
    });

    // Bind phone tel: links
    document.querySelectorAll(".cfg-phone-link").forEach(el => {
      el.setAttribute("href", `tel:+${rawNumber}`);
    });

    // Bind default WhatsApp links
    document.querySelectorAll(".cfg-whatsapp-link").forEach(el => {
      let defaultMsg = "Hello Balaji, I would like to inquire about a travel booking with Ubesh Travels.";
      if (currentLanguage === "ta") {
        defaultMsg = "வணக்கம் பாலாஜி, உபேஷ் டிராவல்ஸ் மூலம் பயணம் பற்றி விசாரிக்க விரும்புகிறேன்.";
      } else if (currentLanguage === "hi") {
        defaultMsg = "नमस्ते बालाजी, मैं उबेश ट्रैवल्स के साथ यात्रा के बारे में पूछताछ करना चाहता/चाहती हूँ।";
      }
      el.setAttribute("href", `https://wa.me/${rawNumber}?text=${encodeURIComponent(defaultMsg)}`);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  /**
   * Set Language and translate all DOM elements
   * @param {string} lang - 'en' | 'ta' | 'hi'
   */
  function setLanguage(lang) {
    if (!window.UBESH_TRANSLATIONS || !window.UBESH_TRANSLATIONS[lang]) {
      console.warn("Language dictionary not found for:", lang);
      return;
    }

    currentLanguage = lang;
    localStorage.setItem("ubeshtravels_lang", lang);
    document.documentElement.lang = lang;

    const t = window.UBESH_TRANSLATIONS[lang];

    // 1. Update Title and Meta Description
    if (t.siteTitle) {
      document.title = t.siteTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.metaDescription) {
      metaDesc.setAttribute("content", t.metaDescription);
    }

    // 2. Translate elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // 3. Translate HTML content elements with data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // 4. Translate form placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.setAttribute("placeholder", t[key]);
      }
    });

    // 5. Translate image alt attributes
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      if (t[key] !== undefined) {
        el.setAttribute("alt", t[key]);
      }
    });

    // 6. Translate aria-labels
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (t[key] !== undefined) {
        el.setAttribute("aria-label", t[key]);
      }
    });

    // 7. Update Base City and Seaside Temple Placeholders according to language
    updateDynamicPlaceholders(lang);

    // 8. Update Active state on Language Buttons
    langButtons.forEach(btn => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-current", "true");
      } else {
        btn.classList.remove("active");
        btn.removeAttribute("aria-current");
      }
    });

    // Clear any previous form validation errors when switching language
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.style.display = "none";
    }

    // Update WhatsApp links with current language message
    bindConfigData();
  }

  /**
   * Update placeholder strings that are specifically flagged for confirmation
   */
  function updateDynamicPlaceholders(lang) {
    const config = window.UBESH_CONFIG || {};

    // Base City (Confirmed: Madurai)
    let baseCity = config.baseCity || config.baseCityPlaceholder || "Madurai";
    if (lang === "ta") {
      baseCity = config.baseCity_TA || config.baseCityPlaceholder_TA || "மதுரை";
    } else if (lang === "hi") {
      baseCity = config.baseCity_HI || config.baseCityPlaceholder_HI || "मदुरै";
    }

    document.querySelectorAll(".cfg-base-city").forEach(el => {
      el.textContent = baseCity;
    });

    // Seaside Temple placeholder
    let seasideTemple = config.seasideTemplePlaceholder || "[Temple name to be confirmed]";
    if (lang === "ta" && config.seasideTemplePlaceholder_TA) {
      seasideTemple = config.seasideTemplePlaceholder_TA;
    } else if (lang === "hi" && config.seasideTemplePlaceholder_HI) {
      seasideTemple = config.seasideTemplePlaceholder_HI;
    }

    document.querySelectorAll(".cfg-seaside-temple").forEach(el => {
      el.textContent = seasideTemple;
    });
  }

  /**
   * Setup Event Listeners
   */
  function setupEventListeners() {
    // Language Switcher buttons
    langButtons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        setLanguage(selectedLang);
      });
    });

    // Mobile Navigation Drawer and Backdrop
    function closeMobileNav() {
      if (primaryNav) primaryNav.classList.remove("is-open");
      if (navBackdrop) navBackdrop.classList.remove("is-visible");
      if (mobileNavToggle) mobileNavToggle.setAttribute("aria-expanded", "false");
    }

    if (mobileNavToggle && primaryNav) {
      mobileNavToggle.addEventListener("click", function () {
        const isOpen = primaryNav.classList.toggle("is-open");
        this.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (navBackdrop) {
          navBackdrop.classList.toggle("is-visible", isOpen);
        }
      });

      // Close mobile menu when nav link is clicked
      primaryNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMobileNav);
      });

      // Close mobile menu when backdrop is clicked
      if (navBackdrop) {
        navBackdrop.addEventListener("click", closeMobileNav);
      }
    }

    // Booking Enquiry Form Submission -> Open WhatsApp
    if (enquiryForm) {
      enquiryForm.addEventListener("submit", handleEnquirySubmit);
      enquiryForm.addEventListener("reset", () => {
        if (formFeedback) {
          formFeedback.textContent = "";
          formFeedback.style.display = "none";
        }
        document.querySelectorAll(".has-error").forEach(el => el.classList.remove("has-error"));
      });
    }
  }

  /**
   * Handle Booking Enquiry Form Submit
   * Formats a clean, structured WhatsApp message and opens wa.me URL
   */
  function handleEnquirySubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const start = form.start.value.trim();
    const dest = form.dest.value.trim();
    const date = form.date.value.trim();
    const passengers = form.passengers.value.trim();
    const seatSize = form.seatSize.value;
    const notes = form.notes.value.trim();

    const t = window.UBESH_TRANSLATIONS[currentLanguage] || window.UBESH_TRANSLATIONS.en;

    // Remove previous error highlights
    form.querySelectorAll(".form-control").forEach(inp => inp.classList.remove("has-error"));

    // Validation Checks
    let errorMessage = "";
    let firstErrorField = null;

    if (!name) {
      errorMessage = t.valNameRequired || "Please enter your name.";
      firstErrorField = form.name;
    } else if (!phone || phone.length < 7) {
      errorMessage = t.valPhoneRequired || "Please enter a valid mobile number.";
      firstErrorField = form.phone;
    } else if (!start) {
      errorMessage = t.valStartRequired || "Please enter your starting/pickup location.";
      firstErrorField = form.start;
    } else if (!dest) {
      errorMessage = t.valDestRequired || "Please enter your travel destination.";
      firstErrorField = form.dest;
    } else if (!date) {
      errorMessage = t.valDateRequired || "Please choose an expected travel date.";
      firstErrorField = form.date;
    }

    if (errorMessage) {
      if (formFeedback) {
        formFeedback.textContent = errorMessage;
        formFeedback.className = "form-feedback error";
        formFeedback.style.display = "block";
      }
      if (firstErrorField) {
        firstErrorField.classList.add("has-error");
        firstErrorField.focus();
      }
      return;
    }

    // Clear feedback if valid
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.style.display = "none";
    }

    // Build Formatted WhatsApp Message (Full details preserved in current language)
    let message = "";
    if (currentLanguage === "ta") {
      message =
        `வணக்கம் பாலாஜி (உபேஷ் டிராவல்ஸ்),\n\n` +
        `நான் ஒரு பிரத்யேக பயண முன்பதிவு பற்றி விசாரிக்க விரும்புகிறேன்:\n\n` +
        `• முழுப் பெயர்: ${name}\n` +
        `• தொலைபேசி: ${phone}\n` +
        `• புறப்படும் இடம்: ${start}\n` +
        `• செல்லும் இடம்: ${dest}\n` +
        `• பயண தேதி: ${date}\n` +
        (passengers ? `• பயணிகள் எண்ணிக்கை: ${passengers}\n` : "") +
        (seatSize ? `• விரும்பும் வாகனம்: ${seatSize}\n` : "") +
        (notes ? `• பயணக் குறிப்புகள் / தேவைகள்: ${notes}\n` : "") +
        `\nவாகன இருப்பு மற்றும் பயண விவரங்களை தெரிவிக்கவும். நன்றி!`;
    } else if (currentLanguage === "hi") {
      message =
        `नमस्ते बालाजी (उबेश ट्रैवल्स),\n\n` +
        `मैं एक व्यक्तिगत यात्रा बुकिंग के बारे में पूछताछ करना चाहता/चाहती हूँ:\n\n` +
        `• पूरा नाम: ${name}\n` +
        `• मोबाइल नंबर: ${phone}\n` +
        `• प्रस्थान स्थान: ${start}\n` +
        `• गंतव्य: ${dest}\n` +
        `• यात्रा की तारीख: ${date}\n` +
        (passengers ? `• यात्रियों की संख्या: ${passengers}\n` : "") +
        (seatSize ? `• पसंदीदा वाहन: ${seatSize}\n` : "") +
        (notes ? `• यात्रा विवरण / विशेष आवश्यकताएं: ${notes}\n` : "") +
        `\nकृपया वाहन उपलब्धता और विवरण साझा करें। धन्यवाद!`;
    } else {
      message =
        `Hello Balaji (Ubesh Travels),\n\n` +
        `I would like to enquire about a private trip booking:\n\n` +
        `• Full Name: ${name}\n` +
        `• Contact Phone: ${phone}\n` +
        `• Starting Point: ${start}\n` +
        `• Destination: ${dest}\n` +
        `• Travel Date: ${date}\n` +
        (passengers ? `• Passengers: ${passengers}\n` : "") +
        (seatSize ? `• Preferred Vehicle / Seat Size: ${seatSize}\n` : "") +
        (notes ? `• Trip Notes / Requests: ${notes}\n` : "") +
        `\nPlease let me know about vehicle availability and details. Thank you!`;
    }

    const config = window.UBESH_CONFIG || {};
    const rawNumber = config.phoneNumberRaw || "919042482403";
    const waUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;

    // Show brief confirmation state on button
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const origText = submitBtn.innerHTML;
      submitBtn.setAttribute("disabled", "true");
      submitBtn.innerHTML = `<span>Opening WhatsApp...</span>`;
      setTimeout(() => {
        submitBtn.removeAttribute("disabled");
        submitBtn.innerHTML = origText;
      }, 3000);
    }

    // Open WhatsApp in new window/tab
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  // Initialize on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
