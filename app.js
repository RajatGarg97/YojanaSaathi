const STORAGE_KEYS = {
  auth: "yojanasaathi.auth",
  documents: "yojanasaathi.documents",
  timeline: "yojanasaathi.timeline",
  applications: "yojanasaathi.applications",
  messages: "yojanasaathi.messages",
  consent: "yojanasaathi.consent",
  inForce: "yojanasaathi.inforce",
};

const ELIGIBILITY_VALIDITY_DAYS = 90;

const DIGILOCKER_LOGO_URL = "https://img1.digitallocker.gov.in/assets/img/icons/digilocker-w.png";
const DIGILOCKER_INLINE_ICON = `
  <span class="digilocker-icon-badge" aria-hidden="true">
    <svg class="digilocker-inline-icon" width="18" height="18" viewBox="0 0 24 24">
      <path d="M7 4.5h6.5L18 9v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path>
      <path d="M13.5 4.8V9H17.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path>
      <path d="M10.2 13.2a2 2 0 1 1 4 0v.9h.4a.9.9 0 0 1 .9.9v1.6a.9.9 0 0 1-.9.9H9.8a.9.9 0 0 1-.9-.9V15a.9.9 0 0 1 .9-.9h.4v-.9Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
    </svg>
  </span>
`;

const TRANSLATIONS = {
  en: {
    authEyebrow: "Welcome to YojanaSaathi",
    authTitle: "Login, verify, and set up the household before checking schemes.",
    authCopy: "This mock login flow uses mobile number + OTP, followed by basic household onboarding and DigiLocker linking.",
    heroEyebrow: "Simple scheme helper for families",
    heroTitle: "YojanaSaathi helps families find the right scheme and apply step by step.",
    heroCopy: "First choose a family member. Then choose a scheme. YojanaSaathi shows whether documents are ready and what will happen next.",
    language: "Language",
    refreshMessages: "Refresh messages",
    logout: "Logout",
    accountLabel: "Active profile",
    switchProfile: "Switch profile",
    accountMenuOpen: "Open profile menu",
    aadhaarPhotoLabel: "Aadhaar photo via DigiLocker",
    aadhaarPhotoMissing: "Link DigiLocker and fetch Aadhaar to show profile photo",
    sessionActive: "Session active",
    loggedInWith: "Logged in with {mobile}",
    guideKicker: "How To Use",
    guideTitle: "4 simple steps",
    guideStep1Title: "Choose a person",
    guideStep1Copy: "Pick the family member you want help for.",
    guideStep2Title: "Choose a scheme",
    guideStep2Copy: "See schemes that best match that person.",
    guideStep3Title: "Check documents",
    guideStep3Copy: "Green means available. Red means needed.",
    guideStep4Title: "Give consent and apply",
    guideStep4Copy: "The app will submit, automate, or show who can help.",
    orientationKicker: "Dashboard Map",
    orientationTitle: "What belongs together",
    orientationCard1Tag: "Household",
    orientationCard1Title: "These cards are about the beneficiary",
    orientationCard1Copy: "Profile selection, DigiLocker connection, and document readiness all belong to the household setup flow.",
    orientationCard2Tag: "Schemes",
    orientationCard2Title: "These cards are about scheme status",
    orientationCard2Copy: "New schemes, applied schemes, and active benefits should be read together as one scheme journey.",
    orientationCard3Tag: "Action",
    orientationCard3Title: "These cards explain the next step",
    orientationCard3Copy: "The selected scheme panel, updates, and timeline tell you what is blocked, ready, or already completed.",
    householdKicker: "Step 1",
    detailKicker: "Step 3 and 4",
    detailTitleDefault: "See what is needed to apply",
    detailEmptyState: "Choose a scheme to see who it is for, which documents are needed, and what happens when you apply.",
    newSchemesKicker: "Step 2",
    newSchemesTitle: "New schemes",
    appliedKicker: "Applied",
    appliedTitle: "Schemes applied for",
    inForceKicker: "In Force",
    inForceTitle: "Benefits already active",
    messagesKicker: "Messages",
    messagesTitle: "What is new or blocked",
    documentsKicker: "Documents",
    documentsTitle: "DigiLocker first, uploads as backup",
    documentUploadTitle: "Upload supporting documents manually",
    documentUploadCopy: "YojanaSaathi should prefer DigiLocker for available documents. Manual upload is the fallback when DigiLocker cannot supply the document yet.",
    timelineKicker: "Timeline",
    timelineTitle: "What the app has done",
    consentKicker: "Voice Consent",
    consentTitle: "Read this aloud to the recorder",
    consentCopy: "Please read this paragraph clearly. Only after the recording is verified will the Apply button become active.",
    consentScript: "I confirm that I am applying for this government scheme voluntarily. I allow YojanaSaathi to use my submitted household documents for this application and to proceed through the available official, automated, or assisted path on my behalf.",
    startRecording: "Start recording",
    stopRecording: "Stop",
    verifyRecording: "Verify recording",
    recorderIdle: "Recorder idle",
    consentHelpDefault: "If microphone recording does not start here, upload a short consent audio file instead.",
    consentUploadTitle: "Upload consent audio instead",
    consentUploadCopy: "Useful when the browser blocks live microphone recording on non-secure URLs.",
    successToastTitle: "Applied successfully",
    successToastText: "This scheme has moved to Applied.",
    login: "Login",
    loginTitle: "Enter Aadhaar-authenticated mobile number",
    loginCopy: "This MVP allows login only from a beneficiary mobile number that is already linked to Aadhaar.",
    mobileNumber: "Mobile number",
    aadhaarCheck: "I confirm this beneficiary mobile number is Aadhaar-authenticated.",
    demoOtp: "Demo OTP for this prototype:",
    sendOtp: "Send OTP",
    verify: "Verify",
    verifyTitle: "Enter the OTP",
    otp: "OTP",
    changeMobile: "Change mobile",
    verifyOtp: "Verify OTP",
    eligibility: "Eligibility verification",
    eligibilityTitle: "Verify low-income eligibility before continuing",
    eligibilityCopy: "YojanaSaathi should verify that the beneficiary belongs to a low-income household at login time. In this MVP, that verification can happen through DigiLocker or a manual upload.",
    eligibilityVerified: "Eligibility verified",
    eligibilityPending: "Eligibility not yet verified",
    eligibilityExpired: "Eligibility re-verification needed",
    verificationMethod: "Verification method",
    digilockerEligibility: "Fetch proof from DigiLocker",
    uploadEligibility: "Upload income or ration proof",
    uploadedProofReady: "Uploaded proof ready for verification",
    continueToOnboarding: "Continue to household setup",
    lowIncomeProofHelp: "Accepted proof for this MVP: income certificate, ration card, or another low-income entitlement document.",
    verifiedUsing: "Verified using {method}",
    eligibilityMethodDigilocker: "DigiLocker income proof",
    eligibilityMethodUpload: "Uploaded low-income proof",
    incomeBandQuestion: "Income band found in proof",
    incomeBandLow: "Low-income household",
    incomeBandHigh: "High-income household",
    eligibilityBandHelp: "High-income households can still log in, but schemes meant for low-income families will be marked ineligible.",
    eligibilityValidUntil: "Valid until {date}",
    onboarding: "Onboarding",
    onboardingTitle: "Set up the household",
    onboardingCopy: "Link DigiLocker during onboarding if the beneficiary wants faster document fetching. It is recommended, but optional.",
    householdName: "Household name",
    location: "Location",
    digilockerLinked: "DigiLocker linked",
    digilockerNotLinked: "DigiLocker not linked",
    linkDigilockerNow: "Link DigiLocker now",
    manageDigilockerLink: "Manage DigiLocker link",
    continueWithoutDigilocker: "You can continue without DigiLocker and upload documents manually later.",
    continueToDashboard: "Continue to dashboard",
    applyNow: "Apply now",
    recordVoiceConsent: "Record voice consent",
    fetchAllDigilocker: "Fetch all available documents from DigiLocker",
    uploadManually: "Upload manually",
    rolePrefix: "Role",
    selectedPerson: "Selected person",
    tipRecordConsent: "Tip: Record voice consent before applying",
    schemesCount: "schemes",
    householdSummary: "household with {count} family members. Start by selecting one person below.",
    digilockerLinkedHousehold: "DigiLocker linked for this household",
    digilockerNotLinkedHousehold: "DigiLocker not linked yet",
    digilockerSetupHelp: "Ask the beneficiary to link DigiLocker during profile setup so YojanaSaathi can fetch documents before asking for manual uploads.",
    forMember: "For {name}",
    newInApp: "New in YojanaSaathi",
    launchedOn: "Launched {date}",
    newBadge: "New",
    trackedBadge: "Tracked",
    ineligibleBadge: "Ineligible",
    eligibilitySectionTitle: "Does the household meet the scheme eligibility rules?",
    eligibleForScheme: "Eligible for this scheme",
    notEligibleForScheme: "Not yet eligible for this scheme",
    eligibilityRulesHelp: "Schemes may ask for different official proofs such as income, BPL, caste, domicile, disability, widowhood, farmer, student, or other department-specific certificates.",
    addOneOfEligibilityDocs: "Add at least one of these eligibility proofs: {docs}.",
    addAllEligibilityDocs: "Add these eligibility proofs: {docs}.",
    documentsReady: "Documents ready",
    missingCount: "{count} missing",
    noNewSchemes: "No new schemes are waiting for {name}. Applied items move to the next panel below.",
    noAppliedSchemes: "No schemes have been applied for yet for {name}.",
    noActiveBenefits: "No benefits are currently marked active for {name}.",
    whoFor: "Who is this scheme for?",
    benefitTitle: "What does the user get?",
    documentsTitleDetail: "Do we already have the documents?",
    applyReadyTitle: "Can you apply now?",
    applyMissingTitle: "What is still missing?",
    assistedHandoff: "Assisted handoff",
    officialSupportPath: "Official support path",
    handoffPacket: "Handoff packet",
    readyForAssisted: "Ready for assisted application",
    stillNeeded: "{docs} still needed",
    newlyTracked: "Newly tracked",
    launchDate: "Launch date {date}",
    applyMeaning: "Apply meaning:",
    applyMeaningApi: "YojanaSaathi will mock-submit this through an official API path.",
    applyMeaningAutomation: "YojanaSaathi will mock-start a portal automation flow.",
    applyMeaningAssist: "YojanaSaathi will show the correct office or worker to help complete the application.",
    available: "Available",
    needed: "Needed",
    readyToApplyCopy: "Yes. The needed documents are available. Record and verify voice consent, then press Apply.",
    missingDocsCopy: "Before YojanaSaathi can proceed, please furnish {docs} for {name}. YojanaSaathi should check DigiLocker first and use manual upload only when needed.",
    voiceConsentVerified: "Voice consent verified",
    voiceConsentNeeded: "Voice consent needed",
    applyActivatesAfterConsent: "The Apply button activates only after the voice recording is verified.",
    latestStatus: "Latest status: {status} via {path}.",
    noDocumentsVault: "No documents in the household vault yet. In the preferred flow, YojanaSaathi checks DigiLocker first and falls back to manual upload when the document is unavailable.",
    householdOwner: "Household",
    applyBlockedIneligible: "This scheme is currently ineligible because the required eligibility proofs are still missing or incomplete.",
    ineligibleTagDetail: "Ineligible for current household",
  },
  hi: {
    authEyebrow: "योजना साथी में आपका स्वागत है",
    authTitle: "योजनाएँ देखने से पहले लॉगिन करें, सत्यापित करें और परिवार की प्रोफाइल सेट करें।",
    authCopy: "यह डेमो लॉगिन मोबाइल नंबर + OTP का उपयोग करता है, फिर परिवार सेटअप और डिजीलॉकर लिंकिंग कराता है।",
    heroEyebrow: "परिवारों के लिए आसान योजना सहायक",
    heroTitle: "योजना साथी परिवारों को सही योजना खोजने और चरणबद्ध तरीके से आवेदन करने में मदद करता है।",
    heroCopy: "पहले परिवार के सदस्य को चुनें। फिर योजना चुनें। योजना साथी बताएगा कि दस्तावेज़ तैयार हैं या नहीं और आगे क्या होगा।",
    language: "भाषा",
    refreshMessages: "संदेश ताज़ा करें",
    logout: "लॉगआउट",
    accountLabel: "सक्रिय प्रोफाइल",
    switchProfile: "प्रोफाइल बदलें",
    accountMenuOpen: "प्रोफाइल मेनू खोलें",
    aadhaarPhotoLabel: "DigiLocker के जरिए Aadhaar फोटो",
    aadhaarPhotoMissing: "प्रोफाइल फोटो दिखाने के लिए DigiLocker लिंक करें और Aadhaar लाएँ",
    sessionActive: "सेशन सक्रिय है",
    loggedInWith: "{mobile} से लॉगिन है",
    guideKicker: "इस्तेमाल कैसे करें",
    guideTitle: "4 आसान चरण",
    guideStep1Title: "व्यक्ति चुनें",
    guideStep1Copy: "जिस परिवार सदस्य के लिए मदद चाहिए, उसे चुनें।",
    guideStep2Title: "योजना चुनें",
    guideStep2Copy: "उस व्यक्ति से सबसे अच्छी तरह मेल खाने वाली योजनाएँ देखें।",
    guideStep3Title: "दस्तावेज़ जाँचें",
    guideStep3Copy: "हरा मतलब उपलब्ध। लाल मतलब आवश्यक।",
    guideStep4Title: "सहमति दें और आवेदन करें",
    guideStep4Copy: "ऐप आवेदन करेगा, ऑटोमेट करेगा या सही मददगार बताएगा।",
    orientationKicker: "डैशबोर्ड मानचित्र",
    orientationTitle: "क्या किसके साथ जुड़ा है",
    orientationCard1Tag: "परिवार",
    orientationCard1Title: "ये कार्ड लाभार्थी से जुड़े हैं",
    orientationCard1Copy: "प्रोफाइल चुनना, DigiLocker जोड़ना और दस्तावेज़ तैयार रखना, ये सब परिवार सेटअप प्रवाह का हिस्सा हैं।",
    orientationCard2Tag: "योजनाएँ",
    orientationCard2Title: "ये कार्ड योजना की स्थिति बताते हैं",
    orientationCard2Copy: "नई योजनाएँ, जिन पर आवेदन हो चुका है, और सक्रिय लाभ, इन्हें एक ही योजना यात्रा के रूप में पढ़ें।",
    orientationCard3Tag: "अगला कदम",
    orientationCard3Title: "ये कार्ड बताते हैं कि आगे क्या करना है",
    orientationCard3Copy: "चयनित योजना, अपडेट और टाइमलाइन मिलकर बताते हैं कि क्या रुका है, क्या तैयार है, और क्या पूरा हो चुका है।",
    householdKicker: "चरण 1",
    detailKicker: "चरण 3 और 4",
    detailTitleDefault: "आवेदन के लिए क्या चाहिए, देखें",
    detailEmptyState: "यह देखने के लिए योजना चुनें कि यह किसके लिए है, कौन से दस्तावेज़ चाहिए और आवेदन करने पर क्या होगा।",
    newSchemesKicker: "चरण 2",
    newSchemesTitle: "नई योजनाएँ",
    appliedKicker: "आवेदित",
    appliedTitle: "जिन योजनाओं के लिए आवेदन किया गया",
    inForceKicker: "लागू",
    inForceTitle: "परिवार को मिल रहे सक्रिय लाभ",
    messagesKicker: "संदेश",
    messagesTitle: "नया क्या है या क्या रुका हुआ है",
    documentsKicker: "दस्तावेज़",
    documentsTitle: "पहले DigiLocker, फिर बैकअप के तौर पर अपलोड",
    documentUploadTitle: "सहायक दस्तावेज़ मैन्युअली अपलोड करें",
    documentUploadCopy: "उपलब्ध दस्तावेज़ों के लिए YojanaSaathi को पहले DigiLocker देखना चाहिए। जब DigiLocker दस्तावेज़ न दे पाए, तब मैन्युअल अपलोड बैकअप है।",
    timelineKicker: "टाइमलाइन",
    timelineTitle: "ऐप ने क्या किया है",
    consentKicker: "वॉयस सहमति",
    consentTitle: "इसे रिकॉर्डर में जोर से पढ़ें",
    consentCopy: "कृपया यह अनुच्छेद साफ़-साफ़ पढ़ें। रिकॉर्डिंग सत्यापित होने के बाद ही Apply बटन सक्रिय होगा।",
    consentScript: "मैं पुष्टि करता/करती हूँ कि मैं इस सरकारी योजना के लिए स्वेच्छा से आवेदन कर रहा/रही हूँ। मैं YojanaSaathi को इस आवेदन के लिए मेरे जमा किए गए पारिवारिक दस्तावेज़ उपयोग करने और उपलब्ध आधिकारिक, स्वचालित या सहायक मार्ग से आगे बढ़ने की अनुमति देता/देती हूँ।",
    startRecording: "रिकॉर्डिंग शुरू करें",
    stopRecording: "रोकें",
    verifyRecording: "रिकॉर्डिंग सत्यापित करें",
    recorderIdle: "रिकॉर्डर निष्क्रिय",
    consentHelpDefault: "यदि यहाँ माइक्रोफोन रिकॉर्डिंग शुरू नहीं होती है, तो उसकी जगह छोटी consent audio file अपलोड करें।",
    consentUploadTitle: "इसके बजाय consent audio अपलोड करें",
    consentUploadCopy: "जब ब्राउज़र non-secure URL पर live microphone recording को ब्लॉक करता है तब उपयोगी।",
    successToastTitle: "आवेदन सफल रहा",
    successToastText: "यह योजना Applied पैनल में चली गई है।",
    login: "लॉगिन",
    loginTitle: "आधार-प्रमाणित मोबाइल नंबर दर्ज करें",
    loginCopy: "इस MVP में लॉगिन केवल उस लाभार्थी मोबाइल नंबर से होगा जो पहले से आधार से लिंक है।",
    mobileNumber: "मोबाइल नंबर",
    aadhaarCheck: "मैं पुष्टि करता/करती हूँ कि यह मोबाइल नंबर आधार-प्रमाणित है।",
    demoOtp: "इस डेमो का OTP:",
    sendOtp: "OTP भेजें",
    verify: "सत्यापन",
    verifyTitle: "OTP दर्ज करें",
    otp: "OTP",
    changeMobile: "मोबाइल बदलें",
    verifyOtp: "OTP सत्यापित करें",
    eligibility: "पात्रता सत्यापन",
    eligibilityTitle: "आगे बढ़ने से पहले निम्न-आय पात्रता सत्यापित करें",
    eligibilityCopy: "YojanaSaathi को लॉगिन के समय यह सत्यापित करना चाहिए कि लाभार्थी निम्न-आय परिवार से है। इस MVP में यह सत्यापन DigiLocker या manual upload से हो सकता है।",
    eligibilityVerified: "पात्रता सत्यापित",
    eligibilityPending: "पात्रता अभी सत्यापित नहीं है",
    eligibilityExpired: "पात्रता का दोबारा सत्यापन आवश्यक है",
    verificationMethod: "सत्यापन तरीका",
    digilockerEligibility: "DigiLocker से प्रमाण लाएँ",
    uploadEligibility: "आय या राशन प्रमाण अपलोड करें",
    uploadedProofReady: "अपलोड किया गया प्रमाण सत्यापन के लिए तैयार है",
    continueToOnboarding: "परिवार सेटअप पर जाएँ",
    lowIncomeProofHelp: "इस MVP के लिए मान्य प्रमाण: income certificate, ration card, या कोई अन्य low-income entitlement document.",
    verifiedUsing: "{method} के माध्यम से सत्यापित",
    eligibilityMethodDigilocker: "DigiLocker आय प्रमाण",
    eligibilityMethodUpload: "अपलोड किया गया low-income proof",
    incomeBandQuestion: "प्रमाण में दिखा आय वर्ग",
    incomeBandLow: "निम्न-आय परिवार",
    incomeBandHigh: "उच्च-आय परिवार",
    eligibilityBandHelp: "उच्च-आय परिवार लॉगिन कर सकते हैं, लेकिन निम्न-आय परिवारों के लिए बनी योजनाएँ ineligible के रूप में दिखेंगी।",
    eligibilityValidUntil: "{date} तक मान्य",
    onboarding: "ऑनबोर्डिंग",
    onboardingTitle: "परिवार प्रोफाइल सेट करें",
    onboardingCopy: "यदि लाभार्थी तेज़ दस्तावेज़ प्राप्ति चाहता है तो ऑनबोर्डिंग के समय डिजीलॉकर लिंक करें। यह अनुशंसित है, लेकिन अनिवार्य नहीं।",
    householdName: "परिवार का नाम",
    location: "स्थान",
    digilockerLinked: "डिजीलॉकर लिंक है",
    digilockerNotLinked: "डिजीलॉकर लिंक नहीं है",
    linkDigilockerNow: "अभी डिजीलॉकर लिंक करें",
    manageDigilockerLink: "डिजीलॉकर लिंक प्रबंधित करें",
    continueWithoutDigilocker: "आप डिजीलॉकर के बिना भी आगे बढ़ सकते हैं और बाद में दस्तावेज़ अपलोड कर सकते हैं।",
    continueToDashboard: "डैशबोर्ड पर जाएँ",
    applyNow: "अभी आवेदन करें",
    recordVoiceConsent: "वॉयस सहमति रिकॉर्ड करें",
    fetchAllDigilocker: "डिजीलॉकर से सभी उपलब्ध दस्तावेज़ प्राप्त करें",
    uploadManually: "मैन्युअल अपलोड करें",
    rolePrefix: "भूमिका",
    selectedPerson: "चयनित व्यक्ति",
    tipRecordConsent: "सुझाव: आवेदन से पहले वॉयस सहमति रिकॉर्ड करें",
    schemesCount: "योजनाएँ",
    householdSummary: "{count} परिवार सदस्यों वाला परिवार। नीचे एक व्यक्ति चुनकर शुरू करें।",
    digilockerLinkedHousehold: "इस परिवार के लिए DigiLocker लिंक है",
    digilockerNotLinkedHousehold: "DigiLocker अभी लिंक नहीं है",
    digilockerSetupHelp: "लाभार्थी से प्रोफाइल सेटअप के समय DigiLocker लिंक करवाएँ ताकि YojanaSaathi manual upload माँगने से पहले दस्तावेज़ fetch कर सके।",
    forMember: "{name} के लिए",
    newInApp: "YojanaSaathi में नया",
    launchedOn: "{date} को लॉन्च",
    newBadge: "नया",
    trackedBadge: "ट्रैक्ड",
    ineligibleBadge: "अयोग्य",
    eligibilitySectionTitle: "क्या परिवार इस योजना के पात्रता नियम पूरे करता है?",
    eligibleForScheme: "यह परिवार इस योजना के लिए पात्र है",
    notEligibleForScheme: "यह परिवार अभी इस योजना के लिए पात्र नहीं है",
    eligibilityRulesHelp: "अलग-अलग योजनाएँ income, BPL, caste, domicile, disability, widowhood, farmer, student या अन्य विभागीय प्रमाण माँग सकती हैं।",
    addOneOfEligibilityDocs: "इन पात्रता प्रमाणों में से कम से कम एक जोड़ें: {docs}।",
    addAllEligibilityDocs: "ये पात्रता प्रमाण जोड़ें: {docs}।",
    documentsReady: "दस्तावेज़ तैयार",
    missingCount: "{count} बाकी",
    noNewSchemes: "{name} के लिए अभी कोई नई योजना प्रतीक्षा में नहीं है। जिन पर आवेदन हो चुका है वे नीचे वाले पैनल में चली जाती हैं।",
    noAppliedSchemes: "{name} के लिए अभी किसी योजना पर आवेदन नहीं हुआ है।",
    noActiveBenefits: "{name} के लिए अभी कोई लाभ सक्रिय नहीं दिख रहा है।",
    whoFor: "यह योजना किसके लिए है?",
    benefitTitle: "लाभार्थी को क्या मिलेगा?",
    documentsTitleDetail: "क्या हमारे पास दस्तावेज़ हैं?",
    applyReadyTitle: "क्या अब आवेदन किया जा सकता है?",
    applyMissingTitle: "अभी क्या बाकी है?",
    assistedHandoff: "सहायता आधारित हैंडऑफ",
    officialSupportPath: "आधिकारिक सहायता मार्ग",
    handoffPacket: "हैंडऑफ पैकेट",
    readyForAssisted: "सहायता-आधारित आवेदन के लिए तैयार",
    stillNeeded: "{docs} अभी भी चाहिए",
    newlyTracked: "हाल ही में ट्रैक किया गया",
    launchDate: "लॉन्च तिथि {date}",
    applyMeaning: "आवेदन का अर्थ:",
    applyMeaningApi: "YojanaSaathi इसे आधिकारिक API मार्ग से mock-submit करेगा।",
    applyMeaningAutomation: "YojanaSaathi एक portal automation flow mock-start करेगा।",
    applyMeaningAssist: "YojanaSaathi सही कार्यालय या सहायक कर्मी दिखाएगा जो आवेदन पूरा करने में मदद करेगा।",
    available: "उपलब्ध",
    needed: "आवश्यक",
    readyToApplyCopy: "हाँ। ज़रूरी दस्तावेज़ उपलब्ध हैं। वॉयस सहमति रिकॉर्ड और सत्यापित करें, फिर Apply दबाएँ।",
    missingDocsCopy: "YojanaSaathi के आगे बढ़ने से पहले कृपया {name} के लिए {docs} उपलब्ध कराएँ। YojanaSaathi को पहले DigiLocker देखना चाहिए और ज़रूरत पड़ने पर ही manual upload इस्तेमाल करना चाहिए।",
    voiceConsentVerified: "वॉयस सहमति सत्यापित",
    voiceConsentNeeded: "वॉयस सहमति आवश्यक",
    applyActivatesAfterConsent: "Apply बटन तभी सक्रिय होगा जब वॉयस रिकॉर्डिंग सत्यापित हो जाए।",
    latestStatus: "ताज़ा स्थिति: {path} के माध्यम से {status}।",
    noDocumentsVault: "परिवार के vault में अभी कोई दस्तावेज़ नहीं है। पसंदीदा flow में YojanaSaathi पहले DigiLocker जाँचता है और दस्तावेज़ न मिलने पर manual upload पर जाता है।",
    householdOwner: "परिवार",
    applyBlockedIneligible: "यह योजना अभी ineligible है क्योंकि आवश्यक पात्रता प्रमाण अभी पूरे नहीं हुए हैं।",
    ineligibleTagDetail: "वर्तमान परिवार के लिए अयोग्य",
  },
  mr: {},
  ta: {},
  bn: {},
};
TRANSLATIONS.mr = TRANSLATIONS.en;
TRANSLATIONS.ta = TRANSLATIONS.en;
TRANSLATIONS.bn = TRANSLATIONS.en;

