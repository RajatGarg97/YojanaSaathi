"use client";

import { useMemo, useState } from "react";
import { householdProfile, initialActivity, initialDocuments, initialSchemes, languageOptions } from "@/lib/mock-data";
import type {
  ActivityItem,
  CanonicalDocumentType,
  DocumentRecord,
  HouseholdMember,
  LanguageCode,
  SchemeRecord,
  SessionState
} from "@/lib/types";

const englishCopy = {
    productLabel: "Household-first scheme assistant",
    heroTitle: "YojanaSaathi helps families find the right scheme and move from readiness to application.",
    heroBody:
      "Aadhaar mobile login, DigiLocker-first document sourcing, scheme-level eligibility checks, and one place for new, applied, and active benefits.",
    loginEyebrow: "Welcome to YojanaSaathi",
    loginTitle: "Log in with your Aadhaar-linked mobile number.",
    loginBody:
      "Choose your preferred language now. After login, language settings move into your profile menu.",
    mobileLabel: "Aadhaar-linked mobile number",
    languageLabel: "Preferred language",
    sendOtp: "Send OTP",
    otpTitle: "Enter the OTP sent to your mobile.",
    otpHint: "Use demo OTP 482913 for this prototype.",
    otpLabel: "OTP",
    verifyOtp: "Verify OTP",
    onboardingTitle: "Set up the household before checking schemes.",
    onboardingBody:
      "DigiLocker is optional, but linking it now makes document readiness much faster later.",
    linkDigiLocker: "Link DigiLocker",
    skipForNow: "Skip for now",
    continueToApp: "Continue to dashboard",
    schemeBuckets: {
      new: "New schemes",
      applied: "Schemes applied for",
      inForce: "Benefits already active"
    },
    selectedScheme: "Selected scheme",
    selectedMember: "Selected family member",
    documentVault: "Document readiness",
    schemeEligibility: "Eligibility rules",
    schemeDocuments: "Required documents",
    digilockerFetch: "Fetch all available documents from DigiLocker",
    uploadProof: "Upload manually",
    applyNow: "Apply now",
    recordConsent: "Record voice consent",
    consentNeeded: "Voice consent required before applying",
    refreshMessages: "Refresh messages",
    profileMenuLanguage: "Language",
    switchProfile: "Switch profile",
    logout: "Logout",
    messages: "Messages and updates",
    timeline: "Recent activity",
    notLinked: "DigiLocker not linked yet",
    linked: "DigiLocker linked",
    applicationModes: {
      api: "Official API submission",
      automation: "Assisted automation path",
      assisted_handoff: "Officer-assisted handoff"
    }
};

