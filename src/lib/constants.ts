// Website content and configuration

export const siteConfig = {
  name: "Tiblings Studio",
  description: "AI-enhanced creative and development services by sibling duo Teddy and Tyeba.",
  url: "https://tiblings.studio",
  ogImage: "https://tiblings.studio/og.jpg",
  links: {
    twitter: "https://twitter.com/tiblingstudio",
    github: "https://github.com/tiblingstudio",
    linkedin: "https://linkedin.com/company/tiblingstudio",
    instagram: "https://instagram.com/tiblingstudio",
  },
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const services = {
  teddy: [
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing products and services.",
      icon: "BrainCircuit",
    },
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      icon: "Code",
    },
    {
      title: "Backend Systems",
      description: "Robust and scalable backend solutions to power your digital products.",
      icon: "Server",
    },
  ],
  tyeba: [
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
      icon: "Palette",
    },
    {
      title: "Brand Identity",
      description: "Distinctive visual identities that communicate your brand's unique value.",
      icon: "Brush",
    },
    {
      title: "Content Creation",
      description: "Compelling visual and written content that tells your story effectively.",
      icon: "FileText",
    },
  ],
};

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and challenges through in-depth consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a tailored strategy that leverages our combined expertise.",
  },
  {
    number: "03",
    title: "Creation",
    description: "Our sibling duo works collaboratively to bring your vision to life with technical and creative excellence.",
  },
  {
    number: "04",
    title: "Refinement",
    description: "We iterate based on feedback, ensuring the final product exceeds expectations.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We help you successfully launch your project and provide ongoing support as needed.",
  },
];

export const testimonials = [
  {
    quote: "Working with Teddy and Tyeba was a game-changer for our business. Their combined technical and creative expertise delivered results beyond our expectations.",
    author: "Sarah Johnson",
    role: "CEO, InnovateX",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    quote: "The Tiblings Studio team understood our vision immediately and transformed it into a stunning digital experience that our customers love.",
    author: "Michael Chen",
    role: "Founder, TechStart",
    avatar: "/testimonials/michael.jpg",
  },
  {
    quote: "Their AI integration expertise helped us automate key processes while maintaining a human touch. Truly impressive work!",
    author: "Priya Patel",
    role: "CTO, FutureFirm",
    avatar: "/testimonials/priya.jpg",
  },
];

export const portfolioProjects = [
  {
    title: "AI-Powered Customer Portal",
    description: "A sophisticated customer portal with AI-driven insights and personalized recommendations.",
    image: "/portfolio/project1.jpg",
    tags: ["AI Integration", "Web Development", "UI/UX Design"],
  },
  {
    title: "E-Commerce Rebrand",
    description: "Complete brand refresh and e-commerce platform for a sustainable fashion brand.",
    image: "/portfolio/project2.jpg",
    tags: ["Brand Identity", "Web Development", "Content Creation"],
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Interactive dashboard visualizing complex financial data with AI-powered insights.",
    image: "/portfolio/project3.jpg",
    tags: ["Data Visualization", "UI/UX Design", "Backend Systems"],
  },
  {
    title: "Healthcare Communication Platform",
    description: "Secure messaging and telemedicine platform connecting patients with healthcare providers.",
    image: "/portfolio/project4.jpg",
    tags: ["Web Development", "UI/UX Design", "Backend Systems"],
  },
];

export const strategyCards = [
  {
    title: "AI-Enhanced Creativity",
    description: "We leverage AI tools to amplify our creative capabilities, not replace them. This allows us to explore more possibilities and deliver innovative solutions.",
  },
  {
    title: "Technical Excellence",
    description: "Our work is built on solid technical foundations, ensuring scalability, performance, and security for all digital products we create.",
  },
  {
    title: "Human-Centered Design",
    description: "We place users at the center of everything we build, creating intuitive experiences that solve real problems effectively.",
  },
];

export const projectTypes = [
  { value: "web-development", label: "Web Development" },
  { value: "brand-identity", label: "Brand Identity" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "content-creation", label: "Content Creation" },
  { value: "other", label: "Other" },
];

export const budgetRanges = [
  { value: "less-than-5k", label: "Less than $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "more-than-50k", label: "More than $50,000" },
  { value: "not-sure", label: "Not sure yet" },
];