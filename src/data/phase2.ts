export const PHASE2_ITEMS = [
  {
    id: 101,
    name: 'Clean plastic sheet or folded shower curtain',
    why: 'In case delivery happens in the vehicle before reaching hospital. Lay it under the mother immediately. Keep folded inside the bottom of the hospital bag from week 36.',
  },
  {
    id: 102,
    name: 'Clean thick towel or cloth for emergency delivery',
    why: 'If the baby arrives before reaching hospital, someone needs something clean to receive the baby. Keep one folded under the hospital bag at all times from week 36.',
  },
  {
    id: 103,
    name: 'Cord tie or clean string (get from FCHV at week 36 visit)',
    why: 'For tying the umbilical cord if emergency delivery happens at home or in a vehicle. Do NOT cut the cord — just tie it and rush to hospital. Ask your FCHV to give you one at your 36-week visit.',
  },
];

export const DECISION_TREE = {
  Q1: {
    question: 'How did labour start?',
    options: [
      { text: 'Contractions only, no bleeding, no fluid', next: 'Q2', type: 'normal' },
      { text: 'Water broke — clear fluid', next: 'Q3', type: 'normal' },
      { text: 'Water broke — green, brown, or foul-smelling fluid', result: 'GO_NOW', type: 'urgent' },
      { text: 'Heavy bleeding', result: 'CALL_102', type: 'urgent' },
    ],
  },
  Q2: {
    question: 'How far apart are contractions?',
    options: [
      { text: 'More than 20 minutes apart, irregular', result: 'REST_HOME', type: 'normal' },
      { text: '5–10 minutes apart, lasting 45–60 seconds, for 1 hour (first baby)', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'Less than 5 minutes apart', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Second or third baby, any regular contractions', result: 'GO_FAST', type: 'urgent' },
    ],
  },
  Q3: {
    question: 'How long ago did water break?',
    options: [
      { text: 'Less than 1 hour ago, no contractions', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'More than 1 hour ago, no contractions', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Contractions have also started', result: 'GO_HOSPITAL', type: 'urgent' },
    ],
  },
};

export const RESULTS = {
  GO_NOW: {
    title: 'GO NOW',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else calls the ambulance',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes. Please prepare the maternity ward.',
  },
  CALL_102: {
    title: 'CALL 102 NOW',
    type: 'red',
    points: [
      'Call 102 immediately — do not wait',
      'Lie down on your left side',
      'Do not try to drive',
      'Someone else should grab the bag while you call',
    ],
    script: 'Pregnant woman with heavy bleeding. Address is [location]. Nearest landmark is [X]. Please send ambulance immediately.',
  },
  GO_HOSPITAL: {
    title: 'GO TO HOSPITAL NOW',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else arranges transport',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes.',
  },
  GO_FAST: {
    title: 'GO NOW (Fast Labour)',
    type: 'red',
    points: [
      'Second/third labours move much faster',
      'Grab the hospital bag and go immediately',
      'Call the doctor on the way',
    ],
    script: 'Second pregnancy, regular contractions have started. We are on the way to the hospital.',
  },
  CALL_DOCTOR: {
    title: 'CALL DOCTOR FIRST',
    type: 'amber',
    points: [
      'Call your OB/GYN or ANM now',
      'Keep the phone on and stay near your hospital bag',
      'Make sure your support person is with you or on their way',
      'Head to hospital when doctor advises or if things change fast',
    ],
    script: 'Labour has started. Contractions are [X] minutes apart, lasting about [X] seconds. My water has [broken / not broken]. What should I do?',
  },
  REST_HOME: {
    title: 'REST AT HOME',
    type: 'green',
    points: [
      'Time contractions — note start time, end time, gap between each',
      'Drink water and eat a light meal if possible',
      'Take a warm shower to ease early discomfort',
      'Call your doctor if contractions become regular at 10 min apart',
    ],
    script: 'Contractions have started but are still far apart. I will monitor and call when they are 5 minutes apart.',
  },
};

export const RIDE_GUIDE = [
  { step: 1, title: 'Confirm labour is real', who: 'Partner', desc: 'Time at least 3 contractions. If they are regular and getting stronger, it is real. Stop timing and start moving.' },
  { step: 2, title: 'Call the doctor', who: 'Partner', desc: 'While the mother breathes through contractions, the partner calls the OB/GYN. Say: "Labour has started. Contractions are [X] minutes apart. We are heading to [hospital name]. Please alert the ward."' },
  { step: 3, title: 'Grab the bag and documents', who: 'Partner', desc: 'The hospital bag should already be packed. Grab it, grab the documents folder, and grab cash. Do not repack. Do not look for missing items — go.' },
  { step: 4, title: 'Call the hospital', who: 'Partner', desc: 'Call the admission desk number you saved. Say: "We are coming for delivery. Patient name [X], arriving in [Z] minutes." This gets a bed and staff ready before you arrive.' },
  { step: 5, title: 'Inform family', who: 'Partner', desc: 'One call or message to the immediate family. Keep it short. More updates later. The mother does not need to make any calls right now.' },
  { step: 6, title: 'Support during the ride', who: 'Partner', desc: 'Sit beside the mother in the back. Apply back pressure between contractions using your fist or the massage roller. Remind her to breathe slowly. Do not speed dangerously — steady is safer.' },
  { step: 7, title: 'Arrive at hospital', who: 'Both', desc: 'Go directly to the maternity emergency entrance, not the main reception. Say the patient name and doctor name at the desk. Hand over the ANC card and blood group card first — these are the two things they ask for immediately.' },
];

export const BREATHING_GUIDE = [
  {
    id: 1,
    title: 'Slow breathing',
    when: 'Early labour, contractions 10–20 min apart',
    inhale: 4,
    hold: 0,
    exhale: 6,
    cue: 'Breathe in slowly through your nose... breathe out like you are fogging a mirror.',
  },
  {
    id: 2,
    title: 'Light breathing',
    when: 'Active labour, contractions 5 min apart',
    inhale: 2,
    hold: 0,
    exhale: 2,
    cue: 'Light, quick breaths. In and out through the mouth. Do not hold your breath.',
  },
  {
    id: 3,
    title: 'Pushing breath',
    when: 'During pushing stage',
    inhale: 3,
    hold: 6,
    exhale: 3,
    cue: 'Big breath in, hold, push down like you are trying to open a tight jar — then release slowly.',
  },
];
