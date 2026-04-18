import type {
  ActivityItem,
  DocumentRecord,
  HouseholdProfile,
  LanguageCode,
  SchemeRecord
} from "@/lib/types";

export const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" }
];

export const householdProfile: HouseholdProfile = {
  id: "household-1",
  householdName: "Singh family",
  location: "Lucknow, Uttar Pradesh",
  incomeBandLabel: "Household profile pending scheme-level verification",
  aadhaarMobile: "9873294856",
  members: [
    {
      id: "member-aarti",
      name: "Aarti Singh",
      relationship: "Daughter",
      age: 19,
      occupation: "College student",
      profilePhotoLabel: "AS",
      tags: ["student"]
    },
    {
      id: "member-meera",
      name: "Meera Singh",
      relationship: "Mother",
      age: 33,
      occupation: "Home-based tailor",
      profilePhotoLabel: "MS",
      tags: ["entrepreneur", "pregnant"]
    },
    {
      id: "member-ramesh",
      name: "Ramesh Singh",
      relationship: "Father",
      age: 39,
      occupation: "Small farmer",
      profilePhotoLabel: "RS",
      tags: ["farmer"]
    }
  ]
};

export const initialDocuments: DocumentRecord[] = [
  {
    id: "doc-aadhaar-household",
    type: "aadhaar",
    label: "Aadhaar",
    status: "verified",
    source: "digilocker"
  },
  {
    id: "doc-bank-household",
    type: "bank_passbook",
    label: "Bank passbook",
    status: "uploaded",
    source: "manual"
  },
  {
    id: "doc-student-proof",
    type: "student_enrollment_proof",
    label: "Student enrollment proof",
    status: "verified",
    source: "digilocker",
    ownerMemberId: "member-aarti"
  },
  {
    id: "doc-health-card",
    type: "health_card",
    label: "Health card",
    status: "uploaded",
    source: "manual",
    ownerMemberId: "member-meera"
  },
  {
    id: "doc-photo-household",
    type: "passport_photo",
    label: "Passport photo",
    status: "uploaded",
    source: "manual"
  }
];

export const initialSchemes: SchemeRecord[] = [
  {
    id: "scheme-student-scholarship",
    title: "OBC Student Progress Scholarship",
    category: "Education",
    launchDate: "2026-03-24",
    isNew: true,
    bucket: "new",
    summary: "Scholarship support for eligible OBC students in higher education.",
    benefitSummary: "Direct yearly scholarship transfer for tuition and study support.",
    eligibleTags: ["student"],
    requiredDocuments: ["aadhaar", "student_enrollment_proof", "bank_passbook", "passport_photo"],
    eligibilityRequirements: [
      { label: "Provide OBC or equivalent caste proof", anyOf: ["obc_certificate"] }
    ],
    applicationMode: "api",
    contactLabel: "Education department API lane",
    matchedMemberId: "member-aarti"
  },
  {
    id: "scheme-women-enterprise",
    title: "Nayi Udaan Women Enterprise Grant",
    category: "Livelihood",
    launchDate: "2026-04-10",
    isNew: true,
    bucket: "new",
    summary: "Small working-capital support for women running home businesses.",
    benefitSummary: "Grant plus district entrepreneurship mentoring.",
    eligibleTags: ["entrepreneur"],
    requiredDocuments: ["aadhaar", "bank_passbook", "passport_photo"],
    eligibilityRequirements: [
      { label: "Provide income proof or BPL proof", anyOf: ["income_certificate", "bpl_card"] }
    ],
    applicationMode: "automation",
    contactLabel: "District industries workflow",
    matchedMemberId: "member-meera"
  },
  {
    id: "scheme-farmer-irrigation",
    title: "Kisan Micro-Irrigation Assist",
    category: "Agriculture",
    launchDate: "2026-02-12",
    isNew: false,
    bucket: "new",
    summary: "Subsidy guidance for drip and sprinkler irrigation on small farms.",
    benefitSummary: "Equipment subsidy with block-level agriculture follow-up.",
    eligibleTags: ["farmer"],
    requiredDocuments: ["aadhaar", "land_record", "bank_passbook"],
    eligibilityRequirements: [
      { label: "Show land ownership or tenancy record", anyOf: ["land_record"] }
    ],
    applicationMode: "assisted_handoff",
    contactLabel: "Nearest agriculture extension office",
    matchedMemberId: "member-ramesh"
  },
  {
    id: "scheme-maternity-checkup",
    title: "Safe Mother Care Journey",
    category: "Health",
    launchDate: "2026-03-01",
    isNew: false,
    bucket: "applied",
    summary: "Health follow-up for expectant mothers through scheduled checkups.",
    benefitSummary: "Assisted enrollment and maternity visit tracking.",
    eligibleTags: ["pregnant"],
    requiredDocuments: ["aadhaar", "health_card", "bank_passbook"],
    eligibilityRequirements: [],
    applicationMode: "api",
    contactLabel: "Health registry integration",
    matchedMemberId: "member-meera",
    statusLabel: "Submitted, waiting for health worker confirmation"
  },
  {
    id: "scheme-ration-benefit",
    title: "Priority Household Food Support",
    category: "Health",
    launchDate: "2025-11-15",
    isNew: false,
    bucket: "in_force",
    summary: "Existing ration-linked household food support.",
    benefitSummary: "Monthly entitlement already active for the household.",
    eligibleTags: ["student", "pregnant", "farmer", "entrepreneur"],
    requiredDocuments: ["aadhaar", "ration_card"],
    eligibilityRequirements: [
      { label: "Household ration document required", anyOf: ["ration_card"] }
    ],
    applicationMode: "assisted_handoff",
    contactLabel: "Already active",
    matchedMemberId: "member-ramesh",
    statusLabel: "Benefits in force"
  }
];

export const initialActivity: ActivityItem[] = [
  {
    id: "msg-1",
    kind: "message",
    title: "2 new schemes matched this week",
    body: "Aarti and Meera each have one newly launched scheme that needs document review.",
    timestamp: "Today"
  },
  {
    id: "msg-2",
    kind: "message",
    title: "DigiLocker can fetch household documents in one step",
    body: "Link DigiLocker once and then fetch all available proofs for the selected scheme.",
    timestamp: "Today"
  },
  {
    id: "timeline-1",
    kind: "timeline",
    title: "Safe Mother Care Journey submitted",
    body: "Meera's health scheme has moved to the applied bucket.",
    timestamp: "Yesterday"
  }
];
