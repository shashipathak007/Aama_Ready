export type DocCategory = 'Identity' | 'Aama Programme' | 'Medical' | 'Payment';

export interface DocumentItem {
  id: number;
  category: DocCategory;
  name: string;
  whyNeeded: string;
}

export const DOC_CATEGORY_COLORS: Record<DocCategory, { text: string; bg: string }> = {
  Identity: { text: '#1C6B9E', bg: '#EAF3FA' },
  'Aama Programme': { text: '#127163', bg: '#E1F5F2' },
  Medical: { text: '#6B5DD3', bg: '#FDF2F4' },
  Payment: { text: '#9A5A17', bg: '#FBF2E1' },
};

export const DOCUMENTS: DocumentItem[] = [
  // IDENTITY
  { id: 1, category: 'Identity', name: "Mother's citizenship card (Nagarikta)", whyNeeded: 'Required for hospital registration without exception. Without it, admission is delayed and you cannot access the Aama Programme free delivery scheme.' },
  { id: 2, category: 'Identity', name: "Husband's citizenship card", whyNeeded: "Required for the baby's birth certificate registration. Some hospitals also require it for the mother's admission file." },
  { id: 3, category: 'Identity', name: 'Ward or Palika recommendation letter', whyNeeded: 'Required by most government hospitals to verify local residency for the Aama Programme. Get this from your local ward office before your due date.' },
  { id: 4, category: 'Identity', name: 'Marriage registration certificate', whyNeeded: "Needed when applying for the baby's birth certificate at the municipality or ward office after discharge." },

  // AAMA PROGRAMME
  { id: 5, category: 'Aama Programme', name: 'Antenatal card from health post (ANC card)', whyNeeded: 'The single most important document. All pregnancy checkup visits are recorded here. Doctors use it immediately to understand your history, risk factors, and blood type.' },
  { id: 6, category: 'Aama Programme', name: 'Minimum 4 ANC checkup stamps', whyNeeded: 'The Aama Programme requires at least 4 ANC visits to be eligible for the full cash incentive of NPR 1,000–3,000. Missing stamps means reduced or no payment.' },
  { id: 7, category: 'Aama Programme', name: 'Referral letter from health post or PHC', whyNeeded: 'If being transferred from a smaller facility, this letter is required for admission at district or zonal hospitals and for Aama Programme claims.' },
  { id: 8, category: 'Aama Programme', name: "Bank account details (mother's or husband's)", whyNeeded: 'The Aama cash incentive is transferred directly to a bank account in most districts. Without this, you may have to claim the money later in person.' },

  // MEDICAL
  { id: 9, category: 'Medical', name: 'All ultrasound reports, especially latest scan', whyNeeded: "The latest ultrasound (32–36 weeks) shows baby's position, weight, placenta location, and fluid. Doctors need this to decide the delivery plan." },
  { id: 10, category: 'Medical', name: 'Blood group card', whyNeeded: 'Critical if emergency transfusion is needed. Rare blood groups (B-, O-) are very hard to source quickly. Knowing the blood group in advance saves precious minutes.' },
  { id: 11, category: 'Medical', name: 'CBC and haemoglobin report', whyNeeded: 'Anaemia is very common in pregnant women in Nepal and significantly affects delivery planning and blood loss risk management.' },
  { id: 12, category: 'Medical', name: 'HIV and Hepatitis B test result', whyNeeded: 'Mandatory before delivery at all government hospitals under the PMTCT programme. Without it, delivery may be delayed.' },
  { id: 13, category: 'Medical', name: 'Urine routine and culture report', whyNeeded: 'UTIs are common in late pregnancy and must be treated before delivery to avoid complications for mother and baby.' },
  { id: 14, category: 'Medical', name: 'Previous C-section or surgery records', whyNeeded: 'If you have had a previous C-section, this completely changes the delivery plan. The doctor must know the incision type to decide if VBAC is safe.' },
  { id: 15, category: 'Medical', name: 'Current medication list', whyNeeded: 'Iron tablets, calcium, thyroid medication, blood pressure medicines, or any allergy history must be known by the delivery team to avoid dangerous drug interactions.' },
];
