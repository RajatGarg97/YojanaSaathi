export type LanguageCode = "en" | "hi" | "mr" | "bn" | "ta";

export type DocumentStatus = "missing" | "uploaded" | "verified" | "expired";

export type SubmissionMode = "api" | "automation" | "assisted_handoff";

export type SchemeBucket = "new" | "applied" | "in_force";

export type SchemeCategory = "Education" | "Health" | "Livelihood" | "Agriculture";

export type HouseholdTag = "student" | "pregnant" | "farmer" | "entrepreneur";

export type CanonicalDocumentType =
  | "aadhaar"
  | "income_certificate"
  | "bpl_card"
  | "obc_certificate"
  | "bank_passbook"
  | "student_enrollment_proof"
  | "ration_card"
  | "health_card"
  | "land_record"
  | "passport_photo";

export interface HouseholdMember {
  id: string;
  name: string;
  relationship: string;
  age: number;
  occupation: string;
  profilePhotoLabel: string;
  tags: HouseholdTag[];
}

export interface HouseholdProfile {
  id: string;
  householdName: string;
  location: string;
  incomeBandLabel: string;
  aadhaarMobile: string;
  members: HouseholdMember[];
}

export interface DocumentRecord {
  id: string;
  type: CanonicalDocumentType;
  label: string;
  status: DocumentStatus;
  ownerMemberId?: string;
  source: "digilocker" | "manual";
}

export interface EligibilityRequirement {
  label: string;
  anyOf: CanonicalDocumentType[];
}

export interface SchemeRecord {
  id: string;
  title: string;
  category: SchemeCategory;
  launchDate: string;
  isNew: boolean;
  bucket: SchemeBucket;
  summary: string;
  benefitSummary: string;
  eligibleTags: HouseholdTag[];
  requiredDocuments: CanonicalDocumentType[];
  eligibilityRequirements: EligibilityRequirement[];
  applicationMode: SubmissionMode;
  contactLabel: string;
  matchedMemberId: string;
  statusLabel?: string;
}

export interface ActivityItem {
  id: string;
  kind: "message" | "timeline";
  title: string;
  body: string;
  timestamp: string;
}

export interface SessionState {
  language: LanguageCode;
  mobile: string;
  isAuthenticated: boolean;
  otpVerified: boolean;
  onboardingComplete: boolean;
  digilockerLinked: boolean;
}
