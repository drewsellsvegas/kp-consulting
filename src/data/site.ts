// ---------------------------------------------------------------------------
// Single source of truth for the site. Edit here, not in the page templates.
// Lines marked TODO need Kent's real details before launch.
// ---------------------------------------------------------------------------

const ORIGIN = import.meta.env.PUBLIC_SITE_ORIGIN || 'https://kpconsulting.co';
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'KP Consulting',
  legalName: 'KP Consulting LLC', // TODO confirm entity name
  tagline: 'Food & protein industry advisors',
  domain: 'kpconsulting.co', // TODO confirm domain
  /** Origin + base path. Everything absolute (canonical, OG, JSON-LD) builds off this. */
  url: `${ORIGIN}${BASE}`,
  description:
    'Food and protein industry consulting from a 37-year operator who has sat on all three sides of the table — retailer, supplier, and technology. Supply chain traceability, meat category management, and retail go-to-market.',
  // TODO replace with Kent's real contact details before launch
  email: 'kent@kpconsulting.co',
  phone: '',
  phoneDisplay: '',
  location: 'Windsor, Colorado',
  serviceArea: 'United States & Canada',
  linkedin: 'https://www.linkedin.com/in/kent-partida-08738741',
  // Formspree / Basin / Netlify endpoint for the contact form. Empty = the form
  // falls back to a mailto link so nothing silently disappears.
  formEndpoint: '',
} as const;

export const principal = {
  name: 'Kent Partida',
  title: 'Principal',
  role: 'Food & Protein Industry Consultant',
  credential: 'University of Southern California — Food Industry Management',
};

// The three sides of the table. Order matters: this is the career, in sequence,
// and the home page draws it as one continuous 37-year bar.
export const sides = [
  {
    key: 'retailer',
    label: 'Retailer',
    org: 'The Kroger Company',
    years: '1988 – 2009',
    start: 1988,
    end: 2009,
    line: 'Ran the meat case from the inside.',
    detail:
      'Twenty-one years at the largest grocer in the country, ending as Director of Meat and Seafood over 153 stores across five states and four banners.',
    proof: [
      { value: '$450M', label: 'Annual meat & seafood sales managed' },
      { value: '153', label: 'Stores, 5 states, 4 banners' },
      { value: '+$8M', label: 'Over profit budget, 2009' },
    ],
  },
  {
    key: 'supplier',
    label: 'Supplier',
    org: 'Meyer Natural Foods',
    years: '2009 – 2015',
    start: 2009,
    end: 2015,
    line: 'Sold into the case from the other side.',
    detail:
      'Senior Vice President of Sales and Marketing for Laura’s Lean Beef, Meyer Natural Angus, Dakota Grass Fed and Local Harvest — a 30-person sales team and a $2.7M marketing budget.',
    proof: [
      { value: '30', label: 'Person sales team led' },
      { value: '1.5M lbs', label: 'Year-over-year volume growth' },
      { value: 'Record', label: 'Margins in a down cattle market' },
    ],
  },
  {
    key: 'technology',
    label: 'Technology',
    org: 'Merck Animal Health / IdentiGen',
    years: '2016 – 2025',
    start: 2016,
    end: 2025,
    line: 'Proved what was in the case was what the label said.',
    detail:
      'Associate Director of Value Chain and Consumer Affairs — DNA traceability for the beef, pork and seafood supply chains of major retailers, food service operators and protein producers.',
    proof: [
      { value: 'DNA', label: 'Origin & species verification' },
      { value: '9 yrs', label: 'Inside food traceability tech' },
      { value: '100K', label: 'Social audience built' },
    ],
  },
];

