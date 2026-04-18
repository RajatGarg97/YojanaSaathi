# YojanaSaathi MVP Plan

## Product Vision

Build a household-focused assistant for low-income families that discovers newly launched or active government schemes, checks whether the right family member already has the required documents, and routes each application through the best available path: official API, automation, or assisted handoff.

## Problem Statement

Low-income households often miss newly launched schemes, struggle to identify which family member is eligible, and waste time gathering documents across multiple systems. The MVP should show the shortest path from discovery to application readiness for the whole household, not just one individual.

## MVP Goals

1. Show a clean web dashboard of new and active schemes for a low-income household.
2. Highlight newly tracked or newly launched schemes through in-app messaging.
3. Match schemes to the correct household member such as a student, farmer, entrepreneur, or pregnant woman.
4. Check document readiness against a connected household document vault using normalized document types.
5. Route applications through the best available path:
   - official API if available
   - automation if feasible
   - assisted government-worker or office handoff otherwise
6. Tell the user exactly which documents are missing and offer next actions:
   - upload or scan locally
   - request consent to fetch from DigiLocker or another issuer flow later

## Non-Goals For MVP

- Real production integration with DigiLocker requester APIs
- Real myScheme or UMANG authentication flows
- Universal direct application submission for every scheme
- KYC, OCR validation, or fraud prevention
- WhatsApp/SMS delivery in the first release
- Native Android app in the first release

## Key Assumptions

1. Public scheme metadata can be consumed from government sources or partner integrations, but the MVP will use mock adapters.
2. DigiLocker access in production will require official requester onboarding and credentials.
3. The first release is a web app, not a PWA or Android app.
4. A local document vault can represent either phone storage uploads or future synced digital documents.
5. The first release will prioritize depth on 10-20 curated schemes instead of broad catalog coverage.

## MVP Scope

### Audience

- Low-income households with multiple members
- Example member types:
  - student
  - woman entrepreneur
  - farmer
  - pregnant woman

### Scheme Coverage

- 10-20 curated schemes
- Categories:
  - education
  - health
  - livelihood
  - agriculture

### Alerts

- In-app messaging only
- A scheme is treated as new when:
  - it is newly launched according to source metadata, or
  - it is newly added to the YojanaSaathi tracked catalog

## User Flows

### 1. Household onboarding

- User views one household profile with multiple members.
- Each scheme is matched to the most relevant member.

### 2. Discover new schemes

- User opens the app.
- Dashboard shows curated schemes and which household member they match.
- Newly tracked schemes appear in the in-app message center.

### 3. Check readiness

- User selects a scheme card.
- App compares required normalized documents with available household or member-level documents.
- UI shows `Ready to apply` or lists the exact missing documents.

### 4. Apply using the best path

- If documents are available, the user records consent and starts the selected path.
- Application modes:
  - `api`
  - `automation`
  - `assisted_handoff`
- App records application attempts and status in the activity timeline.

### 5. Missing documents

- If documents are missing, the app shows which ones are needed for the matched member.
- User can upload scans now or mark interest for future consent-based retrieval.

### 6. Assisted handoff

- If API submission and automation are not possible, the app shows the relevant government worker, office, or help contact.
- A handoff packet summary should contain:
  - scheme name
  - matched household member
  - readiness status
  - missing documents
  - next official contact step

## Proposed Architecture

### Frontend

- Single-page responsive web app
- Sections:
  - household overview
  - in-app message center
  - scheme list
  - scheme detail and readiness panel
  - document vault
  - application timeline

### Data Layer

- `schemeFeedAdapter`
  - today: mock curated records
  - later: live fetch from public APIs or scraper-backed service
- `householdProfileAdapter`
  - today: local seeded household and members
  - later: user-managed profile service
- `documentVaultAdapter`
  - today: localStorage plus uploaded file metadata
  - later: DigiLocker requester integration and device file APIs
- `applicationAdapter`
  - today: mock stateful submission path tracking
  - later: department-specific submission, automation, or assisted routing

### Storage

- `localStorage` for:
  - uploaded document metadata
  - in-app messages
  - application attempts
  - activity timeline

## Public Interfaces

### HouseholdProfile

- `id`
- `household_name`
- `location`
- `income_band`
- `members`

### HouseholdMember

- `id`
- `name`
- `age_or_dob`
- `gender`
- `relationship`
- `occupation_or_status`
- `special_tags`

### SchemeRecord

- `id`
- `title`
- `category`
- `summary`
- `benefit_summary`
- `launch_date`
- `is_new`
- `eligible_member_tags`
- `required_documents`
- `application_mode`
- `application_link_or_contact`

### DocumentRecord

- `id`
- `normalized_type`
- `display_name`
- `source`
- `status`
- `owner_member_id`

### ApplicationAttempt

- `id`
- `scheme_id`
- `member_id`
- `submission_path`
- `status`
- `consent_timestamp`
- `missing_documents`
- `handoff_details`

## Canonical Document Model

Normalize uploaded or synced files into at least these document types:

- Aadhaar
- PAN
- income certificate
- bank passbook
- land record
- student enrollment proof
- pregnancy or maternal health card
- caste certificate
- disability certificate
- passport photo

Statuses:

- `uploaded`
- `verified`
- `expired`

For the MVP, `uploaded` and `verified` count as present unless a future scheme requires stricter verification.

## Privacy Baseline

- Uploaded files remain local unless the user explicitly consents to share them.
- No silent syncing from DigiLocker or any other source.
- Every application attempt requires recorded user consent.
- Consent and submission events must appear in the activity timeline.

## Future Scope

- PWA installability
- Android app
- WhatsApp and SMS alerts
- Apply through WhatsApp
- Maternal schemes expansion
- DigiLocker requester integration after partner approval
- OCR-assisted document scanning
- Multilingual support

## Risks

1. Government APIs may be partner-gated, unstable, or incomplete.
2. Each scheme may have a custom application flow with different data requirements.
3. Sensitive document handling will require strong consent, encryption, and audit controls.
4. Automation-backed submission may be brittle when portal layouts, captchas, or workflows change.

## MVP Deliverables In This Repo

- `plan.md`
- browser-based interactive web prototype
- household profile and member-based matching
- in-app message center
- normalized document readiness logic
- mocked API, automation, and assisted handoff application flows
