export type DocCategory = 'Identity' | 'Aama Programme' | 'Medical' | 'Payment';

export interface DocumentItem {
  id: number;
  category: DocCategory;
  name: string;
  nameNe?: string;
  whyNeeded: string;
  whyNeededNe?: string;
}

export const DOC_CATEGORY_COLORS: Record<DocCategory, { text: string; bg: string; nameNe: string }> = {
  Identity: { text: '#1C6B9E', bg: '#EAF3FA', nameNe: 'परिचय पत्र' },
  'Aama Programme': { text: '#127163', bg: '#E1F5F2', nameNe: 'आमा कार्यक्रम' },
  Medical: { text: '#6B5DD3', bg: '#FDF2F4', nameNe: 'मेडिकल' },
  Payment: { text: '#9A5A17', bg: '#FBF2E1', nameNe: 'भुक्तानी' },
};

export const DOCUMENTS: DocumentItem[] = [
  // IDENTITY
  { id: 1, category: 'Identity', 
    name: "Mother's citizenship card (Nagarikta)", 
    nameNe: 'आमाको नागरिकताको प्रमाणपत्र',
    whyNeeded: 'Required for hospital registration without exception. Without it, admission is delayed and you cannot access the Aama Programme free delivery scheme.',
    whyNeededNe: 'अस्पतालमा भर्ना हुन यो अनिवार्य चाहिन्छ। यो बिना भर्ना हुन ढिला हुन्छ र आमा कार्यक्रमअन्तर्गत निःशुल्क सुत्केरी सुबिधा पाउन सकिँदैन।'
  },
  { id: 2, category: 'Identity', 
    name: "Husband's citizenship card", 
    nameNe: 'श्रीमानको नागरिकताको प्रमाणपत्र',
    whyNeeded: "Required for the baby's birth certificate registration. Some hospitals also require it for the mother's admission file.",
    whyNeededNe: 'बच्चाको जन्मदर्ता गराउन आवश्यक पर्छ। केही अस्पतालहरूले आमाको भर्ना फाइलको लागि पनि यो माग्छन्।'
  },
  { id: 3, category: 'Identity', 
    name: 'Ward or Palika recommendation letter', 
    nameNe: 'वडा वा पालिकाको सिफारिस पत्र',
    whyNeeded: 'Required by most government hospitals to verify local residency for the Aama Programme. Get this from your local ward office before your due date.',
    whyNeededNe: 'धेरैजसो सरकारी अस्पतालहरूले आमा कार्यक्रमको लागि स्थानीय बासिन्दा हो भनेर प्रमाणित गर्न यो माग्छन्। सुत्केरी हुनुअघि नै आफ्नो वडा कार्यालयबाट यो लिनुहोस्।'
  },
  { id: 4, category: 'Identity', 
    name: 'Marriage registration certificate', 
    nameNe: 'विवाह दर्ता प्रमाणपत्र',
    whyNeeded: "Needed when applying for the baby's birth certificate at the municipality or ward office after discharge.",
    whyNeededNe: 'अस्पतालबाट डिस्चार्ज भएपछि नगरपालिका वा वडा कार्यालयमा बच्चाको जन्मदर्ता गराउन यो आवश्यक पर्छ।'
  },

  // AAMA PROGRAMME
  { id: 5, category: 'Aama Programme', 
    name: 'Antenatal card from health post (ANC card)', 
    nameNe: 'स्वास्थ्य चौकीबाट दिइएको गर्भवती जाँच (ANC) कार्ड',
    whyNeeded: 'The single most important document. All pregnancy checkup visits are recorded here. Doctors use it immediately to understand your history, risk factors, and blood type.',
    whyNeededNe: 'यो सबैभन्दा महत्त्वपूर्ण कागजात हो। सबै गर्भवती जाँचहरू यसमा राखिएको हुन्छ। डाक्टरहरूले तपाईंको इतिहास, जोखिम र रक्तसमूह (ब्लड ग्रुप) बुझ्न तुरुन्तै यो हेर्छन्।'
  },
  { id: 6, category: 'Aama Programme', 
    name: 'Minimum 4 ANC checkup stamps', 
    nameNe: 'कम्तीमा ४ वटा ANC जाँच गरेको छाप',
    whyNeeded: 'The Aama Programme requires at least 4 ANC visits to be eligible for the full cash incentive of NPR 1,000–3,000. Missing stamps means reduced or no payment.',
    whyNeededNe: 'आमा कार्यक्रम अन्तर्गत रु १,००० देखि ३,००० सम्मको पूर्ण प्रोत्साहन भत्ता पाउन कम्तीमा ४ पटक ANC जाँच गरेको हुनुपर्छ। छाप नहुनुको अर्थ भत्ता कम हुनु वा ग्यारेन्टी नहुनु हो।'
  },
  { id: 7, category: 'Aama Programme', 
    name: 'Referral letter from health post or PHC', 
    nameNe: 'स्वास्थ्य चौकी वा PHC बाट सिफारिस (रिफरल) पत्र',
    whyNeeded: 'If being transferred from a smaller facility, this letter is required for admission at district or zonal hospitals and for Aama Programme claims.',
    whyNeededNe: 'यदि सानो स्वास्थ्य संस्थाबाट ठूलो अस्पताल (जस्तै जिल्ला वा अञ्चल अस्पताल) मा पठाइएको हो भने भर्ना हुन र आमा कार्यक्रमको दाबी गर्न यो पत्र चाहिन्छ।'
  },
  { id: 8, category: 'Aama Programme', 
    name: "Bank account details (mother's or husband's)", 
    nameNe: 'बैंक खाताको विवरण (आमाको वा श्रीमानको)',
    whyNeeded: 'The Aama cash incentive is transferred directly to a bank account in most districts. Without this, you may have to claim the money later in person.',
    whyNeededNe: 'धेरैजसो जिल्लामा आमा कार्यक्रमको प्रोत्साहन भत्ता सीधै बैंक खातामा पठाइन्छ। यो नभएमा पछि आफैं गएर पैसा दाबी गर्नुपर्ने हुन सक्छ।'
  },

  // MEDICAL
  { id: 9, category: 'Medical', 
    name: 'All ultrasound reports, especially latest scan', 
    nameNe: 'सबै भिडियो एक्स-रे (Ultrasound) रिपोर्ट (विशेषगरी पछिल्लो)',
    whyNeeded: "The latest ultrasound (32–36 weeks) shows baby's position, weight, placenta location, and fluid. Doctors need this to decide the delivery plan.",
    whyNeededNe: 'पछिल्लो अल्ट्रासाउन्ड (३२-३६ हप्ता) ले बच्चाको अवस्था, तौल, सालको स्थान र पानीको मात्रा देखाउँछ। डाक्टरहरूले सुत्केरी गराउने योजना बनाउन यो हेर्नुपर्छ।'
  },
  { id: 10, category: 'Medical', 
    name: 'Blood group card', 
    nameNe: 'रक्त समूह (Blood Group) कार्ड',
    whyNeeded: 'Critical if emergency transfusion is needed. Rare blood groups (B-, O-) are very hard to source quickly. Knowing the blood group in advance saves precious minutes.',
    whyNeededNe: 'आकस्मिक रूपमा रगत दिनुपरेमा यो धेरै महत्त्वपूर्ण हुन्छ। दुर्लभ रक्त समूहहरू (जस्तै B-, O-) छिट्टै पाउन गाह्रो हुन्छ। पहिले नै रगत समूह थाहा पाउँदा बहुमूल्य समय जोगिन्छ।'
  },
  { id: 11, category: 'Medical', 
    name: 'CBC and haemoglobin report', 
    nameNe: 'सीबीसी (CBC) र हेमोग्लोबिन रिपोर्ट',
    whyNeeded: 'Anaemia is very common in pregnant women in Nepal and significantly affects delivery planning and blood loss risk management.',
    whyNeededNe: 'नेपालमा गर्भवती महिलाहरूमा रक्तअल्पता (एनिमिया) धेरै सामान्य छ र यसले सुत्केरी योजना र रगत बग्ने जोखिम व्यवस्थापनमा महत्त्वपूर्ण असर पार्छ।'
  },
  { id: 12, category: 'Medical', 
    name: 'HIV and Hepatitis B test result', 
    nameNe: 'एचआइभी (HIV) र हेपाटाइटिस बी परीक्षण रिपोर्ट',
    whyNeeded: 'Mandatory before delivery at all government hospitals under the PMTCT programme. Without it, delivery may be delayed.',
    whyNeededNe: 'सबै सरकारी अस्पतालहरूमा PMTCT कार्यक्रमअन्तर्गत सुत्केरी हुनुअघि यो रिपोर्ट अनिवार्य छ। यो नभएमा सुत्केरी गराउन ढिला हुन सक्छ।'
  },
  { id: 13, category: 'Medical', 
    name: 'Urine routine and culture report', 
    nameNe: 'पिसाब परीक्षण (Urine routine and culture) रिपोर्ट',
    whyNeeded: 'UTIs are common in late pregnancy and must be treated before delivery to avoid complications for mother and baby.',
    whyNeededNe: 'गर्भावस्थाको अन्त्यतिर पिसाबको संक्रमण (UTI) सामान्य हुन्छ र आमा र बच्चालाई जटिलताबाट बचाउन सुत्केरीअघि नै यसको उपचार गर्नुपर्छ।'
  },
  { id: 14, category: 'Medical', 
    name: 'Previous C-section or surgery records', 
    nameNe: 'पहिलेको शल्यक्रिया (C-section) वा अपरेसनको रेकर्ड',
    whyNeeded: 'If you have had a previous C-section, this completely changes the delivery plan. The doctor must know the incision type to decide if VBAC is safe.',
    whyNeededNe: 'यदि तपाईंको पहिले शल्यक्रिया (सिजरियन) भएको थियो भने, यसले सम्पूर्ण योजना परिवर्तन गर्न सक्छ। सामान्य सुत्केरी (VBAC) सुरक्षित छ कि छैन भन्ने निर्णय गर्न डाक्टरले पहिले कसरी चिरिएको थियो भनेर थाहा पाउनुपर्छ।'
  },
  { id: 15, category: 'Medical', 
    name: 'Current medication list', 
    nameNe: 'हाल खाइरहेको औषधिको सूची',
    whyNeeded: 'Iron tablets, calcium, thyroid medication, blood pressure medicines, or any allergy history must be known by the delivery team to avoid dangerous drug interactions.',
    whyNeededNe: 'औषधिहरूको नराम्रो असरबाट बच्न आइरन चक्की, क्याल्सियम, थाइरोइडको औषधि, रक्तचापको औषधि वा कुनै एलर्जीको इतिहास बारे प्रसूति टोलीलाई जानकारी हुनुपर्छ।'
  },
];