const householdProfile = {
  id: "household-singh",
  household_name: "Singh Household",
  location: "Nalanda, Bihar",
  income_band: "Household profile",
  members: [
    {
      id: "member-aarti",
      name: "Aarti Singh",
      age_or_dob: "19 years",
      gender: "Female",
      relationship: "Daughter",
      occupation_or_status: "College student",
      special_tags: ["student"],
    },
    {
      id: "member-seema",
      name: "Seema Devi",
      age_or_dob: "27 years",
      gender: "Female",
      relationship: "Mother",
      occupation_or_status: "Tailoring micro-entrepreneur",
      special_tags: ["entrepreneur", "pregnant"],
    },
    {
      id: "member-raghav",
      name: "Raghav Singh",
      age_or_dob: "46 years",
      gender: "Male",
      relationship: "Father",
      occupation_or_status: "Small farmer",
      special_tags: ["farmer"],
    },
  ],
};

const canonicalDocumentLabels = {
  aadhaar: "Aadhaar",
  pan: "PAN",
  bpl_card: "BPL Card",
  obc_certificate: "OBC Certificate",
  ews_certificate: "EWS Certificate",
  income_certificate: "Income Certificate",
  bank_passbook: "Bank Passbook",
  land_record: "Land Record",
  student_enrollment_proof: "Student Enrollment Proof",
  pregnancy_maternal_health_card: "Pregnancy or Maternal Health Card",
  caste_certificate: "Caste Certificate",
  disability_certificate: "Disability Certificate",
  domicile_certificate: "Domicile Certificate",
  residence_certificate: "Residence Certificate",
  widow_certificate: "Widow Certificate",
  farmer_id_card: "Farmer ID Card",
  minority_certificate: "Minority Certificate",
  senior_citizen_certificate: "Senior Citizen Certificate",
  passport_photo: "Passport Photo",
  startup_pitch_deck: "Startup Pitch Deck",
  ration_card: "Ration Card",
  self_help_group_proof: "Self Help Group Proof",
  job_card: "Job Card",
  health_card: "Health Card",
};