export const services = [
  {
    slug: 'supply-chain-traceability',
    order: '01',
    name: 'Supply Chain Traceability',
    short: 'Traceability & origin verification',
    tagline: 'Prove where your protein comes from — before a buyer, an auditor, or a reporter asks.',
    summary:
      'Nine years inside DNA traceability for beef, pork and seafood. Build a chain of custody your customers will actually believe, and turn it into a selling story instead of a compliance cost.',
    outcomes: [
      'A documented chain of custody from producer to case',
      'Species and origin claims you can defend under audit',
      'Traceability positioned as a margin story, not a cost line',
      'A recall footprint measured in lots, not in truckloads',
    ],
    engagement: [
      {
        step: 'Map',
        body:
          'Walk the chain end to end — producer, packer, further processor, distributor, retailer — and mark every point where custody changes hands and evidence stops.',
      },
      {
        step: 'Verify',
        body:
          'Choose the verification method that fits the claim: DNA matching, audit trail, third-party certification, or a combination. Not every claim needs a lab.',
      },
      {
        step: 'Prove',
        body:
          'Stand the program up with your suppliers, document it in the language buyers and auditors use, and pressure-test it before a customer does.',
      },
      {
        step: 'Sell',
        body:
          'Translate the program into buyer-facing proof: line reviews, packaging claims, and the answer to “how do you know?” that closes the account.',
      },
    ],
    faqs: [
      {
        q: 'What is DNA traceability, in plain terms?',
        a: 'A sample is taken from the animal at the source and again from the finished product. If the two profiles match, the product came from that animal. It is the only method that verifies origin from the product itself rather than from paperwork that travels alongside it.',
      },
      {
        q: 'We already have supplier affidavits. Isn’t that enough?',
        a: 'Affidavits prove someone signed something. They do not prove the product in the case is the product described. For most claims that is fine, until the day it is not — a species substitution, a mislabeled lot, a reporter with a lab test. The question to answer is which of your claims would survive an independent test.',
      },
      {
        q: 'Is this only for large producers?',
        a: 'No. Mid-size producers often get more out of it, because traceability is one of the few places a smaller supplier can out-prove a national brand at a line review.',
      },
      {
        q: 'How long does a traceability program take to stand up?',
        a: 'A chain map and gap assessment takes weeks. A working verification program with suppliers on board is typically a season. The selling story can start well before the program is finished.',
      },
    ],
  },
  {
    slug: 'meat-category-management',
    order: '02',
    name: 'Meat & Perishables Category Management',
    short: 'Category management',
    tagline: 'Fix the case with the data the retailer is already looking at.',
    summary:
      'Twenty-one years running perishables inside Kroger, then six years selling into it with 84.51°/dunnhumby data. Fact-based selling, assortment, pricing and service case programs that move the whole department, not one item.',
    outcomes: [
      'An assortment built on shopper data, not on gut and history',
      'A service case program with a reason to exist and a margin to show for it',
      'Pricing and mix decisions that hold up in a category review',
      'Category teams who can build the story themselves next time',
    ],
    engagement: [
      {
        step: 'Read the case',
        body:
          'Sales, margin, shrink, and movement by item — plus what the shopper data says about who is buying, what else lands in the basket, and who left.',
      },
      {
        step: 'Cut the tail',
        body:
          'Find the items earning their linear feet and the ones renting it. Assortment decisions are the fastest, cheapest lever in most meat departments.',
      },
      {
        step: 'Build the program',
        body:
          'Service case, private label, value-added and ready-made — the high-margin items that most departments under-merchandise because nobody owns them.',
      },
      {
        step: 'Hand it over',
        body:
          'Train the team on fact-based selling so the next review is built by your people, with your numbers.',
      },
    ],
    faqs: [
      {
        q: 'What is fact-based selling?',
        a: 'Bringing the retailer a recommendation built from their own shopper data — 84.51°, dunnhumby, Circana — instead of a deck about your brand. It changes the meeting from a pitch into a category conversation, and it is the single biggest difference between suppliers who get shelf and suppliers who get a follow-up email.',
      },
      {
        q: 'Do you work with retailers, suppliers, or both?',
        a: 'Both, never on the same category at the same time. Having sat in both chairs is the point — a supplier gets told how the buyer will actually read the deck, and a retailer gets told what the supplier is holding back.',
      },
      {
        q: 'Is a service case still worth running?',
        a: 'In the right store, yes — it is where lamb, veal, high-end cuts and ready-made items live, and those carry the department margin. A service case run without a selling program is just labor. That distinction is most of the work.',
      },
    ],
  },
  {
    slug: 'retail-go-to-market',
    order: '03',
    name: 'Retail Go-to-Market',
    short: 'Getting into national retail',
    tagline: 'Get in front of the buyer, and be ready when you get there.',
    summary:
      'Kroger, Target, Safeway, Wegmans, DECA — accounts landed and grown from the supplier side, by someone who spent two decades as the buyer. Category reviews, private label programs, new item launches and e-commerce.',
    outcomes: [
      'A target account list ranked by what you can actually service',
      'A line review deck built the way buyers read them',
      'Introductions where a warm one exists',
      'A launch plan that survives first-year velocity reviews',
    ],
    engagement: [
      {
        step: 'Qualify',
        body:
          'Be honest about capacity, cost structure and food safety readiness before spending a year chasing an account that would break you.',
      },
      {
        step: 'Position',
        body:
          'Build the story around the retailer’s category gap, not around your origin story. Price, pack, and the shelf slot you intend to take.',
      },
      {
        step: 'Open',
        body:
          'Get to the right merchandiser, at the right point in the review calendar, with the right first ask — which is rarely a national rollout.',
      },
      {
        step: 'Hold',
        body:
          'Most brands lose the account in year two, not at the pitch. Plan for velocity, promotion, and the first supply problem before it happens.',
      },
    ],
    faqs: [
      {
        q: 'Can you guarantee a meeting with a national buyer?',
        a: 'No, and be careful of anyone who does. What is offered is a relationship network built over 37 years, an honest read on whether your brand is ready, and a package the buyer can say yes to. Some accounts open in a call; some take three review cycles.',
      },
      {
        q: 'We’re regional. Should we be chasing national?',
        a: 'Often not yet. Regional chains and local programs — the Wegmans-style local beef model is a good example — are frequently the faster, more profitable path, and they build the velocity record a national buyer will ask for anyway.',
      },
      {
        q: 'Do you help with private label?',
        a: 'Yes. Private label primal programs were built and rolled out across Kroger divisions from the supplier side. For the right producer it is the fastest way to meaningful volume, with a clear-eyed view of what it does to your brand.',
      },
    ],
  },
  {
    slug: 'multicultural-food-marketing',
    order: '04',
    name: 'Hispanic & Multicultural Food Marketing',
    short: 'Hispanic & multicultural shoppers',
    tagline: 'Merchandise to the shopper actually standing in front of the case.',
    summary:
      'Appointed to Kroger’s Latino Committee to build the Hispanic merchandising plan adopted across every Kroger division. Later took a national beef brand bilingual — website, packaging and campaign.',
    outcomes: [
      'A cut and pack assortment matched to how the shopper cooks',
      'Bilingual packaging and signage that reads as native, not translated',
      'Store-level merchandising plans that respect regional differences',
      'Social and campaign work aimed at the shopper, not at the trade',
    ],
    engagement: [
      {
        step: 'Learn the shopper',
        body:
          'Hispanic is not one shopper. Mexican, Central American, Caribbean and South American households buy different cuts, different pack sizes, and on different days.',
      },
      {
        step: 'Fix the assortment',
        body:
          'The cuts, thicknesses and pack sizes the department is missing. This is almost always where the fastest sales lift lives.',
      },
      {
        step: 'Speak the language',
        body:
          'Bilingual packaging, signage and web that was written in Spanish rather than run through translation — including the cut names, which rarely translate literally.',
      },
      {
        step: 'Merchandise it',
        body:
          'A plan the stores can actually execute, with the flexibility to differ by market instead of one planogram for the country.',
      },
    ],
    faqs: [
      {
        q: 'Is this just translating our packaging?',
        a: 'No, and translated packaging without the right assortment behind it is worse than nothing — it signals you are courting a shopper whose cuts you do not carry. Assortment first, language second.',
      },
      {
        q: 'Why does the meat department matter so much here?',
        a: 'Because it drives the trip. Hispanic households over-index on fresh meat spend and on cooking from scratch, and the store that gets the meat case right frequently gets the whole basket.',
      },
    ],
  },
];

