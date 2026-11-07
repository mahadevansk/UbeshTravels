/**
 * Ubesh Travels - Editorial Multilingual Translations
 * Languages supported: English ('en'), Tamil ('ta'), Hindi ('hi')
 * Clean, natural phrasing with accurate geographic and pilgrimage terminology.
 */
const UBESH_TRANSLATIONS = {
  en: {
    langName: "English",
    siteTitle: "Ubesh Travels — Personal Travel Service in Tamil Nadu | Founder: Balaji",
    metaDescription: "Reliable personal travel service across Tamil Nadu and South India. Thoughtfully planned temple journeys, coastal routes from Madurai to Rameswaram and Devipattinam Navapashanam, Tirupati pilgrimage travel, and custom outstation trips with founder Balaji.",

    // Header & Navigation
    navHome: "Home",
    navRameswaram: "Rameswaram",
    navTirupati: "Tirupati",
    navCustom: "Custom Trips",
    navVehicles: "Vehicles",
    navPlaces: "Places Served",
    navAbout: "About Balaji",
    navContact: "Enquiry",
    btnPlanTrip: "Plan a Trip",
    btnWhatsApp: "WhatsApp Balaji",
    btnCallNow: "Call Balaji",

    // Hero Section
    heroOverline: "Personal Travel Service • Tamil Nadu",
    heroHeadline: "Your Tamil Nadu journey, planned around you.",
    heroSubhead: "Thoughtfully paced temple visits, quiet coastal drives, and custom outstation travel across South India. Driven with personal care and courteous attention by founder Balaji.",
    heroPill1: "Custom Route Itineraries",
    heroPill2: "Doorstep Pickup by Prior Arrangement",
    heroPill3: "Paced for Families & Elders",
    heroCaption: "Iconic Pamban Bridge Which Connects Rameswaram Island",
    heroPhotoBadge: "Gateway to Rameswaram",

    // Ram + Eswaran Naming Story
    ramEswaranBadge: "Sacred Heritage",
    ramEswaranTitle: "Ram + Eswaran: The Sacred Name of Rameshwaram",
    ramEswaranText: "Rameswaram derives its holy name from Ram + Eswaran (Lord of Rama). It is here that Lord Rama consecrated and worshipped Lord Shiva (Ishwara) to seek divine blessings, giving this revered island its timeless name.",

    // Featured Route 1: Madurai to Rameswaram
    rameswaramOverline: "Featured Route",
    rameswaramTitle: "Madurai to Rameswaram & Devipattinam",
    rameswaramSubtitle: "A calm spiritual and coastal journey connecting heritage temple corridors, sacred seaside theerthams, Dhanushkodi, and the Nine Planets temple in the sea at Devipattinam.",
    stopPrefix: "Stop",

    // Stop 1: Ramar Padam
    stop1Title: "Ramar Padam (Gandhamadhana Parvatham)",
    stop1Alt: "Ramar Padam hilltop shrine overlooking Rameswaram island",
    stop1Desc: "Located on the highest elevation point of Rameswaram island, this serene two-storey shrine encloses the stone footprint of Lord Rama. From the terrace, travellers can enjoy an open panoramic view across coconut palm groves, the town, and the surrounding sea.",
    stop1Credit: "Photo: Athul s r (CC BY-SA 4.0 via Wikimedia Commons)",

    // Stop 2: Agni Theertham
    stop2Title: "Agni Theertham",
    stop2Alt: "Agni Theertham seashore facing the eastern gopuram of Ramanathaswamy Temple",
    stop2Desc: "The calm sacred sea beach situated directly in front of the eastern tower of Ramanathaswamy Temple. Pilgrims traditionally gather here at daybreak for a ritual sea bath and prayers before proceeding inside the temple complex.",
    stop2Credit: "Photo: S. P. Krishnamoorthy (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 3: Ramanathaswamy Temple
    stop3Title: "Ramanathaswamy Temple",
    stop3Alt: "Carved stone pillar corridor inside Ramanathaswamy Temple in Rameswaram",
    stop3Desc: "A historic Jyotirlinga shrine celebrated for its grand Dravidian architecture, soaring gopurams, and the world-famous outer corridor with over 1,200 intricately sculpted stone pillars. The temple contains 22 sacred interior theerthams bathed in by devotees.",
    stop3Credit: "Photo: Bernard Gagnon / Sr. (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 4: Dhanushkodi
    stop4Title: "Dhanushkodi and the Old Ruined Town",
    stop4Alt: "Ruins of the historic church in the ghost town of Dhanushkodi",
    stop4Desc: "Preserved as a quiet coastal ghost town following the 1964 cyclone, Dhanushkodi sits at the southeastern tip of Pamban Island. Visitors can observe the windswept ruins of the railway station and church, continuing along the narrow coastal highway to Arichal Munai, where the Bay of Bengal meets the Indian Ocean.",
    stop4Credit: "Photo: Thachan.makan (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 5: Navapashanam Temple (Devipattinam)
    stop5Title: "Navapashanam Temple (Devipattinam)",
    stop5Badge: "Nine Planets in the Sea",
    stop5Alt: "Navapashanam Navagraha stone pillars set directly in the coastal waters of Devipattinam",
    stop5Desc: "A uniquely revered coastal pilgrimage site located in the coastal village of Devipattinam, about 70 km northwest of Rameswaram. Known as the 'Nine Planets Temple in the Sea', this sacred shrine consists of nine stone pillars installed directly into the shallow waters of the Bay of Bengal. According to the Ramayana, Lord Rama personally installed and worshipped these Navagraha stones to calm planetary influences before embarking to Lanka. Pilgrims take a holy sea bath and circumambulate the submerged deities.",
    stop5Credit: "Photo: Rajadurai2016 (CC BY-SA 4.0 via Wikimedia Commons)",

    // Trip 2: Madurai to Tirupati
    tirupatiOverline: "Pilgrimage Route",
    tirupatiTitle: "Madurai to Tirupati",
    tirupatiSubtitle: "Private, comfortable highway travel to Sri Venkateswara Swamy Temple atop the Seven Hills of Tirumala.",
    tirupatiAlt: "Tirumala Venkateswara Temple nestled in the sacred Eastern Ghats",
    tirupatiCredit: "Photo: Adityamadhav83 (CC BY-SA 3.0 via Wikimedia Commons)",
    
    tirupatiDarshanTitle: "1. Planning your trip and darshan schedule",
    tirupatiDarshanDesc: "Balaji works closely with you to plan road departure and rest stops around your pre-booked TTD Special Entry Darshan (SED) slot. We assist with pacing the journey from Madurai, advice on traditional dress codes, luggage handling, and timing so your family can proceed to darshan without rushing.",
    
    tirupatiAboutTitle: "2. About Tirupati & the road journey",
    tirupatiAboutDesc: "Perched in the lush Seshachalam hills of Andhra Pradesh, Tirumala is one of India's most visited sacred shrines. The road distance from Madurai is approximately 550 km. We plan the trip with calm highway driving, clean vegetarian food stops, and comfortable refreshment breaks suited for elderly travellers.",
    
    tirupatiDisclaimer: "Notice: Ubesh Travels provides private round-trip transportation and itinerary planning assistance. We do not sell or guarantee temple entry tickets; darshan tickets must be booked directly through the official TTD portal.",

    // Custom Trips and Pickup
    customOverline: "Flexible Outstation Travel",
    customTitle: "Custom Trips & Pickup by Prior Arrangement",
    customSubtitle: "Every traveller and family has distinct schedules. Ubesh Travels designs custom itineraries around your requested places, temple timings, and travel pace.",
    customPickupTitle: "Doorstep Pickup by Prior Arrangement",
    customPickupDesc: "Pickup from your hotel, railway station, or bus stand can be scheduled by prior arrangement. We confirm your pickup point and exact timing in advance so you start your journey relaxed.",
    customBaseCityNote: "Base City & Operational Area: Configured as [CONFIRM BASE CITY / PICKUP AREA]. Exact service perimeter will be clarified during your initial booking inquiry.",
    customFlexibleTitle: "Travel at Your Own Pace",
    customFlexibleDesc: "No rigid itineraries or commercial pressure. Pause for quiet tea breaks, scenic viewpoints, or local dining whenever your group desires.",

    // Travel Options (Vehicles)
    vehiclesOverline: "Fleet & Capacity",
    vehiclesTitle: "Travel Options",
    vehiclesSubtitle: "Balaji owns two cars and personally drives these vehicle sizes. All options are offered as availability on request based on your dates and group size.",
    vehicleAvailabilityNote: "Shown as 'Availability on request'. Balaji operates two dedicated vehicles and coordinates with trusted personal associates if specialized vehicle capacity or additional vehicles are required.",
    
    seat4Title: "4-Seat Option",
    seat4Status: "Availability on request",
    seat4Desc: "Comfortable air-conditioned sedan or hatchback, ideal for 1 to 4 passengers with luggage. Well suited for couples, solo pilgrims, or small families.",
    seat4Specs: "1–4 Passengers • AC • Standard Boot Space",

    seat7Title: "7-Seat Option",
    seat7Status: "Availability on request",
    seat7Desc: "Spacious multi-utility vehicle (MPV) with generous legroom and luggage space. Suited for joint family temple journeys and outstation travel.",
    seat7Specs: "5–7 Passengers • Dual AC • Ample Luggage Room",

    seat11Title: "11-Seat Option",
    seat11Status: "Availability on request",
    seat11Desc: "Arranged upon request for larger families or pilgrimage groups traveling together. High-roof comfort, individual seating, and relaxed group travel.",
    seat11Specs: "8–11 Passengers • High-Roof AC • Group Seating",

    // Places Served
    placesOverline: "Coverage",
    placesTitle: "Places & States Served",
    placesSubtitle: "Custom outstation journey requests are welcome across South India:",
    placesTN: "Tamil Nadu",
    placesTNDesc: "Madurai, Rameswaram, Devipattinam, Kanyakumari, Thanjavur, Tirunelveli, Kodaikanal, Ooty, Chennai, and regional temple circuits.",
    placesKL: "Kerala",
    placesKLDesc: "Munnar, Thekkady, Kochi, Trivandrum, Padmanabhaswamy Temple, and Sabarimala routes.",
    placesAP: "Andhra Pradesh",
    placesAPDesc: "Tirupati, Tirumala Hills, Srikalahasti, Kanipakam, and border pilgrimage points.",
    placesKA: "Karnataka",
    placesKADesc: "Bengaluru, Mysuru, Chamundi Hills, and connecting South Karnataka routes.",
    placesDisclaimer: "Please note: Custom trips across state lines require interstate permit coordination. Routes and availability are subject to prior schedule confirmation.",

    // About Balaji
    aboutOverline: "Founder & Driver",
    aboutTitle: "About Balaji & Ubesh Travels",
    aboutSubtitle: "A dedicated personal travel service built on calm driving, punctuality, and straightforward communication.",
    aboutP1: "Hello, I am Balaji. I founded Ubesh Travels to provide clean, respectful, and punctual personal road travel across Tamil Nadu and neighbouring states. Unlike impersonal aggregator platforms where driver identity changes with every ride, I take direct responsibility for your journey from start to finish.",
    aboutP2: "With years of highway experience and familiarity with Tamil Nadu temple customs, route conditions, and family travel requirements, I maintain a steady and patient driving style so that senior citizens and children feel entirely at ease.",
    aboutPoint1: "Courteous, non-smoking, professional driving",
    aboutPoint2: "Clean, well-maintained, air-conditioned cars",
    aboutPoint3: "Strict adherence to safety and family privacy",
    aboutPoint4: "Clear, upfront communication with zero hidden charges",

    // Booking Enquiry Form
    enquiryOverline: "Plan Your Journey",
    enquiryTitle: "Trip Booking Enquiry",
    enquirySubtitle: "Fill in your travel details below. Submitting will validate your information and immediately open a pre-filled WhatsApp enquiry message directly to Balaji.",

    formName: "Your Full Name",
    formNamePlaceholder: "e.g., Sundar Rajan",
    formPhone: "Mobile Number",
    formPhonePlaceholder: "e.g., 9876543210",
    formStart: "Starting / Pickup Point",
    formStartPlaceholder: "e.g., Hotel in Madurai / Madurai Junction",
    formDest: "Destination / Desired Route",
    formDestPlaceholder: "e.g., Rameswaram, Devipattinam & Dhanushkodi / Tirupati",
    formDate: "Travel Date",
    formPassengers: "Number of Passengers",
    formPassengersPlaceholder: "e.g., 4 passengers",
    formSeatSize: "Preferred Seat Size",
    formSeatSizeSelect: "Select vehicle option",
    formSeatSize4: "4-Seat Vehicle (Sedan / Hatchback)",
    formSeatSize7: "7-Seat Vehicle (Spacious MPV)",
    formSeatSize11: "11-Seat Vehicle (Group Van)",
    formSeatSizeUnsure: "Not sure / Recommend best option",
    formNotes: "Trip Notes & Special Requests",
    formNotesPlaceholder: "Elderly passengers traveling, specific darshan slots, luggage requirements, or preferred halt stops...",
    formSubmit: "Send Trip Enquiry via WhatsApp",
    formReset: "Clear Form",
    formPrivacyNote: "Static site: No details are stored on a database. Submitting opens WhatsApp directly with your entered details pre-filled.",

    // Form Validation Messages
    valNameRequired: "Please enter your name.",
    valPhoneRequired: "Please enter a valid mobile number.",
    valStartRequired: "Please enter your starting/pickup location.",
    valDestRequired: "Please enter your travel destination.",
    valDateRequired: "Please choose an expected travel date.",

    // Direct Contact Info
    contactDirectTitle: "Direct Contact",
    contactDirectDesc: "If you prefer to speak directly or have immediate questions, feel free to call or WhatsApp Balaji.",
    contactPhoneLabel: "Direct Phone",
    contactWhatsAppLabel: "WhatsApp Message",
    contactBaseCityLabel: "Base City & Pickup",
    contactHoursLabel: "Hours",
    contactHoursValue: "6:00 AM – 10:00 PM (Daily)",

    // Footer
    footerBrand: "Ubesh Travels",
    footerTagline: "Personalized travel service and sacred temple routes across Tamil Nadu and South India.",
    footerFounder: "Founder & Dedicated Driver: Balaji",
    footerPhone: "Contact: +91 90424 82403",
    footerLicense: "MIT License (Open Source)",
    footerRights: "Ubesh Travels. Open Source under the MIT License.",
    footerDisclaimer: "Vehicle options and routes are subject to prior schedule confirmation. No unauthorized warranties or third-party bookings are implied.",
    footerAttributionLink: "Photo Sources & Attributions (ASSET_SOURCES.md)"
  },

  ta: {
    langName: "தமிழ்",
    siteTitle: "உபேஷ் டிராவல்ஸ் — தமிழ்நாட்டில் உங்கள் பிரத்யேக பயணச் சேவை | நிறுவனர்: பாலாஜி",
    metaDescription: "தமிழ்நாடு மற்றும் தென் இந்தியா முழுவதும் நம்பகமான தனிநபர் பயணச் சேவை. மதுரை முதல் ராமேஸ்வரம், தேவிபட்டினம் நவபாஷாண திருத்தலம், திருப்பதி ஏழுமலையான் தரிசனம் மற்றும் வெளியூர்ப் பயணங்கள். நிறுவனர் பாலாஜியின் நேரடிப் பொறுப்பில்.",

    // Header & Navigation
    navHome: "முகப்பு",
    navRameswaram: "ராமேஸ்வரம்",
    navTirupati: "திருப்பதி",
    navCustom: "தனிப்பயன்",
    navVehicles: "வாகனங்கள்",
    navPlaces: "பயண இடங்கள்",
    navAbout: "பாலாஜி பற்றி",
    navContact: "விசாரணை",
    btnPlanTrip: "பயணம் திட்டமிட",
    btnWhatsApp: "வாட்ஸ்அப் செய்தி",
    btnCallNow: "அழைக்க பாலாஜி",

    // Hero Section
    heroOverline: "தனிநபர் பயணச் சேவை • தமிழ்நாடு",
    heroHeadline: "உங்கள் விருப்பத்திற்கேற்ப திட்டமிடப்படும் தமிழ்நாட்டுப் பயணம்.",
    heroSubhead: "அனுபவம் மற்றும் பொறுப்பான ஓட்டுநருடன் கூடிய கோவில் தரிசனங்கள், அழகிய கடற்கரைப் பயணங்கள் மற்றும் தென் இந்திய வெளியூர்ப் பயணங்கள். நிறுவனர் பாலாஜியின் நேரடி கவனத்தில்.",
    heroPill1: "உங்கள் நேரத்திற்கு ஏற்ற திட்டம்",
    heroPill2: "முன் ஏற்பாட்டின் பேரில் பிக்கப்",
    heroPill3: "முதியவர்கள் & குடும்பத்தினருக்கு உகந்த வேகம்",
    heroCaption: "ராமேஸ்வரம் தீவை இணைக்கும் புகழ்பெற்ற பாம்பன் பாலம்",
    heroPhotoBadge: "ராமேஸ்வரத்தின் நுழைவு வாயில்",

    // Ram + Eswaran Naming Story
    ramEswaranBadge: "புனித வரலாறு",
    ramEswaranTitle: "ராமேஸ்வரம் பெயர்க்காரணம் (ராமர் + ஈஸ்வரன்)",
    ramEswaranText: "ராமர் + ஈஸ்வரன் = ராமேஸ்வரம். ராமாயண காவியத்தின்படி, சிவபெருமானை (ஈஸ்வரனை) ஸ்ரீராமர் லிங்கம் அமைத்து வழிபட்ட புண்ணிய பூமி என்பதால், இத்தீவு 'ராமேஸ்வரம்' என்ற புனிதப் பெயரைப் பெற்றது.",

    // Featured Route 1: Madurai to Rameswaram
    rameswaramOverline: "மாதிரிப் பயணப் பாதை",
    rameswaramTitle: "மதுரை முதல் ராமேஸ்வரம் & தேவிபட்டினம்",
    rameswaramSubtitle: "வரலாற்றுச் சிறப்புமிக்க மதுரையிலிருந்து புனித ராமேஸ்வரக் கடற்கரை, தனுஷ்கோடி மற்றும் கடலில் அமைந்த தேவிபட்டினம் நவபாஷாண திருத்தலம் வரை செல்லும் ஆன்மீகப் பயணம்.",
    stopPrefix: "நிறுத்தம்",

    // Stop 1: Ramar Padam
    stop1Title: "ராமர் பாதம் (கந்தமாதன பர்வதம்)",
    stop1Alt: "ராமேஸ்வரத் தீவின் இயற்கை அழகை நோக்கும் ராமர் பாதம் குன்று கோவில்",
    stop1Desc: "ராமேஸ்வரத் தீவின் மிக உயரமான இடத்தில் அமைந்துள்ள அமைதியான இரு அடுக்கு மண்டபம். இங்கு ஸ்ரீராமரின் பாதச்சுவடுகள் கல்லில் பொறிக்கப்பட்டு வழிபடப்படுகின்றன. இங்கிருந்து தீவின் இயற்கை அழகையும், தென்னந்தோப்புகளையும், சுற்றியுள்ள கடலையும் முழுமையாகக் காணலாம்.",
    stop1Credit: "புகைப்படம்: அதுல் எஸ். ஆர் (CC BY-SA 4.0 via Wikimedia Commons)",

    // Stop 2: Agni Theertham
    stop2Title: "அக்னி தீர்த்தம்",
    stop2Alt: "ராமநாதசுவாமி திருக்கோவில் கோபுர வாசலுக்கு எதிரே உள்ள அக்னி தீர்த்தக் கடற்கரை",
    stop2Desc: "ராமநாதசுவாமி திருக்கோவிலின் கிழக்கு கோபுர வாசலுக்கு எதிரே அமைந்துள்ள அமைதியான புனிதம் நிறைந்த கடல் கரை. பக்தர்கள் கோவில் தரிசனம் செய்வதற்கு முன்பாக பாரம்பரியமாக அதிகாலையில் இதில் நீராடி முன்னோர்களுக்குத் தர்ப்பணம் செய்கின்றனர்.",
    stop2Credit: "புகைப்படம்: எஸ். பி. கிருஷ்ணமூர்த்தி (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 3: Ramanathaswamy Temple
    stop3Title: "அருள்மிகு ராமநாதசுவாமி திருக்கோவில்",
    stop3Alt: "ராமேஸ்வரம் ராமநாதசுவாமி திருக்கோவிலின் பிரம்மாண்டமான ஆயிரம் தூண் பிரகாரம்",
    stop3Desc: "12 ஜோதிர்லிங்கத் தலங்களில் ஒன்றான புகழ்பெற்ற திருத்தலம். கம்பீரமான கோபுரங்கள் மற்றும் 1,200க்கும் மேற்பட்ட செதுக்கப்பட்ட தூண்களைக் கொண்ட உலகப் பிரசித்தி பெற்ற நீண்ட பிரகாரம் மற்றும் 22 புனித தீர்த்த கிணறுகள் கொண்டது.",
    stop3Credit: "புகைப்படம்: பெர்னார்ட் காக்னன் / எஸ்ஸார் (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 4: Dhanushkodi
    stop4Title: "தனுஷ்கோடி மற்றும் வரலாற்றுச் சின்னங்கள்",
    stop4Alt: "தனுஷ்கோடியில் மணலில் நின்றிருக்கும் வரலாற்று சிறப்புமிக்க தேவாலய இடிபாடுகள்",
    stop4Desc: "1964ஆம் ஆண்டு புயலால் பாதிக்கப்பட்ட பாம்பன் தீவின் தென்கோடியில் அமைந்துள்ள வரலாற்று சிறப்புமிக்க இடம். புயலின் நினைவுகளோடு நிற்கும் பழைய ரயில் நிலையம், தேவாலயம் மற்றும் வங்காள விரிகுடாவும் இந்தியப் பெருங்கடலும் சங்கமிக்கும் அரிச்சல் முனை.",
    stop4Credit: "புகைப்படம்: தச்சன்.மகன் (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 5: Navapashanam Temple (Devipattinam)
    stop5Title: "தேவிபட்டினம் நவபாஷாண திருத்தலம் (கடலில் நவக்கிரகங்கள்)",
    stop5Badge: "கடலில் அமைந்த நவக்கிரகங்கள்",
    stop5Alt: "தேவிபட்டினம் கடற்கரையில் கடலுக்குள் அமைந்துள்ள ஒன்பது நவபாஷாண நவக்கிரக தூண்கள்",
    stop5Desc: "ராமேஸ்வரத்திலிருந்து சுமார் 70 கி.மீ தொலைவில் உள்ள தேவிபட்டினம் கடற்கரையில் அமைந்துள்ள உலகப் புகழ்பெற்ற திருத்தலம். இங்கு வங்காள விரிகுடாவின் அமைதியான கடல் நீரில் ஒன்பது நவபாஷாணக் கற்கள் நவக்கிரகங்களாக நிறுவப்பட்டுள்ளன. இலங்கை செல்லும் முன் கிரகங்களின் தோஷங்களை நீக்க ஸ்ரீராமரே தன் திருக்கரங்களால் இந்த ஒன்பது பாஷாணக் கற்களை கடலில் அமைத்து வழிபட்டதாகப் புராணங்கள் கூறுகின்றன. பக்தர்கள் கடலில் நீராடி கடலுக்குள் அமைந்துள்ள இந்த நவக்கிரகங்களை வலம் வந்து வழிபடுகின்றனர்.",
    stop5Credit: "புகைப்படம்: ராஜதுரை2016 (CC BY-SA 4.0 via Wikimedia Commons)",

    // Trip 2: Madurai to Tirupati
    tirupatiOverline: "ஆன்மீகப் புனிதப் பயணம்",
    tirupatiTitle: "மதுரை முதல் திருப்பதி வரை",
    tirupatiSubtitle: "ஏழுமலையான் அருள்பாலிக்கும் திருப்பதி திருமலைக்கு பாதுகாப்பான, அமைதியான தனிநபர் சாலைப் பயணம்.",
    tirupatiAlt: "சேஷாசலம் மலைத்தொடரில் அமைந்துள்ள திருப்பதி திருமலை திருக்கோவில் தோற்றம்",
    tirupatiCredit: "புகைப்படம்: ஆதித்யமாதவ்83 (CC BY-SA 3.0 via Wikimedia Commons)",
    
    tirupatiDarshanTitle: "1. தரிசன நேரத்திற்கு ஏற்ப பயணத்தைத் திட்டமிடுதல்",
    tirupatiDarshanDesc: "நீங்கள் முன்பதிவு செய்துள்ள திருமலை சிறப்பு நுழைவு தரிசன (SED) நேரத்திற்கு ஏற்ப பயண நேரத்தை பாலாஜி சரியாக திட்டமிடுகிறார். பாரம்பரிய ஆடை முறைகள், வரிசை நேரங்கள் மற்றும் லட்டு பிரசாதம் பெறும் நடைமுறைகளுக்கு முன்கூட்டியே வழிகாட்டுகிறார்.",
    
    tirupatiAboutTitle: "2. திருப்பதி மற்றும் நெடுஞ்சாலைப் பயணம் பற்றிய தகவல்கள்",
    tirupatiAboutDesc: "ஆந்திர மாநிலத்தின் சேஷாசலம் மலைத்தொடரில் அமைந்துள்ள திருப்பதி உலகின் மிக முக்கிய புண்ணிய தலமாகும். மதுரையிலிருந்து சுமார் 550 கி.மீ தூரமுள்ள இந்த நெடுஞ்சாலைப் பயணத்தில், முதியவர்கள் சோர்வடையாமல் இருக்க சுத்தமான சைவ உணவகங்களில் ஓய்வு எடுத்து பாதுகாப்பாக அழைத்துச் செல்லப்படுகிறீர்கள்.",
    
    tirupatiDisclaimer: "குறிப்பு: உபேஷ் டிராவல்ஸ் நேரடி வாகனப் பயண சேவை மற்றும் பயண நேர வழிகாட்டுதலை மட்டுமே வழங்குகிறது. கோவில் தரிசன டிக்கெட்டுகளை TTD அதிகாரப்பூர்வ இணையதளம் மூலம் பயணிகள் தாங்களே முன்பதிவு செய்ய வேண்டும்.",

    // Custom Trips and Pickup
    customOverline: "தனிப்பயன் வெளியூர்ப் பயணம்",
    customTitle: "தனிப்பயன் பயணங்கள் & முன் ஏற்பாட்டின் பேரில் பிக்கப்",
    customSubtitle: "ஒவ்வொரு குடும்பத்தின் பயணத் தேவையும் மாறுபடும். உங்கள் நேர அட்டவணை மற்றும் விருப்பத்திற்கு ஏற்ப தனிப்பட்ட பயணத் திட்டத்தை உபேஷ் டிராவல்ஸ் அமைத்துத் தருகிறது.",
    customPickupTitle: "முன் ஏற்பாட்டின் பேரில் பிக்கப் வசதி",
    customPickupDesc: "உங்கள் தங்கும் விடுதி (Hotel), ரயில் நிலையம் அல்லது பேருந்து நிலையத்திலிருந்து முன் ஏற்பாட்டின் பேரில் சரியான நேரத்தில் பிக்கப் செய்யப்படுகிறது.",
    customBaseCityNote: "தொடக்க நகரம் & பகுதி: [தொடக்க நகரம் / பிக்கப் பகுதி உறுதிப்படுத்தப்பட வேண்டும்]. முன்பதிவு விசாரணையின் போது இது உறுதி செய்யப்படும்.",
    customFlexibleTitle: "உங்கள் விருப்பப்படி அமைதியான வேகம்",
    customFlexibleDesc: "எந்த அவசரமும் இன்றி உணவருந்தவோ, இயற்கை காட்சிகளை ரசிக்கவோ உங்கள் விருப்பப்படி வண்டியை நிறுத்திக் கொள்ளலாம்.",

    // Travel Options (Vehicles)
    vehiclesOverline: "வாகன தேர்வுகள்",
    vehiclesTitle: "வாகன விருப்பங்கள்",
    vehiclesSubtitle: "பாலாஜி அவர்கள் சொந்தமாக இரண்டு கார்களை வைத்துள்ளார், மேலும் இந்த வாகன அளவுகளையும் அவரே ஓட்டுவார். அனைத்து விருப்பங்களும் தேதி மற்றும் இருப்பை பொறுத்து வழங்கப்படும்.",
    vehicleAvailabilityNote: "'இருப்பு நிலவரத்திற்கு உட்பட்டது' என்று குறிப்பிடப்பட்டுள்ளது. பாலாஜி இரண்டு வாகனங்களை இயக்கி வருகிறார், கூடுதல் நபர்கள் இருந்தால் நம்பகமான ஓட்டுநர்கள் மூலம் வாகனம் ஏற்பாடு செய்யப்படும்.",
    
    seat4Title: "4 இருக்கைகள் கொண்ட வாகனம்",
    seat4Status: "இருப்பு நிலவரத்திற்கு உட்பட்டது",
    seat4Desc: "தம்பதியர், தனிநபர் அல்லது 4 பேர் கொண்ட சிறிய குடும்பங்களுக்கு ஏற்ற ஏசி வசதியுடன் கூடிய செடான் அல்லது ஹேட்ச்பேக் வாகனம்.",
    seat4Specs: "1–4 பயணிகள் • AC வசதி • போதிய லக்கேஜ் இடம்",

    seat7Title: "7 இருக்கைகள் கொண்ட வாகனம்",
    seat7Status: "இருப்பு நிலவரத்திற்கு உட்பட்டது",
    seat7Desc: "குடும்பத்தினருக்கு விசாலமான இடவசதி கொண்ட MPV ரக வாகனம். அதிக லக்கேஜ் வசதி மற்றும் நீண்ட தூர பயணங்களுக்கு மிகவும் சௌகரியமானது.",
    seat7Specs: "5–7 பயணிகள் • இரட்டை AC • அதிக லக்கேஜ் இடம்",

    seat11Title: "11 இருக்கைகள் கொண்ட வாகனம்",
    seat11Status: "இருப்பு நிலவரத்திற்கு உட்பட்டது",
    seat11Desc: "அனைத்து குடும்பத்தினரும் ஒன்றாகப் பயணிக்க கோரிக்கையின் பேரில் ஏற்பாடு செய்யப்படும் வேன் வாகனம். வசதியான குழுப் பயணம்.",
    seat11Specs: "8–11 பயணிகள் • உயர்தர AC வேன் • குழு பயணம்",

    // Places Served
    placesOverline: "சேவை பகுதிகள்",
    placesTitle: "சேவை செய்யப்படும் மாநிலங்கள்",
    placesSubtitle: "தென்னிந்தியாவின் நான்கு முக்கிய மாநிலங்களுக்கும் தனிப்பயன் வெளியூர்ப் பயண கோரிக்கைகள் வரவேற்கப்படுகின்றன:",
    placesTN: "தமிழ்நாடு",
    placesTNDesc: "மதுரை, ராமேஸ்வரம், தேவிபட்டினம், கன்னியாகுமரி, தஞ்சாவூர், திருநெல்வேலி, கொடைக்கானல், ஊட்டி, சென்னை உள்ளிட்ட அனைத்து இடங்கள்.",
    placesKL: "கேரளா",
    placesKLDesc: "மூணார், தேக்கடி, கொச்சி, திருவனந்தபுரம் பத்மநாபசுவாமி கோவில் மற்றும் சபரிமலை வழித்தடங்கள்.",
    placesAP: "ஆந்திர பிரதேசம்",
    placesAPDesc: "திருப்பதி, திருமலை, காளஹஸ்தி, காணிப்பாக்கம் மற்றும் சுற்றியுள்ள புண்ணிய தலங்கள்.",
    placesKA: "கர்நாடகா",
    placesKADesc: "பெங்களூரு, மைசூரு, சாமுண்டி மலை, பந்திப்பூர் மற்றும் எல்லைப் பகுதிகள்.",
    placesDisclaimer: "குறிப்பு: வெளி மாநில பயணங்களுக்கு முன்கூட்டியே அனுமதி சீட்டு (Permit) மற்றும் அட்டவணை உறுதிப்படுத்தல் தேவைப்படுகிறது.",

    // About Balaji
    aboutOverline: "நிறுவனர் மற்றும் ஓட்டுநர்",
    aboutTitle: "நிறுவனர் பாலாஜி பற்றி",
    aboutSubtitle: "பாதுகாப்பான ஓட்டுதல், நேரந்தவறாமை மற்றும் வெளிப்படையான தகவல் பரிமாற்றத்தை அடிப்படையாகக் கொண்ட நேரடிப் பயண சேவை.",
    aboutP1: "வணக்கம், என் பெயர் பாலாஜி. தமிழ்நாடு மற்றும் அண்டை மாநிலங்களில் சுத்தமான, நேரந்தவறாத, கண்ணியமான தனிநபர் பயண சேவையை வழங்குவதற்காக உபேஷ் டிராவல்ஸை தொடங்கினேன். யார் வருகிறார்கள் என்று தெரியாத ஆன்லைன் செயலிகளை விட, உங்கள் பயணத்திற்கு நான் நேரடியாக பொறுப்பேற்கிறேன்.",
    aboutP2: "நெடுஞ்சாலை ஓட்டுநர் அனுபவம், தமிழ்நாட்டின் கோவில் வழிபாட்டு முறைகள் மற்றும் குடும்பங்களின் தேவைகளை நன்கு அறிந்தவன். பெரியவர்களும் குழந்தைகளும் எந்தவித அலைச்சலும் இன்றி நிம்மதியாகப் பயணிக்க அமைதியான முறையில் ஓட்டுவதே எனது பாணி.",
    aboutPoint1: "கண்ணியமான, புகைபிடிக்காத, தொழில்முறை ஓட்டுநர்",
    aboutPoint2: "சுத்தமான, நன்கு பராமரிக்கப்பட்ட குளிர்சாதன (AC) வாகனங்கள்",
    aboutPoint3: "குடும்பத்தின் அந்தரங்கம் மற்றும் பாதுகாப்பிற்கு முதலிடம்",
    aboutPoint4: "மறைமுகக் கட்டணங்கள் இல்லாத வெளிப்படையான சேவை",

    // Booking Enquiry Form
    enquiryOverline: "பயணத்தை திட்டமிட",
    enquiryTitle: "பயண முன்பதிவு விசாரணை",
    enquirySubtitle: "உங்கள் பயண விவரங்களை கீழே உள்ள படிவத்தில் நிரப்புங்கள். சமர்ப்பிக்கும் போது பாலாஜிக்கு நேரடியாக வாட்ஸ்அப் செய்தி உருவாகும்.",

    formName: "உங்கள் முழுப் பெயர்",
    formNamePlaceholder: "எ.கா: சுந்தர் ராஜன்",
    formPhone: "தொலைபேசி எண்",
    formPhonePlaceholder: "எ.கா: 9876543210",
    formStart: "புறப்படும் இடம் / பிக்கப்",
    formStartPlaceholder: "எ.கா: மதுரை சந்திப்பு / மதுரையில் உள்ள ஹோட்டல்",
    formDest: "செல்லும் இடம் / பாதை",
    formDestPlaceholder: "எ.கா: ராமேஸ்வரம், தேவிபட்டினம் & தனுஷ்கோடி / திருப்பதி",
    formDate: "பயண தேதி",
    formPassengers: "பயணிகள் எண்ணிக்கை",
    formPassengersPlaceholder: "எ.கா: 4 பயணிகள்",
    formSeatSize: "விரும்பும் வாகன வகை",
    formSeatSizeSelect: "வாகன விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
    formSeatSize4: "4 இருக்கை வாகனம் (செடான் / ஹேட்ச்பேக்)",
    formSeatSize7: "7 இருக்கை வாகனம் (MPV)",
    formSeatSize11: "11 இருக்கை வாகனம் (வேன்)",
    formSeatSizeUnsure: "உறுதியாக தெரியவில்லை / ஆலோசனை வழங்கவும்",
    formNotes: "குறிப்புகள் & சிறப்பு கோரிக்கைகள்",
    formNotesPlaceholder: "முதியவர்கள் பயணம், கோவில் தரிசன நேரங்கள் அல்லது கூடுதல் தகவல்கள்...",
    formSubmit: "வாட்ஸ்அப் மூலம் விசாரிக்கவும்",
    formReset: "படிவத்தை அழிக்க",
    formPrivacyNote: "உங்கள் விவரங்கள் எந்த சர்வரிலும் சேமிக்கப்படுவதில்லை. பொத்தானை அழுத்தினால் உங்கள் வாட்ஸ்அப்பில் செய்தி நேரடியாக உருவாகும்.",

    // Validation
    valNameRequired: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.",
    valPhoneRequired: "சரியான தொலைபேசி எண்ணை உள்ளிடவும்.",
    valStartRequired: "புறப்படும் இடத்தை உள்ளிடவும்.",
    valDestRequired: "செல்லும் இடத்தை உள்ளிடவும்.",
    valDateRequired: "பயண தேதியை தேர்ந்தெடுக்கவும்.",

    // Direct Contact Info
    contactDirectTitle: "நேரடி தொடர்பு",
    contactDirectDesc: "நேரடியாக பேச விரும்பினால் பாலாஜியை எந்த நேரத்திலும் அழைக்கலாம்.",
    contactPhoneLabel: "நேரடி தொலைபேசி",
    contactWhatsAppLabel: "வாட்ஸ்அப் செய்தி",
    contactBaseCityLabel: "தொடக்க நகரம் & பிக்கப்",
    contactHoursLabel: "தொடர்பு நேரம்",
    contactHoursValue: "காலை 6:00 – இரவு 10:00 மணி வரை (தினமும்)",

    // Footer
    footerBrand: "உபேஷ் டிராவல்ஸ்",
    footerTagline: "தமிழ்நாடு மற்றும் தென் இந்தியாவில் நம்பகமான தனிநபர் பயண சேவை.",
    footerFounder: "நிறுவனர் மற்றும் பிரதான ஓட்டுநர்: பாலாஜி",
    footerPhone: "தொடர்புக்கு: +91 90424 82403",
    footerLicense: "MIT உரிமம் (Open Source)",
    footerRights: "உபேஷ் டிராவல்ஸ். MIT உரிமத்தின் கீழ் திறந்த மூல மென்பொருள் (Open Source).",
    footerDisclaimer: "வாகனங்கள் மற்றும் வழித்தடங்கள் முன்கூட்டியே உறுதி செய்யப்படும் இருப்பைப் பொறுத்தது.",
    footerAttributionLink: "புகைப்பட உரிமங்கள் மற்றும் ஆதாரங்கள் (ASSET_SOURCES.md)"
  },

  hi: {
    langName: "हिंदी",
    siteTitle: "उबेश ट्रैवल्स — तमिलनाडु में आपकी व्यक्तिगत यात्रा सेवा | संस्थापक: बालाजी",
    metaDescription: "तमिलनाडु और दक्षिण भारत में व्यक्तिगत यात्रा सेवा। मदुरै से रामेश्वरम, देवीपट्टिनम नवपाषाणम मंदिर, तिरुपति देवस्थानम दर्शन और परिवार के अनुकूल आउटस्टेशन यात्राएं। संस्थापक बालाजी द्वारा व्यक्तिगत सेवा।",

    // Header & Navigation
    navHome: "होम",
    navRameswaram: "रामेश्वरम",
    navTirupati: "तिरुपति",
    navCustom: "कस्टम यात्रा",
    navVehicles: "गाड़ियां",
    navPlaces: "स्थान",
    navAbout: "बालाजी परिचय",
    navContact: "पूछताछ",
    btnPlanTrip: "यात्रा प्लान करें",
    btnWhatsApp: "व्हाट्सएप करें",
    btnCallNow: "कॉल करें बालाजी",

    // Hero Section
    heroOverline: "व्यक्तिगत यात्रा सेवा • तमिलनाडु",
    heroHeadline: "आपकी पसंद और सुविधा के अनुसार तैयार की गई तमिलनाडु यात्रा।",
    heroSubhead: "अनुभवी और शिष्ट ड्राइविंग के साथ दक्षिण भारत में विशेष मंदिर दर्शन, शांत तटीय यात्राएं और परिवार के अनुकूल आउटस्टेशन सफ़र। संस्थापक बालाजी द्वारा व्यक्तिगत सेवा।",
    heroPill1: "आपकी सुविधानुसार यात्रा कार्यक्रम",
    heroPill2: "पूर्व व्यवस्था से पिकअप सुविधा",
    heroPill3: "वरिष्ठ नागरिकों व परिवार हेतु सहज गति",
    heroCaption: "रामेश्वरम द्वीप को जोड़ने वाला ऐतिहासिक पाम्बन पुल",
    heroPhotoBadge: "रामेश्वरम का प्रवेश द्वार",

    // Ram + Eswaran Naming Story
    ramEswaranBadge: "पावन इतिहास",
    ramEswaranTitle: "रामेश्वरम नाम की उत्पत्ति (राम + ईश्वर)",
    ramEswaranText: "राम + ईश्वर = रामेश्वरम। पावन रामायण गाथा के अनुसार, भगवान श्री राम ने यहां भगवान शिव (ईश्वर) की स्थापना कर पूजा-अर्चना की थी। इसी कारण इस पावन तीर्थ द्वीप का नाम 'रामेश्वरम' पड़ा।",

    // Featured Route 1: Madurai to Rameswaram
    rameswaramOverline: "प्रमुख यात्रा मार्ग",
    rameswaramTitle: "मदुरै से रामेश्वरम और देवीपट्टिनम",
    rameswaramSubtitle: "ऐतिहासिक मदुरै शहर से पावन रामेश्वरम समुद्र तट, धनुषकोडी और समुद्र में स्थापित देवीपट्टिनम नवपाषाणम मंदिर तक की एक शांत व आध्यात्मिक यात्रा।",
    stopPrefix: "पड़ाव",

    // Stop 1: Ramar Padam
    stop1Title: "रामर पदम (गंधमादन पर्वत)",
    stop1Alt: "रामेश्वरम द्वीप के सर्वोच्च शिखर पर स्थित रामर पदम मंदिर",
    stop1Desc: "रामेश्वरम द्वीप के सबसे ऊंचे स्थान पर स्थित यह शांत दो मंजिला मंदिर, जहां भगवान श्री राम के पावन चरण चिह्न पत्थर पर सुशोभित हैं। यहां से पूरे द्वीप, नारियल के बगीचों और समुद्र का 360-डिग्री सुंदर नजारा दिखाई देता है।",
    stop1Credit: "फोटो: अतुल एस आर (CC BY-SA 4.0 via Wikimedia Commons)",

    // Stop 2: Agni Theertham
    stop2Title: "अग्नि तीर्थम",
    stop2Alt: "रामनाथस्वामी मंदिर के पूर्वी गोपुरम के सामने अग्नि तीर्थम समुद्र तट",
    stop2Desc: "रामनाथस्वामी मंदिर के पूर्वी गोपुरम के ठीक सामने स्थित शांत व पावन समुद्र तट। मुख्य मंदिर में प्रवेश करने से पहले देश भर से आए श्रद्धालु यहां पारंपरिक पवित्र स्नान करते हैं और पूर्वजों का स्मरण करते हैं।",
    stop2Credit: "फोटो: एस. पी. कृष्णमूर्ति (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 3: Ramanathaswamy Temple
    stop3Title: "श्री रामनाथस्वामी मंदिर",
    stop3Alt: "रामेश्वरम रामनाथस्वामी मंदिर का प्रसिद्ध 1,200 नक्काशीदार खंभों वाला गलियारा",
    stop3Desc: "12 पावन ज्योतिर्लिंगों में से एक प्रमुख धाम। अपनी अद्भुत द्रविड़ वास्तुकला, भव्य गोपुरम, 1,200 से अधिक नक्काशीदार खंभों वाले विश्व प्रसिद्ध लंबे गलियारों और परिसर के भीतर 22 पवित्र कुंडों (तीर्थम) के लिए प्रसिद्ध है।",
    stop3Credit: "फोटो: बर्नार्ड गैगनॉन / एसआर (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 4: Dhanushkodi
    stop4Title: "धनुषकोडी और पुराना खंडहर शहर",
    stop4Alt: "धनुषकोडी के तटवर्ती इलाके में ऐतिहासिक चर्च के अवशेष",
    stop4Desc: "पाम्बन द्वीप के अंतिम दक्षिणी छोर पर स्थित ऐतिहासिक धनुषकोडी, जो 1964 के चक्रवात के बाद स्मृति रूप में सहेजा गया है। पुराने रेलवे स्टेशन व चर्च के अवशेष देखें और सुंदर तटवर्ती मार्ग से अरिचल मुनाई पहुंचें जहां दो समुद्र मिलते हैं।",
    stop4Credit: "फोटो: थच्चन.माकन (CC BY-SA 3.0 via Wikimedia Commons)",

    // Stop 5: Navapashanam Temple (Devipattinam)
    stop5Title: "नवपाषाणम मंदिर (देवीपट्टिनम - समुद्र में नवग्रह)",
    stop5Badge: "समुद्र में स्थापित नवग्रह",
    stop5Alt: "देवीपट्टिनम के उथले समुद्री जल में स्थापित नवपाषाणम नवग्रह पावन शिलाएं",
    stop5Desc: "रामेश्वरम से लगभग 70 किमी उत्तर-पश्चिम में देवीपट्टिनम तट पर स्थित एक अत्यंत पावन और अद्वितीय तीर्थ स्थल। इसे 'समुद्र में नवग्रह मंदिर' कहा जाता है, जहां बंगाल की खाड़ी के उथले जल में नौ पावन पाषाण स्तंभ सीधे समुद्र में स्थापित हैं। रामायण के अनुसार, लंका प्रस्थान से पहले नवग्रहों को शांत करने के लिए स्वयं भगवान श्री राम ने इन नौ पाषाणों की स्थापना और पूजा की थी। श्रद्धालु यहां समुद्र में पवित्र स्नान कर जलमग्न नवग्रहों की परिक्रमा करते हैं।",
    stop5Credit: "फोटो: राजादुरै2016 (CC BY-SA 4.0 via Wikimedia Commons)",

    // Trip 2: Madurai to Tirupati
    tirupatiOverline: "तीर्थ यात्रा मार्ग",
    tirupatiTitle: "मदुरै से तिरुपति तीर्थ यात्रा",
    tirupatiSubtitle: "पवित्र तिरुमाला की सप्त पहाड़ियों पर स्थित श्री वेंकटेश्वर स्वामी मंदिर के दर्शन के लिए आरामदायक व सुरक्षित निजी यात्रा।",
    tirupatiAlt: "सुरम्य शेषाचलम पहाड़ियों में स्थित तिरुमाला वेंकटेश्वर मंदिर का दृश्य",
    tirupatiCredit: "फोटो: आदित्यमाधव83 (CC BY-SA 3.0 via Wikimedia Commons)",
    
    tirupatiDarshanTitle: "1. दर्शन और यात्रा कार्यक्रम की योजना",
    tirupatiDarshanDesc: "बालाजी आपके पूर्व-बुक किए गए TTD विशेष प्रवेश दर्शन (SED) समय स्लॉट के अनुसार रवानगी और ठहराव का उपयुक्त समय निर्धारित करने में मार्गदर्शन करते हैं। पारंपरिक पोशाक नियम और कतार प्रबंधन की जानकारी दी जाती है।",
    
    tirupatiAboutTitle: "2. तिरुपति और सड़क यात्रा के बारे में",
    tirupatiAboutDesc: "आंध्र प्रदेश की सुरम्य शेषाचलम पहाड़ियों में स्थित तिरुपति विश्व के सबसे प्रतिष्ठित तीर्थ स्थलों में से एक है। मदुरै से लगभग 550 किमी के इस सफर में बुजुर्गों और बच्चों के आराम को ध्यान में रखते हुए स्वच्छ भोजन पड़ावों के साथ सुरक्षित ड्राइविंग सुनिश्चित की जाती है।",
    
    tirupatiDisclaimer: "सूचना: उबेश ट्रैवल्स निजी वाहन परिवहन और यात्रा योजना में सहायता प्रदान करता है। मंदिर प्रवेश टिकट आधिकारिक TTD पोर्टल से स्वयं बुक किए जाने चाहिए।",

    // Custom Trips and Pickup
    customOverline: "सुविधानुसार यात्रा",
    customTitle: "कस्टम यात्राएं और पूर्व व्यवस्था से पिकअप",
    customSubtitle: "हर परिवार की यात्रा आवश्यकता अलग होती है। उबेश ट्रैवल्स आपके समय, रुचि और पसंद के अनुसार पूरी तरह अनुकूलित यात्रा कार्यक्रम तैयार करता है।",
    customPickupTitle: "पूर्व व्यवस्था से पिकअप सुविधा",
    customPickupDesc: "होटल, रेलवे स्टेशन या बस स्टैंड से पूर्व व्यवस्था द्वारा सुविधाजनक पिकअप उपलब्ध है। यात्रा शुरू करने से पहले पिकअप का समय और स्थान पहले ही स्पष्ट कर दिया जाता है।",
    customBaseCityNote: "आधार शहर व क्षेत्र: [आधार शहर / पिकअप क्षेत्र की पुष्टि की जानी है]। शुरुआती पूछताछ के दौरान कार्यक्षेत्र स्पष्ट किया जाएगा।",
    customFlexibleTitle: "सहज और संतुलित सफ़र",
    customFlexibleDesc: "बिना किसी हड़बड़ी के चाय-नाश्ते या दर्शनीय स्थलों पर रुकने की पूरी स्वतंत्रता।",

    // Travel Options (Vehicles)
    vehiclesOverline: "वाहन क्षमता",
    vehiclesTitle: "वाहन विकल्प",
    vehiclesSubtitle: "बालाजी के पास दो निजी कारें हैं और वे इन वाहन श्रेणियों को स्वयं चलाते हैं। सभी विकल्प उपलब्धता और पूर्व बुकिंग पर आधारित हैं।",
    vehicleAvailabilityNote: "'अनुरोध पर उपलब्धता' के रूप में दर्शाया गया है। बालाजी दो वाहन संचालित करते हैं और बड़े समूह के लिए विश्वसनीय सहयोगियों से समन्वय करते हैं।",
    
    seat4Title: "4-सीटर वाहन विकल्प",
    seat4Status: "अनुरोध पर उपलब्धता",
    seat4Desc: "दंपतियों, एकल यात्रियों या 4 लोगों तक के छोटे परिवार के लिए उपयुक्त वातानुकूलित (AC) सेडान या हैचबैक कार।",
    seat4Specs: "1–4 यात्री • AC • मानक बूट स्पेस",

    seat7Title: "7-सीटर वाहन विकल्प",
    seat7Status: "अनुरोध पर उपलब्धता",
    seat7Desc: "परिवार के साथ आरामदायक सफ़र के लिए विस्तृत MPV वाहन। भरपूर लेगरूम और सामान रखने के लिए पर्याप्त जगह।",
    seat7Specs: "5–7 यात्री • डुअल AC • विस्तृत सामान स्थल",

    seat11Title: "11-सीटर वाहन विकल्प",
    seat11Status: "अनुरोध पर उपलब्धता",
    seat11Desc: "बड़े परिवार या तीर्थ समूह के लिए पूर्व अनुरोध पर व्यवस्थित मिनी-वैन/टेंपो विकल्प। आरामदायक सामूहिक यात्रा।",
    seat11Specs: "8–11 यात्री • हाई-रूफ AC • समूह बैठक",

    // Places Served
    placesOverline: "कवरेज",
    placesTitle: "गंतव्य राज्य जहां सेवा उपलब्ध है",
    placesSubtitle: "दक्षिण भारत के इन चार राज्यों में अनुकूलित आउटस्टेशन यात्राएं सहर्ष स्वीकार की जाती हैं:",
    placesTN: "तमिलनाडु",
    placesTNDesc: "मदुरै, रामेश्वरम, देवीपट्टिनम, कन्याकुमारी, तंजावुर, तिरुनेलवेली, कोडाइकनाल, ऊटी, चेन्नई आदि।",
    placesKL: "केरल",
    placesKLDesc: "मुन्नार, थेक्कडी, कोच्चि, त्रिवेंद्रम, पद्मनाभस्वामी मंदिर और सबरीमाला मार्ग।",
    placesAP: "आंध्र प्रदेश",
    placesAPDesc: "तिरुपति, तिरुमाला पर्वत, श्रीकालहस्ती, काणिपाकम व अन्य तीर्थ स्थल।",
    placesKA: "कर्नाटक",
    placesKADesc: "बेंगलुरु, मैसूरु, चामुंडी हिल्स, बांदीपुर और सीमावर्ती दर्शनीय क्षेत्र।",
    placesDisclaimer: "कृपया ध्यान दें: अंतरराज्यीय यात्राओं के लिए परमिट और पूर्व कार्यक्रम की पुष्टि अनिवार्य है।",

    // About Balaji
    aboutOverline: "संस्थापक और ड्राइवर",
    aboutTitle: "संस्थापक बालाजी के बारे में",
    aboutSubtitle: "शांत ड्राइविंग, समय की पाबंदी और स्पष्ट संवाद पर आधारित एक विश्वसनीय व्यक्तिगत यात्रा सेवा।",
    aboutP1: "नमस्ते, मैं बालाजी हूँ। मैंने तमिलनाडु और पड़ोसी राज्यों में स्वच्छ, समयबद्ध और सम्मानजनक निजी यात्रा सेवा प्रदान करने के उद्देश्य से उबेश ट्रैवल्स की शुरुआत की। किसी अज्ञात कैब ड्राइवर के बजाय, मैं स्वयं आपकी यात्रा की पूरी जिम्मेदारी लेता हूँ।",
    aboutP2: "हाईवे ड्राइविंग का वर्षों का अनुभव और तमिलनाडु के मंदिर नियमों व पारिवारिक प्राथमिकताओं की गहरी समझ के साथ, मैं एक शांत व सुरक्षित ड्राइविंग सुनिश्चित करता हूँ जिससे वरिष्ठ नागरिक और बच्चे पूरी तरह सहज महसूस करें।",
    aboutPoint1: "शांत, विनम्र और गैर-धूम्रपान (Non-smoking) ड्राइवर",
    aboutPoint2: "स्वच्छ, सुव्यवस्थित और वातानुकूलित (AC) वाहन",
    aboutPoint3: "पारिवारिक मर्यादा और सुरक्षा का पूरा सम्मान",
    aboutPoint4: "स्पष्ट और पारदर्शी संवाद, बिना किसी छुपे हुए शुल्क के",

    // Booking Enquiry Form
    enquiryOverline: "यात्रा की योजना",
    enquiryTitle: "यात्रा बुकिंग पूछताछ",
    enquirySubtitle: "नीचे दिए गए फॉर्म में अपनी यात्रा का विवरण भरें। सबमिट करने पर सीधे बालाजी के व्हाट्सएप पर संदेश तैयार हो जाएगा।",

    formName: "पूरा नाम",
    formNamePlaceholder: "उदा: सुंदर राजन",
    formPhone: "मोबाइल नंबर",
    formPhonePlaceholder: "उदा: 9876543210",
    formStart: "प्रस्थान स्थान / पिकअप",
    formStartPlaceholder: "उदा: मदुरै जंक्शन / मदुरै स्थित होटल",
    formDest: "गंतव्य / इच्छित मार्ग",
    formDestPlaceholder: "उदा: रामेश्वरम, देवीपट्टिनम व धनुषकोडी / तिरुपति",
    formDate: "यात्रा की तारीख",
    formPassengers: "यात्रियों की संख्या",
    formPassengersPlaceholder: "उदा: 4 यात्री",
    formSeatSize: "पसंदीदा वाहन आकार",
    formSeatSizeSelect: "वाहन विकल्प चुनें",
    formSeatSize4: "4-सीटर वाहन (सेडान / हैचबैक)",
    formSeatSize7: "7-सीटर वाहन (MPV)",
    formSeatSize11: "11-सीटर वाहन (ग्रुप वैन)",
    formSeatSizeUnsure: "निश्चित नहीं / उपयुक्त सुझाव दें",
    formNotes: "यात्रा विवरण / विशेष आवश्यकताएं",
    formNotesPlaceholder: "वरिष्ठ नागरिकों की यात्रा, मंदिर दर्शन स्लॉट, सामान या कोई विशेष पड़ाव...",
    formSubmit: "व्हाट्सएप पर पूछताछ भेजें",
    formReset: "फॉर्म रीसेट करें",
    formPrivacyNote: "स्टैटिक साइट: कोई भी विवरण डेटाबेस में सहेजा नहीं जाता। बटन दबाने पर यह सीधे आपके व्हाट्सएप में खुलेगा।",

    // Validation
    valNameRequired: "कृपया अपना नाम दर्ज करें।",
    valPhoneRequired: "कृपया एक वैध मोबाइल नंबर दर्ज करें।",
    valStartRequired: "कृपया प्रस्थान स्थान दर्ज करें।",
    valDestRequired: "कृपया गंतव्य स्थान दर्ज करें।",
    valDateRequired: "कृपया यात्रा की तारीख चुनें।",

    // Direct Contact Info
    contactDirectTitle: "सीधा संपर्क",
    contactDirectDesc: "यदि आप सीधे बात करना चाहते हैं, तो बेझिझक बालाजी को कॉल या व्हाट्सएप करें।",
    contactPhoneLabel: "सीधा फ़ोन",
    contactWhatsAppLabel: "व्हाट्सएप संदेश",
    contactBaseCityLabel: "आधार शहर व पिकअप",
    contactHoursLabel: "संपर्क समय",
    contactHoursValue: "सुबह 6:00 से रात 10:00 बजे तक (प्रतिदिन)",

    // Footer
    footerBrand: "उबेश ट्रैवल्स",
    footerTagline: "तमिलनाडु और दक्षिण भारत में व्यक्तिगत यात्रा सेवा व पावन तीर्थ दर्शन।",
    footerFounder: "संस्थापक एवं मुख्य ड्राइवर: बालाजी",
    footerPhone: "संपर्क: +91 90424 82403",
    footerLicense: "MIT लाइसेंस (Open Source)",
    footerRights: "उबेश ट्रैवल्स। MIT लाइसेंस के तहत ओपन सोर्स (Open Source)।",
    footerDisclaimer: "वाहन विकल्प और यात्रा मार्ग पूर्व उपलब्धता व आपसी सहमति पर निर्भर हैं।",
    footerAttributionLink: "फोटो स्रोत व एट्रिब्यूशन (ASSET_SOURCES.md)"
  }
};

if (typeof window !== "undefined") {
  window.UBESH_TRANSLATIONS = UBESH_TRANSLATIONS;
}
