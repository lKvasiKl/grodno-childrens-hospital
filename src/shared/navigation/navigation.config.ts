import { ROUTES } from '@shared/navigation/routes';
import { EXTERNAL_LINKS } from './external-links';
import { MENU_ITEM_TYPE, type MenuItem } from './types';

type TFunction = (key: string) => string;

// TODO: 4th level will be implemented as page navigation

export const getMenuConfig = (t: TFunction): MenuItem[] => [
  {
    type: MENU_ITEM_TYPE.INTERNAL,
    key: ROUTES.HOME,
    label: t('menu.home'),
  },
  {
    type: MENU_ITEM_TYPE.INTERNAL,
    key: ROUTES.NEWS,
    label: t('menu.news'),
  },
  {
    key: ROUTES.STRUCTURE.ROOT,
    label: t('menu.structure'),
    children: [
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.STRUCTURE.ADMIN,
        label: t('menu.structure.admin'),
      },
      {
        key: ROUTES.STRUCTURE.DEPARTMENT.ROOT,
        label: t('menu.structure.department'),
        children: [
          {
            type: MENU_ITEM_TYPE.INTERNAL,
            key: ROUTES.STRUCTURE.DEPARTMENT.STATIONARY,
            label: t('menu.structure.department.stationary'),
          },
          {
            type: MENU_ITEM_TYPE.INTERNAL,
            key: ROUTES.STRUCTURE.DEPARTMENT.THERAPEUTIC,
            label: t('menu.structure.department.therapeutic'),
          },
          {
            type: MENU_ITEM_TYPE.INTERNAL,
            key: ROUTES.STRUCTURE.DEPARTMENT.AUXILIARY,
            label: t('menu.structure.department.auxiliary'),
          },
        ],
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
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
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.SOCIAL_LIFE.TRADE_UNION,
        label: t('menu.socialLife.tradeUnion'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.SOCIAL_LIFE.NURSING_COUNCIL,
        label: t('menu.socialLife.nursingCouncil'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
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
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.HOME_WITHOUT_VIOLENCE,
        label: t('menu.visitors.homeWithoutViolence'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.PERSONNEL,
        label: t('menu.visitors.personnel'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.TRAINING,
        label: t('menu.visitors.training'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.HIGH_TECH_INTERVENTIONS,
        label: t('menu.visitors.hightechInterventions'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.REGULATORY_DOCUMENTS,
        label: t('menu.visitors.regulatoryDocuments'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.VISITORS.LEGAL_KNOWLEDGE_CORNER,
        label: t('menu.visitors.legalKnowledgeCorner'),
      },
    ],
  },
  {
    type: MENU_ITEM_TYPE.INTERNAL,
    key: ROUTES.VACANCIES,
    label: t('menu.vacancies'),
  },
  {
    key: ROUTES.HEALTH.ROOT,
    label: t('menu.health'),
    children: [
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.HEALTH.DOCTORS_ADVICE,
        label: t('menu.health.doctorsAdvice'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.HEALTH.LIFESTYLE,
        label: t('menu.health.lifestyle'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.HEALTH.PRACTICE_CASE,
        label: t('menu.health.practiceCase'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
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
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.PAID_SERVICES.BELARUS_CITIZENS,
        label: t('menu.paidServices.belarusCitizens'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.PAID_SERVICES.FOREIGN_CITIZENS,
        label: t('menu.paidServices.foreignCitizens'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
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
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.SCHEDULE,
        label: t('menu.appeals.schedule'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.ELECTRONIC,
        label: t('menu.appeals.electronic'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.DIRECT_TELEPHONE_LINE,
        label: t('menu.appeals.directTelephoneLine'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.HOTLINE,
        label: t('menu.appeals.hotline'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.RECEIVING_PROCEDURE,
        label: t('menu.appeals.receivingProcedure'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.CONSIDERING_PROCEDURE,
        label: t('menu.appeals.consideringProcedure'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.REQUIREMENTS,
        label: t('menu.appeals.requirements'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.APPEALS.APPEALING,
        label: t('menu.appeals.appealing'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
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
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.ABOUT.HOSPITAL_HISTORY,
        label: t('menu.about.hospitalHistory'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.ABOUT.ANTI_CORRUPTION,
        label: t('menu.about.anticorruption'),
      },
      {
        type: MENU_ITEM_TYPE.EXTERNAL,
        key: 'personal-data-protaction',
        label: t('menu.about.personalDataProtection'),
        href: EXTERNAL_LINKS.PERSONAL_DATA_PROTACTION,
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.ABOUT.SECURITY_POLICY,
        label: t('menu.about.securityPolicy'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.ABOUT.ADMINISTRATIVE_PROCEDURES,
        label: t('menu.about.administrativeProcedures'),
      },
      {
        type: MENU_ITEM_TYPE.INTERNAL,
        key: ROUTES.ABOUT.LABOR_PROTECTION,
        label: t('menu.about.laborProtection'),
      },
      {
        type: MENU_ITEM_TYPE.EXTERNAL,
        key: 'information-day',
        label: t('menu.about.informationDay'),
        href: EXTERNAL_LINKS.INFORMATION_DAY,
      },
    ],
  },
  {
    type: MENU_ITEM_TYPE.INTERNAL,
    key: ROUTES.CONTACTS,
    label: t('menu.contacts'),
  },
];