const canonicalDocumentKeywords = [
  { type: "aadhaar", patterns: ["aadhaar", "aadhar", "uidai"] },
  { type: "pan", patterns: ["pan"] },
  { type: "bpl_card", patterns: ["bpl", "below poverty line"] },
  { type: "obc_certificate", patterns: ["obc", "other backward class"] },
  { type: "ews_certificate", patterns: ["ews", "economically weaker section"] },
  { type: "income_certificate", patterns: ["income", "income certificate"] },
  { type: "bank_passbook", patterns: ["passbook", "bank"] },
  { type: "land_record", patterns: ["land", "khasra", "khatauni", "record"] },
  { type: "student_enrollment_proof", patterns: ["enrollment", "student", "college id", "school"] },
  {
    type: "pregnancy_maternal_health_card",
    patterns: ["pregnancy", "maternal", "mch", "mother child", "health card"],
  },
  { type: "caste_certificate", patterns: ["caste"] },
  { type: "disability_certificate", patterns: ["disability"] },
  { type: "domicile_certificate", patterns: ["domicile"] },
  { type: "residence_certificate", patterns: ["residence", "residential"] },
  { type: "widow_certificate", patterns: ["widow"] },
  { type: "farmer_id_card", patterns: ["farmer id", "kisan id"] },
  { type: "minority_certificate", patterns: ["minority"] },
  { type: "senior_citizen_certificate", patterns: ["senior citizen", "old age"] },
  { type: "passport_photo", patterns: ["photo", "passport"] },
  { type: "startup_pitch_deck", patterns: ["pitch", "deck"] },
  { type: "ration_card", patterns: ["ration"] },
  { type: "self_help_group_proof", patterns: ["shg", "self help"] },
  { type: "job_card", patterns: ["job card", "nrega"] },
  { type: "health_card", patterns: ["health", "ayushman"] },
];

const schemes = [
  {
    id: "higher-education-grant",
    title: "Higher Education Grant 2026",
    category: "Education",
    source: "Tracked catalog",
    launch_date: "2026-04-14",
    summary: "Tuition support for low-income college students continuing undergraduate studies.",
    benefit_summary: "Up to Rs 40,000 per year",
    eligible_member_tags: ["student"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card"] },
    ],
    required_documents: ["aadhaar", "income_certificate", "student_enrollment_proof", "bank_passbook"],
    application_mode: "api",
    application_link_or_contact: "API submission available in pilot",
    is_new: true,
  },
  {
    id: "girl-digital-scholarship",
    title: "Girl Digital Scholarship",
    category: "Education",
    source: "Tracked catalog",
    launch_date: "2026-04-09",
    summary: "Scholarship for girls enrolled in digital learning or vocational computer courses.",
    benefit_summary: "Rs 15,000 annual support",
    eligible_member_tags: ["student"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card"] },
    ],
    required_documents: ["aadhaar", "student_enrollment_proof", "income_certificate", "passport_photo"],
    application_mode: "automation",
    application_link_or_contact: "Automation-ready education portal",
    is_new: true,
  },
  {
    id: "school-transport-assistance",
    title: "School Transport Assistance",
    category: "Education",
    source: "Tracked catalog",
    launch_date: "2026-03-18",
    summary: "Transport assistance for students traveling long distances to secondary schools or colleges.",
    benefit_summary: "Monthly travel reimbursement",
    eligible_member_tags: ["student"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
      { type: "document_any", documents: ["domicile_certificate", "residence_certificate"] },
    ],
    required_documents: ["aadhaar", "student_enrollment_proof", "bank_passbook"],
    application_mode: "assisted_handoff",
    application_link_or_contact: "District Education Office, Nalanda helpline 06112-220118",
    is_new: false,
  },
  {
    id: "obc-student-progress-scholarship",
    title: "OBC Student Progress Scholarship",
    category: "Education",
    source: "Tracked catalog",
    launch_date: "2026-04-10",
    summary: "Scholarship support for OBC students from financially weaker households continuing higher studies.",
    benefit_summary: "Rs 25,000 annual support",
    eligible_member_tags: ["student"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
      { type: "document_any", documents: ["obc_certificate", "caste_certificate"] },
    ],
    required_documents: ["aadhaar", "student_enrollment_proof", "bank_passbook", "obc_certificate"],
    application_mode: "api",
    application_link_or_contact: "Scholarship API pilot",
    is_new: true,
  },
  {
    id: "rural-health-protection",
    title: "Rural Health Protection Card",
    category: "Health",
    source: "Tracked catalog",
    launch_date: "2026-04-12",
    summary: "Health support enrollment for households needing subsidized treatment coverage.",
    benefit_summary: "Cashless support for listed facilities",
    eligible_member_tags: ["student", "pregnant", "farmer", "entrepreneur"],
    eligibility_rules: [
      { type: "document_any", documents: ["ration_card", "bpl_card", "income_certificate", "ews_certificate"] },
    ],
    required_documents: ["aadhaar", "ration_card", "health_card"],
    application_mode: "automation",
    application_link_or_contact: "Health enrollment portal automation",
    is_new: true,
  },
  {
    id: "community-nutrition-support",
    title: "Community Nutrition Support",
    category: "Health",
    source: "Tracked catalog",
    launch_date: "2026-02-25",
    summary: "Nutrition-linked assistance for women and children in low-income families.",
    benefit_summary: "Nutrition kit plus direct benefit transfer",
    eligible_member_tags: ["pregnant"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
    ],
    required_documents: ["aadhaar", "income_certificate", "pregnancy_maternal_health_card", "bank_passbook"],
    application_mode: "assisted_handoff",
    application_link_or_contact: "Nearest Anganwadi worker or PHC coordinator",
    is_new: false,
  },
  {
    id: "artisan-income-boost",
    title: "Artisan Income Boost",
    category: "Livelihood",
    source: "Tracked catalog",
    launch_date: "2026-04-11",
    summary: "Working capital and market-linkage support for home-based entrepreneurs and artisans.",
    benefit_summary: "Up to Rs 50,000 revolving support",
    eligible_member_tags: ["entrepreneur"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
    ],
    required_documents: ["aadhaar", "pan", "bank_passbook", "startup_pitch_deck"],
    application_mode: "api",
    application_link_or_contact: "API onboarding sandbox",
    is_new: true,
  },
  {
    id: "women-self-help-upgrade",
    title: "Women Self-Help Group Upgrade",
    category: "Livelihood",
    source: "Tracked catalog",
    launch_date: "2026-03-27",
    summary: "Support for women-led micro-enterprises scaling from self-help group activity to formal sales.",
    benefit_summary: "Tooling grant and mentoring support",
    eligible_member_tags: ["entrepreneur"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
    ],
    required_documents: ["aadhaar", "self_help_group_proof", "bank_passbook", "income_certificate"],
    application_mode: "automation",
    application_link_or_contact: "Livelihood mission portal automation",
    is_new: false,
  },
  {
    id: "informal-worker-security",
    title: "Informal Worker Security Support",
    category: "Livelihood",
    source: "Tracked catalog",
    launch_date: "2026-02-20",
    summary: "Support for unorganized workers through registration and welfare-linked financial assistance.",
    benefit_summary: "Insurance and welfare enrollment support",
    eligible_member_tags: ["entrepreneur", "farmer"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
    ],
    required_documents: ["aadhaar", "income_certificate", "bank_passbook", "job_card"],
    application_mode: "assisted_handoff",
    application_link_or_contact: "Block welfare facilitation center",
    is_new: false,
  },
  {
    id: "micro-irrigation-support",
    title: "Micro Irrigation Support",
    category: "Agriculture",
    source: "Tracked catalog",
    launch_date: "2026-04-08",
    summary: "Subsidy-backed support for farmers adopting drip and sprinkler irrigation.",
    benefit_summary: "Up to 60% subsidy",
    eligible_member_tags: ["farmer"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
      { type: "document_any", documents: ["farmer_id_card", "land_record"] },
    ],
    required_documents: ["aadhaar", "land_record", "bank_passbook", "passport_photo"],
    application_mode: "automation",
    application_link_or_contact: "Agriculture department portal automation",
    is_new: true,
  },
  {
    id: "farmer-input-credit",
    title: "Farmer Input Credit Assist",
    category: "Agriculture",
    source: "Tracked catalog",
    launch_date: "2026-03-11",
    summary: "Seasonal credit support for seeds, fertilizers, and allied farm inputs.",
    benefit_summary: "Low-interest credit access",
    eligible_member_tags: ["farmer"],
    eligibility_rules: [
      { type: "document_any", documents: ["income_certificate", "bpl_card", "ews_certificate"] },
      { type: "document_any", documents: ["farmer_id_card", "land_record"] },
    ],
    required_documents: ["aadhaar", "land_record", "bank_passbook", "income_certificate"],
    application_mode: "api",
    application_link_or_contact: "Pilot agri-credit API channel",
    is_new: false,
  },
  {
    id: "soil-health-assistance",
    title: "Soil Health Assistance Mission",
    category: "Agriculture",
    source: "Tracked catalog",
    launch_date: "2026-01-30",
    summary: "Soil testing and improvement support for small and marginal farmers.",
    benefit_summary: "Testing support plus follow-up assistance",
    eligible_member_tags: ["farmer"],
    required_documents: ["aadhaar", "land_record", "passport_photo"],
    application_mode: "assisted_handoff",
    application_link_or_contact: "Krishi Vigyan Kendra field desk",
    is_new: false,
  },
];

