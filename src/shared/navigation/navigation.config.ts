import type { MenuProps } from 'antd';

import { ROUTES } from '@shared/navigation/routes';

type TFunction = (key: string) => string;

// TODO: 4th level will be implemented as page navigation

export const getMenuConfig = (t: TFunction): MenuProps['items'] => [
  {
    key: ROUTES.HOME,
    label: t('menu.home'),
  },
  {
    key: ROUTES.NEWS,
    label: t('menu.news'),
  },
  {
    key: ROUTES.STRUCTURE.ROOT,
    label: t('menu.structure'),
    children: [
      {
        key: ROUTES.STRUCTURE.ADMIN,
        label: t('menu.structure.admin'),
      },
      {
        key: ROUTES.STRUCTURE.DEPARTMENT.ROOT,
        label: t('menu.structure.department'),
        children: [
          {
            key: ROUTES.STRUCTURE.DEPARTMENT.STATIONARY,
            label: t('menu.structure.department.stationary'),
          },
          {
            key: ROUTES.STRUCTURE.DEPARTMENT.THERAPEUTIC,
            label: t('menu.structure.department.therapeutic'),
          },
          {
            key: ROUTES.STRUCTURE.DEPARTMENT.AUXILIARY,
            label: t('menu.structure.department.auxiliary'),
          },
        ],
      },
      {
        key: ROUTES.STRUCTURE.CONSULTATION,
        label: t('menu.structure.consultation'),
      },
    ],
  },
  {
    key: ROUTES.SOCIAL_LIFE.ROOT,
    label: t('menu.socialLife'),
    children: [
      {
        key: ROUTES.SOCIAL_LIFE.TRADE_UNION,
        label: t('menu.socialLife.tradeUnion'),
      },
      {
        key: ROUTES.SOCIAL_LIFE.NURSING_COUNCIL,
        label: t('menu.socialLife.nursingCouncil'),
      },
      {
        key: ROUTES.SOCIAL_LIFE.BRSM,
        label: t('menu.socialLife.brsm'),
      },
    ],
  },
  {
    key: ROUTES.VISITORS.ROOT,
    label: t('menu.visitors'),
    children: [
      {
        key: ROUTES.VISITORS.HOME_WITHOUT_VIOLENCE,
        label: t('menu.visitors.homeWithoutViolence'),
      },
      {
        key: ROUTES.VISITORS.PERSONNEL,
        label: t('menu.visitors.personnel'),
      },
      {
        key: ROUTES.VISITORS.TRAINING,
        label: t('menu.visitors.training'),
      },
      {
        key: ROUTES.VISITORS.HIGH_TECH_INTERVENTIONS,
        label: t('menu.visitors.hightechInterventions'),
      },
      {
        key: ROUTES.VISITORS.REGULATORY_DOCUMENTS,
        label: t('menu.visitors.regulatoryDocuments'),
      },
      {
        key: ROUTES.VISITORS.LEGAL_KNOWLEDGE_CORNER,
        label: t('menu.visitors.legalKnowledgeCorner'),
      },
    ],
  },
  {
    key: ROUTES.VACANCIES,
    label: t('menu.vacancies'),
  },
  {
    key: ROUTES.HEALTH.ROOT,
    label: t('menu.health'),
    children: [
      {
        key: ROUTES.HEALTH.DOCTORS_ADVICE,
        label: t('menu.health.doctorsAdvice'),
      },
      {
        key: ROUTES.HEALTH.LIFESTYLE,
        label: t('menu.health.lifestyle'),
      },
      {
        key: ROUTES.HEALTH.PRACTICE_CASE,
        label: t('menu.health.practiceCase'),
      },
      {
        key: ROUTES.HEALTH.HELPLINES,
        label: t('menu.health.helplines'),
      },
    ],
  },
  {
    key: ROUTES.PAID_SERVICES.ROOT,
    label: t('menu.paidServices'),
    children: [
      {
        key: ROUTES.PAID_SERVICES.BELARUS_CITIZENS,
        label: t('menu.paidServices.belarusCitizens'),
      },
      {
        key: ROUTES.PAID_SERVICES.FOREIGN_CITIZENS,
        label: t('menu.paidServices.foreignCitizens'),
      },
      {
        key: ROUTES.PAID_SERVICES.WITH_RESIDENCE_PERMIT,
        label: t('menu.paidServices.withResidencePermit'),
      },
    ],
  },
  {
    key: ROUTES.APPEALS.ROOT,
    label: t('menu.appeals'),
    children: [
      {
        key: ROUTES.APPEALS.SCHEDULE,
        label: t('menu.appeals.schedule'),
      },
      {
        key: ROUTES.APPEALS.ELECTRONIC,
        label: t('menu.appeals.electronic'),
      },
      {
        key: ROUTES.APPEALS.DIRECT_TELEPHONE_LINE,
        label: t('menu.appeals.directTelephoneLine'),
      },
      {
        key: ROUTES.APPEALS.HOTLINE,
        label: t('menu.appeals.hotline'),
      },
      {
        key: ROUTES.APPEALS.RECEIVING_PROCEDURE,
        label: t('menu.appeals.receivingProcedure'),
      },
      {
        key: ROUTES.APPEALS.CONSIDERING_PROCEDURE,
        label: t('menu.appeals.consideringProcedure'),
      },
      {
        key: ROUTES.APPEALS.REQUIREMENTS,
        label: t('menu.appeals.requirements'),
      },
      {
        key: ROUTES.APPEALS.APPEALING,
        label: t('menu.appeals.appealing'),
      },
      {
        key: ROUTES.APPEALS.REGULATORY_DOCUMENTS,
        label: t('menu.appeals.regulatoryDocuments'),
      },
    ],
  },
  {
    key: ROUTES.ABOUT.ROOT,
    label: t('menu.about'),
    children: [
      {
        key: ROUTES.ABOUT.HOSPITAL_HISTORY,
        label: t('menu.about.hospitalHistory'),
      },
      {
        key: ROUTES.ABOUT.ANTI_CORRUPTION,
        label: t('menu.about.anticorruption'),
      },
      {
        key: ROUTES.ABOUT.PERSONAL_DATA_PROTECTION,
        label: t('menu.about.personalDataProtection'),
      },
      {
        key: ROUTES.ABOUT.SECURITY_POLICY,
        label: t('menu.about.securityPolicy'),
      },
      {
        key: ROUTES.ABOUT.ADMINISTRATIVE_PROCEDURES,
        label: t('menu.about.administrativeProcedures'),
      },
      {
        key: ROUTES.ABOUT.SAFE_CHILDHOOD,
        label: t('menu.about.safeChildhood'),
      },
      {
        key: ROUTES.ABOUT.HEALTHY_CITY,
        label: t('menu.about.healthyCity'),
      },
      {
        key: ROUTES.ABOUT.LABOR_PROTECTION,
        label: t('menu.about.laborProtection'),
      },
      {
        key: ROUTES.ABOUT.INFORMATION_DAY,
        label: t('menu.about.informationDay'),
      },
    ],
  },
  {
    key: ROUTES.CONTACTS,
    label: t('menu.contacts'),
  },
];
