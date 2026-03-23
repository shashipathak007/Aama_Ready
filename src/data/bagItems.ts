export type BagCategory = 'Clothing' | 'Hygiene' | 'Comfort' | 'Baby';

export interface BagItem {
  id: number;
  category: BagCategory;
  name: string;
  why: string;
}

export const CATEGORY_COLORS: Record<BagCategory, { text: string; bg: string }> = {
  Clothing: { text: '#2B6D45', bg: '#EBF5ED' },
  Hygiene: { text: '#1C6B9E', bg: '#EAF3FA' },
  Comfort: { text: '#6B5DD3', bg: '#FDF2F4' },
  Baby: { text: '#9A5A17', bg: '#FBF2E1' },
};

export const BAG_ITEMS: BagItem[] = [
  // CLOTHING
  { id: 1, category: 'Clothing', name: 'Loose cotton nightgown or front-open kurta (2–3 pcs)', why: 'Easy to open for breastfeeding, doctor examinations, and IV lines. Tight clothing is impossible to manage after delivery.' },
  { id: 2, category: 'Clothing', name: 'High-waisted soft underwear (3–4 pcs)', why: 'Supports the postpartum belly and sits comfortably above stitches from normal delivery or C-section.' },
  { id: 3, category: 'Clothing', name: 'Warm shawl or light cardigan', why: 'Labour rooms and recovery wards are kept cold. You will need warmth especially during long labour at night.' },
  { id: 4, category: 'Clothing', name: 'Rubber slippers or flat sandals', why: 'Non-slip and easy to slide on when bending down is painful after delivery. Hospital floors are often wet.' },
  { id: 5, category: 'Clothing', name: 'Warm socks (2 pairs)', why: 'Feet get very cold during long labour, especially when an IV drip is running.' },

  // HYGIENE
  { id: 6, category: 'Hygiene', name: 'Maternity overnight pads (2 packs, heavy-flow)', why: 'Postpartum bleeding (lochia) is much heavier than a normal period and lasts 4–6 weeks. Regular thin pads will not absorb enough.' },
  { id: 7, category: 'Hygiene', name: 'Perineal rinse bottle (peri bottle)', why: 'For gently rinsing the stitched area after using the toilet. Wiping causes pain and infection risk — rinsing with warm water is much safer.' },
  { id: 8, category: 'Hygiene', name: 'Nursing bra, 2 pcs, front-clip style', why: 'Milk comes in on day 2–3 and breasts become very full and tender. A front-clip nursing bra allows easy breastfeeding.' },
  { id: 9, category: 'Hygiene', name: 'Breast pads (disposable or washable)', why: 'Milk leaks without warning, especially when the baby cries. Breast pads prevent wet patches.' },
  { id: 10, category: 'Hygiene', name: 'Toothbrush, toothpaste, mild soap, small towel', why: 'Basic hygiene is essential for the mother\'s recovery during a 2–5 day hospital stay.' },
  { id: 11, category: 'Hygiene', name: 'Hair ties or clips', why: 'Hair gets in the way during pushing and recovery.' },
  { id: 12, category: 'Hygiene', name: 'Lip balm', why: 'Breathing exercises, oxygen masks, and dry hospital air cause lips to crack very fast during labour.' },
  { id: 13, category: 'Hygiene', name: 'Coconut or mustard oil (small bottle)', why: 'Used for perineal massage, body care after delivery, and dryness relief. Trusted in Nepali postpartum tradition.' },

  // COMFORT
  { id: 14, category: 'Comfort', name: 'Pillow from home (1–2)', why: 'Hospital pillows are thin and flat. A familiar pillow reduces anxiety and helps with positioning during labour and breastfeeding.' },
  { id: 15, category: 'Comfort', name: 'Massage oil or back roller', why: 'Back pressure during contractions is very painful. The partner can use oil or a roller to relieve lower back pain.' },
  { id: 16, category: 'Comfort', name: 'Thermos flask', why: 'For warm water or soup. Hospital water is often cold and Nepali postpartum tradition avoids cold fluids after delivery.' },
  { id: 17, category: 'Comfort', name: 'Tiffin box and snacks for family', why: 'Many government hospitals in Nepal do not provide meals. Family members waiting 10–20 hours need food from home.' },
  { id: 18, category: 'Comfort', name: 'Phone charger and power bank', why: 'Phones die fast when the family is calling continuously with updates.' },
  { id: 19, category: 'Comfort', name: 'Earphones with calming playlist', why: 'Music or guided breathing audio significantly helps manage pain during early labour contractions.' },
  { id: 20, category: 'Comfort', name: 'Notebook and pen', why: 'Write down everything the doctor says. Stress causes people to forget instructions immediately. Record medication names, doses, and follow-up dates.' },

  // BABY
  { id: 21, category: 'Baby', name: 'Soft muslin cloth squares (4–5 pcs)', why: 'Used as swaddle, nappy liner, burp cloth, and skin-to-skin cover. The most versatile item in the baby bag.' },
  { id: 22, category: 'Baby', name: 'Newborn onesies or side-tie suits (2–3 pcs)', why: 'Side-tie or front-snap designs are easiest when the baby is very small and needs to be dressed quickly.' },
  { id: 23, category: 'Baby', name: 'Baby cap, woolen or cotton', why: 'Newborns lose heat rapidly through their heads. A cap must be worn immediately after birth.' },
  { id: 24, category: 'Baby', name: 'Mittens and socks for newborn', why: 'Prevents the baby from scratching their own face and keeps tiny feet warm.' },
  { id: 25, category: 'Baby', name: 'Soft baby blanket or swaddle wrap (2 pcs)', why: 'Swaddling mimics the womb and helps newborns feel secure and sleep better.' },
  { id: 26, category: 'Baby', name: 'Newborn diapers (1 small pack)', why: 'Newborns urinate and pass meconium frequently in the first hours — diapers are needed immediately.' },
  { id: 27, category: 'Baby', name: 'Unscented baby wipes', why: 'For gentle cleaning before proper bathing begins. Must be unscented as newborn skin is extremely sensitive.' },
  { id: 28, category: 'Baby', name: 'Cotton balls', why: 'For cleaning the umbilical cord stump, eyes, and other delicate areas. Softer and safer than cloth.' },
];