const demoDocuments = [
  {
    id: "doc-aadhaar-hh",
    normalized_type: "aadhaar",
    display_name: "Aadhaar household pack",
    source: "DigiLocker sync",
    status: "verified",
    owner_member_id: null,
  },
  {
    id: "doc-pan-seema",
    normalized_type: "pan",
    display_name: "PAN - Seema Devi",
    source: "Phone storage",
    status: "verified",
    owner_member_id: "member-seema",
  },
  {
    id: "doc-income-hh",
    normalized_type: "income_certificate",
    display_name: "Income Certificate",
    source: "Local upload",
    status: "uploaded",
    owner_member_id: null,
  },
  {
    id: "doc-bank-hh",
    normalized_type: "bank_passbook",
    display_name: "Bank Passbook",
    source: "Local upload",
    status: "uploaded",
    owner_member_id: null,
  },
  {
    id: "doc-enrollment-aarti",
    normalized_type: "student_enrollment_proof",
    display_name: "College Enrollment Slip",
    source: "Phone storage",
    status: "verified",
    owner_member_id: "member-aarti",
  },
  {
    id: "doc-land-raghav",
    normalized_type: "land_record",
    display_name: "Land Record - Raghav Singh",
    source: "Local upload",
    status: "uploaded",
    owner_member_id: "member-raghav",
  },
  {
    id: "doc-health-hh",
    normalized_type: "health_card",
    display_name: "Ayushman Health Card",
    source: "Phone storage",
    status: "verified",
    owner_member_id: null,
  },
];

const defaultMessages = [
  {
    id: createId(),
    type: "new_scheme",
    title: "4 newly tracked schemes fit your household",
    detail: "Education, health, livelihood, and agriculture matches are ready to review.",
    time: nowLabel(),
  },
  {
    id: createId(),
    type: "future_scope",
    title: "Future scope captured for WhatsApp, Android, PWA, and maternal expansion",
    detail: "The planning doc now reflects messaging and maternal scheme expansion as future work.",
    time: nowLabel(),
  },
];

const defaultTimeline = [
  {
    id: createId(),
    type: "system",
    title: "YojanaSaathi household profile initialized",
    detail: "Multi-member household mode is active for matching and readiness.",
    time: nowLabel(),
  },
];

const defaultInForceBenefits = [
  {
    id: createId(),
    scheme_id: "rural-health-protection",
    member_id: "member-seema",
    status: "Benefit active",
    benefit_note: "Household is already using the health benefit for treatment support.",
  },
];

const defaultAuthState = {
  isLoggedIn: false,
  step: "mobile",
  language: "en",
  mobileNumber: "",
  otpCode: "482913",
  otpVerified: false,
  aadhaarMobileConfirmed: false,
  householdName: householdProfile.household_name,
  location: householdProfile.location,
  digilockerLinked: false,
};

function tr(key, replacements = {}) {
  let value = t(key);
  for (const [token, replacement] of Object.entries(replacements)) {
    value = value.replaceAll(`{${token}}`, replacement);
  }
  return value;
}

const dom = {
  authShell: document.querySelector("#authShell"),
  authPanel: document.querySelector("#authPanel"),
  authEyebrow: document.querySelector("#authEyebrow"),
  authTitle: document.querySelector("#authTitle"),
  authCopy: document.querySelector("#authCopy"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroCopy: document.querySelector("#heroCopy"),
  languageSwitcher: document.querySelector("#languageSwitcher"),
  languageSwitcherLabel: document.querySelector("#languageSwitcherLabel"),
  guideKicker: document.querySelector("#guideKicker"),
  guideTitle: document.querySelector("#guideTitle"),
  guideStep1Title: document.querySelector("#guideStep1Title"),
  guideStep1Copy: document.querySelector("#guideStep1Copy"),
  guideStep2Title: document.querySelector("#guideStep2Title"),
  guideStep2Copy: document.querySelector("#guideStep2Copy"),
  guideStep3Title: document.querySelector("#guideStep3Title"),
  guideStep3Copy: document.querySelector("#guideStep3Copy"),
  guideStep4Title: document.querySelector("#guideStep4Title"),
  guideStep4Copy: document.querySelector("#guideStep4Copy"),
  orientationKicker: document.querySelector("#orientationKicker"),
  orientationTitle: document.querySelector("#orientationTitle"),
  orientationCard1Tag: document.querySelector("#orientationCard1Tag"),
  orientationCard1Title: document.querySelector("#orientationCard1Title"),
  orientationCard1Copy: document.querySelector("#orientationCard1Copy"),
  orientationCard2Tag: document.querySelector("#orientationCard2Tag"),
  orientationCard2Title: document.querySelector("#orientationCard2Title"),
  orientationCard2Copy: document.querySelector("#orientationCard2Copy"),
  orientationCard3Tag: document.querySelector("#orientationCard3Tag"),
  orientationCard3Title: document.querySelector("#orientationCard3Title"),
  orientationCard3Copy: document.querySelector("#orientationCard3Copy"),
  householdKicker: document.querySelector("#householdKicker"),
  householdName: document.querySelector("#householdName"),
  incomeBandLabel: document.querySelector("#incomeBandLabel"),
  householdSummary: document.querySelector("#householdSummary"),
  digilockerStatusCard: document.querySelector("#digilockerStatusCard"),
  heroProfileCard: document.querySelector("#heroProfileCard"),
  selectionSummary: document.querySelector("#selectionSummary"),
  memberList: document.querySelector("#memberList"),
  detailKicker: document.querySelector("#detailKicker"),
  newSchemeList: document.querySelector("#newSchemeList"),
  appliedSchemeList: document.querySelector("#appliedSchemeList"),
  inForceSchemeList: document.querySelector("#inForceSchemeList"),
  schemeDetail: document.querySelector("#schemeDetail"),
  detailTitle: document.querySelector("#detailTitle"),
  detailCategory: document.querySelector("#detailCategory"),
  detailEmptyState: document.querySelector("#detailEmptyState"),
  newSchemesKicker: document.querySelector("#newSchemesKicker"),
  newSchemesTitle: document.querySelector("#newSchemesTitle"),
  appliedKicker: document.querySelector("#appliedKicker"),
  appliedTitle: document.querySelector("#appliedTitle"),
  inForceKicker: document.querySelector("#inForceKicker"),
  inForceTitle: document.querySelector("#inForceTitle"),
  messagesKicker: document.querySelector("#messagesKicker"),
  messagesTitle: document.querySelector("#messagesTitle"),
  documentsKicker: document.querySelector("#documentsKicker"),
  documentsTitle: document.querySelector("#documentsTitle"),
  documentUploadTitle: document.querySelector("#documentUploadTitle"),
  documentUploadCopy: document.querySelector("#documentUploadCopy"),
  timelineKicker: document.querySelector("#timelineKicker"),
  timelineTitle: document.querySelector("#timelineTitle"),
  messageCenter: document.querySelector("#messageCenter"),
  documentVault: document.querySelector("#documentVault"),
  activityFeed: document.querySelector("#activityFeed"),
  newSchemeCount: document.querySelector("#newSchemeCount"),
  readySchemeCount: document.querySelector("#readySchemeCount"),
  refreshInboxButton: document.querySelector("#refreshInboxButton"),
  documentUpload: document.querySelector("#documentUpload"),
  schemeCardTemplate: document.querySelector("#schemeCardTemplate"),
  consentModal: document.querySelector("#consentModal"),
  consentKicker: document.querySelector("#consentKicker"),
  consentTitle: document.querySelector("#consentTitle"),
  consentCopy: document.querySelector("#consentCopy"),
  consentScript: document.querySelector("#consentScript"),
  closeConsentModal: document.querySelector("#closeConsentModal"),
  startRecordingButton: document.querySelector("#startRecordingButton"),
  stopRecordingButton: document.querySelector("#stopRecordingButton"),
  verifyRecordingButton: document.querySelector("#verifyRecordingButton"),
  recorderStateLabel: document.querySelector("#recorderStateLabel"),
  recorderDurationLabel: document.querySelector("#recorderDurationLabel"),
  recorderHelpText: document.querySelector("#recorderHelpText"),
  consentAudioUpload: document.querySelector("#consentAudioUpload"),
  consentUploadTitle: document.querySelector("#consentUploadTitle"),
  consentUploadCopy: document.querySelector("#consentUploadCopy"),
  consentPlayback: document.querySelector("#consentPlayback"),
  successToast: document.querySelector("#successToast"),
  successToastTitle: document.querySelector("#successToastTitle"),
  successToastText: document.querySelector("#successToastText"),
};

const state = {
  auth: loadJson(STORAGE_KEYS.auth, defaultAuthState),
  selectedSchemeId: schemes[0].id,
  selectedMemberId: getPrimaryMatch(schemes[0]).id,
  documents: loadJson(STORAGE_KEYS.documents, []),
  messages: loadJson(STORAGE_KEYS.messages, defaultMessages),
  timeline: loadJson(STORAGE_KEYS.timeline, defaultTimeline),
  applicationAttempts: loadJson(STORAGE_KEYS.applications, []),
  consentVerifications: loadJson(STORAGE_KEYS.consent, {}),
  inForceBenefits: loadJson(STORAGE_KEYS.inForce, defaultInForceBenefits),
  digilockerLinked: loadJson(STORAGE_KEYS.auth, defaultAuthState).digilockerLinked,
  currentLanguage: loadJson(STORAGE_KEYS.auth, defaultAuthState).language || "en",
  recorder: {
    stream: null,
    mediaRecorder: null,
    chunks: [],
    startedAt: null,
    durationMs: 0,
  },
  accountMenuOpen: false,
  pendingDocumentType: null,
};

function createId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowLabel() {
  return new Date().toLocaleString("en-IN");
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function persist() {
  state.auth.language = state.currentLanguage;
  localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(state.auth));
  localStorage.setItem(STORAGE_KEYS.documents, JSON.stringify(state.documents));
  localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(state.messages));
  localStorage.setItem(STORAGE_KEYS.timeline, JSON.stringify(state.timeline));
  localStorage.setItem(STORAGE_KEYS.applications, JSON.stringify(state.applicationAttempts));
  localStorage.setItem(STORAGE_KEYS.consent, JSON.stringify(state.consentVerifications));
  localStorage.setItem(STORAGE_KEYS.inForce, JSON.stringify(state.inForceBenefits));
}

function t(key) {
  const pack = TRANSLATIONS[state.currentLanguage] || TRANSLATIONS.en;
  return pack[key] || TRANSLATIONS.en[key] || key;
}