const hindiCopy: typeof englishCopy = {
    productLabel: "परिवार-केंद्रित योजना सहायक",
    heroTitle: "योजना साथी परिवारों को सही योजना ढूंढने और आवेदन तक पहुंचने में मदद करता है।",
    heroBody:
      "आधार मोबाइल लॉगिन, DigiLocker से दस्तावेज़ लाना, योजना-स्तर पर पात्रता जांच, और नई, लागू तथा सक्रिय योजनाएं एक ही जगह।",
    loginEyebrow: "योजना साथी में आपका स्वागत है",
    loginTitle: "अपने आधार-लिंक मोबाइल नंबर से लॉगिन करें।",
    loginBody:
      "अभी अपनी पसंदीदा भाषा चुनें। लॉगिन के बाद भाषा विकल्प प्रोफाइल मेन्यू में मिलेगा।",
    mobileLabel: "आधार-लिंक मोबाइल नंबर",
    languageLabel: "पसंदीदा भाषा",
    sendOtp: "ओटीपी भेजें",
    otpTitle: "मोबाइल पर भेजा गया ओटीपी दर्ज करें।",
    otpHint: "इस प्रोटोटाइप के लिए डेमो ओटीपी 482913 उपयोग करें।",
    otpLabel: "ओटीपी",
    verifyOtp: "ओटीपी सत्यापित करें",
    onboardingTitle: "योजनाएं देखने से पहले परिवार सेट करें।",
    onboardingBody:
      "DigiLocker वैकल्पिक है, लेकिन अभी लिंक करने से आगे दस्तावेज़ तैयार करना आसान होगा।",
    linkDigiLocker: "DigiLocker लिंक करें",
    skipForNow: "अभी छोड़ें",
    continueToApp: "डैशबोर्ड पर जाएं",
    schemeBuckets: {
      new: "नई योजनाएं",
      applied: "जिन योजनाओं के लिए आवेदन किया गया",
      inForce: "सक्रिय लाभ"
    },
    selectedScheme: "चयनित योजना",
    selectedMember: "चयनित परिवार सदस्य",
    documentVault: "दस्तावेज़ तैयारी",
    schemeEligibility: "पात्रता नियम",
    schemeDocuments: "आवश्यक दस्तावेज़",
    digilockerFetch: "DigiLocker से सभी उपलब्ध दस्तावेज़ लाएं",
    uploadProof: "मैन्युअल अपलोड",
    applyNow: "अभी आवेदन करें",
    recordConsent: "आवाज़ सहमति रिकॉर्ड करें",
    consentNeeded: "आवेदन से पहले आवाज़ सहमति आवश्यक है",
    refreshMessages: "संदेश ताज़ा करें",
    profileMenuLanguage: "भाषा",
    switchProfile: "प्रोफाइल बदलें",
    logout: "लॉगआउट",
    messages: "संदेश और अपडेट",
    timeline: "हाल की गतिविधि",
    notLinked: "DigiLocker अभी लिंक नहीं है",
    linked: "DigiLocker लिंक हो चुका है",
    applicationModes: {
      api: "आधिकारिक API आवेदन",
      automation: "सहायक ऑटोमेशन मार्ग",
      assisted_handoff: "अधिकारी-सहायता मार्ग"
    }
};

const copy: Record<LanguageCode, typeof englishCopy> = {
  en: englishCopy,
  hi: hindiCopy,
  mr: englishCopy,
  bn: englishCopy,
  ta: englishCopy
};

function getDocumentLabel(type: CanonicalDocumentType): string {
  const labels: Record<CanonicalDocumentType, string> = {
    aadhaar: "Aadhaar",
    income_certificate: "Income certificate",
    bpl_card: "BPL card",
    obc_certificate: "OBC certificate",
    bank_passbook: "Bank passbook",
    student_enrollment_proof: "Student enrollment proof",
    ration_card: "Ration card",
    health_card: "Health card",
    land_record: "Land record",
    passport_photo: "Passport photo"
  };

  return labels[type];
}

function isDocumentUsable(document?: DocumentRecord) {
  return Boolean(document && (document.status === "uploaded" || document.status === "verified"));
}

function findDocument(documents: DocumentRecord[], type: CanonicalDocumentType, memberId: string) {
  return documents.find((document) => {
    if (document.type !== type) {
      return false;
    }

    return document.ownerMemberId ? document.ownerMemberId === memberId : true;
  });
}

