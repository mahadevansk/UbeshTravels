# Ubesh Travels — Official Website

An elegant, mobile-friendly, multilingual travel website for **Ubesh Travels**, a personal travel service in Tamil Nadu founded and personally driven by **Balaji**.

Designed in a **restrained travel-editorial style** with genuine destination photography, clear typography, a calm coastal color palette, and direct WhatsApp trip enquiry integration.

Released as public open source under the **MIT License** and pre-configured for free static hosting on **GitHub Pages** or **Vercel**.

Available in **தமிழ் (Tamil)**, **English**, and **हिंदी (Hindi)**.

---

## 🌟 Key Features

1. **Restrained Travel-Editorial Aesthetic**
   - Natural, calm coastal color palette: Deep Maritime Slate (`#162533`), warm sandstone terracotta (`#b85d34`), and warm sand paper background (`#fbf9f5`).
   - Clean, breathable layout with generous spacing and zero generic template clutter, cartoons, animations, or fake trust badges.
   - Refined, uncrowded header with smooth responsive collapse into an accessible drawer menu on tablets and mobile screens.

2. **Genuine Destination Photography Only**
   - Authentic, high-quality, still photographs of the actual destinations saved locally:
     - **Iconic Pamban Bridge**: Historic cantilever railway bridge connecting Rameswaram Island to mainland India (`images/pamban-bridge.jpg`).
     - **Ramar Padam**: Hilltop shrine in Rameswaram with panoramic view of the island and sea (`images/ramar-padam.jpg`).
     - **Agni Theertham**: Sacred seashore facing the eastern gopuram of Ramanathaswamy Temple (`images/agni-theertham.jpg`).
     - **Ramanathaswamy Temple**: World-famous 1,200 carved stone pillar outer corridor (`images/ramanathaswamy-temple.jpg`).
     - **Dhanushkodi Ruins**: Historic church ruins preserved in the sands of the ghost town (`images/dhanushkodi-ruins.jpg`).
     - **Navapashanam Temple (Devipattinam)**: The famous "Nine Planets Temple in the Sea" where Lord Rama installed 9 stone pillars in the shallow waters of the Bay of Bengal (`images/navapashanam-temple.jpg`).
     - **Tirumala Venkateswara Temple**: Sacred shrine in the Eastern Ghats (`images/tirumala-temple.jpg`).
   - Complete license and author documentation in [`ASSET_SOURCES.md`](file:///d:/Works/UbeshTravels/ASSET_SOURCES.md).

3. **Complete Multilingual Support (தமிழ் | English | हिंदी)**
   - Visible, prominent language selector in the header: **தமிழ் | English | हिंदी**.
   - English default; remembers visitor's language choice on future visits (`localStorage`).
   - 100% of visible interface text, route guides, form labels, validation errors, and WhatsApp messages are translated.

4. **Trip Routes & Heritage Story**
   - **Madurai to Rameswaram**: Detailed 5-stop route including the sacred naming origin of Rameshwaram (*Ram + Eswaran = Rameshwaram*, the place where Lord Rama worshipped Ishwara / Shiva).
   - **Navapashanam Temple (Devipattinam)**: Stop 5 featuring the unique open-sea Navagraha pilgrimage site.
   - **Madurai to Tirupati**: Travel guidance for TTD Special Entry Darshan (SED) slots, queue timing, and highway journey pacing. Clear disclaimer that darshan tickets must be booked through the official TTD portal.
   - **Custom Trips & Pickup**: Custom trips across Tamil Nadu, Kerala, Andhra Pradesh, and Karnataka. Pickup from hotel, railway station, or bus stand by prior arrangement.
   - **Configurable Base City Placeholder**: Configured as `[CONFIRM BASE CITY / PICKUP AREA]`.

5. **Travel Options (Vehicle Fleet)**
   - 4-seater, 7-seater, and 11-seater options presented as **“Availability on request”**.
   - Clear disclosure that Balaji owns two cars and drives these vehicle sizes personally, coordinating with trusted associates when additional capacity is requested.
   - No invented prices, reviews, or guarantees.

6. **Direct WhatsApp Booking Enquiry**
   - Static form collecting:
     - Name & Mobile Number
     - Starting Point & Destination
     - Travel Date
     - Number of Passengers & Preferred Seat Size (4-seat, 7-seat, 11-seat, or Not sure)
     - Trip Notes & Special Requests
   - Validates required inputs and immediately opens WhatsApp (`wa.me/919042482403`) with a pre-filled, structured booking inquiry in the user's active language.
   - No database, no data loss, and zero server costs.

---

## 📁 Project Structure

```
UbeshTravels/
├── index.html            # Semantic HTML5 landing page
├── css/
│   └── styles.css        # Restrained travel-editorial stylesheet (mobile-first)
├── js/
│   ├── config.js         # Central configuration (Phone, Placeholders, Fleet)
│   ├── translations.js   # Complete dictionaries for English, Tamil, and Hindi (150 keys)
│   └── app.js            # Language switching, form validation & WhatsApp integration
├── images/               # Authentic destination photography (JPGs)
│   ├── pamban-bridge.jpg
│   ├── ramar-padam.jpg
│   ├── agni-theertham.jpg
│   ├── ramanathaswamy-temple.jpg
│   ├── dhanushkodi-ruins.jpg
│   ├── navapashanam-temple.jpg
│   └── tirumala-temple.jpg
├── .nojekyll             # Bypasses Jekyll processing for clean GitHub Pages serving
├── .gitignore            # Clean git exclusion rules
├── LICENSE               # MIT Open Source License
├── ASSET_SOURCES.md      # Full attribution, licensing, and photographer credits
├── serve.js              # Local Node.js preview server
└── README.md             # Project documentation
```

---

## 🚀 How to Host Free on GitHub Pages

This project is completely static (HTML, CSS, vanilla JS) and works out of the box with zero build step.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) and click **New Repository**.
2. Name it (for example: `ubeshtravels` or `<username>.github.io`).
3. Set the repository to **Public** and leave "Initialize with README" unchecked.

### Step 2: Push the Code
In your local terminal (inside `d:\Works\UbeshTravels`):
```bash
git init
git add .
git commit -m "Initial release of Ubesh Travels website with multilingual support and MIT License"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) -> **Pages** (in left sidebar).
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
4. Click **Save**.
5. Within 1–2 minutes, your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## ⚙️ How to Update Settings (Easy Config)

All central details are stored in **`js/config.js`**. You do not need to touch complex code to update contact details or placeholders.

### 1. Update Phone Number or WhatsApp:
Open `js/config.js`:
```javascript
phoneNumberDisplay: "+91 90424 82403",
phoneNumberRaw: "919042482403", // Country code + digits only
```

### 2. Confirm Base City & Pickup Area:
When the base city is decided (e.g., Madurai), update `js/config.js`:
```javascript
baseCityPlaceholder: "Madurai & Surrounding Districts",
baseCityPlaceholder_TA: "மதுரை மற்றும் சுற்றியுள்ள பகுதிகள்",
baseCityPlaceholder_HI: "मदुरै और आसपास का क्षेत्र",
```

---

## 💻 How to Run and Test Locally

Run the built-in local server:
```powershell
node serve.js
```
Then visit **`http://localhost:3000`** in your browser.

Or simply open [`index.html`](file:///d:/Works/UbeshTravels/index.html) directly in any web browser.

---

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.
All destination photos are credited to their respective photographers under Creative Commons licenses in [`ASSET_SOURCES.md`](ASSET_SOURCES.md).
