export const PHASE2_ITEMS = [
  {
    id: 101,
    name: 'Clean plastic sheet or folded shower curtain',
    nameNe: 'सफा प्लास्टिकको सिट वा नुहाउँदा प्रयोग गरिने पर्दा',
    why: 'In case delivery happens in the vehicle before reaching hospital. Lay it under the mother immediately. Keep folded inside the bottom of the hospital bag from week 36.',
    whyNe: 'अस्पताल पुग्नुअघि गाडीमै सुत्केरी हुने अवस्था आएमा प्रयोग गर्न। यसलाई तुरुन्तै आमाको मुनि ओछ्याउनुहोस्। ३६ औं हप्तादेखि नै यसलाई अस्पतालको झोलाको पिँधमा पट्याएर राख्नुहोस्।'
  },
  {
    id: 102,
    name: 'Clean thick towel or cloth for emergency delivery',
    nameNe: 'आकस्मिक सुत्केरीको लागि सफा बाक्लो तौलिया वा कपडा',
    why: 'If the baby arrives before reaching hospital, someone needs something clean to receive the baby. Keep one folded under the hospital bag at all times from week 36.',
    whyNe: 'अस्पताल पुग्नु अघि नै बच्चा जन्मिएमा, बच्चालाई सुरक्षित रूपमा समात्न कसैलाई सफा कुरा चाहिन्छ। ३६ औं हप्तादेखि सधैं अस्पतालको झोलामुनि एउटा पट्याएर राख्नुहोस्।'
  },
  {
    id: 103,
    name: 'Cord tie or clean string (get from FCHV at week 36 visit)',
    nameNe: 'नाइटो बाँध्ने धागो वा सफा डोरी (३६ औं हप्ताको जाँचमा महिला स्वास्थ्य स्वयंसेविकाबाट लिनुहोस्)',
    why: 'For tying the umbilical cord if emergency delivery happens at home or in a vehicle. Do NOT cut the cord — just tie it and rush to hospital. Ask your FCHV to give you one at your 36-week visit.',
    whyNe: 'घरमा वा गाडीमा आकस्मिक सुत्केरी भएमा नाइटो बाँध्न प्रयोग गरिन्छ। नाइटोलाई न काट्नुहोस् - केवल बाँधेर छिटो अस्पताल जानुहोस्। ३६ हप्ताको जाँचमा महिला स्वास्थ्य स्वयंसेविकालाई यो माग्नुहोस्।'
  },
];

