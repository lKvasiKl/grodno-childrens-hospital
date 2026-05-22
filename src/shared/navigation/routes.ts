export const ROUTES = {
  HOME: '/',
  NEWS: '/news',

  STRUCTURE: {
    ROOT: '/structure',
    ADMIN: '/structure/admin',

    DEPARTMENT: {
      ROOT: '/structure/department',
      STATIONARY: '/structure/department/stationary',
      THERAPEUTIC: '/structure/department/therapeutic',
      AUXILIARY: '/structure/department/auxiliary',
    },

    CONSULTATION: '/structure/consultation',
  },

  SOCIAL_LIFE: {
    ROOT: '/social-life',
    TRADE_UNION: '/social-life/trade-union',
    NURSING_COUNCIL: '/social-life/nursing-council',
    BRSM: '/social-life/brsm',
  },

  VISITORS: {
    ROOT: '/visitors',
    HOME_WITHOUT_VIOLENCE: '/visitors/home-without-violence',
    PERSONNEL: '/visitors/personnel',
    TRAINING: '/visitors/training',
    HIGH_TECH_INTERVENTIONS: '/visitors/high-tech-interventions',
    REGULATORY_DOCUMENTS: '/visitors/regulatory-documents',
    LEGAL_KNOWLEDGE_CORNER: '/visitors/legal-knowledge-corner',
  },

  VACANCIES: '/vacancies',

  HEALTH: {
    ROOT: '/health',
    DOCTORS_ADVICE: '/health/doctors-advice',
    LIFESTYLE: '/health/lifestyle',
    PRACTICE_CASE: '/health/practice-case',
    HELPLINES: '/health/helplines',
  },

  PAID_SERVICES: {
    ROOT: '/paid-services',
    BELARUS_CITIZENS: '/paid-services/belarus-citizens',
    FOREIGN_CITIZENS: '/paid-services/foreign-citizens',
    WITH_RESIDENCE_PERMIT: '/paid-services/with-residence-permit',
  },

  APPEALS: {
    ROOT: '/appeals',
    SCHEDULE: '/appeals/schedule',
    ELECTRONIC: '/appeals/electronic',
    DIRECT_TELEPHONE_LINE: '/appeals/direct-telephone-line',
    HOTLINE: '/appeals/hotline',
    RECEIVING_PROCEDURE: '/appeals/receiving-procedure',
    CONSIDERING_PROCEDURE: '/appeals/considering-procedure',
    REQUIREMENTS: '/appeals/requirements',
    APPEALING: '/appeals/appealing',
    REGULATORY_DOCUMENTS: '/appeals/regulatory-documents',
  },

  ABOUT: {
    ROOT: '/about',
    HOSPITAL_HISTORY: '/about/hospital-history',
    ANTI_CORRUPTION: '/about/anti-corruption',
    PERSONAL_DATA_PROTECTION: '/about/personal-data-protection',
    SECURITY_POLICY: '/about/security-policy',
    ADMINISTRATIVE_PROCEDURES: '/about/administrative-procedures',
    LABOR_PROTECTION: '/about/labor-protection',
  },

  CONTACTS: '/contacts',
} as const;
