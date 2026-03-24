export type BagCategory = 'Clothing' | 'Hygiene' | 'Comfort' | 'Baby';

export interface BagItem {
  id: number;
  category: BagCategory;
  name: string;
  nameNe: string;
  why: string;
  whyNe: string;
}

export const CATEGORY_COLORS: Record<BagCategory, { text: string; bg: string }> = {
  Clothing: { text: '#2B6D45', bg: '#EBF5ED' },
  Hygiene: { text: '#1C6B9E', bg: '#EAF3FA' },
  Comfort: { text: '#6B5DD3', bg: '#FDF2F4' },
  Baby: { text: '#9A5A17', bg: '#FBF2E1' },
};

export const CATEGORY_NAMES_NE: Record<BagCategory, string> = {
  Clothing: 'पहिरन',
  Hygiene: 'सरसफाइ',
  Comfort: 'आराम',
  Baby: 'बच्चा'
};

export const BAG_ITEMS: BagItem[] = [
  // CLOTHING
  { id: 1, category: 'Clothing', name: 'Loose cotton nightgown or front-open kurta (2–3 pcs)', nameNe: 'सुतीको खुकुलो नाइटगाउन वा अगाडिबाट खुल्ने कुर्ता (२-३ वटा)', why: 'Easy to open for breastfeeding, doctor examinations, and IV lines. Tight clothing is impossible to manage after delivery.', whyNe: 'स्तनपान गराउन, डाक्टरको जाँच गर्न र सलाइन पानी जोड्न सजिलो हुन्छ। सुत्केरीपछि कसिलो कपडा लगाउन धेरै गाह्रो हुन्छ।' },
  { id: 2, category: 'Clothing', name: 'High-waisted soft underwear (3–4 pcs)', nameNe: 'नरम र कम्मरसम्म माथि आउने भित्री वस्त्र (३-४ वटा)', why: 'Supports the postpartum belly and sits comfortably above stitches from normal delivery or C-section.', whyNe: 'सुत्केरीपछिको पेटलाई सहारा दिन्छ र सामान्य डेलिभरी वा शल्यक्रियाको टाँकामा नपर्ने गरी सजिलै लगाउन सकिन्छ।' },
  { id: 3, category: 'Clothing', name: 'Warm shawl or light cardigan', nameNe: 'न्यानो सल वा हल्का स्विटर', why: 'Labour rooms and recovery wards are kept cold. You will need warmth especially during long labour at night.', whyNe: 'सुत्केरी गराउने कोठा र वार्डहरू चिसो राखिएका हुन्छन्। विशेष गरी राति लामो समयसम्म व्यथा लाग्दा न्यानो कपडाको आवश्यकता पर्छ।' },
  { id: 4, category: 'Clothing', name: 'Rubber slippers or flat sandals', nameNe: 'रबरका चप्पल वा समतल चप्पल', why: 'Non-slip and easy to slide on when bending down is painful after delivery. Hospital floors are often wet.', whyNe: 'चिप्लिने डर हुँदैन र सुत्केरीपछि निहुरिन गाह्रो हुँदा लगाउन सजिलो हुन्छ। अस्पतालका भुइँहरू प्रायः भिजेका हुन्छन्।' },
  { id: 5, category: 'Clothing', name: 'Warm socks (2 pairs)', nameNe: 'न्यानो मोजा (२ जोर)', why: 'Feet get very cold during long labour, especially when an IV drip is running.', whyNe: 'विशेष गरी सलाइन पानी दिइरहेको बेला लामो व्यथा लाग्दा खुट्टा धेरै चिसो हुन्छ।' },
  // HYGIENE
  { id: 6, category: 'Hygiene', name: 'Maternity overnight pads (2 packs, heavy-flow)', nameNe: 'सुत्केरीका लागि विशेष म्याटरनिटी प्याड (२ प्याकेट)', why: 'Postpartum bleeding (lochia) is much heavier than a normal period and lasts 4–6 weeks. Regular thin pads will not absorb enough.', whyNe: 'सुत्केरीपछिको रक्तस्राव सामान्य महिनावारीभन्दा धेरै हुन्छ र ४–६ हप्तासम्म रहन्छ। साधारण पातलो प्याडले यसलाई राम्रोसँग सोस्न सक्दैन।' },
  { id: 7, category: 'Hygiene', name: 'Perineal rinse bottle (peri bottle)', nameNe: 'पोस्टपार्टम वाश बोटल (पेरी बोटल)', why: 'For gently rinsing the stitched area after using the toilet. Wiping causes pain and infection risk — rinsing with warm water is much safer.', whyNe: 'शौचालय प्रयोग गरिसकेपछि टाँका लगाइएको भागलाई बिस्तारै सफा गर्न। पुछ्दा दुख्छ र संक्रमणको जोखिम हुन्छ — मनतातो पानीले सफा गर्नु धेरै सुरक्षित हुन्छ।' },
  { id: 8, category: 'Hygiene', name: 'Nursing bra, 2 pcs, front-clip style', nameNe: 'दूध खुवाउन सजिलो हुने ब्रा (२ वटा)', why: 'Milk comes in on day 2–3 and breasts become very full and tender. A front-clip nursing bra allows easy breastfeeding.', whyNe: '२–३ दिनमा दूध आउन थाल्छ र स्तन भारी तथा दुख्ने हुन्छ। अगाडिबाट खुल्ने ब्राले स्तनपान गराउन सजिलो बनाउँछ।' },
  { id: 9, category: 'Hygiene', name: 'Breast pads (disposable or washable)', nameNe: 'ब्रेस्ट प्याड (डिस्पोजेबल वा धुने मिल्ने)', why: 'Milk leaks without warning, especially when the baby cries. Breast pads prevent wet patches.', whyNe: 'विशेष गरी बच्चा रुँदा दूध अचानक चुहिन सक्छ। ब्रेस्ट प्याडले कपडा भिज्नबाट जोगाउँछ।' },
  { id: 10, category: 'Hygiene', name: 'Toothbrush, toothpaste, mild soap, small towel', nameNe: 'टुथब्रश, टुथपेस्ट, नरम साबुन, सानो तौलिया', why: 'Basic hygiene is essential for the mother\'s recovery during a 2–5 day hospital stay.', whyNe: 'अस्पतालमा २–५ दिन बस्दा आमाको स्वास्थ्य सुधारका लागि आधारभूत सरसफाइ आवश्यक हुन्छ।' },
  { id: 11, category: 'Hygiene', name: 'Hair ties or clips', nameNe: 'कपाल बाँध्ने रबर वा क्लिप', why: 'Hair gets in the way during pushing and recovery.', whyNe: 'बल गर्ने र सुत्केरीपछिको समयमा कपालले बाधा पुर्‍याउँछ।' },
  { id: 12, category: 'Hygiene', name: 'Lip balm', nameNe: 'लिप बाम (ओठ फुट्न नदिने मलम)', why: 'Breathing exercises, oxygen masks, and dry hospital air cause lips to crack very fast during labour.', whyNe: 'सास फेर्ने अभ्यास, अक्सिजन मास्क र अस्पतालको सुक्खा हावाले व्यथाको समयमा ओठ छिट्टै फुट्छ।' },
  { id: 13, category: 'Hygiene', name: 'Coconut or mustard oil (small bottle)', nameNe: 'नरिवल वा तोरीको तेल (सानो सिसी)', why: 'Used for perineal massage, body care after delivery, and dryness relief. Trusted in Nepali postpartum tradition.', whyNe: 'सुत्केरीपछि शरीरको मालिस र सुख्खापन हटाउन प्रयोग गरिन्छ। नेपाली परम्परामा यसको धेरै प्रयोग हुन्छ।' },

  // COMFORT
  { id: 14, category: 'Comfort', name: 'Pillow from home (1–2)', nameNe: 'घरबाट सिरानी (१–२ वटा)', why: 'Hospital pillows are thin and flat. A familiar pillow reduces anxiety and helps with positioning during labour and breastfeeding.', whyNe: 'अस्पतालका सिरानीहरू पातलो र च्याप्टो हुन्छन्। घरको सिरानीले चिन्ता कम गर्नुका साथै व्यथा लाग्दा र स्तनपान गराउँदा सजिलो बनाउँछ।' },
  { id: 15, category: 'Comfort', name: 'Massage oil or back roller', nameNe: 'मालिस गर्ने तेल वा ब्याक रोलर', why: 'Back pressure during contractions is very painful. The partner can use oil or a roller to relieve lower back pain.', whyNe: 'व्यथाको समयमा कम्मरमा धेरै दबाब र दुखाइ हुन्छ। श्रीमान् वा सहयोगीले तेल वा रोलर प्रयोग गरेर कम्मरको दुखाइ कम गर्न मद्दत गर्न सक्छन्।' },
  { id: 16, category: 'Comfort', name: 'Thermos flask', nameNe: 'थर्मस', why: 'For warm water or soup. Hospital water is often cold and Nepali postpartum tradition avoids cold fluids after delivery.', whyNe: 'मनतातो पानी वा सुपका लागि। अस्पतालको पानी प्रायः चिसो हुन्छ र सुत्केरीपछि चिसो पिउन सिफारिस गरिँदैन।' },
  { id: 17, category: 'Comfort', name: 'Tiffin box and snacks for family', nameNe: 'टिफिन बक्स र परिवारका लागि खाजा', why: 'Many government hospitals in Nepal do not provide meals. Family members waiting 10–20 hours need food from home.', whyNe: 'नेपालका धेरै सरकारी अस्पतालहरूमा खानाको व्यवस्था हुँदैन। १०–२० घण्टा पर्खिरहने परिवारका सदस्यहरूलाई खाना आवश्यक पर्छ।' },
  { id: 18, category: 'Comfort', name: 'Phone charger and power bank', nameNe: 'फोन चार्जर र पावर बैंक', why: 'Phones die fast when the family is calling continuously with updates.', whyNe: 'परिवारले निरन्तर खबर लिइरहने हुँदा फोनको ब्याट्री छिट्टै सकिन्छ।' },
  { id: 19, category: 'Comfort', name: 'Earphones with calming playlist', nameNe: 'इयरफोन र शान्त संगीत', why: 'Music or guided breathing audio significantly helps manage pain during early labour contractions.', whyNe: 'प्रारम्भिक व्यथाको समयमा संगीत वा सास फेर्ने अभ्यासले दुखाइ व्यवस्थापन गर्न मद्दत गर्छ।' },
  { id: 20, category: 'Comfort', name: 'Notebook and pen', nameNe: 'कापी र कलम', why: 'Write down everything the doctor says. Stress causes people to forget instructions immediately. Record medication names, doses, and follow-up dates.', whyNe: 'डाक्टरले भनेका सबै कुराहरू लेख्नुहोस्। तनावका कारण निर्देशनहरू तुरुन्तै बिर्सन सकिन्छ।' },
  // BABY
  { id: 21, category: 'Baby', name: 'Soft muslin cloth squares (4–5 pcs)', nameNe: 'नरम मलमलको कपडा (४–५ वटा)', why: 'Used as swaddle, nappy liner, burp cloth, and skin-to-skin cover. The most versatile item in the baby bag.', whyNe: 'बेर्न, न्यापी लाइनरको रूपमा, डकार निकाल्दा राख्न र स्किन-टु-स्किनका लागि प्रयोग हुन्छ। यो धेरै उपयोगी सामान हो।' },
  { id: 22, category: 'Baby', name: 'Newborn onesies or side-tie suits (2–3 pcs)', nameNe: 'भर्खर जन्मेको बच्चाको लागि भोटो वा लुगा (२–३ वटा)', why: 'Side-tie or front-snap designs are easiest when the baby is very small and needs to be dressed quickly.', whyNe: 'छेउमा तुना भएको वा अगाडिबाट खुल्ने डिजाइन सानो बच्चालाई लगाउन सजिलो हुन्छ।' },
  { id: 23, category: 'Baby', name: 'Baby cap, woolen or cotton', nameNe: 'बच्चाको टोपी (उनी वा सुतीको)', why: 'Newborns lose heat rapidly through their heads. A cap must be worn immediately after birth.', whyNe: 'नवजात शिशुले टाउकोबाट छिटो तापक्रम गुमाउँछन्। जन्मिएलगत्तै टोपी लगाइदिनु पर्छ।' },
  { id: 24, category: 'Baby', name: 'Mittens and socks for newborn', nameNe: 'नवजात शिशुको लागि पन्जा र मोजा', why: 'Prevents the baby from scratching their own face and keeps tiny feet warm.', whyNe: 'बच्चाले आफ्नै अनुहार कोर्नबाट जोगाउँछ र साना खुट्टाहरूलाई न्यानो राख्छ।' },
  { id: 25, category: 'Baby', name: 'Soft baby blanket or swaddle wrap (2 pcs)', nameNe: 'नरम बच्चाको ब्ल्याङ्केट वा र्याप (२ वटा)', why: 'Swaddling mimics the womb and helps newborns feel secure and sleep better.', whyNe: 'बच्चालाई गर्भजस्तै महसुस गराउँछ, सुरक्षित महसुस गर्न मद्दत गर्छ र राम्रो निद्रा लाग्छ।' },
  { id: 26, category: 'Baby', name: 'Newborn diapers (1 small pack)', nameNe: 'नवजात शिशुको डाइपर (१ सानो प्याकेट)', why: 'Newborns urinate and pass meconium frequently in the first hours — diapers are needed immediately.', whyNe: 'बच्चाहरूले सुरुका घण्टाहरूमा बारम्बार पिसाब र दिशा (मेकोनियम) गर्ने हुँदा डाइपर तुरुन्तै आवश्यक हुन्छ।' },
  { id: 27, category: 'Baby', name: 'Unscented baby wipes', nameNe: 'बास्ना नभएको बेबी वाइप्स', why: 'For gentle cleaning before proper bathing begins. Must be unscented as newborn skin is extremely sensitive.', whyNe: 'राम्ररी नुहाउनु अघि विस्तारै सफा गर्न। नवजात शिशुको छाला धेरै संवेदनशील हुन्छ।' },
  { id: 28, category: 'Baby', name: 'Cotton balls', nameNe: 'कपासका डल्लाहरू', why: 'For cleaning the umbilical cord stump, eyes, and other delicate areas. Softer and safer than cloth.', whyNe: 'नाइटो, आँखा र अन्य संवेदनशील भागहरू सफा गर्न। कपडाभन्दा नरम र सुरक्षित हुन्छ।' },
];

