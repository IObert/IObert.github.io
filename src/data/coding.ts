export interface Coding {
  title: string;
  description: string;
  techStack: string[];
  status: "active" | "archived";
  role: ("creator" | "maintainer" | "contributor")[];
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export const coding: Coding[] = [
  {
    title: "Wheel of Twilio",
    description:
      "Twilio's innovative booth activation designed to motivate people to engage with Twilio's technology while offering them the opportunity to win exciting prizes.",
    techStack: ["Next.js", "TypeScript", "Twilio", "pnpm"],
    status: "active",
    role: ["creator", "maintainer"],
    githubUrl: "https://github.com/twilio-samples/wheel-of-twilio",
    tags: ["Twilio", "Gamification", "Events", "WhatsApp", "SMS"],
  },
 
  {
    title: "Twilio Mixologist",
    description:
      "Twilio-powered app for easy coffee ordering at events. Attendees order via WhatsApp or SMS, Mixologists manage orders on a tablet, and attendees get notified when their order is ready.",
    techStack: ["Next.js", "TypeScript", "Twilio", "Sync", "Conversations"],
    status: "active",
    role: ["maintainer"],
    githubUrl: "https://github.com/twilio-labs/twilio-mixologist",
    tags: ["Twilio", "Events", "WhatsApp", "SMS", "Coffee"],
  },
  {
    title: "Sports Arbitrage Calculator",
    description:
      "A calculator to identify and compute sports arbitrage opportunities across different bookmakers.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "active",
    role: ["creator", "maintainer"],
    githubUrl: "https://github.com/IObert/sports-arbitrage-calculator",
    liveUrl: "https://arbitrage-calc-beta.vercel.app/",
    tags: ["Sports", "Betting", "Arbitrage", "Calculator"],
  },
  {
    title: "QuickFlightCal",
    description:
      "Easily generate calendar links for your flights! Enter your flight details and create calendar entries in just a few clicks. Supports multiple flight legs and seamless integration with popular calendar apps.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "active",
    role: ["creator", "maintainer"],
    githubUrl: "https://github.com/IObert/QuickFlightCal",
    liveUrl: "https://quick-flight-cal.vercel.app/",
    tags: ["Calendar", "Travel", "Flights"],
  },
  {
    title: "Holzhandlung Obert",
    description:
      "Website for Holzhandlung Obert, a family-run wood trading business.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "active",
    role: ["creator", "maintainer"],
    githubUrl: "https://github.com/IObert/holzhandlung-obert",
    liveUrl: "https://www.holzhandlung-obert.de/",
    tags: ["Website", "Business"],
  },
  {
    title: "IObert.github.io",
    description:
      "Personal website and link hub with redirects to social profiles and other online presences.",
    techStack: ["HTML", "CSS"],
    status: "active",
    role: ["creator", "maintainer"],
    githubUrl: "https://github.com/IObert/IObert.github.io",
    liveUrl: "https://iobert.me",
    tags: ["Personal", "Website"],
  },
   {
    title: "TwiML I18n",
    description:
      "A lightweight middleware designed to facilitate the internationalization (i18n) of Twilio Markup Language (TwiML) responses for Twilio webhook endpoints.",
    techStack: ["TypeScript", "Node.js", "i18next", "Express", "Fastify"],
    status: "archived",
    role: ["creator"],
    githubUrl: "https://github.com/twilio-labs/twiml-i18n",
    tags: ["Twilio", "i18n", "Middleware", "npm"],
  },
  {
    title: "WhatsApp Photo Guest Book",
    description:
      "Add photos to a common gallery via a WhatsApp bot. Perfect for weddings, parties, and social events — guests share photos through WhatsApp and they appear in a shared gallery in real time.",
    techStack: ["Node.js", "React", "Twilio", "Serverless"],
    status: "archived",
    role: ["creator"],
    githubUrl: "https://github.com/IObert/twilio-whatsapp-photo-guest-book",
    tags: ["Twilio", "WhatsApp", "Wedding", "Photo Sharing"],
  },
  {
    title: "Easy UI5 Generator",
    description:
      "A Yeoman generator to scaffold SAPUI5/OpenUI5-based web-apps and other UI5-related projects within seconds. Extensible with community plugins.",
    techStack: ["JavaScript", "Yeoman", "Node.js"],
    status: "active",
    role: ["creator"],
    githubUrl: "https://github.com/ui5-community/generator-easy-ui5",
    tags: ["SAP", "UI5", "OpenUI5", "Scaffolding", "Open Source"],
  },
];
