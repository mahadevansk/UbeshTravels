/**
 * Ubesh Travels - Central Configuration
 * Easy to update for Balaji without touching complex code.
 */
const UBESH_CONFIG = {
  // Brand & Founder details
  brandName: "Ubesh Travels",
  founderName: "Balaji",
  
  // Contact Details
  phoneNumberDisplay: "+91 90424 82403",
  // Formatted for tel: and wa.me links (country code + digits only):
  phoneNumberRaw: "919042482403",
  
  // 1. Confirmed Base City and Pickup Area (Madurai):
  baseCity: "Madurai",
  baseCity_TA: "மதுரை",
  baseCity_HI: "मदुरै",
  baseCityPlaceholder: "Madurai",
  baseCityPlaceholder_TA: "மதுரை",
  baseCityPlaceholder_HI: "मदुरै",

  // 2. Confirmed Seaside Temple (Devipattinam Navapashanam Temple):
  seasideTempleName: "Navapashanam Temple (Devipattinam)",
  seasideTempleName_TA: "தேவிபட்டினம் நவபாஷாண திருத்தலம் (கடலில் அமைந்த நவக்கிரகங்கள்)",
  seasideTempleName_HI: "नवपाषाणम मंदिर (देवीपट्टिनम - समुद्र में नवग्रह धाम)",

  // Operating States:
  operatingStates: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka"],

  // Vehicle Categories (Available on request):
  vehicleOptions: [
    { id: "seat-4", seats: 4, name: "4-Seat Vehicle" },
    { id: "seat-7", seats: 7, name: "7-Seat Vehicle" },
    { id: "seat-11", seats: 11, name: "11-Seat Vehicle" }
  ],

  // Default Language
  defaultLanguage: "en"
};

if (typeof window !== "undefined") {
  window.UBESH_CONFIG = UBESH_CONFIG;
}
