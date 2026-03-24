export type ContactUrgency = 'CRITICAL' | 'IMPORTANT' | 'INFO';

export interface ContactItem {
  id: number;
  initials: string;
  name: string;
  nameNe?: string;
  urgency: ContactUrgency;
  phone: string;
  shortDesc: string;
  shortDescNe?: string;
  fullDetail: string;
  fullDetailNe?: string;
}

export const URGENCY_COLORS: Record<ContactUrgency, { text: string; bg: string; labelNe: string }> = {
  CRITICAL: { text: '#A73C44', bg: '#FCEDED', labelNe: 'अति महत्त्वपूर्ण' },
  IMPORTANT: { text: '#9A5A17', bg: '#FBF2E1', labelNe: 'महत्त्वपूर्ण' },
  INFO: { text: '#1C6B9E', bg: '#EAF3FA', labelNe: 'जानकारी' },
};

export const CONTACTS: ContactItem[] = [
  {
    id: 1,
    initials: 'DR',
    name: 'Primary OB/GYN doctor or ANM nurse',
    nameNe: 'आफ्नो मुख्य प्रसूति डाक्टर वा ANM नर्स',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'The doctor who did your ANC checkups',
    shortDescNe: 'तपाईंको ANC जाँच गर्ने डाक्टर',
    fullDetail: 'Call them first the moment labour begins. They know your entire pregnancy history and can guide you immediately. Save their personal mobile number from your last ANC visit.',
    fullDetailNe: 'व्यथा लाग्नेबित्तिकै सबैभन्दा पहिले उहाँहरूलाई फोन गर्नुहोस्। उहाँहरूले सम्पूर्ण स्वास्थ्य अवस्था थाहा पाएका हुन्छन् र तुरुन्तै सल्लाह दिन सक्छन्। अघिल्लो जाँचमै उहाँहरूको व्यक्तिगत मोबाइल नम्बर मागेर राख्नुपर्छ।'
  },
  {
    id: 2,
    initials: 'AM',
    name: 'Ambulance — 102 (free government)',
    nameNe: 'एम्बुलेन्स — १०२ (सरकारी निःशुल्क)',
    urgency: 'CRITICAL',
    phone: '102',
    shortDesc: 'Free nationwide ambulance',
    shortDescNe: 'देशव्यापी निःशुल्क एम्बुलेन्स सेवा',
    fullDetail: '102 is the free government ambulance available nationwide. Response time varies. Keep this number saved even if you plan to travel by private vehicle — you may need it in an emergency.',
    fullDetailNe: '१०२ देशभर उपलब्ध हुने सरकारी निःशुल्क एम्बुलेन्स सेवा हो। आइपुग्ने समय फरक हुन सक्छ। आफ्नै निजी सवारीसाधनबाट जाने योजना भए पनि यो नम्बर सुरक्षित राख्नुहोस् — आकस्मिक अवस्थामा यो आवश्यक पर्न सक्छ।'
  },
  {
    id: 3,
    initials: 'HP',
    name: 'Hospital or health post admission desk',
    nameNe: 'अस्पताल वा स्वास्थ्य चौकी भर्ना डेस्क (रिसेप्सन)',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Call ahead before arriving',
    shortDescNe: 'अस्पताल पुग्नुअघि फोन गर्नुहोस्',
    fullDetail: 'Call ahead so they can prepare a bed, ward, and staff. Reduces waiting time significantly. Ask for the direct number of the maternity or labour ward specifically.',
    fullDetailNe: 'पहिले नै फोन गर्नुभयो भने अस्पतालले ओछ्यान, वार्ड र स्वास्थ्यकर्मीको तयारी गर्न सक्छ। यसले गर्दा कुर्नुपर्ने समय धेरै घट्छ। प्रसूति वार्डको सिधा फोन नम्बर माग्नुहोस्।'
  },
  {
    id: 4,
    initials: 'FC',
    name: 'FCHV — Female Community Health Volunteer',
    nameNe: 'महिला स्वास्थ्य स्वयंसेविका (FCHV)',
    urgency: 'CRITICAL',
    phone: '',
    shortDesc: 'Your local health volunteer',
    shortDescNe: 'तपाईंको स्थानीय स्वास्थ्य स्वयंसेविका',
    fullDetail: 'Present in every ward across Nepal. Knows the local referral system, can arrange transport, and is available at all hours. She is often the fastest first contact, especially when the hospital is far.',
    fullDetailNe: 'नेपालभर लगभग हरेक वडामा महिला स्वास्थ्य स्वयंसेविकाहरू हुन्छन्। उनीहरूलाई स्थानीय सिफारिस (रिफरल) प्रणाली थाहा हुन्छ, गाडी व्यवस्था मिलाउन सक्छन् र जुनसुकै बेला सम्पर्कमा रहन्छन्। विशेषगरी अस्पताल टाढा हुँदा उनीहरू सबैभन्दा छिटो सम्पर्क गर्न सकिने पहिलो व्यक्ति हुन्।'
  },
  {
    id: 5,
    initials: 'P1',
    name: 'Husband or primary support person',
    nameNe: 'श्रीमान वा प्राथमिक सहयोगी व्यक्ति',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Must be reachable 24 hours a day',
    shortDescNe: 'दिनको २४ सै घण्टा सम्पर्कमा रहनुपर्ने व्यक्ति',
    fullDetail: 'Must be reachable 24 hours in the last 4 weeks of pregnancy. Responsible for transport, carrying the hospital bag, staying with the mother, and informing the family.',
    fullDetailNe: 'सुत्केरी हुने अन्तिम ४ हप्तामा दिनको २४ सै घण्टा सम्पर्कमा रहनुपर्ने व्यक्ति। गाडीको व्यवस्था गर्ने, अस्पतालको झोला बोक्ने, आमाको साथमा बस्ने, र परिवारलाई खबर गर्ने जिम्मेवारी हुन्छ।'
  },
  {
    id: 6,
    initials: 'P2',
    name: 'Backup support person',
    nameNe: 'वैकल्पिक सहयोगी व्यक्ति (ब्याकअप)',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Family member or trusted neighbour',
    shortDescNe: 'परिवारका सदस्य वा भरपर्दो छिमेकी',
    fullDetail: 'A trusted family member or neighbour who can step in if the primary support person is unavailable. Labour can start any time — always have a backup plan.',
    fullDetailNe: 'प्राथमिक सहयोगी व्यक्ति नभएको अवस्थामा मद्दत गर्न सक्ने भरपर्दो परिवारका सदस्य वा छिमेकी हुन्। व्यथा जुनसुकै बेला लाग्न सक्छ — त्यसैले सधैँ वैकल्पिक (ब्याकअप) योजना राख्नुहोस्।'
  },
  {
    id: 7,
    initials: 'RB',
    name: 'Blood donor — same blood group',
    nameNe: 'रक्तदाता (Blood donor) — उही रक्तसमूह',
    urgency: 'IMPORTANT',
    phone: '',
    shortDesc: 'Pre-identify a donor before due date',
    shortDescNe: 'सुत्केरी हुने मितिअघि नै रक्तदाता पहिचान गरिराख्ने',
    fullDetail: 'Nepal faces frequent blood shortages, especially for rare groups (B-, O-). Identify a willing donor with your blood group before your due date. Nepal Red Cross Kathmandu: 01-4228094.',
    fullDetailNe: 'नेपालमा प्रायः रगतको अभाव हुन्छ, विशेषगरी दुर्लभ समूहहरूको (जस्तै B-, O-)। सुत्केरी हुनुअघि नै तपाईंको जस्तै रगत दिने इच्छुक दाता पहिचान गर्नुहोस्। नेपाल रेडक्रस काठमाडौँ: ०१-४२२८०९४।'
  },
  {
    id: 8,
    initials: '1166',
    name: 'Health helpline — Ministry of Health',
    nameNe: 'स्वास्थ्य हेल्पलाइन — स्वास्थ्य मन्त्रालय',
    urgency: 'INFO',
    phone: '1166',
    shortDesc: 'Government health helpline',
    shortDescNe: 'सरकारी स्वास्थ्य हेल्पलाइन',
    fullDetail: 'The government health helpline for pregnancy-related queries, referrals, and information. Available during working hours. Free to call.',
    fullDetailNe: 'गर्भावस्थासँग सम्बन्धित सोधपुछ, सिफारिस (रिफरल) र जानकारीका लागि सरकारी स्वास्थ्य हेल्पलाइन। यो काम गर्ने समयमा उपलब्ध हुन्छ र कल गर्न निःशुल्क छ।'
  },
];