/**
 * The career, role by role, straight off the résumé. Every number here came
 * from Kent's own record — do not round or embellish them.
 */
export const roles = [
  {
    company: 'Merck Animal Health / IdentiGen',
    location: 'Lawrence, Kansas',
    years: '2016 – 2025',
    title: 'Associate Director, Value Chain & Consumer Affairs',
    bullets: [
      'Worked directly with major food retailers, food service operators and protein producers to validate and improve their supply chains using DNA traceability technology.',
      'Secured new business across every segment on the strength of existing industry relationships and food sector knowledge.',
      'Ran all social, web and marketing functions for the value chain business, building a consumer audience of roughly 100,000.',
      'Used consumer analytics and social campaigns to grow the millennial segment in store and to answer growing demand for food transparency.',
      'Verified exact origin of both meat and seafood and confirmed approved species through the supply chain — the core defense against substitution and mislabeling.',
    ],
  },
  {
    company: 'Meyer Natural Foods',
    location: 'Loveland, Colorado',
    years: '2009 – 2015',
    title: 'Senior Vice President of Sales & Marketing (2012–2015)',
    bullets: [
      'Led a 30-person sales team across Laura’s Lean Beef, Meyer Natural Angus, Dakota Grass Fed Beef and Local Harvest Beef in the U.S. and Canada.',
      'Managed the marketing department and a $2.7M budget, including all social, web and public relations agency work.',
      'Built a category management team using independent research and 84.51°/dunnhumby data, driving sales through fact-based selling.',
      'Grew sales by more than 1.5 million pounds year over year in both 2014 and 2015.',
      'Delivered record-high company profit margins in 2013 and 2014 — in a down cattle market.',
      'Developed a national service case program for Kroger, rolling out primals under their private label across all divisions.',
      'Launched new product lines under Laura’s Lean Beef including beef jerky and e-commerce.',
      'Built the local beef program for Wegmans stores, still the fastest-growing segment of that beef program.',
      'Converted the Laura’s Lean website to bilingual and developed bilingual package labels.',
    ],
  },
  {
    company: 'Meyer Natural Foods',
    location: 'Loveland, Colorado',
    years: '2009 – 2011',
    title: 'Vice President, National Accounts — New Business Development',
    bullets: [
      'Managed Kroger, Target, Safeway and DECA accounts, growing both natural and organic beef programs.',
      'Expanded Laura’s Lean Beef in all accounts for three consecutive years.',
      'Developed the first grass fed beef programs at Target and DECA, plus additional retail accounts nationwide.',
      'Landed multiple new accounts across the U.S. and Canada with Prime and Choice Angus programs.',
    ],
  },
  {
    company: 'The Kroger Company',
    location: 'Indianapolis, Indiana',
    years: '2007 – 2009',
    title: 'Director of Meat & Seafood',
    bullets: [
      'Managed meat and seafood in 153 stores across five states under four banners, with annual sales over $450 million growing more than 8% every year.',
      'Exceeded the profit budget by $8 million in 2009.',
      'Managed and mentored 10 meat supervisors across the operating states.',
      'Built service case selling programs around high-end items — lamb, veal and ready-made — increasing sales 10% in the first year executed.',
    ],
  },
  {
    company: 'Food4Less / Kroger',
    location: 'Chicago, Illinois',
    years: '2002 – 2006',
    title: 'Director of Perishables',
    bullets: [
      'Owned all perishable departments in a new division rollout for Kroger — meat, deli and produce — with full P&L, pricing, staffing and procurement responsibility.',
      'Drove the highest single-store meat department sales in the Kroger enterprise, exceeding $300,000 per week in several locations.',
      'Led the entire Kroger enterprise in private label sales for the deli and meat departments.',
      'Appointed to the Kroger Latino Committee and built the Hispanic merchandising plan adopted by every Kroger division in the United States.',
    ],
  },
];

