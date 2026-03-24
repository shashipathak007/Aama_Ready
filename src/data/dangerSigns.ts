export type DangerTier = 'go_now' | 'call_doctor' | 'wait_home';

export interface DangerSign {
  id: number;
  tier: DangerTier;
  title: string;
  titleNe?: string;
  explanation: string;
  explanationNe?: string;
}

export const TIER_CONFIG: Record<DangerTier, { label: string; labelNe: string; text: string; bg: string; border: string }> = {
  go_now: { label: 'Go NOW', labelNe: 'अहिल्यै जानुहोस्', text: '#A73C44', bg: '#FCEDED', border: '#DE8E94' },
  call_doctor: { label: 'Call Doctor', labelNe: 'डाक्टरलाई फोन गर्नुहोस्', text: '#9A5A17', bg: '#FBF2E1', border: '#D69E58' },
  wait_home: { label: 'Wait at Home', labelNe: 'घरमै पर्खनुहोस्', text: '#2B6D45', bg: '#EBF5ED', border: '#6EB88B' },
};

export const DANGER_SIGNS: DangerSign[] = [
  // GO NOW
  { id: 1, tier: 'go_now', 
    title: 'Heavy vaginal bleeding — soaking more than 1 pad per hour', 
    titleNe: 'अत्यधिक रक्तस्राव — एक घण्टामै १ भन्दा बढी प्याड भिज्नु',
    explanation: 'This can indicate placental abruption or placenta previa. Both cut off oxygen to the baby and can cause life-threatening haemorrhage within minutes. Call 102 and go immediately. Do not stop at a clinic.',
    explanationNe: 'यसले साल छुट्टिएको वा साल पाठेघरको मुखमा रहेको संकेत गर्न सक्छ। दुवै अवस्थामा बच्चालाई अक्सिजन पुग्दैन र केही मिनेटमै ज्यान जोखिममा पर्ने रक्तस्राव हुन सक्छ। तुरुन्तै १०२ मा फोन गरेर अस्पताल जानुहोस्। क्लिनिकमा नरोकिनुहोस्।'
  },
  { id: 2, tier: 'go_now', 
    title: 'Baby has stopped moving completely for 4+ hours', 
    titleNe: 'बच्चाले ४ घण्टाभन्दा बढी समयसम्म चल्न पूर्ण रूपमा छोड्यो भने',
    explanation: 'Perform a kick count — you should feel at least 10 movements in 2 hours. Zero movement means oxygen or blood supply may be severely compromised. Every minute matters for the baby\'s brain.',
    explanationNe: 'लात्ती हानेको गन्नुहोस् — २ घण्टामा कम्तीमा १० पटक चलेको महसुस हुनुपर्छ। शून्य चाल भनेको अक्सिजन वा रगत आपूर्तिमा गम्भीर असर परेको हुन सक्छ। बच्चाको मस्तिष्कको लागि प्रत्येक मिनेट महत्त्वपूर्ण हुन्छ।'
  },
  { id: 3, tier: 'go_now', 
    title: 'Water broke with green, brown, or foul-smelling fluid', 
    titleNe: 'हरियो, खैरो वा गन्हाउने पानी बगेमा (पानी फुट्दा)',
    explanation: 'This is meconium in the amniotic fluid — the baby has passed stool inside the womb, a sign of fetal distress. If inhaled during birth, it causes meconium aspiration syndrome — a serious lung condition.',
    explanationNe: 'यो एम्नियोटिक द्रब्यमा मेकोनियम (बच्चाको दिसा) मिसिएको हो — बच्चाले गर्भभित्रै दिसा गरेको छ, जुन बच्चालाई गाह्रो भएको संकेत हो। जन्मँदा यो सासबाट तानिएमा फोक्सोको गम्भीर अवस्था (मेकोनियम एस्पिरेसन सिन्ड्रोम) गराउँछ।'
  },
  { id: 4, tier: 'go_now', 
    title: 'Severe headache + blurry vision + sudden swelling of face and hands', 
    titleNe: 'कडा टाउको दुखाइ + धमिलो दृष्टि + अनुहार र हात अचानक सुन्निनु',
    explanation: 'Classic signs of preeclampsia, which can rapidly progress to eclampsia (seizures) and stroke. One of the leading causes of maternal death in Nepal. Requires IV magnesium sulphate immediately.',
    explanationNe: 'यी प्रिएक्लाम्प्सियाका मुख्य लक्षण हुन्, जुन चाँडै एक्लाम्प्सिया (छारेरोग/काम्ने) र स्ट्रोकमा परिणत हुन सक्छ। नेपालमा মাতৃ मृत्युको प्रमुख कारणमध्ये यो एक हो। तुरुन्तै नसाबाट म्याग्नेसियम सल्फेट दिनुपर्छ।'
  },
  { id: 5, tier: 'go_now', 
    title: 'Seizures or loss of consciousness', 
    titleNe: 'काम्ने (छारेरोग जस्तो) वा बेहोस हुने',
    explanation: 'This is eclampsia. Call 102 immediately and say: "Pregnant woman having seizures." Needs IV magnesium sulphate within minutes to prevent brain damage or death.',
    explanationNe: 'यो एक्लाम्प्सिया हो। तुरुन्तै १०२ मा फोन गरेर भन्नुहोस्: "गर्भवती महिला कामिरहेकी छिन्।" मस्तिष्कमा क्षति पुग्न नदिन वा मृत्युबाट बचाउन केही मिनेटभित्रै नसाबाट म्याग्नेसियम सल्फेट दिनुपर्छ।'
  },
  { id: 6, tier: 'go_now', 
    title: 'Umbilical cord visible or felt at the vaginal opening', 
    titleNe: 'योनीको मुखमा नाइटोको नाल देखिने वा छुँदा थाहा हुने',
    explanation: 'Cord prolapse — the cord has slipped ahead of the baby. Every contraction cuts off oxygen. Get on hands and knees to reduce cord pressure. Requires emergency C-section within minutes.',
    explanationNe: 'यो कर्ड प्रोलाप्स हो — नाइटोको नाल बच्चाभन्दा अगाडि चिप्लिएर तल आएको छ। हरेक पटक व्यथा लाग्दा अक्सिजन रोकिन्छ। नालको दबाब कम गर्न हात र घुँडाको भरमा बस्नुहोस्। केही मिनेटभित्रै आकस्मिक शल्यक्रिया (सिजरियन) आवश्यक पर्छ।'
  },
  { id: 7, tier: 'go_now', 
    title: 'High fever above 38°C with chills and shivering', 
    titleNe: 'कम्पनसहित ३८°C भन्दा बढी ज्वरो आउनु',
    explanation: 'Suggests chorioamnionitis (infection of the amniotic sac) or kidney infection. Untreated infection can trigger premature labour or sepsis in both mother and baby.',
    explanationNe: 'यसले एम्नियोटिक थैलीको संक्रमण वा मिर्गौलाको संक्रमण संकेत गर्छ। उपचार नगरिएको संक्रमणले समयअगावै सुत्केरी गराउन सक्छ वा आमा र बच्चा दुवैमा रगतको संक्रमण (सेप्सिस) गराउन सक्छ।'
  },
  { id: 8, tier: 'go_now', 
    title: 'Sudden difficulty breathing or chest pain', 
    titleNe: 'अचानक सास फेर्न गाह्रो हुनु वा छाती दुख्नु',
    explanation: 'Can indicate pulmonary embolism — a blood clot in the lungs, which is more common during pregnancy and is immediately life-threatening.',
    explanationNe: 'यसले फोक्सोमा रगत जमेको (पल्मोनरी एम्बोलिज्म) संकेत गर्न सक्छ, जुन गर्भावस्थामा बढी हुन्छ र यसले तुरुन्तै ज्यान जोखिममा पार्छ।'
  },

  // CALL DOCTOR FIRST
  { id: 9, tier: 'call_doctor', 
    title: 'Water broke but no contractions yet', 
    titleNe: 'पानी फुट्यो तर व्यथा सुरु भएको छैन',
    explanation: 'Membranes have ruptured but labour has not started. Go to hospital within 1 hour. After waters break, infection risk increases every hour. Call your doctor first to alert the labour ward.',
    explanationNe: 'थैली फुटेको छ तर व्यथा सुरु भएको छैन। १ घण्टाभित्र अस्पताल जानुहोस्। पानी फुटेपछि हरेक घण्टा संक्रमणको जोखिम बढ्छ। प्रसूति वार्डलाई खबर गर्न पहिले आफ्नो डाक्टरलाई फोन गर्नुहोस्।'
  },
  { id: 10, tier: 'call_doctor', 
    title: 'Contractions 5 minutes apart, lasting 50–60 seconds, for 1 hour (first baby)', 
    titleNe: 'व्यथा ५-५ मिनेटमा आउने, ५०-६० सेकेन्ड रहने र लगातार १ घण्टासम्म यस्तै भइरहने (पहिलो बच्चा)',
    explanation: 'This is the 5-1-1 rule for first-time mothers. Contractions at this frequency mean active labour has likely begun. Call your doctor to confirm before leaving home.',
    explanationNe: 'पहिलो पटक आमा बन्दै हुनुहुन्छ भने यो ५-१-१ को नियम हो। यसरी व्यथा लाग्नुको अर्थ प्रश्रव पीडा राम्ररी सुरु भइसकेको छ। घरबाट निस्कनुअघि पक्का गर्न डाक्टरलाई फोन गर्नुहोस्।'
  },
  { id: 11, tier: 'call_doctor', 
    title: 'Second or third pregnancy with any regular contractions', 
    titleNe: 'दोस्रो वा तेस्रो गर्भावस्थामा नियमित रूपमा व्यथा लाग्नु',
    explanation: 'Labour moves much faster with each birth. What took 12 hours the first time may take 2–3 hours the second. Call the moment contractions start to pattern.',
    explanationNe: 'हरेक जन्मसँगै प्रसूतिको समय छिटो हुन्छ। पहिलो पटक १२ घण्टा लागेको थियो भने दोस्रो पटक २-३ घण्टा मात्र लाग्न सक्छ। व्यथाको निश्चित ढाँचा सुरु हुनेबित्तिकै फोन गर्नुहोस्।'
  },
  { id: 12, tier: 'call_doctor', 
    title: 'Light spotting — small amount of pink or brown discharge', 
    titleNe: 'हल्का रगत देखा पर्नु — थोरै गुलाबी वा खैरो स्राव',
    explanation: 'May be the "bloody show" — the mucus plug releasing as the cervix dilates. Describe the amount and colour to your doctor so they can advise whether to come in.',
    explanationNe: 'यो "शो" देखा परेको हुन सक्छ — पाठेघरको मुख खुल्दा निस्कने खकार जस्तो पानी। अस्पताल आउनुपर्छ कि पर्दैन भनेर सल्लाह लिन आफ्नो डाक्टरलाई मात्रा र रङ बताउनुहोस्।'
  },
  { id: 13, tier: 'call_doctor', 
    title: 'Baby moving noticeably less than usual (not stopped, just reduced)', 
    titleNe: 'बच्चा सामान्यभन्दा निकै कम चलेको महसुस हुनु (चल्न नछोडेको, तर घटेको)',
    explanation: 'Early sign of possible baby stress. Doctor will ask you to come in for a non-stress test (NST). Do not wait until the next morning.',
    explanationNe: 'बच्चालाई गाह्रो हुन लागेको सुरुवाती संकेत। डाक्टरले तपाईंलाई बच्चाको धड्कन जाँच्न (NST) बोलाउन सक्छन्। भोलि बिहानसम्म भनेर नकुर्नुहोस्।'
  },
  { id: 14, tier: 'call_doctor', 
    title: 'Regular lower back pain and pelvic pressure in a pattern', 
    titleNe: 'तल्लो ढाड दुख्ने र पेल्भिस (तल्लो पेट) मा नियमित रूपमा दबाब पर्नु',
    explanation: 'Back labour is real. Some women feel contractions in the lower back. If the pain comes and goes regularly and gets stronger, call your doctor.',
    explanationNe: 'ढाडबाट व्यथा सुरु हुनु वास्तविक हो। केही महिलाहरूलाई तल्लो ढाडबाट व्यथा लाग्छ। यदि दुखाइ नियमित आउँछ, जान्छ र झन् कडा हुँदै जान्छ भने, डाक्टरलाई फोन गर्नुहोस्।'
  },

  // WAIT AT HOME
  { id: 15, tier: 'wait_home', 
    title: 'Irregular contractions more than 20 minutes apart', 
    titleNe: 'अनियमित व्यथा जुन २० मिनेटभन्दा बढीको फरकमा आउँछ',
    explanation: 'Very early or latent labour, or Braxton Hicks. Rest at home, drink water, eat lightly, and keep timing. Going to hospital too early often results in being sent back home, which is exhausting.',
    explanationNe: 'यो व्यथाको एकदमै सुरुवाती चरण वा नक्कली व्यथा हुन सक्छ। घरमै आराम गर्नुहोस्, पानी पिउनुहोस्, हल्का खानेकुरा खानुहोस् र समय हेरिरहनुहोस्। धेरै चाँडै अस्पताल जाँदा प्रायः घर फर्काइन्छ, जसले थकाउँछ मात्र।'
  },
  { id: 16, tier: 'wait_home', 
    title: 'Braxton Hicks — tightening that stops when you move or change position', 
    titleNe: 'नक्कली ব্যथा — पेट कस्सिने जुन यताउति हिँड्दा वा बसाइ फेर्दा रोकिन्छ',
    explanation: 'Practice contractions. They feel like tightening but are not regular, do not get stronger, and stop when you walk or change position. True labour contractions get stronger no matter what you do.',
    explanationNe: 'यो शरीरको अभ्यास मात्र हो। यसमा पेट कस्सिए जस्तो लाग्छ तर यो नियमित हुँदैन, कडा हुँदै जाँदैन, र हिँड्दा वा पोजिसन परिवर्तन गर्दा रोकिन्छ। वास्तविक सुत्केरी व्यथा तपाईंले जे गरे पनि कडा हुँदै जान्छ।'
  },
  { id: 17, tier: 'wait_home', 
    title: 'Mild ankle or foot swelling by end of day', 
    titleNe: 'दिनको अन्त्यसम्ममा गोलीगाँठो वा खुट्टा हल्का सुन्निनु',
    explanation: 'Very common in late pregnancy due to increased blood volume and gravity. Normal as long as it goes away overnight and does not affect the face or hands (which would be preeclampsia).',
    explanationNe: 'रगतको मात्रा बढ्ने र गुरुत्वाकर्षणको कारण गर्भावस्थाको अन्त्यतिर यो धेरै सामान्य हो। रातभर सुत्दा यो हराउँछ र अनुहार वा हातमा असर गर्दैन (जुन प्रिएक्लाम्प्सियाको लक्षण हो) भने यो सामान्य हो।'
  },
  { id: 18, tier: 'wait_home', 
    title: 'Nesting instinct — strong urge to clean and prepare the home', 
    titleNe: 'घर सफा गर्ने र तयारी गर्ने तीव्र इच्छा हुनु',
    explanation: 'Completely normal. Rest, finalise your hospital bag, check your contact list, and try to sleep. You will need the energy for real labour.',
    explanationNe: 'यो एकदम सामान्य हो। आराम गर्नुहोस्, आफ्नो अस्पतालको झोला तयार पार्नुहोस्, सम्पर्क सूची जाँच्नुहोस्, र सुत्ने प्रयास गर्नुहोस्। वास्तविक प्रश्रव वेदनाको लागि तपाईंलाई ऊर्जा चाहिन्छ।'
  },
  { id: 19, tier: 'wait_home', 
    title: 'Mild backache without a regular pattern', 
    titleNe: 'कुनै नियमित समयबिना हल्का ढाड दुख्नु',
    explanation: "Common in the third trimester due to the baby's weight. Use a pillow between your knees and a warm compress. If it becomes rhythmic and patterned, call your doctor.",
    explanationNe: 'बच्चाको तौलका कारण तेस्रो त्रैमासिकमा यो सामान्य हो। घुँडाको बीचमा तकिया राख्नुहोस् र मनतातो पानीले सेकाउनुहोस्। यदि यो नियमित र ढाँचामा आउन थाल्यो भने, आफ्नो डाक्टरलाई फोन गर्नुहोस्।'
  },
];
