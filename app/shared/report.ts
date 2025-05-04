export const REPORT_STATUS = ['pending', 'review', 'rejected', 'accepted'] as const
export const REPORT_TARGETS = ['users', 'postits', 'walls'] as const
export const REPORT_REASONS = [
    'SPAM',
    'HARASSMENT',
    'HATE',
    'NUDITY',
    'VIOLENCE',
    'FAKE_INFORMATION',
    'COPYRIGHT',
    'INAPPROPRIATE_PROFILE',
    'SCAM',
    'OFF_TOPIC',
    'DUPLICATE',
    'IMPERSONATION',
    'SELF_HARM',
    'CHILD_ABUSE',
    'EXTREMISM_OR_TERRORISM',
    'DOXING',
    'MALWARE_OR_PHISHING',
    'ILLEGAL_ACTIVITY',
    'OTHER',
] as const

export type ReportStatus = (typeof REPORT_STATUS)[number]
export type ReportTarget = (typeof REPORT_TARGETS)[number]
export type ReportReason = (typeof REPORT_REASONS)[number]
