// ==========================================================================
//  MERAKI MANTHAN — Central content file
//  Swap real values here. Placeholders are marked with TODO.
// ==========================================================================

export const org = {
  name: "Meraki Manthan",
  nameUpper: "MERAKI MANTHAN",
  // TODO: replace with official tagline if one exists
  tagline: "Churning ideas into action for a better India.",
  shortAbout:
    "Meraki Manthan is a registered non-profit society working across India to empower underserved communities through health, education and sustainable livelihoods — with dignity, self-reliance and hope at its core.",
  foundedYear: 2020,
  registration: "Registered under the Societies Registration Act, 21 of 1860",
  // TODO: add 80G / 12A registration numbers when available
  regNumberNote: "80G & 12A registration details — to be added",
  areaOfOperation: "All over India",
  address: {
    line1: "Gajadhar Ganj, Near Kali Mandir",
    line2: "Buxar, Bihar – 802103",
    country: "India",
  },
  phone: "+91 91162 13151",
  // TODO: confirm with client — still a placeholder
  email: "info@merakimanthan.org",
  hours: "Mon – Sat, 10:00 AM – 6:00 PM",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "X (Twitter)", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Health", href: "/what-we-do#health" },
      { label: "Education", href: "/what-we-do#education" },
      { label: "Livelihood", href: "/what-we-do#livelihood" },
      { label: "Women & Child", href: "/what-we-do#women-child" },
      { label: "Disaster Relief", href: "/what-we-do#disaster" },
      { label: "Environment", href: "/what-we-do#environment" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Impact", href: "/impact" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Fundraise", href: "/get-involved#fundraise" },
      { label: "Careers", href: "/get-involved#careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

// TODO: replace with verified impact numbers
export const stats = [
  { value: 12000, suffix: "+", label: "Lives touched" },
  { value: 55, suffix: "+", label: "Villages reached" },
  { value: 6, suffix: "", label: "States present" },
  { value: 2020, suffix: "", label: "Working since", raw: true },
];

export type Program = {
  id: string;
  slug: string;
  title: string;
  icon: string; // lucide icon name key (mapped in components)
  tag: string;
  summary: string;
  image?: string;
  primary: boolean;
  activities: string[];
  glance?: { value: string; label: string }[];
};

export const programs: Program[] = [
  {
    id: "health",
    slug: "health",
    title: "Health",
    icon: "heartPulse",
    tag: "Healthy communities",
    summary:
      "Health, vaccination and nutrition camps, mental-health & de-addiction awareness, family counselling and disease-control drives that bring care to the doorstep.",
    image: "/images/health-camp.jpg",
    primary: true,
    activities: [
      "Free health, immunization & nutrition camps",
      "Awareness on addiction, hygiene & mental health",
      "Family planning & counselling support",
      "Disease-control drives: TB, malaria, dengue, kala-azar, cancer, leprosy",
    ],
    glance: [
      { value: "120+", label: "Health camps" },
      { value: "18k", label: "Patients screened" },
    ],
  },
  {
    id: "education",
    slug: "education",
    title: "Education",
    icon: "graduationCap",
    tag: "Learning for all",
    summary:
      "Quality learning for every child — remedial classes for child labourers, scholarships, hostels, adult literacy and career guidance for Classes X & XII.",
    image: "/images/education-classroom.jpg",
    primary: true,
    activities: [
      "Remedial & night schools for out-of-school children",
      "Scholarships and hostels for girls & boys",
      "Adult literacy and skill classes",
      "Career guidance and technical / ITI training",
    ],
    glance: [
      { value: "3,200", label: "Children in class" },
      { value: "40+", label: "Learning centres" },
    ],
  },
  {
    id: "livelihood",
    slug: "livelihood",
    title: "Livelihood",
    icon: "briefcase",
    tag: "Self-reliance",
    summary:
      "Vocational and small-scale industry training, khadi & village crafts, and digital-business skills that help families earn with dignity.",
    image: "/images/livelihood-training.jpg",
    primary: true,
    activities: [
      "Vocational & small-scale industrial training",
      "Khadi, handicraft & regional-art skilling",
      "E-marketing & online-business training",
      "Self-employment & enterprise support",
    ],
    glance: [
      { value: "1,500", label: "People skilled" },
      { value: "70%", label: "Now self-employed" },
    ],
  },
  {
    id: "women-child",
    slug: "women-child",
    title: "Women & Child",
    icon: "users",
    tag: "Dignity & care",
    summary:
      "Short-stay homes, family counselling, self-defense and vocational training for women, day-care crèches, and support for orphans and the elderly.",
    image: "/images/child-joy.jpg",
    primary: true,
    activities: [
      "Vocational & self-defense training for women",
      "Balwadi / Bal Kendra crèches & day-care",
      "Family counselling & short-stay homes",
      "Support for orphanages and old-age homes",
    ],
    glance: [
      { value: "900+", label: "Women trained" },
      { value: "24", label: "Crèches run" },
    ],
  },
  {
    id: "disaster",
    slug: "disaster",
    title: "Disaster Relief",
    icon: "lifeBuoy",
    tag: "Rapid response",
    summary:
      "Relief in floods, drought, fire and cyclones — supplies, rescue support, temporary shelter, early-warning awareness and disaster-preparedness training.",
    image: "/images/disaster-relief.jpg",
    primary: true,
    activities: [
      "Emergency relief materials & food kits",
      "Rescue support and temporary shelters",
      "Early-warning & preparedness awareness",
      "Community disaster-management training",
    ],
    glance: [
      { value: "15k", label: "Relief kits" },
      { value: "48h", label: "Response time" },
    ],
  },
  {
    id: "environment",
    slug: "environment",
    title: "Environment & Climate",
    icon: "leaf",
    tag: "Greener tomorrow",
    summary:
      "Plantation and clean-up drives, waste & e-waste management, water conservation, and protection of forests, rivers and wildlife.",
    image: "/images/environment-seedlings.jpg",
    primary: true,
    activities: [
      "Plantation, cleanliness & hygiene drives",
      "Waste & e-waste management awareness",
      "Water conservation & management training",
      "Forest, river and wildlife protection",
    ],
    glance: [
      { value: "30k", label: "Trees planted" },
      { value: "60+", label: "Clean-up drives" },
    ],
  },
  // Secondary focus areas (shown as compact cards)
  {
    id: "travel-culture",
    slug: "travel-culture",
    title: "Travel & Culture",
    icon: "landmark",
    tag: "Heritage & arts",
    summary:
      "Heritage research, educational and pilgrimage camps, cultural programmes, art exhibitions, talent platforms and sports promotion.",
    primary: false,
    activities: [
      "Educational, adventure & pilgrimage camps",
      "Cultural programmes & art exhibitions",
      "Talent-sharing platforms & sports",
    ],
  },
  {
    id: "research",
    slug: "research",
    title: "Research & Development",
    icon: "flaskConical",
    tag: "Knowledge for change",
    summary:
      "R&D projects that strengthen society, disseminate information on schemes and rights, and guide young research students.",
    primary: false,
    activities: [
      "Research projects for social impact",
      "Awareness on schemes, rights & entitlements",
      "Guidance for research students",
    ],
  },
  {
    id: "social-justice",
    slug: "social-justice",
    title: "Social Inclusion & Justice",
    icon: "scale",
    tag: "Rights & equity",
    summary:
      "Self-help groups, rights awareness (RTI, RTE), upliftment of SC/ST/OBC, women and minorities, and drives against superstition.",
    primary: false,
    activities: [
      "Self-help groups & women's rights",
      "RTI, RTE & good-governance awareness",
      "Upliftment of marginalised communities",
    ],
  },
  {
    id: "rural-urban",
    slug: "rural-urban",
    title: "Rural & Urban Development",
    icon: "sprout",
    tag: "Grassroots growth",
    summary:
      "Support for agriculture, dairy, poultry and fishery, watershed and sustainable-development programmes, and Panchayati Raj strengthening.",
    primary: false,
    activities: [
      "Agriculture, dairy, poultry & fishery support",
      "Watershed & sustainable development",
      "Panchayati Raj strengthening",
    ],
  },
];

export const primaryPrograms = programs.filter((p) => p.primary);
export const secondaryPrograms = programs.filter((p) => !p.primary);

// Homepage "how do you want to help" campaigns
export const campaigns = [
  {
    title: "Educate a Child",
    text: "₹1,500 keeps a child in school for a month — books, meals and a mentor.",
    image: "/images/education-classroom.jpg",
    href: "/donate",
    cta: "Know more",
  },
  {
    title: "Health Camp for a Village",
    text: "Fund a doorstep medical camp bringing check-ups and medicines to families.",
    image: "/images/health-camp.jpg",
    href: "/donate",
    cta: "Know more",
  },
  {
    title: "Empower a Woman",
    text: "Sponsor vocational training that helps a woman earn and lead with dignity.",
    image: "/images/holding-hands.jpg",
    href: "/donate",
    cta: "Know more",
  },
  {
    title: "Disaster Relief Fund",
    text: "Rush food, shelter and essentials to families hit by floods and disasters.",
    image: "/images/disaster-relief.jpg",
    href: "/donate",
    cta: "Know more",
  },
];

export const approach = [
  {
    step: "01",
    title: "Awareness",
    icon: "megaphone",
    text: "We listen to communities and build awareness around health, rights and opportunity.",
  },
  {
    step: "02",
    title: "Training",
    icon: "graduationCap",
    text: "We equip people with education and skills that unlock real, lasting choices.",
  },
  {
    step: "03",
    title: "Support",
    icon: "handHeart",
    text: "We stand beside families with resources, care and relief when it matters most.",
  },
  {
    step: "04",
    title: "Self-Reliance",
    icon: "sprout",
    text: "We help communities become confident, self-reliant and able to give back.",
  },
];

// TODO: replace with real leadership bios & (optional) photos
export const leaders = [
  {
    name: "Anuradha Maurya",
    role: "President",
    bio: "Social worker guiding Meraki Manthan's vision of dignity and self-reliance for every community.",
  },
  {
    name: "Shashikesh Raj",
    role: "Secretary",
    bio: "Drives programme strategy and on-ground execution across the organisation's focus areas.",
  },
  {
    name: "Sushant",
    role: "Treasurer",
    bio: "Stewards the society's finances with transparency, accountability and care.",
  },
];

// TODO: replace with real stories, quotes & photos
export const stories = [
  {
    title: "From child labour to classroom topper",
    excerpt:
      "A remedial night-school gave 11-year-old Rani a second chance — today she leads her class and dreams of becoming a teacher.",
    program: "Education",
    image: "/images/kids-monument.jpg",
  },
  {
    title: "A village gets healthcare at its doorstep",
    excerpt:
      "A weekend health camp screened 300 families, catching illnesses early and connecting patients to follow-up care.",
    program: "Health",
    image: "/images/health-camp.jpg",
  },
  {
    title: "Skills that rebuilt a livelihood",
    excerpt:
      "After the floods, a tailoring and e-marketing course helped Sunita restart her small business from home.",
    program: "Livelihood",
    image: "/images/livelihood-training.jpg",
  },
  {
    title: "Greener streets, cleaner rivers",
    excerpt:
      "Youth volunteers planted 2,000 saplings and cleared a riverbank — turning a dumping ground into a community park.",
    program: "Environment",
    image: "/images/environment-seedlings.jpg",
  },
  {
    title: "Standing with families after the flood",
    excerpt:
      "Within 48 hours, relief teams delivered food, clean water and shelter kits to over 400 displaced families.",
    program: "Disaster Relief",
    image: "/images/disaster-relief.jpg",
  },
  {
    title: "A safe space for women to grow",
    excerpt:
      "Self-defense and vocational sessions gave 60 women new confidence — and a monthly income of their own.",
    program: "Women & Child",
    image: "/images/child-joy.jpg",
  },
];

export const testimonial = {
  quote:
    "Change does not come from grand gestures alone — it grows from steady, honest work beside the people we serve. That churning of effort and hope is what Meraki Manthan stands for.",
  name: "Anuradha Maurya",
  role: "President, Meraki Manthan",
};

// TODO: replace with real partner names / logos
export const partners = [
  "District Administration",
  "Rotary Club",
  "Local Schools",
  "Primary Health Centres",
  "Youth Collectives",
  "Village Panchayats",
];

export const involvement = [
  {
    id: "volunteer",
    title: "Volunteer",
    icon: "handHeart",
    text: "Give your time and skills at camps, classes and drives near you.",
  },
  {
    id: "donate",
    title: "Donate",
    icon: "heart",
    text: "Fund a child's education, a health camp or a relief kit — every rupee works.",
  },
  {
    id: "partner",
    title: "Partner With Us",
    icon: "handshake",
    text: "CSR teams and institutions can co-create programmes with measurable impact.",
  },
  {
    id: "fundraise",
    title: "Fundraise",
    icon: "megaphone",
    text: "Start a birthday, wedding or community fundraiser for a cause you love.",
  },
  {
    id: "careers",
    title: "Careers",
    icon: "briefcase",
    text: "Join a mission-driven team building change on the ground across India.",
  },
];

export const faqs = [
  {
    q: "Is Meraki Manthan a registered organisation?",
    a: "Yes. Meraki Manthan is a non-profit society registered under the Societies Registration Act, 21 of 1860, with its registered office in Buxar, Bihar, and works across India.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "We are working to make all eligible donations tax-deductible. 80G / 12A details will be published here once finalised. (Placeholder — to be confirmed.)",
  },
  {
    q: "How is my donation used?",
    a: "Contributions directly fund our programmes — education, health camps, livelihoods, women & child welfare, disaster relief and environmental work. We are committed to transparent reporting.",
  },
  {
    q: "Can I volunteer if I have limited time?",
    a: "Absolutely. Volunteering is flexible — from a single camp or drive to ongoing mentorship. Fill out the volunteer form and we'll match you to something that fits.",
  },
  {
    q: "Do you accept in-kind contributions?",
    a: "Yes — books, supplies, equipment and relief materials are welcome. Reach out through the contact form and our team will guide you.",
  },
];

export const donationAmounts = [500, 1000, 2500, 5000];

export const donationImpact: Record<number, string> = {
  500: "provides learning kits for 2 children",
  1000: "funds a health check-up for a family",
  2500: "supports a week of vocational training",
  5000: "sends a relief kit to a family in crisis",
};
