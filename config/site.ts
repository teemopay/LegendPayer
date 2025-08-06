export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  btnLinks: [
    {
      id: 1,
      label: "Contact our team",
      href: "/About",
    },
    {
      id: 2,
      label: "Check out our content",
      href: "/MX",
    },
    {
      id: 3,
      label: "See our jobs",
      href: "/In",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const CardOneConfig = [
  {
    id: 1,
    title: "Easy connection",
    sub: "We provide professional and structured documentation so you can connect in hours instead of days.",
  },
  {
    id: 2,
    title: "Fast API callback",
    sub: "Once your trade is initiated, you will receive a callback quickly.",
  },
  {
    id: 3,
    title: "Cloud-based platform",
    sub: "With high availability, scalability and tightened security.",
  },
  {
    id: 4,
    title: "Distributed Services",
    sub: "We use distributed services to display cashier counters at locations closest to users, reducing network latency.",
  },
];

export const CardCountryConfig = [
  {
    id: 1,
    title: "Mexico",
    code: "MX",
    icon: "mx",
  },
  {
    id: 2,
    title: "Peru",
    code: "PE",
    icon: "pe",
  },
  {
    id: 3,
    title: "Colombia",
    code: "CO",
    icon: "co",
  },
  {
    id: 4,
    title: "Pakistan",
    code: "PK",
    icon: "pk",
  },
  {
    id: 5,
    title: "Chile",
    code: "CH",
    icon: "ch",
  },
];

export const MobileNavbarList = [
  {
    title: "Solution",
    label: "Our Solution",
    id: 1,
    child: [
      {
        id: 11,
        title: "Payins",
        href: "/Payins",
        target: "_self",
      },
      {
        id: 12,
        title: "Payouts",
        href: "/Payouts",
        target: "_self",
      },
    ],
  },
  {
    title: "Company",
    label: "Company",
    id: 3,
    child: [
      {
        title: "Jobs",
        href: "/In",
        id: 31,
        target: "_self",
      },
      {
        title: "About us",
        href: "/About",
        id: 33,
        target: "_self",
      },
      {
        title: "Privacy Policy",
        href: "/support/PRIVACIDAD-LegendPay.pdf",
        id: 34,
        target: "_blank",
      },
    ],
  },
  {
    title: "Resources",
    label: "Resources",
    id: 2,
    child: [
      {
        title: "Mexico",
        href: "/MX",
        id: 21,
        target: "_self",
      },
      {
        title: "Peru",
        href: "/PE",
        id: 22,
        target: "_self",
      },
      {
        title: "Colombia",
        href: "/CO",
        id: 23,
        target: "_self",
      },
      {
        title: "Pakistan",
        href: "/PK",
        id: 24,
        target: "_self",
      },
    ],
  },
];

export const AppsList = [
  {
    id: 1,
    href: "https://x.com/LegendPay",
    target: "_blank",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/company/teemo-pay",
    target: "_blank",
  },
  {
    id: 4,
    href: "https://www.instagram.com/LegendPay_mkt/",
    target: "_blank",
  },
  {
    id: 5,
    href: "mailto:service@legend-pay.com",
    target: "_blank",
  },
];
