const STORAGE_KEYS = {
  documents: "yojanasaathi.documents",
  timeline: "yojanasaathi.timeline",
  applications: "yojanasaathi.applications",
  messages: "yojanasaathi.messages",
  consent: "yojanasaathi.consent",
  inForce: "yojanasaathi.inforce",
};

const householdProfile = {
  id: "household-singh",
  household_name: "Singh Household",
  location: "Nalanda, Bihar",
  income_band: "Low-income household",
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
  income_certificate: "Income Certificate",
  bank_passbook: "Bank Passbook",
  land_record: "Land Record",
  student_enrollment_proof: "Student Enrollment Proof",
  pregnancy_maternal_health_card: "Pregnancy or Maternal Health Card",
  caste_certificate: "Caste Certificate",
  disability_certificate: "Disability Certificate",
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
    required_documents: ["aadhaar", "student_enrollment_proof", "bank_passbook"],
    application_mode: "assisted_handoff",
    application_link_or_contact: "District Education Office, Nalanda helpline 06112-220118",
    is_new: false,
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

const dom = {
  householdName: document.querySelector("#householdName"),
  incomeBandLabel: document.querySelector("#incomeBandLabel"),
  householdSummary: document.querySelector("#householdSummary"),
  selectionSummary: document.querySelector("#selectionSummary"),
  memberList: document.querySelector("#memberList"),
  newSchemeList: document.querySelector("#newSchemeList"),
  appliedSchemeList: document.querySelector("#appliedSchemeList"),
  inForceSchemeList: document.querySelector("#inForceSchemeList"),
  schemeDetail: document.querySelector("#schemeDetail"),
  detailTitle: document.querySelector("#detailTitle"),
  detailCategory: document.querySelector("#detailCategory"),
  messageCenter: document.querySelector("#messageCenter"),
  documentVault: document.querySelector("#documentVault"),
  activityFeed: document.querySelector("#activityFeed"),
  newSchemeCount: document.querySelector("#newSchemeCount"),
  readySchemeCount: document.querySelector("#readySchemeCount"),
  seedDocsButton: document.querySelector("#seedDocsButton"),
  refreshInboxButton: document.querySelector("#refreshInboxButton"),
  documentUpload: document.querySelector("#documentUpload"),
  schemeCardTemplate: document.querySelector("#schemeCardTemplate"),
  consentModal: document.querySelector("#consentModal"),
  closeConsentModal: document.querySelector("#closeConsentModal"),
  startRecordingButton: document.querySelector("#startRecordingButton"),
  stopRecordingButton: document.querySelector("#stopRecordingButton"),
  verifyRecordingButton: document.querySelector("#verifyRecordingButton"),
  recorderStateLabel: document.querySelector("#recorderStateLabel"),
  recorderDurationLabel: document.querySelector("#recorderDurationLabel"),
  recorderHelpText: document.querySelector("#recorderHelpText"),
  consentAudioUpload: document.querySelector("#consentAudioUpload"),
  consentPlayback: document.querySelector("#consentPlayback"),
  successToast: document.querySelector("#successToast"),
  successToastText: document.querySelector("#successToastText"),
};

const state = {
  selectedSchemeId: schemes[0].id,
  selectedMemberId: getPrimaryMatch(schemes[0]).id,
  documents: loadJson(STORAGE_KEYS.documents, []),
  messages: loadJson(STORAGE_KEYS.messages, defaultMessages),
  timeline: loadJson(STORAGE_KEYS.timeline, defaultTimeline),
  applicationAttempts: loadJson(STORAGE_KEYS.applications, []),
  consentVerifications: loadJson(STORAGE_KEYS.consent, {}),
  inForceBenefits: loadJson(STORAGE_KEYS.inForce, defaultInForceBenefits),
  recorder: {
    stream: null,
    mediaRecorder: null,
    chunks: [],
    startedAt: null,
    durationMs: 0,
  },
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
  localStorage.setItem(STORAGE_KEYS.documents, JSON.stringify(state.documents));
  localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(state.messages));
  localStorage.setItem(STORAGE_KEYS.timeline, JSON.stringify(state.timeline));
  localStorage.setItem(STORAGE_KEYS.applications, JSON.stringify(state.applicationAttempts));
  localStorage.setItem(STORAGE_KEYS.consent, JSON.stringify(state.consentVerifications));
  localStorage.setItem(STORAGE_KEYS.inForce, JSON.stringify(state.inForceBenefits));
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

function getSubmissionPathLabel(mode) {
  const labels = {
    api: "Auto-submit through official API",
    automation: "Auto-fill through portal automation",
    assisted_handoff: "Show helper contact",
  };
  return labels[mode] ?? mode;
}

function getSubmissionPathShortLabel(mode) {
  const labels = {
    api: "API submit",
    automation: "Portal automation",
    assisted_handoff: "Helper contact",
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

function renderHousehold() {
  const selectedMember = getMember(state.selectedMemberId);
  dom.householdName.textContent = householdProfile.household_name;
  dom.incomeBandLabel.textContent = householdProfile.income_band;
  dom.householdSummary.textContent =
    `${householdProfile.location} household with ${householdProfile.members.length} family members. Start by selecting one person below.`;

  dom.selectionSummary.innerHTML = `
    <span class="badge info">Selected person: ${selectedMember.name}</span>
    <span class="badge">Role: ${selectedMember.occupation_or_status}</span>
    <span class="badge accent">Tip: Record voice consent before applying</span>
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
            <span class="badge info">${relatedSchemes} schemes</span>
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
}

function renderSchemeCard({ scheme, matchedMember, readiness, extraMeta }) {
  const fragment = dom.schemeCardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".scheme-card");

  fragment.querySelector(".scheme-category").textContent = `${scheme.category}`;
  fragment.querySelector(".scheme-name").textContent = scheme.title;
  fragment.querySelector(".scheme-summary").textContent = scheme.summary;
  fragment.querySelector(".scheme-member").textContent = `For ${matchedMember.name}`;
  fragment.querySelector(".scheme-path").textContent = extraMeta ?? getSubmissionPathShortLabel(scheme.application_mode);
  fragment.querySelector(".scheme-launch").textContent = scheme.is_new
    ? "New in YojanaSaathi"
    : `Launched ${formatDate(scheme.launch_date)}`;
  fragment.querySelector(".scheme-status").textContent = scheme.is_new ? "New" : "Tracked";

  const readinessBadge = document.createElement("span");
  readinessBadge.className = `doc-chip ${readiness.isReady ? "ready" : "pending"}`;
  readinessBadge.textContent = readiness.isReady ? "Documents ready" : `${readiness.missingDocuments.length} missing`;
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

  dom.newSchemeCount.textContent = `${newSchemes.filter(({ scheme }) => scheme.is_new).length} new`;
  dom.readySchemeCount.textContent = `${newSchemes.filter(({ readiness }) => readiness.isReady).length} ready`;

  if (newSchemes.length === 0) {
    dom.newSchemeList.innerHTML = `<div class="empty-block">No new schemes are waiting for ${selectedMember.name}. Applied items move to the next panel below.</div>`;
  }

  for (const item of newSchemes) {
    dom.newSchemeList.append(renderSchemeCard(item));
  }

  if (appliedAttempts.length === 0) {
    dom.appliedSchemeList.innerHTML = `<div class="empty-block">No schemes have been applied for yet for ${selectedMember.name}.</div>`;
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
    dom.inForceSchemeList.innerHTML = `<div class="empty-block">No benefits are currently marked active for ${selectedMember.name}.</div>`;
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
  const latestAttempt = [...state.applicationAttempts]
    .reverse()
    .find((attempt) => attempt.scheme_id === scheme.id && attempt.member_id === matchedMember.id);

  dom.detailTitle.textContent = scheme.title;
  dom.detailCategory.textContent = scheme.category;
  dom.schemeDetail.classList.remove("empty-state");

  const missingDocLabels = readiness.missingDocuments.map((type) => canonicalDocumentLabels[type] ?? prettifyLabel(type));
  const handoffBlock =
    scheme.application_mode === "assisted_handoff"
      ? `
        <section class="detail-section">
          <h3>Assisted handoff</h3>
          <div class="contact-list">
            <div class="contact-row">
              <span>Official support path</span>
              <span class="badge">${scheme.application_link_or_contact}</span>
            </div>
            <div class="contact-row">
              <span>Handoff packet</span>
              <span class="muted">${matchedMember.name} • ${readiness.isReady ? "Ready for assisted application" : `${missingDocLabels.join(", ")} still needed`}</span>
            </div>
          </div>
        </section>
      `
      : "";

  dom.schemeDetail.innerHTML = `
    <section class="detail-section">
      <h3>Who is this scheme for?</h3>
      <div class="detail-metrics">
        <span class="badge info">${matchedMember.name}</span>
        <span class="badge">${matchedMember.occupation_or_status}</span>
        <span class="badge">${matchedMember.special_tags.join(", ")}</span>
      </div>
      <p class="detail-copy">${scheme.summary}</p>
    </section>
    <section class="detail-section">
      <h3>What does the user get?</h3>
      <div class="detail-metrics">
        <span class="badge accent">${scheme.benefit_summary}</span>
        <span class="badge">${getSubmissionPathShortLabel(scheme.application_mode)}</span>
        <span class="badge">${scheme.is_new ? "Newly tracked" : `Launch date ${formatDate(scheme.launch_date)}`}</span>
      </div>
      <p class="detail-note">
        Apply meaning:
        ${
          scheme.application_mode === "api"
            ? "YojanaSaathi will mock-submit this through an official API path."
            : scheme.application_mode === "automation"
              ? "YojanaSaathi will mock-start a portal automation flow."
              : "YojanaSaathi will show the correct office or worker to help complete the application."
        }
      </p>
    </section>
    <section class="detail-section">
      <h3>Do we already have the documents?</h3>
      <div class="checklist">
        ${scheme.required_documents
          .map((documentType) => {
            const isAvailable = readiness.readyDocuments.includes(documentType);
            return `
              <div class="check-row">
                <span>${canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType)}</span>
                <span class="doc-chip ${isAvailable ? "ready" : "missing"}">
                  ${isAvailable ? "Available" : "Needed"}
                </span>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
    <section class="detail-section">
      <h3>${readiness.isReady ? "Can you apply now?" : "What is still missing?"}</h3>
      <p class="detail-copy">
        ${
          readiness.isReady
            ? "Yes. The needed documents are available. Record and verify voice consent, then press Apply."
            : `Before YojanaSaathi can proceed, please furnish ${missingDocLabels.join(", ")} for ${matchedMember.name}.`
        }
      </p>
      ${
        !readiness.isReady
          ? `
        <div class="missing-actions">
          ${readiness.missingDocuments
            .map(
              (documentType) => `
            <div class="missing-action">
              <span>${canonicalDocumentLabels[documentType] ?? prettifyLabel(documentType)}</span>
              <button class="ghost-button upload-missing-button" data-document-type="${documentType}" type="button">
                Upload this document
              </button>
            </div>
          `,
            )
            .join("")}
        </div>
      `
          : ""
      }
      <div class="detail-actions">
        <button class="primary-button" id="applyButton" ${readiness.isReady && consentVerified ? "" : "disabled"}>
          Apply now
        </button>
        <button class="ghost-button" id="consentButton">Record voice consent</button>
      </div>
      <div class="consent-row">
        <span class="doc-chip ${consentVerified ? "ready" : "pending"}">
          ${consentVerified ? "Voice consent verified" : "Voice consent needed"}
        </span>
      </div>
      <p class="detail-copy">The Apply button activates only after the voice recording is verified.</p>
      ${
        latestAttempt
          ? `<p class="detail-copy">Latest status: ${latestAttempt.status} via ${getSubmissionPathShortLabel(latestAttempt.submission_path)}.</p>`
          : ""
      }
    </section>
    ${handoffBlock}
  `;

  const applyButton = document.querySelector("#applyButton");
  const consentButton = document.querySelector("#consentButton");
  const uploadButtons = document.querySelectorAll(".upload-missing-button");

  consentButton?.addEventListener("click", () => {
    openConsentModal();
  });

  for (const button of uploadButtons) {
    button.addEventListener("click", () => {
      state.pendingDocumentType = button.getAttribute("data-document-type");
      dom.documentUpload.click();
    });
  }

  applyButton?.addEventListener("click", () => {
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
      `<div class="empty-block">No documents in the household vault yet. Load the demo vault or upload files to test canonical document matching.</div>`;
    return;
  }

  dom.documentVault.innerHTML = state.documents
    .map((documentRecord) => {
      const owner = documentRecord.owner_member_id ? getMember(documentRecord.owner_member_id)?.name : "Household";
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

function seedDemoDocuments() {
  state.documents = [...demoDocuments];
  addMessage(
    "document",
    "Demo household vault loaded",
    "Canonical documents for Aadhaar, enrollment, land record, income certificate, bank passbook, PAN, and health card are now available.",
  );
  addTimeline(
    "document",
    "Household vault seeded",
    "The readiness engine can now match member-specific and household-level documents.",
  );
  render();
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
      `The document was attached to ${getMember(selectedMemberId)?.name ?? "the household"} for readiness checks.`,
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
  dom.recorderStateLabel.textContent = "Recorder idle";
  dom.recorderDurationLabel.textContent = "0 sec";
  dom.recorderHelpText.textContent =
    "If microphone recording does not start here, upload a short consent audio file instead.";
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
    dom.recorderStateLabel.textContent = "Recorder unavailable";
    dom.recorderHelpText.textContent =
      "Live microphone recording is not available in this browser. Please upload a consent audio file instead.";
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
      dom.recorderStateLabel.textContent = "Secure context required";
      dom.recorderHelpText.textContent =
        "This browser blocks microphone recording on this URL. Please upload a consent audio file instead, or use localhost/https.";
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
      dom.recorderStateLabel.textContent = "Recording captured";
      dom.verifyRecordingButton.disabled = state.recorder.durationMs < 3000;

      if (state.recorder.chunks.length > 0) {
        const audioBlob = new Blob(state.recorder.chunks, { type: recorder.mimeType || "audio/webm" });
        dom.consentPlayback.src = URL.createObjectURL(audioBlob);
        dom.consentPlayback.classList.remove("hidden");
      }

      stopRecorderTracks();
    });

    recorder.start();
    dom.recorderStateLabel.textContent = "Recording in progress";
    dom.startRecordingButton.disabled = true;
    dom.stopRecordingButton.disabled = false;
  } catch {
    dom.recorderStateLabel.textContent = "Microphone blocked";
    dom.recorderHelpText.textContent =
      "Microphone access was blocked here. Please allow microphone access or upload a consent audio file instead.";
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
    dom.recorderStateLabel.textContent = "Processing recording";
  }
}

function handleConsentAudioUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  dom.recorderStateLabel.textContent = "Audio file uploaded";
  dom.recorderDurationLabel.textContent = "Ready";
  dom.recorderHelpText.textContent =
    "Consent audio file uploaded. You can now press Verify recording to unlock Apply.";
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
  dom.successToastText.textContent = `${schemeTitle} has moved to the Applied panel.`;
  dom.successToast.classList.remove("hidden");
  window.setTimeout(() => {
    dom.successToast.classList.add("hidden");
  }, 2600);
}

function bindEvents() {
  dom.seedDocsButton.addEventListener("click", seedDemoDocuments);
  dom.refreshInboxButton.addEventListener("click", refreshInbox);
  dom.documentUpload.addEventListener("change", handleUploads);
  dom.consentAudioUpload.addEventListener("change", handleConsentAudioUpload);
  dom.closeConsentModal.addEventListener("click", closeConsentModal);
  dom.startRecordingButton.addEventListener("click", startVoiceRecording);
  dom.stopRecordingButton.addEventListener("click", stopVoiceRecording);
  dom.verifyRecordingButton.addEventListener("click", verifyVoiceConsent);
}

function render() {
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
