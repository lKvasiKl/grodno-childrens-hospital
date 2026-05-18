import type { MenuProps } from 'antd';

type TFunction = (key: string) => string;

// TODO: 4th level will be implemented as page navigation

export const getMenuConfig = (t: TFunction): MenuProps['items'] => [
  {
    key: 'home',
    label: t('menu.home'),
  },
  {
    key: 'news',
    label: t('menu.news'),
  },
  {
    key: 'structure',
    label: t('menu.structure'),
    children: [
      {
        key: 'structure-admin',
        label: t('menu.structure.admin'),
      },
      {
        key: 'structure-department',
        label: t('menu.structure.department'),
        children: [
          {
            key: 'department-stationary',
            label: t('menu.structure.department.stationary'),
          },
          {
            key: 'department-therapeutic',
            label: t('menu.structure.department.therapeutic'),
          },
          {
            key: 'department-auxiliary',
            label: t('menu.structure.department.auxiliary'),
          },
        ],
      },
      {
        key: 'structure-consultation',
        label: t('menu.structure.consultation'),
      },
    ],
  },
  {
    key: 'socialLife',
    label: t('menu.socialLife'),
    children: [
      {
        key: 'socialLife-tradeUnion',
        label: t('menu.socialLife.tradeUnion'),
      },
      {
        key: 'socialLife-nursingCouncil',
        label: t('menu.socialLife.nursingCouncil'),
      },
      {
        key: 'socialLife-brsm',
        label: t('menu.socialLife.brsm'),
      },
    ],
  },
  {
    key: 'visitors',
    label: t('menu.visitors'),
    children: [
      {
        key: 'visitors-homeWithoutViolence',
        label: t('menu.visitors.homeWithoutViolence'),
      },
      {
        key: 'visitors-personnel',
        label: t('menu.visitors.personnel'),
      },
      {
        key: 'visitors-training',
        label: t('menu.visitors.training'),
      },
      {
        key: 'visitors-hightechInterventions',
        label: t('menu.visitors.hightechInterventions'),
      },
      {
        key: 'visitors-regulatoryDocuments',
        label: t('menu.visitors.regulatoryDocuments'),
      },
      {
        key: 'visitors-legalKnowledgeCorner',
        label: t('menu.visitors.legalKnowledgeCorner'),
      },
    ],
  },
  {
    key: 'vacancies',
    label: t('menu.vacancies'),
  },
  {
    key: 'health',
    label: t('menu.health'),
    children: [
      {
        key: 'health-doctorsAdvice',
        label: t('menu.health.doctorsAdvice'),
      },
      {
        key: 'health-lifestyle',
        label: t('menu.health.lifestyle'),
      },
      {
        key: 'health-practiceCase',
        label: t('menu.health.practiceCase'),
      },
      {
        key: 'health-helplines',
        label: t('menu.health.helplines'),
      },
    ],
  },
  {
    key: 'paidServices',
    label: t('menu.paidServices'),
    children: [
      {
        key: 'paidServices-belarusCitizens',
        label: t('menu.paidServices.belarusCitizens'),
      },
      {
        key: 'paidServices-foreignCitizens',
        label: t('menu.paidServices.foreignCitizens'),
      },
      {
        key: 'paidServices-withResidencePermit',
        label: t('menu.paidServices.withResidencePermit'),
      },
    ],
  },
  {
    key: 'appeals',
    label: t('menu.appeals'),
    children: [
      {
        key: 'appeals-schedule',
        label: t('menu.appeals.schedule'),
      },
      {
        key: 'appeals-electronic',
        label: t('menu.appeals.electronic'),
      },
      {
        key: 'appeals-directTelephoneLine',
        label: t('menu.appeals.directTelephoneLine'),
      },
      {
        key: 'appeals-hotline',
        label: t('menu.appeals.hotline'),
      },
      {
        key: 'appeals-receivingProcedure',
        label: t('menu.appeals.receivingProcedure'),
      },
      {
        key: 'appeals-consideringProcedure',
        label: t('menu.appeals.consideringProcedure'),
      },
      {
        key: 'appeals-requirements',
        label: t('menu.appeals.requirements'),
      },
      {
        key: 'appeals-appealing',
        label: t('menu.appeals.appealing'),
      },
      {
        key: 'appeals-regulatoryDocuments',
        label: t('menu.appeals.regulatoryDocuments'),
      },
    ],
  },
  {
    key: 'about',
    label: t('menu.about'),
    children: [
      {
        key: 'about-hospitalHistory',
        label: t('menu.about.hospitalHistory'),
      },
      {
        key: 'about-anticorruption',
        label: t('menu.about.anticorruption'),
      },
      {
        key: 'about-personalDataProtection',
        label: t('menu.about.personalDataProtection'),
      },
      {
        key: 'about-securityPolicy',
        label: t('menu.about.securityPolicy'),
      },
      {
        key: 'about-administrativeProcedures',
        label: t('menu.about.administrativeProcedures'),
      },
      {
        key: 'about-safeChildhood',
        label: t('menu.about.safeChildhood'),
      },
      {
        key: 'about-healthyCity',
        label: t('menu.about.healthyCity'),
      },
      {
        key: 'about-laborProtection',
        label: t('menu.about.laborProtection'),
      },
      {
        key: 'about-informationDay',
        label: t('menu.about.informationDay'),
      },
    ],
  },
  {
    key: 'contacts',
    label: t('menu.contacts'),
  },
];
