export const BRAND = {
  name: "BlueShore Overseas",
  tagline: "Your Dream. Our Guidance. Global Future.",
  colors: {
    navy: "#0A1F5C",
    ocean: "#1565C0",
    sky: "#2196F3",
    gold: "#F4A800",
    white: "#FFFFFF",
  },
} as const;

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/#success", label: "Success Stories" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export type DestinationPin = {
  id: string;
  country: string;
  flag: string;
  lat: number;
  lng: number;
  avgVisaWeeks: string;
  universities: string[];
};

export const DESTINATION_PINS: DestinationPin[] = [
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    lat: 54,
    lng: -2,
    avgVisaWeeks: "3–5 weeks",
    universities: ["Oxford", "Cambridge", "Imperial", "UCL"],
  },
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    lat: 39,
    lng: -98,
    avgVisaWeeks: "4–8 weeks",
    universities: ["MIT", "Stanford", "Harvard", "Columbia"],
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    lat: 56,
    lng: -106,
    avgVisaWeeks: "4–9 weeks",
    universities: ["Toronto", "UBC", "McGill", "Waterloo"],
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    lat: -25,
    lng: 134,
    avgVisaWeeks: "4–12 weeks",
    universities: ["Melbourne", "ANU", "Sydney", "UNSW"],
  },
  {
    id: "germany",
    country: "Germany",
    flag: "🇩🇪",
    lat: 51,
    lng: 10,
    avgVisaWeeks: "6–12 weeks",
    universities: ["TUM", "LMU Munich", "Heidelberg", "RWTH"],
  },
  {
    id: "france",
    country: "France",
    flag: "🇫🇷",
    lat: 46,
    lng: 2,
    avgVisaWeeks: "4–8 weeks",
    universities: ["Sorbonne", "École Polytechnique", "HEC Paris", "Sciences Po"],
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    lat: 24,
    lng: 54,
    avgVisaWeeks: "2–4 weeks",
    universities: ["NYU Abu Dhabi", "Khalifa University", "AUD", "HBMeU"],
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    lat: 1.35,
    lng: 103.8,
    avgVisaWeeks: "2–4 weeks",
    universities: ["NUS", "NTU", "SMU", "INSEAD"],
  },
  {
    id: "ireland",
    country: "Ireland",
    flag: "🇮🇪",
    lat: 53.4,
    lng: -8.2,
    avgVisaWeeks: "4–8 weeks",
    universities: ["Trinity Dublin", "UCD", "UCC", "University of Galway"],
  },
  {
    id: "nz",
    country: "New Zealand",
    flag: "🇳🇿",
    lat: -41,
    lng: 174,
    avgVisaWeeks: "5–10 weeks",
    universities: ["Auckland", "Otago", "Victoria Wellington", "Canterbury"],
  },
];

export const UNIVERSITY_ENTRIES = [
  { name: "University of Oxford", country: "UK", code: "UK" },
  { name: "Stanford University", country: "USA", code: "USA" },
  { name: "University of Toronto", country: "Canada", code: "Canada" },
  { name: "University of Melbourne", country: "Australia", code: "Australia" },
  { name: "Technical University of Munich", country: "Germany", code: "Germany" },
  { name: "Sciences Po", country: "France", code: "France" },
  { name: "NYU Abu Dhabi", country: "UAE", code: "UAE" },
  { name: "National University of Singapore", country: "Singapore", code: "Singapore" },
  { name: "Trinity College Dublin", country: "Ireland", code: "Ireland" },
  { name: "University of Auckland", country: "New Zealand", code: "New Zealand" },
  { name: "Columbia University", country: "USA", code: "USA" },
  { name: "Imperial College London", country: "UK", code: "UK" },
] as const;

export const BLOG_POSTS = [
  {
    slug: "visa-interview-checklist-2026",
    title: "Visa Interview Checklist for 2026",
    category: "Visa",
    readTime: "6 min read",
    thumb:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    excerpt: "Documents, tone, and timelines that set successful applicants apart.",
  },
  {
    slug: "scholarship-strategies-abroad",
    title: "Scholarship Strategies That Actually Work",
    category: "Funding",
    readTime: "8 min read",
    thumb:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    excerpt: "How to align academics, essays, and deadlines for merit awards.",
  },
  {
    slug: "choose-university-fit",
    title: "Choosing a University That Fits Your Goals",
    category: "Counselling",
    readTime: "5 min read",
    thumb:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    excerpt: "Beyond rankings: culture, cohort, and career outcomes.",
  },
  {
    slug: "pre-departure-arrival-tips",
    title: "Pre-Departure & First Week Abroad",
    category: "Arrival",
    readTime: "7 min read",
    thumb:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    excerpt: "Banking, housing, and campus integration made simple.",
  },
  {
    slug: "statement-of-purpose-blueprint",
    title: "SOP Blueprint for Competitive Programs",
    category: "Applications",
    readTime: "9 min read",
    thumb:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    excerpt: "Structure your narrative for admissions committees.",
  },
  {
    slug: "ielts-vs-toefl",
    title: "IELTS vs TOEFL: What Universities Prefer",
    category: "Tests",
    readTime: "4 min read",
    thumb:
      "https://images.unsplash.com/photo-1546410534-bb044ef49ee3?w=800&q=80",
    excerpt: "Pick the right English test for your target schools.",
  },
] as const;