function applyStaticTranslations() {
  if (dom.authEyebrow) dom.authEyebrow.textContent = t("authEyebrow");
  if (dom.authTitle) dom.authTitle.textContent = t("authTitle");
  if (dom.authCopy) dom.authCopy.textContent = t("authCopy");
  if (dom.heroEyebrow) dom.heroEyebrow.textContent = t("heroEyebrow");
  if (dom.heroTitle) dom.heroTitle.textContent = t("heroTitle");
  if (dom.heroCopy) dom.heroCopy.textContent = t("heroCopy");
  if (dom.languageSwitcherLabel) dom.languageSwitcherLabel.textContent = t("language");
  if (dom.guideKicker) dom.guideKicker.textContent = t("guideKicker");
  if (dom.guideTitle) dom.guideTitle.textContent = t("guideTitle");
  if (dom.guideStep1Title) dom.guideStep1Title.textContent = t("guideStep1Title");
  if (dom.guideStep1Copy) dom.guideStep1Copy.textContent = t("guideStep1Copy");
  if (dom.guideStep2Title) dom.guideStep2Title.textContent = t("guideStep2Title");
  if (dom.guideStep2Copy) dom.guideStep2Copy.textContent = t("guideStep2Copy");
  if (dom.guideStep3Title) dom.guideStep3Title.textContent = t("guideStep3Title");
  if (dom.guideStep3Copy) dom.guideStep3Copy.textContent = t("guideStep3Copy");
  if (dom.guideStep4Title) dom.guideStep4Title.textContent = t("guideStep4Title");
  if (dom.guideStep4Copy) dom.guideStep4Copy.textContent = t("guideStep4Copy");
  if (dom.orientationKicker) dom.orientationKicker.textContent = t("orientationKicker");
  if (dom.orientationTitle) dom.orientationTitle.textContent = t("orientationTitle");
  if (dom.orientationCard1Tag) dom.orientationCard1Tag.textContent = t("orientationCard1Tag");
  if (dom.orientationCard1Title) dom.orientationCard1Title.textContent = t("orientationCard1Title");
  if (dom.orientationCard1Copy) dom.orientationCard1Copy.textContent = t("orientationCard1Copy");
  if (dom.orientationCard2Tag) dom.orientationCard2Tag.textContent = t("orientationCard2Tag");
  if (dom.orientationCard2Title) dom.orientationCard2Title.textContent = t("orientationCard2Title");
  if (dom.orientationCard2Copy) dom.orientationCard2Copy.textContent = t("orientationCard2Copy");
  if (dom.orientationCard3Tag) dom.orientationCard3Tag.textContent = t("orientationCard3Tag");
  if (dom.orientationCard3Title) dom.orientationCard3Title.textContent = t("orientationCard3Title");
  if (dom.orientationCard3Copy) dom.orientationCard3Copy.textContent = t("orientationCard3Copy");
  if (dom.householdKicker) dom.householdKicker.textContent = t("householdKicker");
  if (dom.detailKicker) dom.detailKicker.textContent = t("detailKicker");
  if (dom.detailTitle) dom.detailTitle.textContent = t("detailTitleDefault");
  if (dom.detailEmptyState) dom.detailEmptyState.textContent = t("detailEmptyState");
  if (dom.newSchemesKicker) dom.newSchemesKicker.textContent = t("newSchemesKicker");
  if (dom.newSchemesTitle) dom.newSchemesTitle.textContent = t("newSchemesTitle");
  if (dom.appliedKicker) dom.appliedKicker.textContent = t("appliedKicker");
  if (dom.appliedTitle) dom.appliedTitle.textContent = t("appliedTitle");
  if (dom.inForceKicker) dom.inForceKicker.textContent = t("inForceKicker");
  if (dom.inForceTitle) dom.inForceTitle.textContent = t("inForceTitle");
  if (dom.messagesKicker) dom.messagesKicker.textContent = t("messagesKicker");
  if (dom.messagesTitle) dom.messagesTitle.textContent = t("messagesTitle");
  if (dom.documentsKicker) dom.documentsKicker.textContent = t("documentsKicker");
  if (dom.documentsTitle) dom.documentsTitle.textContent = t("documentsTitle");
  if (dom.documentUploadTitle) dom.documentUploadTitle.textContent = t("documentUploadTitle");
  if (dom.documentUploadCopy) dom.documentUploadCopy.textContent = t("documentUploadCopy");
  if (dom.timelineKicker) dom.timelineKicker.textContent = t("timelineKicker");
  if (dom.timelineTitle) dom.timelineTitle.textContent = t("timelineTitle");
  if (dom.consentKicker) dom.consentKicker.textContent = t("consentKicker");
  if (dom.consentTitle) dom.consentTitle.textContent = t("consentTitle");
  if (dom.consentCopy) dom.consentCopy.textContent = t("consentCopy");
  if (dom.consentScript) dom.consentScript.textContent = t("consentScript");
  if (dom.startRecordingButton) dom.startRecordingButton.textContent = t("startRecording");
  if (dom.stopRecordingButton) dom.stopRecordingButton.textContent = t("stopRecording");
  if (dom.verifyRecordingButton) dom.verifyRecordingButton.textContent = t("verifyRecording");
  if (dom.recorderStateLabel) dom.recorderStateLabel.textContent = t("recorderIdle");
  if (dom.recorderHelpText) dom.recorderHelpText.textContent = t("consentHelpDefault");
  if (dom.consentUploadTitle) dom.consentUploadTitle.textContent = t("consentUploadTitle");
  if (dom.consentUploadCopy) dom.consentUploadCopy.textContent = t("consentUploadCopy");
  if (dom.successToastTitle) dom.successToastTitle.textContent = t("successToastTitle");
  if (dom.successToastText) dom.successToastText.textContent = t("successToastText");
  if (dom.refreshInboxButton) dom.refreshInboxButton.textContent = t("refreshMessages");
  if (dom.languageSwitcher) dom.languageSwitcher.value = state.currentLanguage;
}

function getMember(memberId) {
  return householdProfile.members.find((member) => member.id === memberId);
}

function getSelectedScheme() {
  return schemes.find((scheme) => scheme.id === state.selectedSchemeId) ?? schemes[0];
}

function getScheme(schemeId) {
  return schemes.find((scheme) => scheme.id === schemeId);
}

function getPrimaryMatch(scheme) {
  return (
    householdProfile.members.find((member) =>
      scheme.eligible_member_tags.some((tag) => member.special_tags.includes(tag)),
    ) ?? householdProfile.members[0]
  );
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function prettifyLabel(label) {
  return label.replace(/_/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());
}

function normalizeDocumentName(input) {
  const normalized = input.toLowerCase().replace(/[^a-z0-9 ]+/g, " ");
  const match = canonicalDocumentKeywords.find(({ patterns }) =>
    patterns.some((pattern) => normalized.includes(pattern)),
  );
  return match?.type ?? null;
}

function documentIsPresent(documentRecord) {
  return documentRecord.status === "uploaded" || documentRecord.status === "verified";
}

function getConsentKey(schemeId, memberId) {
  return `${schemeId}:${memberId}`;
}

function hasVerifiedConsent(schemeId, memberId) {
  return Boolean(state.consentVerifications[getConsentKey(schemeId, memberId)]?.verifiedAt);
}

function hasApplied(schemeId, memberId) {
  return state.applicationAttempts.some(
    (attempt) => attempt.scheme_id === schemeId && attempt.member_id === memberId,
  );
}

function getDocumentsForMember(memberId) {
  return state.documents.filter(
    (documentRecord) =>
      documentIsPresent(documentRecord) &&
      (documentRecord.owner_member_id === null || documentRecord.owner_member_id === memberId),
  );
}

function getReadinessForScheme(scheme, memberId) {
  const available = new Set(getDocumentsForMember(memberId).map((documentRecord) => documentRecord.normalized_type));
  const readyDocuments = [];
  const missingDocuments = [];

  for (const documentType of scheme.required_documents) {
    if (available.has(documentType)) {
      readyDocuments.push(documentType);
    } else {
      missingDocuments.push(documentType);
    }
  }

  return {
    readyDocuments,
    missingDocuments,
    isReady: missingDocuments.length === 0,
  };
}

function getMatchedSchemes() {
  return schemes.map((scheme) => {
    const matchedMember = getPrimaryMatch(scheme);
    return {
      scheme,
      matchedMember,
      readiness: getReadinessForScheme(scheme, matchedMember.id),
    };
  });
}

function getSchemesForSelectedMember() {
  const selectedMember = getMember(state.selectedMemberId);
  return getMatchedSchemes().filter(({ matchedMember }) => matchedMember.id === selectedMember.id);
}

function getEligibilityForScheme(scheme, memberId) {
  const availableDocuments = new Set(
    getDocumentsForMember(memberId).map((documentRecord) => documentRecord.normalized_type),
  );
  const missingDocuments = new Set();
  const reasons = [];

  for (const rule of scheme.eligibility_rules ?? []) {
    if (rule.type === "document_any" && !rule.documents.some((documentType) => availableDocuments.has(documentType))) {
      rule.documents.forEach((documentType) => missingDocuments.add(documentType));
      const labels = rule.documents.map((documentType) => canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType));
      reasons.push(tr("addOneOfEligibilityDocs", { docs: labels.join(", ") }));
      continue;
    }

    if (rule.type === "document_required") {
      const missing = rule.documents.filter((documentType) => !availableDocuments.has(documentType));
      if (missing.length > 0) {
        missing.forEach((documentType) => missingDocuments.add(documentType));
        const labels = missing.map((documentType) => canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType));
        reasons.push(tr("addAllEligibilityDocs", { docs: labels.join(", ") }));
      }
    }
  }

  return {
    isEligible: reasons.length === 0,
    reasons,
    missingDocuments: Array.from(missingDocuments),
  };
}

function hasAadhaarAvailableForMember(memberId) {
  return getDocumentsForMember(memberId).some((documentRecord) => documentRecord.normalized_type === "aadhaar");
}

function getAadhaarPhotoDataUri(member) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f7f2cf"/>
          <stop offset="100%" stop-color="#d8f0ea"/>
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill="url(#g)"/>
      <circle cx="48" cy="35" r="16" fill="#29544d"/>
      <path d="M24 82c4-15 17-22 24-22s20 7 24 22" fill="#29544d"/>
      <rect x="8" y="66" width="80" height="20" rx="10" fill="rgba(255,255,255,0.7)"/>
      <text x="48" y="80" text-anchor="middle" font-family="Instrument Sans, Arial, sans-serif" font-size="13" font-weight="700" fill="#183347">${initials}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getSubmissionPathLabel(mode) {
  const labels = {
    api: state.currentLanguage === "hi" ? "आधिकारिक API से स्वतः सबमिट" : "Auto-submit through official API",
    automation: state.currentLanguage === "hi" ? "पोर्टल ऑटोमेशन से स्वतः भरें" : "Auto-fill through portal automation",
    assisted_handoff: state.currentLanguage === "hi" ? "सहायक संपर्क दिखाएँ" : "Show helper contact",
  };
  return labels[mode] ?? mode;
}

function getSubmissionPathShortLabel(mode) {
  const labels = {
    api: state.currentLanguage === "hi" ? "API सबमिट" : "API submit",
    automation: state.currentLanguage === "hi" ? "पोर्टल ऑटोमेशन" : "Portal automation",
    assisted_handoff: state.currentLanguage === "hi" ? "सहायक संपर्क" : "Helper contact",
  };
  return labels[mode] ?? mode;
}

function addMessage(type, title, detail) {
  state.messages.push({
    id: createId(),
    type,
    title,
    detail,
    time: nowLabel(),
  });
  persist();
}

function addTimeline(type, title, detail) {
  state.timeline.push({
    id: createId(),
    type,
    title,
    detail,
    time: nowLabel(),
  });
  persist();
}

