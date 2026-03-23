export type ContactUrgency = 'CRITICAL' | 'IMPORTANT' | 'INFO';

export interface ContactItem {
  id: number;
  initials: string;
  name: string;
  urgency: ContactUrgency;
  phone: string;
  shortDesc: string;
  fullDetail: string;
}

export const URGENCY_COLORS: Record<ContactUrgency, { text: string; bg: string }> = {
  CRITICAL: { text: '#A73C44', bg: '#FCEDED' },
  IMPORTANT: { text: '#9A5A17', bg: '#FBF2E1' },
  INFO: { text: '#1C6B9E', bg: '#EAF3FA' },
};

export const CONTACTS: ContactItem[] = [
  {
    id: 1,
    initials: 'DR',
    name: 'Primary OB/GYN doctor or ANM nurse',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'The doctor who did your ANC checkups',
    fullDetail: 'Call them first the moment labour begins. They know your entire pregnancy history and can guide you immediately. Save their personal mobile number from your last ANC visit.',
  },
  {
    id: 2,
    initials: 'AM',
    name: 'Ambulance — 102 (free government)',
    urgency: 'CRITICAL',
    phone: '102',
    shortDesc: 'Free nationwide ambulance',
    fullDetail: '102 is the free government ambulance available nationwide. Response time varies. Keep this number saved even if you plan to travel by private vehicle — you may need it in an emergency.',
  },
  {
    id: 3,
    initials: 'HP',
    name: 'Hospital or health post admission desk',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Call ahead before arriving',
    fullDetail: 'Call ahead so they can prepare a bed, ward, and staff. Reduces waiting time significantly. Ask for the direct number of the maternity or labour ward specifically.',
  },
  {
    id: 4,
    initials: 'FC',
    name: 'FCHV — Female Community Health Volunteer',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Your local health volunteer',
    fullDetail: 'Present in every ward across Nepal. Knows the local referral system, can arrange transport, and is available at all hours. She is often the fastest first contact, especially when the hospital is far.',
  },
  {
    id: 5,
    initials: 'P1',
    name: 'Husband or primary support person',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Must be reachable 24 hours a day',
    fullDetail: 'Must be reachable 24 hours in the last 4 weeks of pregnancy. Responsible for transport, carrying the hospital bag, staying with the mother, and informing the family.',
  },
  {
    id: 6,
    initials: 'P2',
    name: 'Backup support person',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Family member or trusted neighbour',
    fullDetail: 'A trusted family member or neighbour who can step in if the primary support person is unavailable. Labour can start any time — always have a backup plan.',
  },
  {
    id: 7,
    initials: 'RB',
    name: 'Blood donor — same blood group',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Pre-identify a donor before due date',
    fullDetail: 'Nepal faces frequent blood shortages, especially for rare groups (B-, O-). Identify a willing donor with your blood group before your due date. Nepal Red Cross Kathmandu: 01-4228094.',
  },
  {
    id: 8,
    initials: '1166',
    name: 'Health helpline — Ministry of Health',
    urgency: 'INFO',
    phone: '1166',
    shortDesc: 'Government health helpline',
    fullDetail: 'The government health helpline for pregnancy-related queries, referrals, and information. Available during working hours. Free to call.',
  },
];
