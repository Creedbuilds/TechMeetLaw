import {
  heroImage,
  homeFeaturedImage,
  homeSecondaryImage1,
  homeSecondaryImage2,
  homeOpinionImage,
  insightsFeaturedImage,
  insightsCardImage1,
  insightsCardImage2,
  insightsWideImage,
  insightsVideoImage,
  videosFeaturedImage,
  videosCardImage1,
  videosCardImage2,
  videosCardImage3,
} from "../assets";

export const homeContent = {
  heroImage,
  featured: {
    image: homeFeaturedImage,
    tag: "Editor's Pick",
    date: "Feb 12, 2026",
    source: "Tech Meets Law",
    title: "Key Tech and Technology Law Events to know in Nigeria 2026",
    excerpt: "Written by Tech Meets Law. A comprehensive guide to the must-attend conferences and symposiums shaping the landscape this year.",
  },
  secondary: [
    {
      image: homeSecondaryImage1,
      date: "Feb 1, 2026",
      title: "What to do after CAC Registration in Nigeria: A Complete Post-incorporation Guide.",
    },
    {
      image: homeSecondaryImage2,
      date: "Dec 5, 2025",
      title: "DATA MINIMIZATION IN THE AGE OF BIG AI MODELS",
    },
  ],
  opinion: {
    image: homeOpinionImage,
    tag: "Career & Mindset",
    title: 'Stop Comparing Yourself to "Better" Developers: What Actually Matters.',
    summary:
      "Navigating the psychological landscape of building legal tech solutions and maintaining focus in a hyper-competitive ecosystem.",
  },
};

export const insightsContent = {
  featured: {
    image: insightsFeaturedImage,
    tag: "Editor's Pick",
    date: "February 12, 2026",
    source: "Tech Meets Law",
    title: "Key Tech and Technology Law Events to know in Nigeria 2026",
    excerpt:
      "A comprehensive guide to the upcoming tech and legal conferences, seminars, and summits shaping the landscape in Nigeria",
  },
  articles: [
    {
      date: "February 1, 2026",
      title: "What to do after CAC Registration in Nigeria: A Complete Post-incorporation Guide.",
      tag: "Legal Tech",
      image: insightsCardImage1,
    },
    {
      date: "December 5, 2025",
      title: "DATA MINIMIZATION IN THE AGE OF BIG AI MODELS",
      tag: "Artificial Intelligence",
      image: insightsCardImage2,
    },
  ],
  wide: {
    tag: "Blog",
    title: 'Stop Comparing Yourself to "Better" Developers: What Actually Matters.',
    categories: ["Opinion", "Tech Culture"],
    image: insightsWideImage,
  },
  videoImage: insightsVideoImage,
  categories: ["Technology", "Technology Law", "Laws"],
};

export const videosContent = {
  featured: {
    image: videosFeaturedImage,
    title: "The Future of AI Copyright Law",
  },
  filters: ["All", "Tech Law", "AI", "Tutorials"],
  items: [
    {
      image: videosCardImage1,
      tag: "TECH LAW",
      date: "Oct 24, 2024",
      duration: "12:45",
      title: "Smart Contracts & Legal Enforceability",
    },
    {
      image: videosCardImage2,
      tag: "INTERVIEWS",
      date: "Oct 18, 2024",
      duration: "45:12",
      title: "Interview: Privacy in the Quantum Era",
    },
    {
      image: videosCardImage3,
      tag: "TUTORIALS",
      date: "Oct 12, 2024",
      duration: "08:30",
      title: "Setting Up Compliant Data Pipelines",
    },
  ],
};
