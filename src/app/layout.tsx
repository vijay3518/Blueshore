import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.blueshoreoverseas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlueShore Overseas | Study Abroad Consultancy - Visa & University Guidance",
    template: "%s | BlueShore Overseas",
  },
  description:
    "BlueShore Overseas helps students achieve global education dreams with expert visa assistance, university shortlisting, and career support in 35+ countries.",
  keywords: [
    "study abroad",
    "visa assistance",
    "university counselling",
    "BlueShore Overseas",
    "international education",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "BlueShore Overseas",
    title: "BlueShore Overseas | Study Abroad Consultancy - Visa & University Guidance",
    description:
      "Expert visa assistance, university shortlisting, and career support in 35+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueShore Overseas | Study Abroad Consultancy - Visa & University Guidance",
    description:
      "Expert visa assistance, university shortlisting, and career support in 35+ countries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlueShore Overseas",
    url: siteUrl,
    description:
      "Premium international education consultancy offering study abroad counselling, university shortlisting, visa assistance, and career support.",
    sameAs: [
      "https://www.linkedin.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
      "https://www.facebook.com",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BlueShore Overseas",
    url: siteUrl,
    telephone: "+91-98765-43210",
    email: "hello@blueshoreoverseas.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does BlueShore Overseas help with visa interviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, counsellors provide documentation audits, financial narratives, and mock visa interviews tailored to your destination country.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries does BlueShore support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BlueShore guides students across 35+ countries including the UK, USA, Canada, Australia, Germany, France, UAE, Singapore, Ireland, and New Zealand.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start a free counselling session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Submit the contact form with your academic profile and destination goals. A counsellor responds within one business day.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white font-sans text-slate-900 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