function renderAuth() {
  const {
    step,
    mobileNumber,
    otpCode,
    householdName,
    location,
    digilockerLinked,
    isLoggedIn,
    aadhaarMobileConfirmed,
  } = state.auth;

  if (isLoggedIn) {
    dom.authShell.classList.add("hidden");
    document.body.classList.remove("auth-open");
    return;
  }

  dom.authShell.classList.remove("hidden");
  document.body.classList.add("auth-open");

  if (step === "mobile") {
    dom.authPanel.innerHTML = `
      <p class="panel-kicker">${t("login")}</p>
      <h2>${t("loginTitle")}</h2>
      <p class="muted">${t("loginCopy")}</p>
      <div class="auth-field">
        <label for="loginLanguageInput">${t("language")}</label>
        <select id="loginLanguageInput" class="auth-input">
          <option value="en" ${state.currentLanguage === "en" ? "selected" : ""}>English</option>
          <option value="hi" ${state.currentLanguage === "hi" ? "selected" : ""}>हिन्दी</option>
          <option value="mr" ${state.currentLanguage === "mr" ? "selected" : ""}>मराठी</option>
          <option value="ta" ${state.currentLanguage === "ta" ? "selected" : ""}>தமிழ்</option>
          <option value="bn" ${state.currentLanguage === "bn" ? "selected" : ""}>বাংলা</option>
        </select>
      </div>
      <div class="auth-field">
        <label for="mobileInput">${t("mobileNumber")}</label>
        <input id="mobileInput" class="auth-input" type="tel" placeholder="9876543210" value="${mobileNumber}" />
      </div>
      <label class="auth-check">
        <input id="aadhaarMobileCheck" type="checkbox" ${aadhaarMobileConfirmed ? "checked" : ""} />
        <span>${t("aadhaarCheck")}</span>
      </label>
      <div class="auth-note">${t("demoOtp")} <strong>${otpCode}</strong></div>
      <button id="sendOtpButton" class="primary-button" type="button">${t("sendOtp")}</button>
    `;

    document.querySelector("#sendOtpButton")?.addEventListener("click", () => {
      state.currentLanguage = document.querySelector("#loginLanguageInput")?.value || "en";
      const value = document.querySelector("#mobileInput")?.value.trim() ?? "";
      const aadhaarConfirmed = Boolean(document.querySelector("#aadhaarMobileCheck")?.checked);
      if (!aadhaarConfirmed) {
        addMessage(
          "auth",
          "Aadhaar-authenticated mobile required",
          "Please confirm that the beneficiary mobile number is linked to Aadhaar before continuing.",
        );
        renderMessages();
        return;
      }
      state.auth.mobileNumber = value;
      state.auth.aadhaarMobileConfirmed = aadhaarConfirmed;
      state.auth.step = "otp";
      addMessage("auth", "OTP sent to Aadhaar-linked mobile", `Mock OTP sent to ${value || "the entered mobile number"} after Aadhaar-mobile confirmation.`);
      render();
    });

    return;
  }

  if (step === "otp") {
    dom.authPanel.innerHTML = `
      <p class="panel-kicker">${t("verify")}</p>
      <h2>${t("verifyTitle")}</h2>
      <p class="muted">We sent a mock OTP to ${mobileNumber || "the beneficiary"}.</p>
      <div class="auth-field">
        <label for="otpInput">${t("otp")}</label>
        <input id="otpInput" class="auth-input" type="text" inputmode="numeric" placeholder="Enter 6-digit OTP" />
      </div>
      <div class="auth-note">${t("demoOtp")} <strong>${otpCode}</strong></div>
      <div class="detail-actions">
        <button id="backToMobileButton" class="ghost-button" type="button">${t("changeMobile")}</button>
        <button id="verifyOtpButton" class="primary-button" type="button">${t("verifyOtp")}</button>
      </div>
    `;

    document.querySelector("#backToMobileButton")?.addEventListener("click", () => {
      state.auth.step = "mobile";
      render();
    });

    document.querySelector("#verifyOtpButton")?.addEventListener("click", () => {
      const value = document.querySelector("#otpInput")?.value.trim() ?? "";
      if (value !== state.auth.otpCode) {
        addMessage("auth", "OTP did not match", "Please use the demo OTP shown on screen to continue.");
        renderMessages();
        return;
      }

      state.auth.otpVerified = true;
      state.auth.step = "onboarding";
      addTimeline("auth", "OTP verified", `Aadhaar-authenticated beneficiary mobile ${state.auth.mobileNumber || "number"} was verified.`);
      render();
    });

    return;
  }

  dom.authPanel.innerHTML = `
    <p class="panel-kicker">${t("onboarding")}</p>
    <h2>${t("onboardingTitle")}</h2>
    <p class="muted">${t("onboardingCopy")}</p>
    <div class="auth-grid">
      <div class="auth-field">
        <label for="householdNameInput">${t("householdName")}</label>
        <input id="householdNameInput" class="auth-input" type="text" value="${householdName}" />
      </div>
      <div class="auth-field">
        <label for="locationInput">${t("location")}</label>
        <input id="locationInput" class="auth-input" type="text" value="${location}" />
      </div>
    </div>
    <div class="summary-strip">
      <span class="badge info">${digilockerLinked ? t("digilockerLinked") : t("digilockerNotLinked")}</span>
      <button id="onboardingDigilockerButton" class="brand-button" type="button">
        ${DIGILOCKER_INLINE_ICON}
        ${digilockerLinked ? t("manageDigilockerLink") : t("linkDigilockerNow")}
      </button>
    </div>
    <div class="auth-note">${t("continueWithoutDigilocker")}</div>
    <div class="detail-actions">
      <button id="finishOnboardingButton" class="primary-button" type="button">
        ${t("continueToDashboard")}
      </button>
    </div>
  `;

  document.querySelector("#onboardingDigilockerButton")?.addEventListener("click", () => {
    state.auth.digilockerLinked = true;
    state.digilockerLinked = true;
    addMessage("digilocker", "DigiLocker linked during onboarding", "The beneficiary linked DigiLocker while setting up the account.");
    addTimeline("digilocker", "DigiLocker linked", "Household onboarding can now continue with DigiLocker as the preferred source.");
    render();
  });

  document.querySelector("#finishOnboardingButton")?.addEventListener("click", () => {
    state.auth.householdName = document.querySelector("#householdNameInput")?.value.trim() || householdProfile.household_name;
    state.auth.location = document.querySelector("#locationInput")?.value.trim() || householdProfile.location;
    householdProfile.household_name = state.auth.householdName;
    householdProfile.location = state.auth.location;
    state.auth.isLoggedIn = true;
    state.digilockerLinked = state.auth.digilockerLinked;
    addMessage("auth", "Beneficiary logged in", `${state.auth.householdName} finished onboarding and entered the YojanaSaathi dashboard.`);
    addTimeline(
      "auth",
      "Login complete",
      `The beneficiary finished OTP verification and household setup${state.auth.digilockerLinked ? ", with DigiLocker linked." : ", without DigiLocker linking."}`,
    );
    render();
  });
}

function renderHousehold() {
  const selectedMember = getMember(state.selectedMemberId);
  const hasAadhaarPhoto = state.digilockerLinked && hasAadhaarAvailableForMember(selectedMember.id);
  dom.householdName.textContent = householdProfile.household_name;
  dom.incomeBandLabel.textContent = householdProfile.income_band;
  dom.householdSummary.textContent =
    `${householdProfile.location} ${tr("householdSummary", { count: householdProfile.members.length })}`;
  dom.digilockerStatusCard.innerHTML = `
    <span class="badge info">
      ${state.digilockerLinked ? t("digilockerLinkedHousehold") : t("digilockerNotLinkedHousehold")}
    </span>
    <span class="muted">
      ${t("digilockerSetupHelp")}
    </span>
    <button class="brand-button" id="digilockerLinkButton" type="button">
      ${DIGILOCKER_INLINE_ICON}
      ${state.digilockerLinked ? t("manageDigilockerLink") : t("linkDigilockerNow")}
    </button>
  `;

  dom.heroProfileCard.innerHTML = `
    <button class="account-trigger" id="heroAccountMenuButton" type="button" aria-label="${t("accountMenuOpen")}" aria-expanded="${state.accountMenuOpen ? "true" : "false"}">
      ${
        hasAadhaarPhoto
          ? `<img class="account-avatar" src="${getAadhaarPhotoDataUri(selectedMember)}" alt="${selectedMember.name}" />`
          : `<div class="account-avatar placeholder-avatar" aria-hidden="true">${selectedMember.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}</div>`
      }
    </button>
    ${
      state.accountMenuOpen
        ? `
      <div class="account-menu">
        <div class="account-menu-header">
          ${
            hasAadhaarPhoto
              ? `<img class="account-menu-avatar" src="${getAadhaarPhotoDataUri(selectedMember)}" alt="${selectedMember.name}" />`
              : `<div class="account-menu-avatar placeholder-avatar" aria-hidden="true">${selectedMember.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}</div>`
          }
          <div class="account-meta">
            <strong>${selectedMember.name}</strong>
            <span class="muted account-status-line">${hasAadhaarPhoto ? t("aadhaarPhotoLabel") : t("aadhaarPhotoMissing")}</span>
          </div>
        </div>
        <div class="account-menu-section">
          <span class="account-menu-label">${t("language")}</span>
          <div class="auth-field compact-field account-language-field">
            <label class="sr-only" for="profileLanguageSwitcher">${t("language")}</label>
            <select id="profileLanguageSwitcher" class="auth-input" aria-label="${t("language")}">
              <option value="en" ${state.currentLanguage === "en" ? "selected" : ""}>English</option>
              <option value="hi" ${state.currentLanguage === "hi" ? "selected" : ""}>हिन्दी</option>
              <option value="mr" ${state.currentLanguage === "mr" ? "selected" : ""}>मराठी</option>
              <option value="ta" ${state.currentLanguage === "ta" ? "selected" : ""}>தமிழ்</option>
              <option value="bn" ${state.currentLanguage === "bn" ? "selected" : ""}>বাংলা</option>
            </select>
          </div>
        </div>
        <div class="account-menu-section">
          <span class="account-menu-label">${t("switchProfile")}</span>
          <div class="account-profile-list">
            ${householdProfile.members
              .map(
                (member) => `
              <button class="account-profile-option ${member.id === state.selectedMemberId ? "active" : ""}" data-profile-id="${member.id}" type="button">
                ${member.name}
              </button>
            `,
              )
              .join("")}
          </div>
        </div>
        <div class="account-menu-footer">
          <span class="muted account-session-line">${state.auth.mobileNumber ? tr("loggedInWith", { mobile: state.auth.mobileNumber }) : t("sessionActive")}</span>
          <button class="ghost-button" id="heroLogoutButton" type="button">${t("logout")}</button>
        </div>
      </div>
    `
        : ""
    }
  `;

  dom.selectionSummary.innerHTML = `
    <span class="badge info">${t("selectedPerson")}: ${selectedMember.name}</span>
    <span class="badge">${t("rolePrefix")}: ${selectedMember.occupation_or_status}</span>
    <span class="badge accent">${t("tipRecordConsent")}</span>
  `;

  dom.memberList.innerHTML = householdProfile.members
    .map((member) => {
      const relatedSchemes = schemes.filter((scheme) =>
        scheme.eligible_member_tags.some((tag) => member.special_tags.includes(tag)),
      ).length;
      const activeClass = member.id === state.selectedMemberId ? "active" : "";

      return `
        <article class="member-card ${activeClass}" data-member-id="${member.id}">
          <div class="member-card-top">
            <div class="member-meta">
              <p class="member-label">${member.relationship}</p>
              <h3 class="member-name">${member.name}</h3>
              <span class="muted">${member.occupation_or_status} • ${member.age_or_dob}</span>
            </div>
            <span class="badge info">${relatedSchemes} ${t("schemesCount")}</span>
          </div>
          <div class="tag-row">
            ${member.special_tags.map((tag) => `<span class="tag-pill accent">${tag}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  for (const card of dom.memberList.querySelectorAll("[data-member-id]")) {
    card.addEventListener("click", () => {
      const memberId = card.getAttribute("data-member-id");
      state.selectedMemberId = memberId;
      const firstSchemeForMember = schemes.find((scheme) =>
        scheme.eligible_member_tags.some((tag) => getMember(memberId).special_tags.includes(tag)),
      );
      if (firstSchemeForMember) {
        state.selectedSchemeId = firstSchemeForMember.id;
      }
      render();
    });
  }

  document.querySelector("#digilockerLinkButton")?.addEventListener("click", () => {
    state.digilockerLinked = true;
    state.auth.digilockerLinked = true;
    addMessage(
      "digilocker",
      "DigiLocker linked during profile setup",
      "The beneficiary linked DigiLocker while setting up the household profile. YojanaSaathi will prefer DigiLocker when fetching documents.",
    );
    addTimeline(
      "digilocker",
      "DigiLocker link confirmed",
      "Household onboarding now prefers DigiLocker before manual document upload.",
    );
    render();
  });

  document.querySelector("#heroAccountMenuButton")?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.accountMenuOpen = !state.accountMenuOpen;
    render();
  });

  for (const button of document.querySelectorAll("[data-profile-id]")) {
    button.addEventListener("click", () => {
      const memberId = button.getAttribute("data-profile-id");
      state.accountMenuOpen = false;
      state.selectedMemberId = memberId;
      const firstSchemeForMember = schemes.find((scheme) =>
        scheme.eligible_member_tags.some((tag) => getMember(memberId).special_tags.includes(tag)),
      );
      if (firstSchemeForMember) {
        state.selectedSchemeId = firstSchemeForMember.id;
      }
      render();
    });
  }

  document.querySelector("#profileLanguageSwitcher")?.addEventListener("change", (event) => {
    event.stopPropagation();
    state.currentLanguage = event.target.value;
    state.auth.language = state.currentLanguage;
    render();
  });

  document.querySelector("#heroLogoutButton")?.addEventListener("click", () => {
    state.accountMenuOpen = false;
    logoutSession();
  });

}

