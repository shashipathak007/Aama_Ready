export type DangerTier = 'go_now' | 'call_doctor' | 'wait_home';

export interface DangerSign {
  id: number;
  tier: DangerTier;
  title: string;
  explanation: string;
}

export const TIER_CONFIG: Record<DangerTier, { label: string; text: string; bg: string; border: string }> = {
  go_now: { label: 'Go NOW', text: '#A73C44', bg: '#FCEDED', border: '#DE8E94' },
  call_doctor: { label: 'Call Doctor', text: '#9A5A17', bg: '#FBF2E1', border: '#D69E58' },
  wait_home: { label: 'Wait at Home', text: '#2B6D45', bg: '#EBF5ED', border: '#6EB88B' },
};

export const DANGER_SIGNS: DangerSign[] = [
  // GO NOW
  { id: 1, tier: 'go_now', title: 'Heavy vaginal bleeding — soaking more than 1 pad per hour', explanation: 'This can indicate placental abruption or placenta previa. Both cut off oxygen to the baby and can cause life-threatening haemorrhage within minutes. Call 102 and go immediately. Do not stop at a clinic.' },
  { id: 2, tier: 'go_now', title: 'Baby has stopped moving completely for 4+ hours', explanation: 'Perform a kick count — you should feel at least 10 movements in 2 hours. Zero movement means oxygen or blood supply may be severely compromised. Every minute matters for the baby\'s brain.' },
  { id: 3, tier: 'go_now', title: 'Water broke with green, brown, or foul-smelling fluid', explanation: 'This is meconium in the amniotic fluid — the baby has passed stool inside the womb, a sign of fetal distress. If inhaled during birth, it causes meconium aspiration syndrome — a serious lung condition.' },
  { id: 4, tier: 'go_now', title: 'Severe headache + blurry vision + sudden swelling of face and hands', explanation: 'Classic signs of preeclampsia, which can rapidly progress to eclampsia (seizures) and stroke. One of the leading causes of maternal death in Nepal. Requires IV magnesium sulphate immediately.' },
  { id: 5, tier: 'go_now', title: 'Seizures or loss of consciousness', explanation: 'This is eclampsia. Call 102 immediately and say: "Pregnant woman having seizures." Needs IV magnesium sulphate within minutes to prevent brain damage or death.' },
  { id: 6, tier: 'go_now', title: 'Umbilical cord visible or felt at the vaginal opening', explanation: 'Cord prolapse — the cord has slipped ahead of the baby. Every contraction cuts off oxygen. Get on hands and knees to reduce cord pressure. Requires emergency C-section within minutes.' },
  { id: 7, tier: 'go_now', title: 'High fever above 38°C with chills and shivering', explanation: 'Suggests chorioamnionitis (infection of the amniotic sac) or kidney infection. Untreated infection can trigger premature labour or sepsis in both mother and baby.' },
  { id: 8, tier: 'go_now', title: 'Sudden difficulty breathing or chest pain', explanation: 'Can indicate pulmonary embolism — a blood clot in the lungs, which is more common during pregnancy and is immediately life-threatening.' },

  // CALL DOCTOR FIRST
  { id: 9, tier: 'call_doctor', title: 'Water broke but no contractions yet', explanation: 'Membranes have ruptured but labour has not started. Go to hospital within 1 hour. After waters break, infection risk increases every hour. Call your doctor first to alert the labour ward.' },
  { id: 10, tier: 'call_doctor', title: 'Contractions 5 minutes apart, lasting 50–60 seconds, for 1 hour (first baby)', explanation: 'This is the 5-1-1 rule for first-time mothers. Contractions at this frequency mean active labour has likely begun. Call your doctor to confirm before leaving home.' },
  { id: 11, tier: 'call_doctor', title: 'Second or third pregnancy with any regular contractions', explanation: 'Labour moves much faster with each birth. What took 12 hours the first time may take 2–3 hours the second. Call the moment contractions start to pattern.' },
  { id: 12, tier: 'call_doctor', title: 'Light spotting — small amount of pink or brown discharge', explanation: 'May be the "bloody show" — the mucus plug releasing as the cervix dilates. Describe the amount and colour to your doctor so they can advise whether to come in.' },
  { id: 13, tier: 'call_doctor', title: 'Baby moving noticeably less than usual (not stopped, just reduced)', explanation: 'Early sign of possible baby stress. Doctor will ask you to come in for a non-stress test (NST). Do not wait until the next morning.' },
  { id: 14, tier: 'call_doctor', title: 'Regular lower back pain and pelvic pressure in a pattern', explanation: 'Back labour is real. Some women feel contractions in the lower back. If the pain comes and goes regularly and gets stronger, call your doctor.' },

  // WAIT AT HOME
  { id: 15, tier: 'wait_home', title: 'Irregular contractions more than 20 minutes apart', explanation: 'Very early or latent labour, or Braxton Hicks. Rest at home, drink water, eat lightly, and keep timing. Going to hospital too early often results in being sent back home, which is exhausting.' },
  { id: 16, tier: 'wait_home', title: 'Braxton Hicks — tightening that stops when you move or change position', explanation: 'Practice contractions. They feel like tightening but are not regular, do not get stronger, and stop when you walk or change position. True labour contractions get stronger no matter what you do.' },
  { id: 17, tier: 'wait_home', title: 'Mild ankle or foot swelling by end of day', explanation: 'Very common in late pregnancy due to increased blood volume and gravity. Normal as long as it goes away overnight and does not affect the face or hands (which would be preeclampsia).' },
  { id: 18, tier: 'wait_home', title: 'Nesting instinct — strong urge to clean and prepare the home', explanation: 'Completely normal. Rest, finalise your hospital bag, check your contact list, and try to sleep. You will need the energy for real labour.' },
  { id: 19, tier: 'wait_home', title: 'Mild backache without a regular pattern', explanation: "Common in the third trimester due to the baby's weight. Use a pillow between your knees and a warm compress. If it becomes rhythmic and patterned, call your doctor." },
];