export const education = [
  { school: 'University of Southern California', detail: 'Food Industry Management', year: '2006' },
  { school: 'ASLAN — Other-Centered Selling Workshop', detail: 'Sales methodology', year: '2023' },
  { school: 'Merck — Key Account Management Program', detail: 'Key account management', year: '2024' },
];

export const proofPoints = [
  { value: '37', label: 'Years in meat, retail and food marketing', note: '1988 – 2025' },
  { value: '$450M', label: 'Retail meat & seafood P&L managed', note: 'Kroger, 153 stores' },
  { value: '3', label: 'Sides of the table', note: 'Retailer · Supplier · Technology' },
  { value: '100K', label: 'Social audience built in food', note: 'Consumer affairs' },
];

/**
 * Companies Kent worked inside or sold into. These are former employers and
 * former accounts — NOT clients of KP Consulting, and not endorsements. The
 * page label has to keep saying so.
 */
export const careerBrands = [
  'Kroger',
  'Meyer Natural Foods',
  'Merck Animal Health',
  'IdentiGen',
  'Target',
  'Safeway',
  'Wegmans',
];

export const heroProof = [
  { icon: 'years', value: '37 years', label: 'In meat, retail and food marketing' },
  { icon: 'chart', value: '$450M', label: 'Retail meat & seafood P&L managed' },
  { icon: 'chain', value: 'All 3 sides', label: 'Retailer, supplier and technology' },
] as const;

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/track-record/', label: 'Track record' },
  { href: '/insights/', label: 'Insights' },
  { href: '/contact/', label: 'Contact' },
];
