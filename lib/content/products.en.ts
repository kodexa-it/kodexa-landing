import type { Product } from "./products"

// English version of lib/content/products.ts. Product names (Nexo, Nodo) are brand names and stay as is.
export const productsEn: Record<Product["slug"], Product> = {
  nexo: {
    slug: "nexo",
    name: "Nexo",
    badge: "NX",
    logo: "/brand/nexo-mark.png",
    site: {
      url: "https://nexo.kodexa.ar/",
      label: "nexo.kodexa.ar",
      image: "/images/nexo.png",
      imageAlt: "Home page of nexo.kodexa.ar: the smart assistant for your business (the live site is in Spanish)",
    },
    tagline: "Your digital assistant.",
    summary:
      "Serves your customers on WhatsApp, answers their questions and manages bookings for you, using your business's real information.",
    status: "In production",
    statusTone: "live",
    eyebrow: "Kodexa product",
    heroTitle: "Nexo: your digital assistant to serve customers and run your business",
    heroLead:
      "A Kodexa solution to improve and automate how your business serves its customers. Nexo learns how you work and helps handle customers, answer questions and manage bookings.",
    cta: "Meet Nexo",
    problem:
      "Many businesses lose time answering the same questions, managing bookings by hand and keeping their information scattered across WhatsApp, spreadsheets and somebody's memory.",
    solution:
      "Nexo centralizes that operation in an assistant that knows your business: it serves your customers on WhatsApp, answers their questions and manages bookings, with an admin panel to keep everything under control.",
    benefits: [
      { title: "Less time answering the same questions", text: "Nexo answers frequent questions with your business's information, so you can focus on serving people." },
      { title: "Bookings without manual coordination", text: "Customers book according to your real availability, on WhatsApp or from your website, with no back and forth." },
      { title: "Everything in one place", text: "Services, hours, bookings and conversations centralized, not scattered across chats and spreadsheets." },
      { title: "You stay in control", text: "You can pause the assistant in any conversation, take over, and review every change it proposes before it's applied." },
    ],
    stepsTitle: "How it works",
    steps: [
      { title: "Tell it how your business works", text: "You talk to Nexo to load your services, hours and frequently asked questions. You confirm what gets saved." },
      { title: "Connect your WhatsApp", text: "You link your number with a QR code and Nexo starts answering your customers." },
      { title: "Nexo serves customers and manages bookings", text: "It answers questions, schedules appointments based on your availability, and lets you know when a person needs to step in." },
    ],
    featuresTitle: "Features",
    features: [
      { title: "AI conversational assistant", text: "Trained with each business's own information, with configurable tone and personality." },
      { title: "WhatsApp integration", text: "The channel where your customers already are, with conversation history and manual replies whenever you need them." },
      { title: "Booking and appointment management", text: "Schedules, services and resources (courts, rooms, professionals) with availability calculated automatically." },
      { title: "Deposits and receipts", text: "Ask for a deposit to confirm the booking and review receipts from the same panel." },
      { title: "Public site with online booking", text: "A page for your business, with a booking widget, generated from your data." },
      { title: "Digital menu with QR", text: "Upload your menu as a PDF and share it with a QR code." },
      { title: "Admin panel", text: "Appointments, statistics and notifications to run the business from one place." },
      { title: "Plans and subscription", text: "Paid plans through Mercado Pago to get started simply." },
    ],
    ecosystemIntro:
      "Nexo works on its own. If you also have Nodo, bookings that come in through Nexo become leads inside your CRM, and your website can be the starting point.",
    technical:
      "Built on Next.js and PostgreSQL, with language models for the conversational assistant and a direct WhatsApp integration. The architecture is designed to support subscriptions, multiple businesses and long-term growth.",
    contact: {
      title: "I'd like to learn about Nexo",
      description: "Tell us about your business and how you serve your customers today. We'll show you how Nexo could help.",
      submitLabel: "I'd like to learn about Nexo",
      interest: "nexo",
    },
    metaTitle: "Nexo | Digital assistant for businesses",
    metaDescription:
      "Nexo is Kodexa's digital assistant: it serves your customers on WhatsApp, answers questions and manages bookings with your business's real information.",
    keywords: ["digital assistant for businesses", "AI assistant for business", "WhatsApp customer service", "online bookings", "Nexo"],
  },
  nodo: {
    slug: "nodo",
    name: "Nodo",
    badge: "ND",
    tagline: "Your CRM.",
    summary:
      "Organize your customers, leads and opportunities in one place, with follow-ups and tasks so no inquiry goes unanswered.",
    status: "In development",
    statusTone: "building",
    eyebrow: "Kodexa product",
    heroTitle: "Nodo: the CRM to organize and manage your customers",
    heroLead:
      "Centralize customers, leads and opportunities in one place and follow up on every sales conversation without losing anything.",
    cta: "Meet Nodo",
    problem:
      "Inquiries arrive through WhatsApp, email and social media, and follow-up lives in spreadsheets, loose notes or somebody's memory. As volume grows, opportunities get lost.",
    solution:
      "Nodo brings together all your business's sales information and helps you know who to talk to, what comes next and what's still pending.",
    stepsTitle: "How it works",
    steps: [
      { title: "Gather your contacts", text: "Add your customers and leads or import them, instead of keeping them scattered across spreadsheets and chats." },
      { title: "Organize your sales process", text: "Sort opportunities into stages and know where each one stands." },
      { title: "Follow up", text: "Use tasks and reminders so no inquiry goes unanswered." },
    ],
    featuresTitle: "What you can organize with Nodo",
    features: [
      { title: "Customers", text: "Contacts and companies with their information and history in one place." },
      { title: "Leads", text: "Record every inquiry or prospect and know where it came from." },
      { title: "Opportunities", text: "Track each potential sale through the stages of your sales process." },
      { title: "Follow-up", text: "Activity and reminders to pick up each conversation on time." },
      { title: "Tasks", text: "Organize what needs to be done with each customer and leave nothing to memory." },
      { title: "Sales information", text: "Tags, statuses and custom fields to adapt the CRM to how your business works." },
    ],
    ecosystemIntro:
      "Nodo works on its own. If you also use Nexo, bookings that come in through the assistant become leads inside your CRM, with their source identified.",
    contact: {
      title: "I'd like to learn about Nodo",
      description: "Tell us how you follow up with your customers today. We'll show you how Nodo could help.",
      submitLabel: "I'd like to learn about Nodo",
      interest: "nodo",
    },
    metaTitle: "Nodo | CRM for businesses",
    metaDescription:
      "Nodo is Kodexa's CRM: organize customers, leads and opportunities, and follow up on sales with tasks and all the information in one place.",
    keywords: ["CRM for small businesses", "customer management", "lead tracking", "sales follow-up", "Nodo"],
  },
}

export const ecosystemEn = [
  { key: "web", name: "Web", title: "Your digital presence.", hook: "Get found.", href: "/servicios/desarrollo-web" },
  { key: "nexo", name: "Nexo", title: "Customer service and automation.", hook: "Make it possible to serve them.", href: "/productos/nexo" },
  { key: "nodo", name: "Nodo", title: "Sales management.", hook: "Keep track of what happens with your customers.", href: "/productos/nodo" },
] as const