export interface DoNotPackItem {
  id: number;
  name: string;
  whyNot: string;
}

export const DO_NOT_PACK_ITEMS: DoNotPackItem[] = [
  { id: 1, name: 'Strong perfume or scented products', whyNot: 'Newborn airways are extremely sensitive. Strong scents can irritate their developing lungs and cause respiratory distress in the first hours of life.' },
  { id: 2, name: 'Underwired bra', whyNot: 'When milk comes in on day 2–3, breasts become very engorged. Underwires press on milk ducts causing blockages (mastitis) and extreme pain.' },
  { id: 3, name: 'Regular thin sanitary pads', whyNot: 'Postpartum bleeding is far heavier than a normal period. Regular pads soak through in minutes. Only thick maternity-specific pads are safe.' },
  { id: 4, name: 'Tight jeans or fitted trousers', whyNot: 'After a C-section incision or perineal stitches, any tight clothing on the lower body is impossible to wear and causes severe pain.' },
  { id: 5, name: 'Baby powder (talcum powder)', whyNot: 'Fine talc particles are inhaled into the baby\'s developing lungs, increasing risk of respiratory problems. Not recommended by doctors for newborns.' },
  { id: 6, name: 'Kajal or kohl for baby\'s eyes', whyNot: 'A common traditional practice, but kajal contains lead compounds which are absorbed through delicate newborn skin around the eyes, causing lead poisoning.' },
  { id: 7, name: 'Honey or ghee to feed newborn orally', whyNot: 'Honey can contain Clostridium botulinum spores causing infant botulism — potentially fatal in babies under 1 year. Ghee fed before breastfeeding is established causes choking and aspiration.' },
  { id: 8, name: 'High heels or closed formal shoes', whyNot: 'Hospital floors are wet and slippery. Falls after delivery are dangerous when the body is weakened. Feet also swell after delivery making closed shoes impossible.' },
];
