import type { FaqItem, Service, ServiceGroup } from "./services"

// English version of lib/content/services.ts. Same slugs/structure (parity is checked in tests/content-parity.test.ts).
// Prices are the same USD "starting at" figures published on the Spanish site; no conversions, no new rates.

const faqInternational: FaqItem = {
  question: "Does Kodexa work with clients outside Argentina?",
  answer: "Yes. We work remotely with clients in other countries, as well as with businesses and entrepreneurs in Argentina.",
}

const usd = "Prices are listed in US dollars (USD)."

export const servicesEn: Service[] = [
  {
    slug: "landing-pages",
    group: "web",
    title: "Landing pages",
    summary: "A focused page that presents a product, service or campaign and turns visits into inquiries.",
    goal: "Turn traffic into inquiries",
    heroTitle: "Landing pages that convert",
    heroLead: "Designed to turn traffic into customers. They're not just pages: they're acquisition tools.",
    problemTitle: "Traffic isn't enough",
    problems: [
      "The site gets visits, but almost nobody gets in touch.",
      "Campaigns are running and sending people to a page that wasn't built for them.",
      "There's no clear structure leading people all the way to contact.",
    ],
    audience: ["Businesses that want to generate inquiries", "Teams running ad campaigns", "Anyone validating a product or service"],
    includesTitle: "What's included",
    includes: [
      { title: "Conversion-oriented structure", text: "A flow designed to take the visitor all the way to an inquiry." },
      { title: "Optimized speed", text: "High performance for a better experience and better SEO." },
      { title: "Form and CTAs", text: "Clear, measurable contact points." },
      { title: "Integrations", text: "Forms, analytics and campaigns ready to use." },
      { title: "Basic SEO", text: "Metadata and semantic structure from the start." },
    ],
    priceFrom: 250,
    pricingNote: `The final price depends on the scope of the project. ${usd}`,
    faq: [
      {
        question: "How much does a landing page cost?",
        answer: "It starts at USD 250. The final price depends on the design, the sections and the integrations you need.",
      },
      {
        question: "What's the difference between a landing page and a corporate website?",
        answer:
          "A landing page has a single goal and a single page, built to convert. A corporate website presents your whole company across several pages.",
      },
      faqInternational,
    ],
    related: ["desarrollo-web", "institucional", "software-a-medida"],
    ctaTitle: "Your page can convert more",
    ctaLabel: "Let's talk about your landing page",
    whatsappMessage: "Hi Kodexa! I'm interested in a landing page. Can we talk?",
    metaTitle: "Conversion-Focused Landing Pages",
    metaDescription:
      "Design and development of conversion-focused landing pages. Structure, speed and integrations built to generate customers.",
    keywords: ["landing page design", "landing page development", "conversion landing pages"],
  },
  {
    slug: "institucional",
    group: "web",
    title: "Corporate website",
    summary: "A complete website to present your company, services, information and ways to get in touch.",
    goal: "Present the whole company",
    heroTitle: "Corporate website",
    heroLead: "A complete website to present your company, your services, your information and your contact channels.",
    problemTitle: "A presence that lives up to your business",
    problems: [
      "The business has no website, or the current one is out of date.",
      "Service and contact information is scattered.",
      "People looking for you need to understand quickly who you are and how to reach you.",
    ],
    audience: ["Companies that need a complete digital presence", "Businesses with several services that deserve their own section", "Anyone looking to refresh an outdated site"],
    audienceNote: {
      text: "If you need to update content yourself or add a blog, take a look at",
      linkLabel: "Corporate Pro",
      href: "/servicios/institucional-pro",
    },
    includesTitle: "What's included",
    includes: [
      { title: "Multiple pages", text: "Dedicated sections for each service and for company information." },
      { title: "Responsive design", text: "Built for desktop, tablet and mobile." },
      { title: "SEO and best practices", text: "Semantic structure, fast loading and per-page metadata." },
      { title: "Integration with external tools", text: "Forms, analytics and the tools you already use." },
      { title: "Go-live", text: "Deployment and launch included." },
    ],
    priceFrom: 500,
    pricingNote: `The final price depends on the number of pages, the design and the integrations. ${usd}`,
    faq: [
      {
        question: "How much does a corporate website cost?",
        answer: "It starts at USD 500. The final price depends on the number of pages, the design and the integrations you need.",
      },
      {
        question: "Can I update the content myself?",
        answer:
          "The corporate website is delivered with the content we define together while building it. If you need to edit text, add a blog or update content frequently, Corporate Pro is a better fit.",
      },
      {
        question: "Does it include SEO?",
        answer: "Yes. It's built with technical SEO best practices from the start: semantic structure, fast loading and per-page metadata.",
      },
    ],
    related: ["landing-pages", "institucional-pro", "plataformas-digitales"],
    ctaTitle: "Ready to have the website your business needs?",
    ctaLabel: "Let's talk about your website",
    whatsappMessage: "Hi Kodexa! I'm interested in a corporate website for my company. Can we talk?",
    metaTitle: "Corporate Website Development",
    metaDescription: "A custom corporate website for your company: multiple pages, responsive design and SEO. See the scope and starting prices.",
    keywords: ["corporate website", "company website development", "business website design"],
  },
  {
    slug: "institucional-pro",
    group: "web",
    title: "Corporate Pro",
    summary: "A more complete, dynamic corporate website with editable content and a blog.",
    goal: "Manage and grow your content",
    heroTitle: "Corporate Pro",
    heroLead: "A more complete and dynamic corporate website, built for businesses that need to manage and update their own content.",
    problemTitle: "A website you can maintain without depending on a developer",
    problems: [
      "There's news or content to publish regularly.",
      "Every text or image change means asking someone for help.",
      "The site needs new sections as the business grows.",
    ],
    audience: ["Businesses that publish news or content", "Teams that want to add sections without rebuilding the site", "Teams that need autonomy over their content"],
    audienceNote: {
      text: "If your project needs users with their own accounts or business logic beyond content, take a look at",
      linkLabel: "web applications",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "What's included",
    includes: [
      { title: "Everything in the corporate website", text: "Multiple pages, SEO, responsive design and go-live." },
      { title: "Editable content", text: "An admin panel to update text and images without depending on us." },
      { title: "Blog", text: "To publish news and your own content." },
      { title: "Dynamic sections", text: "Content that is managed and displayed in a structured way." },
      { title: "Architecture ready to grow", text: "A foundation for adding sections or features later." },
    ],
    priceFrom: 900,
    pricingNote: `The final price depends on the dynamic sections, the scope of the panel and the integrations. ${usd}`,
    faq: [
      {
        question: "What's the difference between Corporate Website and Corporate Pro?",
        answer:
          "The corporate website gives you a complete presence for your company. Corporate Pro adds the ability to manage and update the content yourself, a blog and dynamic sections.",
      },
      {
        question: "How much does Corporate Pro cost?",
        answer: "It starts at USD 900. The final price depends on the number of dynamic sections, the scope of the admin panel and the integrations.",
      },
      {
        question: "How do I manage the content?",
        answer: "With an admin panel designed so you can update text and images and publish blog posts without depending on us for every change.",
      },
      {
        question: "Is the architecture ready to grow?",
        answer: "Yes. It's built on a foundation designed so you can add sections or features later without rebuilding the site.",
      },
    ],
    related: ["institucional", "plataformas-digitales", "software-a-medida"],
    ctaTitle: "Ready to have the website your business needs?",
    ctaLabel: "Let's talk about your website",
    whatsappMessage: "Hi Kodexa! I'm interested in a Corporate Pro website with editable content. Can we talk?",
    metaTitle: "Corporate Pro Website",
    metaDescription: "A corporate website with editable content, a blog and dynamic sections. A site ready to grow with your business.",
    keywords: ["corporate website with blog", "website with editable content", "CMS website for business"],
  },
  {
    slug: "desarrollo-web",
    group: "web",
    title: "Custom web development",
    summary: "Websites and web applications designed around your business, not generic templates.",
    goal: "Overview of our web work",
    heroTitle: "Custom web development",
    heroLead:
      "We design and develop websites built around your business, not generic templates. Every project is built with a focus on conversion, speed and a solid foundation to grow on.",
    problemTitle: "What we solve",
    problems: [
      "Founders who need a first digital presence.",
      "Companies with an outdated site that want to renew it.",
      "Businesses that want to generate more inquiries from the internet.",
    ],
    audience: ["Founders getting started", "Companies refreshing their website", "Businesses that want to generate online inquiries"],
    audienceNote: {
      text: "If your project needs users with their own accounts, dashboards or business logic, take a look at",
      linkLabel: "web platforms and applications",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "What's included",
    includes: [
      { title: "Custom design", text: "We don't use generic templates." },
      { title: "Responsive development", text: "Works on every device." },
      { title: "Technical SEO", text: "Best practices from the start." },
      { title: "Forms, analytics and campaigns", text: "Integration with your business tools." },
      { title: "Deployment and go-live", text: "Included in the project." },
    ],
    process: [
      { title: "Understand", text: "We define goals, scope and content.", points: [] },
      { title: "Design", text: "Structure and design oriented to conversion.", points: [] },
      { title: "Build", text: "Development with best practices and technical SEO.", points: [] },
      { title: "Launch", text: "Deployment, testing and go-live.", points: [] },
    ],
    priceFrom: 250,
    pricingNote: `The final price depends on the scope of the project. ${usd}`,
    faq: [
      {
        question: "How much does it cost to build a website?",
        answer:
          "It depends on the scope. A landing page starts at USD 250. A corporate website with more sections, content and integrations starts at USD 500. The final price is set according to the number of pages, the design and the integrations.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A landing page is usually ready in a few weeks. A corporate website with more content can take somewhat longer, especially if it depends on you sending final texts and images.",
      },
      {
        question: "What's the difference between a website and a web application?",
        answer:
          "A website communicates your offer and aims to turn visits into customers or inquiries. A web application goes a step further: users who log in, their own dashboards and business logic.",
      },
      faqInternational,
    ],
    related: ["landing-pages", "institucional", "institucional-pro"],
    ctaTitle: "Ready to have the website your business needs?",
    ctaLabel: "Let's talk about your project",
    whatsappMessage: "Hi Kodexa! I'm interested in building a website. Can we talk?",
    metaTitle: "Custom Web Development",
    metaDescription:
      "Custom web development for companies and entrepreneurs: corporate websites and web applications designed to turn visitors into customers.",
    keywords: ["custom web development", "web design and development", "website development agency"],
  },
  {
    slug: "software-a-medida",
    group: "sistemas",
    title: "Custom software and systems",
    summary: "Systems adapted to your processes to centralize information and automate tasks.",
    goal: "Organize and automate operations",
    heroTitle: "Custom software and systems",
    heroLead:
      "Systems adapted to your company's real processes, to centralize information, automate repetitive tasks and gain efficiency.",
    problemTitle: "What problems it solves",
    problems: [
      "Information scattered across spreadsheets or loose tools.",
      "Manual tasks that repeat every week.",
      "Generic tools that don't fit how you operate.",
      "No clear visibility into the business.",
    ],
    audience: [
      "Companies that manage customers, orders, appointments or inventory by hand",
      "Businesses that have grown and need their own system instead of generic tools",
    ],
    audienceNote: {
      text: "If you also need customers or outside users to log in with their own account, take a look at",
      linkLabel: "web platforms and applications",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "What's included",
    includes: [
      { title: "Management panel (CRUD)", text: "Create, edit and delete your business information." },
      { title: "Process automation", text: "Fewer repetitive manual tasks." },
      { title: "API integrations", text: "Connection with the tools you already use." },
      { title: "Scalable architecture", text: "Ready to add modules in the future." },
    ],
    priceFrom: 900,
    pricingNote: `The final quote depends on the number of modules and integrations. ${usd}`,
    evidence: {
      eyebrow: "Same approach",
      title: "This is how Nexo was built",
      text: "Nexo's internal panel — plans, leads, promo codes — is custom software: nobody sees it from the outside, but the product can't be operated without it.",
      href: "/recursos/que-aprendimos-construyendo-un-saas-desde-cero",
      linkLabel: "Read what we learned",
    },
    faq: [
      {
        question: "How much does a custom system cost?",
        answer:
          "Management systems with an admin panel (CRUD) start at USD 900. Projects with more modules, integrations or custom logic need a quote defined according to the scope.",
      },
      {
        question: "What's the difference between custom and off-the-shelf software?",
        answer:
          "Off-the-shelf software (a spreadsheet, a generic CRM) works for common processes, but forces your business to adapt to the tool. Custom software is built around how your company works.",
      },
      {
        question: "How long does it take to build a custom system?",
        answer:
          "It depends on the number of modules and the integrations needed. A simple management system takes less time than a platform with multiple roles, permissions and external integrations.",
      },
      faqInternational,
    ],
    related: ["plataformas-digitales", "mvp", "institucional-pro"],
    ctaTitle: "Does your business need its own system?",
    ctaLabel: "Let's talk about your system",
    whatsappMessage: "Hi Kodexa! I'm interested in building a custom system. Can we talk?",
    metaTitle: "Custom Software and Systems Development",
    metaDescription:
      "Custom software and systems adapted to your company's processes: management panels, automation and API integrations.",
    keywords: ["custom software development", "bespoke business systems", "custom internal tools"],
  },
  {
    slug: "plataformas-digitales",
    group: "sistemas",
    title: "Web platforms and applications",
    summary: "Web applications with users, roles and custom logic for businesses that need more than a website.",
    goal: "Offer a digital service with users",
    heroTitle: "Web platforms and applications",
    heroLead:
      "Web applications with custom logic for businesses that need more than a website: users, dynamic content and specific features.",
    problemTitle: "When an informational site isn't enough",
    problems: [
      "Your customers need to log in to use the service.",
      "There are user roles with different permissions.",
      "An internal system could become a product for third parties.",
    ],
    audience: [
      "Businesses whose customers need to log in",
      "Companies that want to offer their own digital service",
      "Teams with an internal system they want to turn into a product",
      "Projects with differentiated user roles",
    ],
    includesTitle: "What's included",
    includes: [
      { title: "Authentication and roles", text: "Users with permissions according to what each one needs." },
      { title: "Manageable dashboards", text: "To manage content and operations." },
      { title: "Subscriptions and payments", text: "When the project requires it." },
      { title: "Multi-user architecture", text: "Ready to scale." },
    ],
    pricingNote: "We define the scope and the quote after understanding your project.",
    evidence: {
      eyebrow: "Our own product",
      title: "Nexo, a Kodexa platform",
      text: "Nexo is a platform with authentication, an admin panel and subscriptions that we built in-house. It's the best evidence of what we can build.",
      href: "/productos/nexo",
      linkLabel: "Meet Nexo",
    },
    faq: [
      {
        question: "What is a digital platform?",
        answer:
          "It's a web application with its own logic: users who log in, roles and permissions, dynamic content and features specific to your business. It goes beyond an informational website.",
      },
      {
        question: "How much does a web application cost?",
        answer:
          "There's no single price: it depends on the number of features, user roles and integrations. We define the quote based on the real scope, after understanding what you need to build.",
      },
      {
        question: "How is it different from a custom system?",
        answer:
          "A custom system is usually an internal tool for your team. A platform generally involves external users — customers, suppliers or the public — with their own account.",
      },
      faqInternational,
    ],
    related: ["software-a-medida", "mvp", "institucional-pro"],
    ctaTitle: "Thinking about your own platform or application?",
    ctaLabel: "Let's talk about your platform",
    whatsappMessage: "Hi Kodexa! I'm evaluating building a web platform or application. Can we talk?",
    metaTitle: "Web Platform and Application Development",
    metaDescription:
      "Custom web platforms and applications with users, roles, management panels and an architecture ready to scale.",
    keywords: ["web platform development", "custom web application development", "web app development"],
  },
  {
    slug: "mvp",
    group: "productos",
    title: "MVPs and SaaS products",
    summary: "Building your digital product from scratch, to validate an idea and bring it to market.",
    goal: "Go from idea to a working product",
    heroTitle: "MVPs and SaaS products",
    heroLead: "We turn a business idea into a real digital product: testable, and with a solid technical foundation to keep growing.",
    problemTitle: "From an idea to something you can test",
    problems: [
      "There's a digital business idea but no product to validate.",
      "You want to test with real users before investing in building everything.",
      "An internal process could become a product.",
    ],
    audience: [
      "Founders with a digital business idea",
      "Teams that want to validate a product before scaling it",
      "Businesses that want to turn an internal process into a SaaS product",
    ],
    includesTitle: "What's included",
    includes: [
      { title: "From idea to working product", text: "We define what goes into the first version and build it end to end." },
      { title: "Architecture built to iterate", text: "A foundation ready to change and grow." },
      { title: "Subscriptions, payments and dashboards", text: "Part of the product's structure from the start." },
      { title: "Custom scope and quote", text: "Defined by what the first version needs." },
    ],
    pricingNote: "We define the scope of the first version and the quote according to what your product needs.",
    evidence: {
      eyebrow: "Our own product",
      title: "Nexo: a SaaS we built ourselves",
      text: "Nexo is an AI assistant for businesses, already in production. It's proof that we can build a SaaS product end to end, not just websites.",
      href: "/productos/nexo",
      linkLabel: "Meet Nexo",
    },
    faq: [
      {
        question: "What is an MVP and when does it make sense to build one?",
        answer:
          "An MVP (minimum viable product) is the first working version of a product, with just what's needed to validate a business idea with real users before investing in building everything.",
      },
      {
        question: "How much does it cost to build a SaaS?",
        answer:
          "There's no fixed price: a SaaS involves subscriptions, user dashboards and an architecture that has to last over time. We define the quote based on the features of the first version.",
      },
      {
        question: "Does Kodexa have experience building its own products?",
        answer: "Yes. Nexo is Kodexa's own SaaS product, in production, with artificial intelligence, WhatsApp integration and a subscription system.",
      },
      faqInternational,
    ],
    related: ["plataformas-digitales", "software-a-medida"],
    ctaTitle: "Have an idea you want to turn into a product?",
    ctaLabel: "Let's talk about your idea",
    whatsappMessage: "Hi Kodexa! I want to build an MVP or SaaS product. Can we talk?",
    metaTitle: "MVP and SaaS Product Development",
    metaDescription: "MVP and SaaS product development: from a business idea to a working digital product ready to grow.",
    keywords: ["MVP development", "SaaS development", "build a digital product from scratch"],
  },
]

export const groupMetaEn: Record<ServiceGroup, { title: string; text: string }> = {
  web: {
    title: "Web presence",
    text: "Landing pages and corporate websites to present your business and generate inquiries.",
  },
  sistemas: {
    title: "Systems and applications",
    text: "Tools that organize operations or offer a digital service with their own users.",
  },
  productos: {
    title: "Digital products",
    text: "From an idea to a working product, ready to be validated and to evolve.",
  },
}