function renderSchemeCard({ scheme, matchedMember, readiness, extraMeta }) {
  const fragment = dom.schemeCardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".scheme-card");
  const eligibility = getEligibilityForScheme(scheme, matchedMember.id);

  fragment.querySelector(".scheme-category").textContent = `${scheme.category}`;
  fragment.querySelector(".scheme-name").textContent = scheme.title;
  fragment.querySelector(".scheme-summary").textContent = scheme.summary;
  fragment.querySelector(".scheme-member").textContent = tr("forMember", { name: matchedMember.name });
  fragment.querySelector(".scheme-path").textContent = extraMeta ?? getSubmissionPathShortLabel(scheme.application_mode);
  fragment.querySelector(".scheme-launch").textContent = scheme.is_new
    ? t("newInApp")
    : tr("launchedOn", { date: formatDate(scheme.launch_date) });
  fragment.querySelector(".scheme-status").textContent = !eligibility.isEligible ? t("ineligibleBadge") : scheme.is_new ? t("newBadge") : t("trackedBadge");

  const readinessBadge = document.createElement("span");
  readinessBadge.className = `doc-chip ${!eligibility.isEligible ? "missing" : readiness.isReady ? "ready" : "pending"}`;
  readinessBadge.textContent = !eligibility.isEligible ? t("ineligibleBadge") : readiness.isReady ? t("documentsReady") : tr("missingCount", { count: readiness.missingDocuments.length });
  fragment.querySelector(".meta-row").append(readinessBadge);

  if (scheme.id === state.selectedSchemeId) {
    card.classList.add("active");
  }

  card.addEventListener("click", () => {
    state.selectedSchemeId = scheme.id;
    state.selectedMemberId = matchedMember.id;
    render();
  });

  return fragment;
}

function renderSchemes() {
  const selectedMember = getMember(state.selectedMemberId);
  const selectedSchemes = getSchemesForSelectedMember();
  const newSchemes = selectedSchemes.filter(({ scheme, matchedMember }) => !hasApplied(scheme.id, matchedMember.id));
  const appliedAttempts = state.applicationAttempts
    .filter((attempt) => attempt.member_id === selectedMember.id)
    .map((attempt) => ({
      attempt,
      scheme: getScheme(attempt.scheme_id),
      matchedMember: selectedMember,
      readiness: getReadinessForScheme(getScheme(attempt.scheme_id), selectedMember.id),
    }));
  const activeBenefits = state.inForceBenefits
    .filter((benefit) => benefit.member_id === selectedMember.id)
    .map((benefit) => ({
      benefit,
      scheme: getScheme(benefit.scheme_id),
      matchedMember: selectedMember,
      readiness: getReadinessForScheme(getScheme(benefit.scheme_id), selectedMember.id),
    }));

  dom.newSchemeList.innerHTML = "";
  dom.appliedSchemeList.innerHTML = "";
  dom.inForceSchemeList.innerHTML = "";

  dom.newSchemeCount.textContent = `${newSchemes.filter(({ scheme }) => scheme.is_new).length} ${t("newBadge").toLowerCase()}`;
  dom.readySchemeCount.textContent = `${newSchemes.filter(({ scheme, matchedMember, readiness }) => readiness.isReady && getEligibilityForScheme(scheme, matchedMember.id).isEligible).length} ${t("documentsReady").toLowerCase()}`;

  if (newSchemes.length === 0) {
    dom.newSchemeList.innerHTML = `<div class="empty-block">${tr("noNewSchemes", { name: selectedMember.name })}</div>`;
  }

  for (const item of newSchemes) {
    dom.newSchemeList.append(renderSchemeCard(item));
  }

  if (appliedAttempts.length === 0) {
    dom.appliedSchemeList.innerHTML = `<div class="empty-block">${tr("noAppliedSchemes", { name: selectedMember.name })}</div>`;
  }

  for (const { attempt, scheme, matchedMember, readiness } of appliedAttempts) {
    dom.appliedSchemeList.append(
      renderSchemeCard({
        scheme,
        matchedMember,
        readiness,
        extraMeta: attempt.status,
      }),
    );
  }

  if (activeBenefits.length === 0) {
    dom.inForceSchemeList.innerHTML = `<div class="empty-block">${tr("noActiveBenefits", { name: selectedMember.name })}</div>`;
  }

  for (const { benefit, scheme, matchedMember, readiness } of activeBenefits) {
    dom.inForceSchemeList.append(
      renderSchemeCard({
        scheme,
        matchedMember,
        readiness,
        extraMeta: benefit.status,
      }),
    );
  }
}

function renderSchemeDetail() {
  const scheme = getSelectedScheme();
  const matchedMember = getPrimaryMatch(scheme);
  const readiness = getReadinessForScheme(scheme, matchedMember.id);
  const consentVerified = hasVerifiedConsent(scheme.id, matchedMember.id);
  const eligibility = getEligibilityForScheme(scheme, matchedMember.id);
  const latestAttempt = [...state.applicationAttempts]
    .reverse()
    .find((attempt) => attempt.scheme_id === scheme.id && attempt.member_id === matchedMember.id);

  dom.detailTitle.textContent = scheme.title;
  dom.detailCategory.textContent = scheme.category;
  dom.schemeDetail.classList.remove("empty-state");

  const missingDocLabels = readiness.missingDocuments.map((type) => canonicalDocumentLabels[type] ?? prettifyLabel(type));
  const combinedMissingDocuments = Array.from(new Set([...eligibility.missingDocuments, ...readiness.missingDocuments]));
  const handoffBlock =
    scheme.application_mode === "assisted_handoff"
      ? `
        <section class="detail-section">
          <h3>${t("assistedHandoff")}</h3>
          <div class="contact-list">
            <div class="contact-row">
              <span>${t("officialSupportPath")}</span>
              <span class="badge">${scheme.application_link_or_contact}</span>
            </div>
            <div class="contact-row">
              <span>${t("handoffPacket")}</span>
              <span class="muted">${matchedMember.name} • ${readiness.isReady ? t("readyForAssisted") : tr("stillNeeded", { docs: missingDocLabels.join(", ") })}</span>
            </div>
          </div>
        </section>
      `
      : "";

  dom.schemeDetail.innerHTML = `
    <section class="detail-section">
      <h3>${t("whoFor")}</h3>
      <div class="detail-metrics">
        <span class="badge info">${matchedMember.name}</span>
        <span class="badge">${matchedMember.occupation_or_status}</span>
        <span class="badge">${matchedMember.special_tags.join(", ")}</span>
      </div>
      <p class="detail-copy">${scheme.summary}</p>
    </section>
    <section class="detail-section">
      <h3>${t("benefitTitle")}</h3>
      <div class="detail-metrics">
        <span class="badge accent">${scheme.benefit_summary}</span>
        <span class="badge">${getSubmissionPathShortLabel(scheme.application_mode)}</span>
        <span class="badge">${scheme.is_new ? t("newlyTracked") : tr("launchDate", { date: formatDate(scheme.launch_date) })}</span>
        ${!eligibility.isEligible ? `<span class="badge">${t("ineligibleTagDetail")}</span>` : ""}
      </div>
      <p class="detail-note">
        ${t("applyMeaning")}
        ${
          scheme.application_mode === "api"
            ? t("applyMeaningApi")
            : scheme.application_mode === "automation"
              ? t("applyMeaningAutomation")
              : t("applyMeaningAssist")
        }
      </p>
    </section>
    <section class="detail-section">
      <h3>${t("eligibilitySectionTitle")}</h3>
      <p class="detail-copy">${t("eligibilityRulesHelp")}</p>
      <div class="detail-metrics">
        <span class="doc-chip ${eligibility.isEligible ? "ready" : "missing"}">
          ${eligibility.isEligible ? t("eligibleForScheme") : t("notEligibleForScheme")}
        </span>
      </div>
      <div class="checklist">
        ${
          eligibility.reasons.length > 0
            ? eligibility.reasons
                .map(
                  (reason) => `
              <div class="check-row">
                <span>${reason}</span>
                <span class="doc-chip missing">${t("needed")}</span>
              </div>
            `,
                )
                .join("")
            : `
              <div class="check-row">
                <span>${t("eligibleForScheme")}</span>
                <span class="doc-chip ready">${t("available")}</span>
              </div>
            `
        }
      </div>
    </section>
    <section class="detail-section">
      <h3>${t("documentsTitleDetail")}</h3>
      <div class="checklist">
        ${scheme.required_documents
          .map((documentType) => {
            const isAvailable = readiness.readyDocuments.includes(documentType);
            return `
              <div class="check-row">
                <span>${canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType)}</span>
                <span class="doc-chip ${isAvailable ? "ready" : "missing"}">
                  ${isAvailable ? t("available") : t("needed")}
                </span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
    <section class="detail-section">
      <h3>${eligibility.isEligible && readiness.isReady ? t("applyReadyTitle") : t("applyMissingTitle")}</h3>
      <p class="detail-copy">
        ${
          !eligibility.isEligible
            ? eligibility.reasons.join(" ")
            : readiness.isReady
            ? t("readyToApplyCopy")
            : tr("missingDocsCopy", { docs: missingDocLabels.join(", "), name: matchedMember.name })
        }
      </p>
      ${
        !eligibility.isEligible && combinedMissingDocuments.length === 0
          ? ""
          : combinedMissingDocuments.length > 0
          ? `
        <div class="missing-actions">
          <button class="ghost-button digilocker-button missing-doc-button" id="fetchAllDigilockerButton" type="button">
            ${DIGILOCKER_INLINE_ICON}
            ${t("fetchAllDigilocker")}
          </button>
          ${combinedMissingDocuments
            .map(
              (documentType) => `
            <div class="missing-action">
              <span>${canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType)}</span>
              <div class="missing-button-stack">
                <button class="ghost-button upload-missing-button missing-doc-button" data-document-type="${documentType}" type="button">
                  ${t("uploadManually")}
                </button>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      `
          : ""
      }
      <div class="detail-actions">
        <button class="primary-button" id="applyButton" ${eligibility.isEligible && readiness.isReady && consentVerified ? "" : "disabled"}>
          ${t("applyNow")}
        </button>
        <button class="ghost-button" id="consentButton">${t("recordVoiceConsent")}</button>
      </div>
      <div class="consent-row">
        <span class="doc-chip ${consentVerified ? "ready" : "pending"}">
          ${consentVerified ? t("voiceConsentVerified") : t("voiceConsentNeeded")}
        </span>
      </div>
      <p class="detail-copy">${t("applyActivatesAfterConsent")}</p>
      ${
        latestAttempt
          ? `<p class="detail-copy">${tr("latestStatus", { status: latestAttempt.status, path: getSubmissionPathShortLabel(latestAttempt.submission_path) })}</p>`
          : ""
      }
    </section>
    ${handoffBlock}
  `;

  const applyButton = document.querySelector("#applyButton");
  const consentButton = document.querySelector("#consentButton");
  const uploadButtons = document.querySelectorAll(".upload-missing-button");
  const fetchAllDigilockerButton = document.querySelector("#fetchAllDigilockerButton");

  consentButton?.addEventListener("click", () => {
    openConsentModal();
  });

  fetchAllDigilockerButton?.addEventListener("click", () => {
    const labels = combinedMissingDocuments.map(
      (documentType) => canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType),
    );
    addMessage(
      "digilocker",
      `Bulk DigiLocker fetch requested for ${scheme.title}`,
      `YojanaSaathi would try fetching these documents together from DigiLocker: ${labels.join(", ")}. Any document still unavailable can be uploaded manually.`,
    );
    addTimeline(
      "digilocker",
      "DigiLocker bulk fetch requested",
      `${matchedMember.name}'s scheme flow requested all missing DigiLocker-eligible documents together before upload fallback.`,
    );
    renderMessages();
    renderTimeline();
  });

  for (const button of uploadButtons) {
    button.addEventListener("click", () => {
      state.pendingDocumentType = button.getAttribute("data-document-type");
      dom.documentUpload.click();
    });
  }

  applyButton?.addEventListener("click", () => {
    if (!eligibility.isEligible) {
      addMessage(
        "eligibility",
        `${scheme.title} is ineligible for this household`,
        eligibility.reasons.join(" "),
      );
      render();
      return;
    }

    if (!hasVerifiedConsent(scheme.id, matchedMember.id)) {
      addMessage(
        "missing_consent",
        `Consent still required for ${scheme.title}`,
        "Please complete and verify the voice recording before applying.",
      );
      addTimeline("consent", "Consent required", `${scheme.title} was blocked until consent is confirmed.`);
      render();
      return;
    }

    const attempt = {
      id: createId(),
      scheme_id: scheme.id,
      member_id: matchedMember.id,
      submission_path: scheme.application_mode,
      status:
        scheme.application_mode === "api"
          ? "Applied successfully"
          : scheme.application_mode === "automation"
            ? "Applied successfully"
            : "Sent for assisted application",
      consent_timestamp: nowLabel(),
      missing_documents: readiness.missingDocuments,
      handoff_details:
        scheme.application_mode === "assisted_handoff" ? scheme.application_link_or_contact : null,
    };

    state.applicationAttempts.push(attempt);
    addTimeline(
      "application",
      `${attempt.status} for ${scheme.title}`,
      `${matchedMember.name} is proceeding through ${getSubmissionPathLabel(scheme.application_mode)}.`,
    );

    if (scheme.application_mode === "assisted_handoff") {
      addMessage(
        "assisted_handoff",
        `${scheme.title} sent for assisted application`,
        `Official support: ${scheme.application_link_or_contact}. The scheme is now under Applied for ${matchedMember.name}.`,
      );
    } else {
      addMessage(
        "application",
        `${scheme.title} applied successfully`,
        `${matchedMember.name}'s application has moved to the Applied panel.`,
      );
    }

    showSuccessToast(scheme.title);
    persist();
    render();
  });
}

