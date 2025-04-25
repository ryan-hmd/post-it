export const reportStatus = ['PENDING', 'REVIEW', 'REJECTED', 'ACCEPTED'] as const

export const reportReason = [
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

export type ReportReason = (typeof reportReason)[number]
export type ReportStatus = (typeof reportStatus)[number]
export type ReportTargetType = 'users' | 'postits' | 'walls'
