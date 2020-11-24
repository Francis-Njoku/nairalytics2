const company = [
  { href: "/about-us", text: "About Us" },
  { href: "/contact-us", text: "Contact" },
  { href: "/blog", text: "Blog" },
];

const links = [
  { href: "/events", text: "Events" },
  { href: "/gallery", text: "Gallery" },
  { href: "/faq", text: "FAQs" },
];

const support = [
  { href: "/forums", text: "Forums" },
  { href: "/documentation", text: "Documentation" },
  { href: "/language", text: "Language" },
];

const companyLinks = [
  {
    linkName: "Company",
    links: company,
  },
  {
    linkName: "Links",
    links,
  },
  {
    linkName: "Support",
    links: support,
  },
];

export default companyLinks;