export interface DoNotPackItem {
  id: number;
  name: string;
  nameNe: string;
  whyNot: string;
  whyNotNe: string;
}

export const DO_NOT_PACK_ITEMS: DoNotPackItem[] = [
  { id: 1, name: 'Strong perfume or scented products', nameNe: 'कडा अत्तर वा बास्नादार उत्पादनहरू', whyNot: 'Newborn airways are extremely sensitive. Strong scents can irritate their developing lungs and cause respiratory distress in the first hours of life.', whyNotNe: 'नवजात शिशुको सासप्रश्वासको नली अत्यन्त संवेदनशील हुन्छ। कडा बास्नाले फोक्सोमा असर गर्न सक्छ र सास फेर्न गाह्रो बनाउन सक्छ।' },
  { id: 2, name: 'Underwired bra', nameNe: 'तार भएको ब्रा', whyNot: 'When milk comes in on day 2–3, breasts become very engorged. Underwires press on milk ducts causing blockages (mastitis) and extreme pain.', whyNotNe: '२–३ दिनमा दूध आउँदा स्तन धेरै भारी हुन्छ। तार भएको ब्राले दूधका नलीमा दबाब दिन्छ र बन्द हुने (मास्टाइटिस) तथा धेरै दुखाइ हुन सक्छ।' },
  { id: 3, name: 'Regular thin sanitary pads', nameNe: 'साधारण पातलो स्यानिटरी प्याड', whyNot: 'Postpartum bleeding is far heavier than a normal period. Regular pads soak through in minutes. Only thick maternity-specific pads are safe.', whyNotNe: 'सुत्केरीपछिको रक्तस्राव सामान्य महिनावारीभन्दा धेरै हुन्छ। साधारण प्याड केही मिनेटमै भिज्छ। बाक्लो म्याटरनिटी प्याड मात्र सुरक्षित हुन्छ।' },
  { id: 4, name: 'Tight jeans or fitted trousers', nameNe: 'कसिलो जिन्स वा पाइन्ट', whyNot: 'After a C-section incision or perineal stitches, any tight clothing on the lower body is impossible to wear and causes severe pain.', whyNotNe: 'शल्यक्रिया वा टाँका पछि तल्लो भागमा कसिलो कपडा लगाउन असम्भव हुन्छ र धेरै दुखाइ हुन्छ।' },
  { id: 5, name: 'Baby powder (talcum powder)', nameNe: 'बेबी पाउडर (टेलकम पाउडर)', whyNot: 'Fine talc particles are inhaled into the baby\'s developing lungs, increasing risk of respiratory problems. Not recommended by doctors for newborns.', whyNotNe: 'मसिना कणहरू बच्चाको फोक्सोमा जान सक्छन् र सासप्रश्वासको समस्या बढाउन सक्छन्। डाक्टरहरूले नवजातका लागि सिफारिस गर्दैनन्।' },
  { id: 6, name: 'Kajal or kohl for baby\'s eyes', nameNe: 'बच्चाको आँखामा लगाउने गाजल', whyNot: 'A common traditional practice, but kajal contains lead compounds which are absorbed through delicate newborn skin around the eyes, causing lead poisoning.', whyNotNe: 'गाजलमा सिसा हुन्छ जुन बच्चाको कोमल छालाबाट शरीरमा जान सक्छ र विषाक्त असर गर्न सक्छ।' },
  { id: 7, name: 'Honey or ghee to feed newborn orally', nameNe: 'बच्चालाई खुवाउन मह वा घिउ', whyNot: 'Honey can contain Clostridium botulinum spores causing infant botulism — potentially fatal in babies under 1 year. Ghee fed before breastfeeding is established causes choking and aspiration.', whyNotNe: 'महमा खतरनाक जीवाणु हुन सक्छ जुन साना बच्चाका लागि घातक हुन सक्छ। स्तनपान सुरु हुनु अघि घिउ खुवाउँदा बच्चा घुट्न सक्छ।' },
  { id: 8, name: 'High heels or closed formal shoes', nameNe: 'हाइ हिल्स वा बन्द जुत्ता', whyNot: 'Hospital floors are wet and slippery. Falls after delivery are dangerous when the body is weakened. Feet also swell after delivery making closed shoes impossible.', whyNotNe: 'अस्पतालका भुइँहरू भिजेका र चिप्ला हुन्छन्। सुत्केरीपछि शरीर कमजोर हुँदा लड्नु खतरनाक हुन्छ। खुट्टा सुन्निने हुँदा बन्द जुत्ता लगाउन गाह्रो हुन्छ।' },
];