export function YojanaSaathiApp() {
  const [session, setSession] = useState<SessionState>({
    language: "en",
    mobile: "",
    isAuthenticated: false,
    otpVerified: false,
    onboardingComplete: false,
    digilockerLinked: false
  });
  const [otpValue, setOtpValue] = useState("");
  const [selectedMemberId, setSelectedMemberId] = useState(householdProfile.members[0].id);
  const [selectedSchemeId, setSelectedSchemeId] = useState(initialSchemes[0].id);
  const [documents, setDocuments] = useState(initialDocuments);
  const [schemes, setSchemes] = useState(initialSchemes);
  const [activity, setActivity] = useState(initialActivity);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const t = copy[session.language];
  const selectedMember = householdProfile.members.find((member) => member.id === selectedMemberId) ?? householdProfile.members[0];
  const visibleSchemes = useMemo(
    () => schemes.filter((scheme) => scheme.matchedMemberId === selectedMember.id),
    [schemes, selectedMember.id]
  );
  const selectedScheme = visibleSchemes.find((scheme) => scheme.id === selectedSchemeId) ?? visibleSchemes[0];

  const selectedSchemeRequirements = useMemo(() => {
    if (!selectedScheme) {
      return null;
    }

    const missingDocuments = selectedScheme.requiredDocuments.filter((docType) => {
      const document = findDocument(documents, docType, selectedMember.id);
      return !isDocumentUsable(document);
    });

    const unmetEligibility = selectedScheme.eligibilityRequirements.filter((requirement) =>
      !requirement.anyOf.some((docType) => {
        const document = findDocument(documents, docType, selectedMember.id);
        return isDocumentUsable(document);
      })
    );

    return {
      missingDocuments,
      unmetEligibility,
      canApply: missingDocuments.length === 0 && unmetEligibility.length === 0
    };
  }, [documents, selectedMember.id, selectedScheme]);

  const bucketedSchemes = useMemo(
    () => ({
      new: visibleSchemes.filter((scheme) => scheme.bucket === "new"),
      applied: visibleSchemes.filter((scheme) => scheme.bucket === "applied"),
      inForce: visibleSchemes.filter((scheme) => scheme.bucket === "in_force")
    }),
    [visibleSchemes]
  );

  function selectLanguage(language: LanguageCode) {
    setSession((current) => ({ ...current, language }));
  }

  function sendOtp() {
    if (!session.mobile.trim()) {
      return;
    }

    setSession((current) => ({ ...current, isAuthenticated: true }));
  }

  function verifyOtp() {
    if (otpValue !== "482913") {
      return;
    }

    setSession((current) => ({ ...current, otpVerified: true }));
  }

  function completeOnboarding(linked: boolean) {
    setSession((current) => ({
      ...current,
      onboardingComplete: true,
      digilockerLinked: linked
    }));
  }

  function logout() {
    setSession((current) => ({
      language: current.language,
      mobile: "",
      isAuthenticated: false,
      otpVerified: false,
      onboardingComplete: false,
      digilockerLinked: false
    }));
    setOtpValue("");
    setAccountMenuOpen(false);
  }

  function refreshMessages() {
    const newItem: ActivityItem = {
      id: `message-${Date.now()}`,
      kind: "message",
      title: selectedMember.name,
      body: `${selectedMember.name} has ${bucketedSchemes.new.length} new scheme matches and ${selectedSchemeRequirements?.missingDocuments.length ?? 0} missing documents for the selected scheme.`,
      timestamp: "Just now"
    };

    setActivity((current) => [newItem, ...current].slice(0, 6));
  }

  function fetchFromDigiLocker() {
    if (!selectedScheme || !selectedSchemeRequirements) {
      return;
    }

    const imported = selectedSchemeRequirements.missingDocuments.slice(0, 2);

    if (imported.length === 0) {
      return;
    }

    setDocuments((current) => [
      ...current,
      ...imported.map((docType) => ({
        id: `digilocker-${docType}-${Date.now()}`,
        type: docType,
        label: getDocumentLabel(docType),
        status: "verified" as const,
        source: "digilocker" as const,
        ownerMemberId: selectedMember.id
      }))
    ]);
    setActivity((current) => [
      {
        id: `timeline-${Date.now()}`,
        kind: "timeline",
        title: "DigiLocker fetch complete",
        body: `${imported.map(getDocumentLabel).join(", ")} added for ${selectedMember.name}.`,
        timestamp: "Just now"
      },
      ...current
    ]);
  }

  function uploadDocument(docType: CanonicalDocumentType) {
    setDocuments((current) => [
      ...current,
      {
        id: `upload-${docType}-${Date.now()}`,
        type: docType,
        label: getDocumentLabel(docType),
        status: "uploaded",
        source: "manual",
        ownerMemberId: selectedMember.id
      }
    ]);
  }

  function applyForSelectedScheme() {
    if (!selectedScheme || !selectedSchemeRequirements?.canApply) {
      return;
    }

    setSchemes((current) =>
      current.map((scheme) =>
        scheme.id === selectedScheme.id
          ? {
              ...scheme,
              bucket: "applied",
              statusLabel:
                scheme.applicationMode === "api"
                  ? "Submitted through the official application lane"
                  : scheme.applicationMode === "automation"
                    ? "Automation started and beneficiary follow-up scheduled"
                    : "Officer handoff prepared for local follow-up"
            }
          : scheme
      )
    );
    setActivity((current) => [
      {
        id: `applied-${Date.now()}`,
        kind: "timeline",
        title: `${selectedScheme.title} moved to applied`,
        body: `${selectedMember.name}'s application now sits in the applied bucket.`,
        timestamp: "Just now"
      },
      ...current
    ]);
  }

  function renderAuthCard() {
    if (!session.isAuthenticated) {
      return (
        <section className="auth-card">
          <p className="eyebrow">{t.loginEyebrow}</p>
          <h1>{t.loginTitle}</h1>
          <p className="muted">{t.loginBody}</p>

          <label className="field">
            <span>{t.mobileLabel}</span>
            <input
              value={session.mobile}
              onChange={(event) =>
                setSession((current) => ({ ...current, mobile: event.target.value.replace(/[^\d]/g, "").slice(0, 10) }))
              }
              placeholder="9873294856"
            />
          </label>

          <label className="field">
            <span>{t.languageLabel}</span>
            <select value={session.language} onChange={(event) => selectLanguage(event.target.value as LanguageCode)}>
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button className="primary-button" onClick={sendOtp}>
            {t.sendOtp}
          </button>
        </section>
      );
    }

    if (!session.otpVerified) {
      return (
        <section className="auth-card">
          <p className="eyebrow">{t.loginEyebrow}</p>
          <h1>{t.otpTitle}</h1>
          <p className="muted">{t.otpHint}</p>

          <label className="field">
            <span>{t.otpLabel}</span>
            <input value={otpValue} onChange={(event) => setOtpValue(event.target.value)} placeholder="482913" />
          </label>

          <button className="primary-button" onClick={verifyOtp}>
            {t.verifyOtp}
          </button>
        </section>
      );
    }

    if (!session.onboardingComplete) {
      return (
        <section className="auth-card">
          <p className="eyebrow">{t.loginEyebrow}</p>
          <h1>{t.onboardingTitle}</h1>
          <p className="muted">{t.onboardingBody}</p>

          <div className="digilocker-card">
            <div className="digilocker-badge" aria-hidden="true">
              <span className="badge-doc" />
              <span className="badge-lock" />
            </div>
            <div>
              <strong>{session.digilockerLinked ? t.linked : t.notLinked}</strong>
              <p className="muted">Link once to fetch multiple eligibility and application documents together.</p>
            </div>
          </div>

          <div className="inline-actions">
            <button className="primary-button" onClick={() => setSession((current) => ({ ...current, digilockerLinked: true }))}>
              {t.linkDigiLocker}
            </button>
            <button className="secondary-button" onClick={() => setSession((current) => ({ ...current, digilockerLinked: false }))}>
              {t.skipForNow}
            </button>
          </div>

          <button className="primary-button" onClick={() => completeOnboarding(session.digilockerLinked)}>
            {t.continueToApp}
          </button>
        </section>
      );
    }

    return null;
  }

  if (!session.onboardingComplete) {
    return (
      <main className="shell auth-shell">
        <div className="auth-intro">
          <p className="eyebrow">{t.productLabel}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
        {renderAuthCard()}
      </main>
    );
  }

  return (
    <main className="shell app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{t.productLabel}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>

        <div className="hero-utilities">
          <div className="account-anchor">
            <button className="avatar-button" onClick={() => setAccountMenuOpen((current) => !current)} aria-label="Open profile menu">
              <span>{selectedMember.profilePhotoLabel}</span>
            </button>

            {accountMenuOpen ? (
              <div className="account-popover">
                <div className="account-header">
                  <div className="avatar-chip">
                    <span>{selectedMember.profilePhotoLabel}</span>
                  </div>
                  <div>
                    <strong>{selectedMember.name}</strong>
                    <p>{session.digilockerLinked ? "Aadhaar photo via DigiLocker" : "Profile image will sync after DigiLocker link"}</p>
                  </div>
                </div>

                <label className="field compact-field">
                  <span>{t.profileMenuLanguage}</span>
                  <select value={session.language} onChange={(event) => selectLanguage(event.target.value as LanguageCode)}>
                    {languageOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="profile-switch-list">
                  <span className="menu-label">{t.switchProfile}</span>
                  {householdProfile.members.map((member) => (
                    <button
                      key={member.id}
                      className={member.id === selectedMember.id ? "profile-option active" : "profile-option"}
                      onClick={() => {
                        setSelectedMemberId(member.id);
                        const firstScheme = schemes.find((scheme) => scheme.matchedMemberId === member.id);
                        if (firstScheme) {
                          setSelectedSchemeId(firstScheme.id);
                        }
                        setAccountMenuOpen(false);
                      }}
                    >
                      {member.name}
                    </button>
                  ))}
                </div>

                <button className="secondary-button" onClick={logout}>
                  {t.logout}
                </button>
              </div>
            ) : null}
          </div>

          <button className="secondary-button utility-button" onClick={refreshMessages}>
            {t.refreshMessages}
          </button>
        </div>
      </section>

      <section className="overview-grid">
        <article className="surface focus-card">
          <p className="section-label">{t.selectedMember}</p>
          <h2>{selectedMember.name}</h2>
          <p className="muted">
            {selectedMember.relationship} · {selectedMember.occupation}
          </p>
          <div className="tag-row">
            {selectedMember.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className="muted">{householdProfile.location}</p>
        </article>

        <article className="surface">
          <p className="section-label">{t.messages}</p>
          <ul className="message-list">
            {activity
              .filter((item) => item.kind === "message")
              .slice(0, 3)
              .map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </li>
              ))}
          </ul>
        </article>
      </section>

      <section className="dashboard-grid">
        <div className="scheme-column-group">
          <SchemeColumn
            title={t.schemeBuckets.new}
            schemes={bucketedSchemes.new}
            selectedSchemeId={selectedScheme?.id}
            onSelect={setSelectedSchemeId}
          />
          <SchemeColumn
            title={t.schemeBuckets.applied}
            schemes={bucketedSchemes.applied}
            selectedSchemeId={selectedScheme?.id}
            onSelect={setSelectedSchemeId}
          />
          <SchemeColumn
            title={t.schemeBuckets.inForce}
            schemes={bucketedSchemes.inForce}
            selectedSchemeId={selectedScheme?.id}
            onSelect={setSelectedSchemeId}
          />
        </div>

        {selectedScheme ? (
          <aside className="surface detail-panel">
            <p className="section-label">{t.selectedScheme}</p>
            <h2>{selectedScheme.title}</h2>
            <p className="muted">{selectedScheme.summary}</p>

            <div className="detail-stack">
              <section className="detail-block accent-block">
                <span className="detail-title">{t.schemeEligibility}</span>
                {selectedScheme.eligibilityRequirements.length === 0 ? (
                  <p>No extra eligibility proof is required for this scheme.</p>
                ) : (
                  <ul className="detail-list">
                    {selectedScheme.eligibilityRequirements.map((requirement) => {
                      const met = requirement.anyOf.some((docType) => isDocumentUsable(findDocument(documents, docType, selectedMember.id)));

                      return (
                        <li key={requirement.label}>
                          <span>{requirement.label}</span>
                          <strong className={met ? "status-good" : "status-warn"}>{met ? "Ready" : "Needs proof"}</strong>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>

              <section className="detail-block">
                <span className="detail-title">{t.schemeDocuments}</span>
                <ul className="detail-list">
                  {selectedScheme.requiredDocuments.map((docType) => {
                    const document = findDocument(documents, docType, selectedMember.id);

                    return (
                      <li key={docType}>
                        <span>{getDocumentLabel(docType)}</span>
                        <strong className={isDocumentUsable(document) ? "status-good" : "status-warn"}>
                          {isDocumentUsable(document) ? "Available" : "Missing"}
                        </strong>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section className="detail-block">
                <div className="detail-header-row">
                  <span className="detail-title">{t.documentVault}</span>
                  <span className="mode-pill">{t.applicationModes[selectedScheme.applicationMode]}</span>
                </div>
                <button className="digilocker-button" onClick={fetchFromDigiLocker} disabled={!session.digilockerLinked}>
                  <span className="digilocker-icon" aria-hidden="true">
                    <span className="badge-doc" />
                    <span className="badge-lock" />
                  </span>
                  {t.digilockerFetch}
                </button>
                <div className="upload-grid">
                  {selectedSchemeRequirements?.missingDocuments.map((docType) => (
                    <button key={docType} className="secondary-button" onClick={() => uploadDocument(docType)}>
                      {t.uploadProof}: {getDocumentLabel(docType)}
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="action-footer">
              <button className="primary-button" disabled={!selectedSchemeRequirements?.canApply} onClick={applyForSelectedScheme}>
                {t.applyNow}
              </button>
              <button className="secondary-button">{t.recordConsent}</button>
            </div>
            {!selectedSchemeRequirements?.canApply ? <p className="warning-pill">{t.consentNeeded}</p> : null}
            {selectedScheme.statusLabel ? <p className="muted">{selectedScheme.statusLabel}</p> : null}
          </aside>
        ) : null}
      </section>

      <section className="overview-grid">
        <article className="surface">
          <p className="section-label">{t.documentVault}</p>
          <ul className="document-list">
            {documents.slice(0, 6).map((document) => (
              <li key={document.id}>
                <span>{document.label}</span>
                <strong className={document.status === "verified" ? "status-good" : "status-neutral"}>{document.status}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="surface">
          <p className="section-label">{t.timeline}</p>
          <ul className="message-list">
            {activity
              .filter((item) => item.kind === "timeline")
              .slice(0, 3)
              .map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </li>
              ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

function SchemeColumn({
  title,
  schemes,
  selectedSchemeId,
  onSelect
}: {
  title: string;
  schemes: SchemeRecord[];
  selectedSchemeId?: string;
  onSelect: (schemeId: string) => void;
}) {
  return (
    <section className="surface scheme-column">
      <div className="column-header">
        <p className="section-label">{title}</p>
        <span className="count-pill">{schemes.length}</span>
      </div>

      <div className="scheme-stack">
        {schemes.length === 0 ? <p className="muted">No schemes in this bucket for the selected person yet.</p> : null}
        {schemes.map((scheme) => (
          <button
            key={scheme.id}
            className={scheme.id === selectedSchemeId ? "scheme-card active" : "scheme-card"}
            onClick={() => onSelect(scheme.id)}
          >
            <div className="scheme-card-top">
              <strong>{scheme.title}</strong>
              {scheme.isNew ? <span className="new-pill">New</span> : null}
            </div>
            <p>{scheme.summary}</p>
            <div className="scheme-meta">
              <span>{scheme.category}</span>
              <span>{scheme.launchDate}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
