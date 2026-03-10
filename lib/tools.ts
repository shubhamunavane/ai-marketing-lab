export interface Tool {
  slug: string;
  name: string;
  logo: string;
  category: "Creative" | "Analytics" | "Automation" | "Copywriting";
  description: string;
  website: string;
  useCase: string;
}

export const allTools: Tool[] = [
  {
    slug: "adcreative-ai",
    name: "AdCreative AI",
    logo: "/tool-logos/adcreative-ai.svg",
    category: "Creative",
    description:
      "AI-powered platform that generates high-converting ad creatives, banners, and social media posts in seconds. Uses performance data to score and rank creative variations.",
    website: "https://www.adcreative.ai",
    useCase:
      "Generate dozens of on-brand display ads and social creatives for A/B testing without a design team.",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    logo: "/tool-logos/midjourney.svg",
    category: "Creative",
    description:
      "Leading AI image generation tool that creates stunning visuals from text prompts. Ideal for producing unique ad imagery, product mockups, and brand visuals at scale.",
    website: "https://www.midjourney.com",
    useCase:
      "Create scroll-stopping hero images and lifestyle visuals for paid social campaigns without expensive photoshoots.",
  },
  {
    slug: "runway",
    name: "Runway",
    logo: "/tool-logos/runway.svg",
    category: "Creative",
    description:
      "AI video generation and editing platform offering Gen-3 Alpha models for creating professional video content from text or image prompts with precise motion control.",
    website: "https://runwayml.com",
    useCase:
      "Produce short-form video ads for TikTok and Reels directly from product images, eliminating traditional video production costs.",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    logo: "/tool-logos/chatgpt.svg",
    category: "Analytics",
    description:
      "OpenAI's conversational AI assistant with advanced data analysis capabilities. Upload campaign spreadsheets and get instant insights, trend analysis, and strategic recommendations.",
    website: "https://chat.openai.com",
    useCase:
      "Upload weekly campaign reports to identify underperforming ad sets, surface hidden trends, and generate optimization recommendations.",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    logo: "/tool-logos/canva-ai.svg",
    category: "Creative",
    description:
      "Canva's AI-powered design suite with Magic Design, Magic Write, and background removal tools built into an intuitive drag-and-drop editor used by millions of marketers.",
    website: "https://www.canva.com",
    useCase:
      "Rapidly resize winning ad creatives across all platform dimensions and generate on-brand variations with Magic Design.",
  },
  {
    slug: "jasper-ai",
    name: "Jasper AI",
    logo: "/tool-logos/jasper-ai.svg",
    category: "Copywriting",
    description:
      "Enterprise AI copywriting platform trained on high-performing marketing copy. Generates ad headlines, descriptions, email sequences, and landing page copy with brand voice consistency.",
    website: "https://www.jasper.ai",
    useCase:
      "Write hundreds of Google Ads headline and description variations that maintain brand voice while maximizing click-through rates.",
  },
  {
    slug: "madgicx",
    name: "Madgicx",
    logo: "/tool-logos/adcreative-ai.svg",
    category: "Automation",
    description:
      "AI-driven ad optimization platform for Meta Ads that automates bidding, budget allocation, and audience targeting using predictive analytics and real-time performance data.",
    website: "https://madgicx.com",
    useCase:
      "Automate Meta Ads budget shifting across ad sets based on real-time ROAS, saving hours of manual bid management each week.",
  },
  {
    slug: "creatify",
    name: "Creatify",
    logo: "/tool-logos/runway.svg",
    category: "Creative",
    description:
      "AI video ad generator that transforms product URLs into ready-to-run video ads. Features AI avatars, auto-scripting, and batch creation for performance marketing teams.",
    website: "https://www.creatify.ai",
    useCase:
      "Turn product catalog URLs into dozens of UGC-style video ads with AI avatars for TikTok and Meta campaigns in minutes.",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    logo: "/tool-logos/jasper-ai.svg",
    category: "Copywriting",
    description:
      "AI-powered copywriting and workflow automation platform with specialized templates for ads, social media, and email marketing. Features team collaboration and brand voice training.",
    website: "https://www.copy.ai",
    useCase:
      "Generate high-converting Facebook ad primary text and headline variations at scale, then A/B test the top performers.",
  },
  {
    slug: "revealbot",
    name: "Revealbot",
    logo: "/tool-logos/chatgpt.svg",
    category: "Automation",
    description:
      "Automated ad management tool for Meta, Google, TikTok, and Snapchat. Set custom rules to pause, boost, or adjust campaigns based on performance thresholds.",
    website: "https://revealbot.com",
    useCase:
      "Create automated rules that pause underperforming ads and scale winners across Meta, Google, and TikTok from a single dashboard.",
  },
  {
    slug: "supermetrics",
    name: "Supermetrics",
    logo: "/tool-logos/canva-ai.svg",
    category: "Analytics",
    description:
      "Marketing data pipeline that pulls data from 100+ ad platforms, analytics tools, and CRMs into spreadsheets, dashboards, and data warehouses for unified reporting.",
    website: "https://supermetrics.com",
    useCase:
      "Automatically pull cross-platform ad spend and conversion data into a single Google Sheets dashboard for weekly client reporting.",
  },
  {
    slug: "triple-whale",
    name: "Triple Whale",
    logo: "/tool-logos/midjourney.svg",
    category: "Analytics",
    description:
      "AI-powered attribution and analytics platform built for e-commerce brands. Provides first-party data tracking, creative analytics, and AI-driven budget recommendations.",
    website: "https://www.triplewhale.com",
    useCase:
      "Get accurate multi-touch attribution across all ad channels and use AI recommendations to reallocate budget toward highest-ROAS campaigns.",
  },
];

export function getToolsByCategory(category: string): Tool[] {
  return allTools.filter((tool) => tool.category === category);
}

export function searchTools(query: string): Tool[] {
  const lower = query.toLowerCase();
  return allTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lower) ||
      tool.description.toLowerCase().includes(lower) ||
      tool.category.toLowerCase().includes(lower) ||
      tool.useCase.toLowerCase().includes(lower)
  );
}

export const toolCategories = [
  "Creative",
  "Analytics",
  "Automation",
  "Copywriting",
] as const;