export const DECISION_TREE = {
  Q1: {
    question: 'How did labour start?',
    questionNe: 'व्यथा कसरी सुरु भयो?',
    options: [
      { text: 'Contractions only, no bleeding, no fluid', textNe: 'व्यथा मात्र, रगत वा पानी नबगेको', next: 'Q2', type: 'normal' },
      { text: 'Water broke — clear fluid', textNe: 'पानी बग्यो - सफा पानी', next: 'Q3', type: 'normal' },
      { text: 'Water broke — green, brown, or foul-smelling fluid', textNe: 'पानी बग्यो - हरियो, खैरो वा गन्हाउने पानी', result: 'GO_NOW', type: 'urgent' },
      { text: 'Heavy bleeding', textNe: 'धेरै रगत बग्यो', result: 'CALL_102', type: 'urgent' },
    ],
  },
  Q2: {
    question: 'How far apart are contractions?',
    questionNe: 'कति-कति समयको फरकमा व्यथा लागिरहेको छ?',
    options: [
      { text: 'More than 20 minutes apart, irregular', textNe: '२० मिनेटभन्दा बढीको फरकमा, अनियमित', result: 'REST_HOME', type: 'normal' },
      { text: '5–10 minutes apart, lasting 45–60 seconds, for 1 hour (first baby)', textNe: '५-१० मिनेटको फरकमा, ४५-६० सेकेन्डसम्म रहने, १ घण्टादेखि (पहिलो बच्चा)', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'Less than 5 minutes apart', textNe: '५ मिनेटभन्दा कमको फरकमा', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Second or third baby, any regular contractions', textNe: 'दोस्रो वा तेस्रो बच्चा, नियमित व्यथा', result: 'GO_FAST', type: 'urgent' },
    ],
  },
  Q3: {
    question: 'How long ago did water break?',
    questionNe: 'कति समय अघि पानी बग्यो?',
    options: [
      { text: 'Less than 1 hour ago, no contractions', textNe: '१ घण्टाभन्दा कम समय अघि, व्यथा नलागेको', result: 'CALL_DOCTOR', type: 'uncertain' },
      { text: 'More than 1 hour ago, no contractions', textNe: '१ घण्टाभन्दा बढी समय अघि, व्यथा नलागेको', result: 'GO_HOSPITAL', type: 'urgent' },
      { text: 'Contractions have also started', textNe: 'व्यथा पनि सुरु भयो', result: 'GO_HOSPITAL', type: 'urgent' },
    ],
  },
};

export const RESULTS = {
  GO_NOW: {
    title: 'GO NOW',
    titleNe: 'अहिले नै जानुहोस्',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else calls the ambulance',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    pointsNe: [
      'अस्पतालको झोला लिनुहोस् — यो पहिल्यै तयार हुनुपर्छ',
      'कसैलाई एम्बुलेन्स बोलाउन लगाएर आफ्नो डाक्टरलाई फोन गर्नुहोस्',
      'आफैं गाडी नचलाउनुहोस्',
      'अस्पतालको भर्ना कक्षमा फोन गरेर आफू आउँदै गरेको जानकारी दिनुहोस्',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes. Please prepare the maternity ward.',
    scriptNe: 'हामी सुत्केरी गराउन आउँदैछौं। बिरामीको नाम [X], डाक्टर [Y] को निगरानीमा। करिब [Z] मिनेटमा आइपुग्छौं। कृपया म्याटरनिटी वार्ड तयार राख्नुहोला।',
  },
  CALL_102: {
    title: 'CALL 102 NOW',
    titleNe: 'अहिले नै १०२ मा फोन गर्नुहोस्',
    type: 'red',
    points: [
      'Call 102 immediately — do not wait',
      'Lie down on your left side',
      'Do not try to drive',
      'Someone else should grab the bag while you call',
    ],
    pointsNe: [
      'तुरुन्तै १०२ मा फोन गर्नुहोस् — पर्खेर नबस्नुहोस्',
      'देब्रे कोल्टे परेर सुत्नुहोस्',
      'आफैं गाडी चलाउने प्रयास नगर्नुहोस्',
      'तपाईं फोन गर्दै गर्दा अरु कसैलाई झोला लिन लगाउनुहोस्',
    ],
    script: 'Pregnant woman with heavy bleeding. Address is [location]. Nearest landmark is [X]. Please send ambulance immediately.',
    scriptNe: 'गर्भवती महिलालाई अत्यधिक रक्तस्राव भइरहेको छ। ठेगाना [स्थान] हो। नजिकैको चिनिने ठाउँ [X] हो। कृपया तुरुन्तै एम्बुलेन्स पठाउनुहोस्।',
  },
  GO_HOSPITAL: {
    title: 'GO TO HOSPITAL NOW',
    titleNe: 'अहिले नै अस्पताल जानुहोस्',
    type: 'red',
    points: [
      'Grab the hospital bag — it should already be packed',
      'Call your doctor while someone else arranges transport',
      'Do not drive yourself',
      'Call the hospital admission desk to say you are coming',
    ],
    pointsNe: [
      'अस्पतालको झोला लिनुहोस् — यो पहिल्यै तयार हुनुपर्छ',
      'गाडीको व्यवस्था गर्न लगाएर डाक्टरलाई फोन गर्नुहोस्',
      'आफैं गाडी नचलाउनुहोस्',
      'अस्पतालको भर्ना कक्षमा फोन गरेर आफू आउँदै गरेको जानकारी दिनुहोस्',
    ],
    script: 'We are coming for delivery. Patient name [X], under Dr. [Y]. Arriving in approximately [Z] minutes.',
    scriptNe: 'हामी सुत्केरी गराउन आउँदैछौं। बिरामीको नाम [X], डाक्टर [Y] को निगरानीमा। करिब [Z] मिनेटमा आइपुग्छौं।',
  },
  GO_FAST: {
    title: 'GO NOW (Fast Labour)',
    titleNe: 'अहिले नै जानुहोस् (छिटो व्यथा)',
    type: 'red',
    points: [
      'Second/third labours move much faster',
      'Grab the hospital bag and go immediately',
      'Call the doctor on the way',
    ],
    pointsNe: [
      'दोस्रो/तेस्रो सुत्केरी व्यथा धेरै छिटो हुन्छ',
      'अस्पतालको झोला लिनुहोस् र तुरुन्तै जानुहोस्',
      'बाटोमै जाँदा डाक्टरलाई फोन गर्नुहोस्',
    ],
    script: 'Second pregnancy, regular contractions have started. We are on the way to the hospital.',
    scriptNe: 'दोस्रो गर्भावस्था, नियमित व्यथा सुरु भयो। हामी अस्पताल जाँदैछौं।',
  },
  CALL_DOCTOR: {
    title: 'CALL DOCTOR FIRST',
    titleNe: 'पहिले डाक्टरलाई फोन गर्नुहोस्',
    type: 'amber',
    points: [
      'Call your OB/GYN or ANM now',
      'Keep the phone on and stay near your hospital bag',
      'Make sure your support person is with you or on their way',
      'Head to hospital when doctor advises or if things change fast',
    ],
    pointsNe: [
      'अहिले नै आफ्नो डाक्टर वा नर्सलाई फोन गर्नुहोस्',
      'फोन खुला राख्नुहोस् र अस्पतालको झोला नजिकै बस्नुहोस्',
      'तपाईंको सहयोगी व्यक्ति तपाईंसँग वा आउँदै गरेको सुनिश्चित गर्नुहोस्',
      'डाक्टरले सल्लाह दिएमा वा अवस्था छिटो परिवर्तन भएमा अस्पताल जानुहोस्',
    ],
    script: 'Labour has started. Contractions are [X] minutes apart, lasting about [X] seconds. My water has [broken / not broken]. What should I do?',
    scriptNe: 'व्यथा सुरु भयो। हरेक [X] मिनेटमा [X] सेकेन्डसम्म व्यथा लागिरहेको छ। मेरो पानी [बगेको छ / बगेको छैन]। मैले के गर्नुपर्छ?',
  },
  REST_HOME: {
    title: 'REST AT HOME',
    titleNe: 'घरमै आराम गर्नुहोस्',
    type: 'green',
    points: [
      'Time contractions — note start time, end time, gap between each',
      'Drink water and eat a light meal if possible',
      'Take a warm shower to ease early discomfort',
      'Call your doctor if contractions become regular at 10 min apart',
    ],
    pointsNe: [
      'व्यथाको समय हेर्नुहोस् — सुरु भएको समय, सकिएको समय र बीचको दूरी लेख्नुहोस्',
      'सकिन्छ भने पानी पिउनुहोस् र हल्का खानेकुरा खानुहोस्',
      'प्रारम्भिक दुखाइ कम गर्न मनतातो पानीले नुहाउनुहोस्',
      'व्यथा नियमित भई १० मिनेटको फरकमा आउन थालेमा डाक्टरलाई फोन गर्नुहोस्',
    ],
    script: 'Contractions have started but are still far apart. I will monitor and call when they are 5 minutes apart.',
    scriptNe: 'व्यथा सुरु भएको छ तर अझै धेरै समयको फरकमा छ। म निगरानी गर्छु र ५ मिनेटको फरकमा आएपछि फोन गर्नेछु।',
  },
};

export const RIDE_GUIDE = [
  { step: 1, title: 'Confirm labour is real', titleNe: 'व्यथा वास्तविक हो भन्ने पक्का गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Time at least 3 contractions. If they are regular and getting stronger, it is real. Stop timing and start moving.', descNe: 'कम्तिमा ३ वटा व्यथाको समय हेर्नुहोस्। यदि तिनीहरू नियमित छन् र कडा हुँदैछन् भने, यो वास्तविक व्यथा हो। समय हेर्न छोड्नुहोस् र अस्पताल जाने तयारी गर्नुहोस्।' },
  { step: 2, title: 'Call the doctor', titleNe: 'डाक्टरलाई फोन गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'While the mother breathes through contractions, the partner calls the OB/GYN. Say: "Labour has started. Contractions are [X] minutes apart. We are heading to [hospital name]. Please alert the ward."', descNe: 'आमाले व्यथाको समयमा लामो सास लिँदा, सहयोगीले डाक्टरलाई फोन गर्नुपर्छ। भन्नुहोस्: "व्यथा सुरु भयो। [X] मिनेटको फरकमा व्यथा लागिरहेको छ। हामी [अस्पतालको नाम] जाँदैछौं। कृपया वार्डमा जानकारी दिनुहोला।"' },
  { step: 3, title: 'Grab the bag and documents', titleNe: 'झोला र कागजातहरू लिनुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'The hospital bag should already be packed. Grab it, grab the documents folder, and grab cash. Do not repack. Do not look for missing items — go.', descNe: 'अस्पतालको झोला पहिले नै तयार हुनुपर्छ। यसलाई लिनुहोस्, कागजातको फोल्डर र नगद लिनुहोस्। फेरि प्याक गर्ने प्रयास नगर्नुहोस्। छुटेका सामान नखोज्नुहोस् — अस्पताल जानुहोस्।' },
  { step: 4, title: 'Call the hospital', titleNe: 'अस्पतालमा फोन गर्नुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Call the admission desk number you saved. Say: "We are coming for delivery. Patient name [X], arriving in [Z] minutes." This gets a bed and staff ready before you arrive.', descNe: 'तपाईंले सुरक्षित राखेको भर्ना कक्षको नम्बरमा फोन गर्नुहोस्। भन्नुहोस्: "हामी सुत्केरी गराउन आउँदैछौं। बिरामीको नाम [X], [Z] मिनेटमा आइपुग्छौं।" यसले तपाईं पुग्नु अघि ओछ्यान र कर्मचारी तयार राख्न मद्दत गर्छ।' },
  { step: 5, title: 'Inform family', titleNe: 'परिवारलाई जानकारी दिनुहोस्', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'One call or message to the immediate family. Keep it short. More updates later. The mother does not need to make any calls right now.', descNe: 'नजिकको परिवारलाई एउटा छोटो फोन वा सन्देश पठाउनुहोस्। थप जानकारी पछि दिनुहोला। आमाले अहिले कुनै फोन गर्नु पर्दैन।' },
  { step: 6, title: 'Support during the ride', titleNe: 'यात्रा गर्दाको सहयोग', who: 'Partner', whoNe: 'श्रीमान/सहयोगी', desc: 'Sit beside the mother in the back. Apply back pressure between contractions using your fist or the massage roller. Remind her to breathe slowly. Do not speed dangerously — steady is safer.', descNe: 'आमाको छेउमा पछाडिको सिटमा बस्नुहोस्। व्यथाको बीचमा आफ्नो मुठी वा मसाज रोलर प्रयोग गरेर कम्मरमा दबाब दिनुहोस्। उनलाई बिस्तारै सास फेर्न सम्झाउनुहोस्। धेरै छिटो गाडी नचलाउनुहोस् — स्थिर गति बढी सुरक्षित हुन्छ।' },
  { step: 7, title: 'Arrive at hospital', titleNe: 'अस्पताल पुग्ने', who: 'Both', whoNe: 'दुवै', desc: 'Go directly to the maternity emergency entrance, not the main reception. Say the patient name and doctor name at the desk. Hand over the ANC card and blood group card first — these are the two things they ask for immediately.', descNe: 'मुख्य काउन्टरमा नभई सिधै म्याटरनिटी आकस्मिक कक्ष (Maternity Emergency) मा जानुहोस्। त्यहाँ बिरामी र डाक्टरको नाम भन्नुहोस्। सुरुमा ANC कार्ड र ब्लड ग्रुप कार्ड दिनुहोस् — उनीहरूले तुरुन्तै माग्ने यी दुई कुराहरू हुन्।' },
];

export const BREATHING_GUIDE = [
  {
    id: 1,
    title: 'Slow breathing',
    titleNe: 'बिस्तारै सास फेर्ने',
    when: 'Early labour, contractions 10–20 min apart',
    whenNe: 'प्रारम्भिक व्यथा, १०-२० मिनेटको फरकमा आउँदा',
    inhale: 4,
    hold: 0,
    exhale: 6,
    cue: 'Breathe in slowly through your nose... breathe out like you are fogging a mirror.',
    cueNe: 'नाकबाट बिस्तारै सास लिनुहोस्... ऐनामा बाफ निकालेजस्तै बिस्तारै सास छोड्नुहोस्।',
  },
  {
    id: 2,
    title: 'Light breathing',
    titleNe: 'हल्का सास फेर्ने',
    when: 'Active labour, contractions 5 min apart',
    whenNe: 'सक्रिय व्यथा, ५ मिनेटको फरकमा आउँदा',
    inhale: 2,
    hold: 0,
    exhale: 2,
    cue: 'Light, quick breaths. In and out through the mouth. Do not hold your breath.',
    cueNe: 'हल्का र छिटो सास फेर्नुहोस्। मुखबाटै भित्र र बाहिर लिनुहोस्। सास नरोक्नुहोस्।',
  },
  {
    id: 3,
    title: 'Pushing breath',
    titleNe: 'बल गर्दा सास फेर्ने',
    when: 'During pushing stage',
    whenNe: 'बल गर्ने अवस्थामा',
    inhale: 3,
    hold: 6,
    exhale: 3,
    cue: 'Big breath in, hold, push down like you are trying to open a tight jar — then release slowly.',
    cueNe: 'लामो सास भित्र तान्नुहोस्, रोक्नुहोस्, कसिलो बिर्को खोल्न बल गरेजस्तै तलतिर बल लगाउनुहोस् — अनि बिस्तारै छोड्नुहोस्।',
  },
];