function renderDocuments() {
  if (state.documents.length === 0) {
    dom.documentVault.innerHTML =
      `<div class="empty-block">${t("noDocumentsVault")}</div>`;
    return;
  }

  dom.documentVault.innerHTML = state.documents
    .map((documentRecord) => {
      const owner = documentRecord.owner_member_id ? getMember(documentRecord.owner_member_id)?.name : t("householdOwner");
      return `
        <article class="vault-item">
          <div class="vault-meta">
            <strong>${canonicalDocumentLabels[documentRecord.normalized_type] ?? documentRecord.display_name}</strong>
            <span class="muted">${documentRecord.source} • ${owner}</span>
          </div>
          <span class="doc-chip ${
            documentRecord.status === "verified"
              ? "ready"
              : documentRecord.status === "expired"
                ? "missing"
                : "pending"
          }">
            ${documentRecord.status}
          </span>
        </article>
      `;
    })
    .join("");
}

function renderMessages() {
  dom.messageCenter.innerHTML = state.messages
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="activity-item">
          <div class="activity-meta">
            <strong>${item.title}</strong>
            <span class="muted">${item.detail}</span>
            <span class="muted">${item.time}</span>
          </div>
          <span class="badge">${prettifyLabel(item.type)}</span>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  dom.activityFeed.innerHTML = state.timeline
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="activity-item">
          <div class="activity-meta">
            <strong>${item.title}</strong>
            <span class="muted">${item.detail}</span>
            <span class="muted">${item.time}</span>
          </div>
          <span class="badge">${prettifyLabel(item.type)}</span>
        </article>
      `,
    )
    .join("");
}

function refreshInbox() {
  const selectedSchemes = getSchemesForSelectedMember();
  const selectedMember = getMember(state.selectedMemberId);
  const newSchemeCount = selectedSchemes.filter(({ scheme, matchedMember }) => !hasApplied(scheme.id, matchedMember.id)).length;
  const readyCount = selectedSchemes.filter(({ scheme, matchedMember, readiness }) => !hasApplied(scheme.id, matchedMember.id) && readiness.isReady).length;
  addMessage(
    "inbox_refresh",
    "Inbox refreshed for YojanaSaathi",
    `${selectedMember.name} now has ${newSchemeCount} not-yet-applied schemes and ${readyCount} ready-to-apply schemes.`,
  );
  render();
}

function addUploadedDocument(file) {
  const normalizedType = state.pendingDocumentType ?? normalizeDocumentName(file.name);
  const selectedMemberId = state.selectedMemberId ?? null;

  state.documents.push({
    id: createId(),
    normalized_type: normalizedType ?? `unmapped_${file.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`,
    display_name: file.name,
    source: "Local upload",
    status: normalizedType ? "uploaded" : "expired",
    owner_member_id: normalizedType ? selectedMemberId : null,
  });

  if (normalizedType) {
    addMessage(
      "document",
      `${file.name} mapped to ${canonicalDocumentLabels[normalizedType]}`,
      `The document was attached to ${getMember(selectedMemberId)?.name ?? "the household"} for readiness checks after the DigiLocker-preferred step.`,
    );
    addTimeline(
      "document",
      `${canonicalDocumentLabels[normalizedType]} uploaded`,
      `${file.name} is now available for the selected member or household.`,
    );
  } else {
    addMessage(
      "document",
      `${file.name} could not be auto-mapped`,
      "The file is stored, but it is marked expired/unmapped until a canonical document type is assigned in a future enhancement.",
    );
    addTimeline(
      "document",
      "Unmapped document uploaded",
      `${file.name} needs manual classification in a future version.`,
    );
  }

  state.pendingDocumentType = null;
}

function handleUploads(event) {
  const files = Array.from(event.target.files ?? []);
  if (files.length === 0) {
    return;
  }

  for (const file of files) {
    addUploadedDocument(file);
  }

  persist();
  render();
}

function openConsentModal() {
  dom.consentModal.classList.remove("hidden");
  dom.consentModal.setAttribute("aria-hidden", "false");
  resetRecorderUi();
}

function closeConsentModal() {
  dom.consentModal.classList.add("hidden");
  dom.consentModal.setAttribute("aria-hidden", "true");
  stopRecorderTracks();
  resetRecorderUi();
}

function resetRecorderUi() {
  state.recorder.chunks = [];
  state.recorder.startedAt = null;
  state.recorder.durationMs = 0;
  dom.recorderStateLabel.textContent = t("recorderIdle");
  dom.recorderDurationLabel.textContent = "0 sec";
  dom.recorderHelpText.textContent = t("consentHelpDefault");
  dom.startRecordingButton.disabled = false;
  dom.stopRecordingButton.disabled = true;
  dom.verifyRecordingButton.disabled = true;
  dom.consentPlayback.classList.add("hidden");
  dom.consentPlayback.removeAttribute("src");
}

function stopRecorderTracks() {
  if (state.recorder.stream) {
    for (const track of state.recorder.stream.getTracks()) {
      track.stop();
    }
  }
  state.recorder.stream = null;
  state.recorder.mediaRecorder = null;
}

async function startVoiceRecording() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "रिकॉर्डर उपलब्ध नहीं" : "Recorder unavailable";
    dom.recorderHelpText.textContent =
      state.currentLanguage === "hi"
        ? "इस ब्राउज़र में live microphone recording उपलब्ध नहीं है। कृपया consent audio file अपलोड करें।"
        : "Live microphone recording is not available in this browser. Please upload a consent audio file instead.";
    addMessage(
      "consent",
      "Voice recorder is not supported in this browser",
      "Please use a browser with microphone recording support to verify consent.",
    );
    renderMessages();
    return;
  }

  try {
    if (!window.isSecureContext) {
      dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "सुरक्षित संदर्भ आवश्यक" : "Secure context required";
      dom.recorderHelpText.textContent =
        state.currentLanguage === "hi"
          ? "यह ब्राउज़र इस URL पर microphone recording ब्लॉक करता है। कृपया consent audio file अपलोड करें, या localhost/https का उपयोग करें।"
          : "This browser blocks microphone recording on this URL. Please upload a consent audio file instead, or use localhost/https.";
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    state.recorder.stream = stream;
    state.recorder.mediaRecorder = recorder;
    state.recorder.chunks = [];
    state.recorder.startedAt = Date.now();

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        state.recorder.chunks.push(event.data);
      }
    });

    recorder.addEventListener("stop", () => {
      state.recorder.durationMs = Math.max(Date.now() - state.recorder.startedAt, 0);
      dom.recorderDurationLabel.textContent = `${Math.round(state.recorder.durationMs / 1000)} sec`;
      dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "रिकॉर्डिंग कैप्चर हुई" : "Recording captured";
      dom.verifyRecordingButton.disabled = state.recorder.durationMs < 3000;

      if (state.recorder.chunks.length > 0) {
        const audioBlob = new Blob(state.recorder.chunks, { type: recorder.mimeType || "audio/webm" });
        dom.consentPlayback.src = URL.createObjectURL(audioBlob);
        dom.consentPlayback.classList.remove("hidden");
      }

      stopRecorderTracks();
    });

    recorder.start();
    dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "रिकॉर्डिंग जारी है" : "Recording in progress";
    dom.startRecordingButton.disabled = true;
    dom.stopRecordingButton.disabled = false;
  } catch {
    dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "माइक्रोफोन ब्लॉक है" : "Microphone blocked";
    dom.recorderHelpText.textContent =
      state.currentLanguage === "hi"
        ? "यहाँ microphone access ब्लॉक था। कृपया microphone अनुमति दें या consent audio file अपलोड करें।"
        : "Microphone access was blocked here. Please allow microphone access or upload a consent audio file instead.";
    addMessage(
      "consent",
      "Microphone permission was not granted",
      "Please allow microphone access to record and verify spoken consent.",
    );
    renderMessages();
  }
}

function stopVoiceRecording() {
  if (state.recorder.mediaRecorder && state.recorder.mediaRecorder.state !== "inactive") {
    state.recorder.mediaRecorder.stop();
    dom.stopRecordingButton.disabled = true;
    dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "रिकॉर्डिंग प्रोसेस हो रही है" : "Processing recording";
  }
}

function handleConsentAudioUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  dom.recorderStateLabel.textContent = state.currentLanguage === "hi" ? "ऑडियो फ़ाइल अपलोड हुई" : "Audio file uploaded";
  dom.recorderDurationLabel.textContent = "Ready";
  dom.recorderHelpText.textContent =
    state.currentLanguage === "hi"
      ? "Consent audio file अपलोड हो गई है। अब Apply खोलने के लिए Verify recording दबाएँ।"
      : "Consent audio file uploaded. You can now press Verify recording to unlock Apply.";
  dom.verifyRecordingButton.disabled = false;
  dom.consentPlayback.src = URL.createObjectURL(file);
  dom.consentPlayback.classList.remove("hidden");
}

function verifyVoiceConsent() {
  const scheme = getSelectedScheme();
  const matchedMember = getPrimaryMatch(scheme);

  state.consentVerifications[getConsentKey(scheme.id, matchedMember.id)] = {
    verifiedAt: nowLabel(),
    durationMs: state.recorder.durationMs,
  };

  addMessage(
    "consent",
    `Voice consent verified for ${scheme.title}`,
    `${matchedMember.name} completed a verified voice consent recording.`,
  );
  addTimeline(
    "consent",
    "Voice consent verified",
    `${matchedMember.name}'s audio consent unlocked Apply for ${scheme.title}.`,
  );

  persist();
  closeConsentModal();
  render();
}

function showSuccessToast(schemeTitle) {
  dom.successToastText.textContent =
    state.currentLanguage === "hi"
      ? `${schemeTitle} अब Applied पैनल में चला गया है।`
      : `${schemeTitle} has moved to the Applied panel.`;
  dom.successToast.classList.remove("hidden");
  window.setTimeout(() => {
    dom.successToast.classList.add("hidden");
  }, 2600);
}

function logoutSession() {
  closeConsentModal();
  const preservedLanguage = state.currentLanguage;
  state.accountMenuOpen = false;
  state.auth = {
    ...defaultAuthState,
    language: preservedLanguage,
  };
  state.digilockerLinked = false;
  persist();
  render();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (!state.accountMenuOpen) {
      return;
    }
    if (dom.heroProfileCard?.contains(event.target)) {
      return;
    }
    state.accountMenuOpen = false;
    render();
  });
  if (dom.languageSwitcher) {
    dom.languageSwitcher.addEventListener("change", (event) => {
      state.currentLanguage = event.target.value;
      state.auth.language = state.currentLanguage;
      render();
    });
  }
  dom.refreshInboxButton.addEventListener("click", refreshInbox);
  dom.documentUpload.addEventListener("change", handleUploads);
  dom.consentAudioUpload.addEventListener("change", handleConsentAudioUpload);
  dom.closeConsentModal.addEventListener("click", closeConsentModal);
  dom.startRecordingButton.addEventListener("click", startVoiceRecording);
  dom.stopRecordingButton.addEventListener("click", stopVoiceRecording);
  dom.verifyRecordingButton.addEventListener("click", verifyVoiceConsent);
}

function render() {
  applyStaticTranslations();
  renderAuth();
  renderHousehold();
  renderSchemes();
  renderSchemeDetail();
  renderDocuments();
  renderMessages();
  renderTimeline();
  persist();
}

bindEvents();
render();
