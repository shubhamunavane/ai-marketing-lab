export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export interface PromptSection {
  category: string;
  prompts: Prompt[];
}

export const allPromptSections: PromptSection[] = [
  {
    category: "Ad Creatives",
    prompts: [
      {
        id: "ad-creative-variations",
        title: "Generate Ad Creative Variations",
        description:
          "Create multiple ad creative concepts for A/B testing across platforms.",
        prompt: `You are a senior performance marketing creative strategist. I need you to generate 5 distinct ad creative concepts for the following product/service:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[PLATFORM]: Facebook / Instagram / Google / TikTok
[GOAL]: Conversions / Awareness / Traffic

For each concept, provide:
1. Visual direction (describe the image or video idea)
2. Primary text (under 125 characters)
3. Headline (under 40 characters)
4. Call-to-action button suggestion
5. Why this angle works for the target audience

Make each concept use a different psychological hook: social proof, urgency, curiosity, pain point, or aspiration.`,
      },
      {
        id: "ugc-script",
        title: "Write a UGC-Style Video Ad Script",
        description:
          "Generate authentic user-generated content scripts for social ads.",
        prompt: `Write a 30-second UGC-style video ad script for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[KEY BENEFIT]:
[PLATFORM]: TikTok / Instagram Reels / YouTube Shorts

Structure the script as:
- Hook (first 3 seconds): Something that stops the scroll
- Problem (5 seconds): Relatable pain point
- Discovery (5 seconds): How they found the product
- Solution (10 seconds): Show the product in action with key benefits
- CTA (5 seconds): Clear call to action

Write it in a casual, first-person tone. Include stage directions in brackets. Make it feel authentic, not scripted.`,
      },
      {
        id: "carousel-ad",
        title: "Design a Carousel Ad Sequence",
        description:
          "Plan a high-converting carousel ad with slide-by-slide content.",
        prompt: `Create a 5-slide carousel ad for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[PLATFORM]: Facebook / Instagram / LinkedIn

For each slide, provide:
- Slide visual description
- Text overlay (keep it short and punchy)
- How it connects to the next slide

Structure:
Slide 1: Hook — grab attention with a bold statement or question
Slide 2: Problem — highlight the pain point
Slide 3: Solution — introduce your product/service
Slide 4: Proof — show results, testimonials, or data
Slide 5: CTA — clear next step

Make the sequence tell a story that builds curiosity and drives swipes.`,
      },
    ],
  },
  {
    category: "Media Buying",
    prompts: [
      {
        id: "campaign-structure",
        title: "Plan a Campaign Structure",
        description:
          "Get a recommended campaign structure for any ad platform.",
        prompt: `You are an expert media buyer. Help me plan a campaign structure for:

[PLATFORM]: Facebook Ads / Google Ads / TikTok Ads
[OBJECTIVE]: Conversions / Lead Generation / App Installs / Awareness
[MONTHLY BUDGET]:
[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:

Provide:
1. Recommended campaign structure (campaigns, ad sets, ads)
2. Audience targeting strategy (interest-based, lookalike, broad)
3. Budget allocation across campaigns (percentage split)
4. Bidding strategy recommendation
5. Testing plan for the first 2 weeks
6. Key metrics to track and target KPIs
7. Scaling criteria — when and how to scale winners

Be specific with numbers and percentages.`,
      },
      {
        id: "audit-checklist",
        title: "Ad Account Audit Checklist",
        description: "Generate a comprehensive audit for any ad account.",
        prompt: `Act as a senior media buying consultant. Create a comprehensive ad account audit checklist for:

[PLATFORM]: Facebook / Google / TikTok
[INDUSTRY]:
[MONTHLY SPEND]:

Cover these areas:
1. Account structure (campaigns, naming conventions, organization)
2. Audience targeting (overlap, saturation, exclusions)
3. Creative performance (fatigue signals, winning patterns)
4. Bidding and budget (efficiency, pacing, wasted spend)
5. Conversion tracking (pixel setup, attribution, events)
6. Landing page alignment (message match, load speed)
7. Scaling opportunities (what to double down on)
8. Quick wins (immediate optimizations to implement)

For each area, list specific things to check and red flags to look for.`,
      },
      {
        id: "scaling-strategy",
        title: "Campaign Scaling Strategy",
        description:
          "Get a step-by-step plan to scale winning campaigns profitably.",
        prompt: `I have a winning ad campaign that I want to scale. Help me create a scaling strategy.

Current performance:
[PLATFORM]:
[DAILY SPEND]:
[CPA/ROAS]:
[WINNING AUDIENCE]:
[WINNING CREATIVE]:

Provide a scaling plan that covers:
1. Vertical scaling (budget increases) — how much and how fast
2. Horizontal scaling (new audiences) — what audiences to test next
3. Creative scaling — how to create variations of the winner
4. Campaign duplication strategy
5. Warning signs to watch for during scaling
6. Contingency plan if performance drops
7. Timeline for scaling from current spend to 3x budget

Include specific daily budget increase percentages and timing.`,
      },
    ],
  },
  {
    category: "Copywriting",
    prompts: [
      {
        id: "headline-generator",
        title: "Generate High-Converting Headlines",
        description:
          "Create multiple headline variations using proven copywriting frameworks.",
        prompt: `Generate 15 high-converting ad headlines for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[KEY BENEFIT]:
[PLATFORM]: Google Ads / Facebook / Landing Page

Create 3 headlines for each framework:
1. Problem-Agitate-Solve (lead with the pain point)
2. How-To (promise a clear outcome)
3. Social Proof (leverage numbers or testimonials)
4. Curiosity Gap (make them want to learn more)
5. Direct Benefit (state the value proposition clearly)

Requirements:
- Google Ads headlines: max 30 characters each
- Facebook headlines: max 40 characters each
- Landing page headlines: max 10 words each

For each headline, add a brief note on why it works.`,
      },
      {
        id: "email-sequence",
        title: "Write a Marketing Email Sequence",
        description:
          "Generate a complete email sequence for nurturing leads or promoting a product.",
        prompt: `Write a 5-email marketing sequence for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[GOAL]: Nurture / Launch / Re-engagement / Upsell
[BRAND VOICE]: Professional / Casual / Bold / Friendly

For each email provide:
1. Subject line (and a B variant for testing)
2. Preview text
3. Email body (keep each under 200 words)
4. Call-to-action
5. Optimal send timing relative to the previous email

Sequence structure:
Email 1: Hook — deliver immediate value
Email 2: Story — share a relatable case study or narrative
Email 3: Educate — teach something useful related to the product
Email 4: Proof — share testimonials, results, or data
Email 5: Offer — present the CTA with urgency

Write in a conversational tone. Each email should work standalone but build on the previous.`,
      },
      {
        id: "product-description",
        title: "Write Persuasive Product Descriptions",
        description:
          "Create benefit-driven product descriptions for ads and landing pages.",
        prompt: `Write 3 versions of a product description for:

[PRODUCT NAME]:
[PRODUCT TYPE]:
[KEY FEATURES]:
[TARGET AUDIENCE]:
[PRICE POINT]:

Version 1: Short (50 words) — for ad copy and social media
Version 2: Medium (150 words) — for product pages and emails
Version 3: Long (300 words) — for landing pages and sales pages

Each version should:
- Lead with the biggest benefit, not features
- Include sensory and emotional language
- Address the main objection
- End with a clear call-to-action
- Use the target audience's language and tone

Focus on transformation — what does the buyer's life look like after using this product?`,
      },
    ],
  },
  {
    category: "Landing Pages",
    prompts: [
      {
        id: "landing-page-copy",
        title: "Write Landing Page Copy",
        description:
          "Generate complete above-the-fold and full-page landing page copy.",
        prompt: `Write complete landing page copy for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[PRIMARY CTA]: Sign Up / Buy Now / Book a Demo / Start Free Trial
[KEY DIFFERENTIATOR]:

Provide copy for each section:

1. HERO SECTION
- Headline (max 10 words, benefit-driven)
- Subheadline (1-2 sentences expanding on the promise)
- CTA button text
- Supporting text below CTA (trust element)

2. PROBLEM SECTION
- Section headline
- 3 pain points the audience faces

3. SOLUTION SECTION
- Section headline
- 3 key benefits with short descriptions

4. SOCIAL PROOF
- Section headline
- 3 testimonial templates (write realistic examples)

5. FAQ SECTION
- 5 common objections framed as questions with answers

6. FINAL CTA
- Urgency-driven headline
- CTA button text
- Risk-reversal statement (guarantee, free trial, etc.)

Write in a clear, direct tone. Every line should move the reader toward the CTA.`,
      },
      {
        id: "ab-test-ideas",
        title: "Landing Page A/B Test Ideas",
        description:
          "Get a prioritized list of landing page tests to improve conversion rates.",
        prompt: `I need A/B test ideas to improve my landing page conversion rate.

[CURRENT CONVERSION RATE]:
[PAGE TYPE]: Lead Gen / E-commerce / SaaS / Webinar
[TRAFFIC SOURCE]: Paid Social / Google Ads / Organic / Email
[CURRENT HEADLINE]:
[CURRENT CTA]:

Generate 10 A/B test ideas, prioritized by potential impact.

For each test provide:
1. What to test (specific element)
2. Control vs. Variant (what to change)
3. Hypothesis (why this should improve conversions)
4. Expected impact (high / medium / low)
5. Effort to implement (easy / medium / hard)

Focus on tests that typically have the highest impact:
- Headlines and value propositions
- CTA copy and placement
- Social proof positioning
- Form length and fields
- Page layout and visual hierarchy`,
      },
    ],
  },
  {
    category: "Video Ad Ideas",
    prompts: [
      {
        id: "video-hook-ideas",
        title: "Generate Video Ad Hooks",
        description:
          "Create scroll-stopping opening hooks for video ads across platforms.",
        prompt: `Generate 10 scroll-stopping video ad hooks (first 3 seconds) for:

[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[PLATFORM]: TikTok / Instagram Reels / YouTube / Facebook

For each hook provide:
1. The exact opening line or action
2. Visual direction (what the viewer sees)
3. Why this hook works (psychology behind it)
4. Hook type: Question / Bold Claim / Pattern Interrupt / Controversy / Storytelling

Rules:
- Each hook must work in the first 3 seconds
- No slow intros — immediate engagement
- Match the native style of the platform
- Vary the hook types for testing

Also suggest which 3 hooks to test first and why.`,
      },
      {
        id: "video-ad-storyboard",
        title: "Video Ad Storyboard",
        description:
          "Plan a complete video ad with scene-by-scene breakdown.",
        prompt: `Create a detailed storyboard for a video ad:

[PRODUCT/SERVICE]:
[AD LENGTH]: 15s / 30s / 60s
[PLATFORM]: TikTok / YouTube / Meta / Connected TV
[STYLE]: UGC / Polished / Animation / Talking Head / Demo
[OBJECTIVE]: Awareness / Consideration / Conversion

Provide a scene-by-scene breakdown:

For each scene include:
- Timestamp (e.g., 0:00-0:03)
- Visual description (what the viewer sees)
- Audio/voiceover script
- Text overlays
- Transition to next scene

Also include:
- Music/sound direction
- Thumbnail recommendation
- Caption/subtitle strategy
- 3 variations of the CTA end card

Make sure the pacing matches the platform's best practices.`,
      },
      {
        id: "video-repurpose",
        title: "Repurpose Video Content for Ads",
        description:
          "Turn existing video content into multiple ad formats and variations.",
        prompt: `Help me repurpose existing video content into ad variations:

[ORIGINAL VIDEO]: (describe the video — length, style, content)
[PRODUCT/SERVICE]:
[PLATFORMS NEEDED]: TikTok / Instagram / YouTube / Facebook

Create a repurposing plan:

1. SHORT CUTS (3 variations)
- 15-second cut: which segment to use, new hook
- 30-second cut: which segments to combine
- 6-second bumper: the single best moment

2. FORMAT ADAPTATIONS
- Vertical (9:16) version plan
- Square (1:1) version plan
- Horizontal (16:9) version plan

3. CREATIVE VARIATIONS
- New hook + original body
- Original hook + different CTA
- Testimonial overlay version

4. TEXT OVERLAY VERSIONS
- Silent autoplay version (full captions)
- Bold text overlay version (key stats/benefits)

For each variation, specify what to keep, what to cut, and what to add.`,
      },
    ],
  },
  {
    category: "Analytics",
    prompts: [
      {
        id: "campaign-report",
        title: "Generate a Campaign Performance Report",
        description:
          "Create a structured performance report from your ad campaign data.",
        prompt: `Act as a data-driven marketing analyst. Generate a comprehensive campaign performance report based on the following data:

[PLATFORM]:
[CAMPAIGN NAME]:
[DATE RANGE]:
[TOTAL SPEND]:
[IMPRESSIONS]:
[CLICKS]:
[CONVERSIONS]:
[REVENUE (if applicable)]:

Provide:
1. Executive Summary (3-4 sentences, key takeaways)
2. Key Metrics Breakdown
   - CTR, CPC, CPM, CPA, ROAS
   - Compare to industry benchmarks
3. Performance Analysis
   - What worked well and why
   - What underperformed and possible reasons
4. Audience Insights (based on available data)
5. Creative Performance (if multiple creatives ran)
6. Budget Efficiency Analysis
7. Actionable Recommendations (prioritized list of 5-7 next steps)
8. Suggested tests for the next reporting period

Format the report in clear sections with headers. Use data to support every recommendation.`,
      },
      {
        id: "attribution-model",
        title: "Choose the Right Attribution Model",
        description:
          "Get recommendations on which attribution model fits your marketing setup.",
        prompt: `Help me choose the right attribution model for my marketing setup:

[BUSINESS TYPE]: E-commerce / SaaS / Lead Gen / App
[MARKETING CHANNELS]: (list all active channels — e.g., Google Ads, Meta Ads, Email, SEO, TikTok)
[AVERAGE SALES CYCLE]: Same day / 1-7 days / 1-4 weeks / 1-3 months / 3+ months
[CURRENT ATTRIBUTION]: Last-click / First-click / Linear / None
[MAIN CHALLENGE]:

Provide:
1. Analysis of my current attribution limitations
2. Recommended attribution model with justification
3. How to implement it (tools and settings needed)
4. Common pitfalls to avoid with this model
5. How to handle cross-device and cross-channel tracking
6. Suggested reporting structure to get accurate insights
7. How this model will change my budget allocation decisions

Explain in practical terms how changing the attribution model will impact my day-to-day campaign decisions.`,
      },
      {
        id: "kpi-dashboard",
        title: "Design a Marketing KPI Dashboard",
        description:
          "Plan a KPI dashboard layout with the right metrics for your goals.",
        prompt: `Help me design a marketing KPI dashboard for:

[BUSINESS TYPE]: E-commerce / SaaS / Agency / Lead Gen
[PRIMARY GOAL]: Revenue Growth / Lead Volume / Brand Awareness / Customer Retention
[MARKETING CHANNELS]: (list all active)
[REPORTING FREQUENCY]: Daily / Weekly / Monthly
[STAKEHOLDERS]: CEO / CMO / Marketing Team / Client

Provide:
1. Top-Level KPIs (5-7 metrics that belong at the top of the dashboard)
2. Channel-Specific Metrics (key metrics per active channel)
3. Funnel Metrics (awareness → consideration → conversion → retention)
4. Recommended Visualizations (chart types for each metric)
5. Benchmarks and Targets (how to set realistic goals)
6. Alert Thresholds (when to flag underperformance)
7. Recommended Tools (free and paid dashboard options)

For each metric, explain why it matters and how to act on it when it moves up or down.`,
      },
    ],
  },
  {
    category: "SEO",
    prompts: [
      {
        id: "keyword-research",
        title: "AI-Powered Keyword Research",
        description:
          "Generate a targeted keyword strategy for any niche or product.",
        prompt: `Act as an SEO specialist. Conduct keyword research for:

[WEBSITE/BUSINESS]:
[NICHE/INDUSTRY]:
[TARGET AUDIENCE]:
[BUSINESS GOAL]: Traffic / Leads / Sales / Brand Awareness
[COMPETITORS]: (list 2-3 competitor domains if known)

Provide:
1. Primary Keywords (5-10 high-intent keywords)
   - Include estimated search volume range and difficulty
2. Long-Tail Keywords (15-20 specific phrases)
   - Grouped by search intent (informational, commercial, transactional)
3. Question Keywords (10 questions people ask in this niche)
4. Content Gap Opportunities (topics competitors rank for that you don't)
5. Keyword Clusters (group related keywords into content themes)
6. Priority Ranking (which keywords to target first based on difficulty vs. opportunity)
7. Content Type Recommendations (blog post, landing page, tool, video) for each cluster

For each keyword, note whether it should be a new page, a blog post, or added to an existing page.`,
      },
      {
        id: "seo-content-brief",
        title: "Create an SEO Content Brief",
        description:
          "Generate a detailed content brief optimized for search rankings.",
        prompt: `Create a comprehensive SEO content brief for:

[TARGET KEYWORD]:
[SECONDARY KEYWORDS]:
[SEARCH INTENT]: Informational / Commercial / Transactional / Navigational
[CONTENT TYPE]: Blog Post / Landing Page / Pillar Page / Product Page
[TARGET WORD COUNT]:

Provide:
1. Title Tag (under 60 characters, includes primary keyword)
2. Meta Description (under 155 characters, includes CTA)
3. URL Slug (short, keyword-rich)
4. Content Outline
   - H1 headline
   - H2 sections with brief descriptions
   - H3 subsections where needed
5. Key Points to Cover (based on top-ranking competitors)
6. Internal Linking Suggestions (what pages to link to/from)
7. External Sources to Reference
8. Featured Snippet Opportunity (if applicable — format to win it)
9. Schema Markup Recommendations
10. Image/Visual Suggestions with alt text recommendations

The brief should be detailed enough for any writer to produce a top-ranking article.`,
      },
      {
        id: "technical-seo-audit",
        title: "Technical SEO Audit Checklist",
        description:
          "Get a comprehensive technical SEO audit checklist for any website.",
        prompt: `Generate a technical SEO audit checklist for:

[WEBSITE URL]:
[CMS/PLATFORM]: WordPress / Shopify / Custom / Next.js / Other
[SITE SIZE]: Small (under 50 pages) / Medium (50-500) / Large (500+)
[MAIN CONCERN]:

Cover these areas with specific checks:

1. CRAWLABILITY & INDEXATION
   - Robots.txt configuration
   - XML sitemap status
   - Index coverage issues
   - Crawl budget optimization

2. SITE SPEED & CORE WEB VITALS
   - LCP, FID/INP, CLS targets
   - Image optimization checks
   - JavaScript and CSS render-blocking
   - Server response time

3. MOBILE OPTIMIZATION
   - Mobile-first indexing readiness
   - Responsive design checks
   - Tap target sizing

4. ON-PAGE TECHNICAL ELEMENTS
   - Title tags, meta descriptions, header hierarchy
   - Canonical tags and duplicate content
   - Structured data / schema markup
   - Hreflang (if multilingual)

5. SITE ARCHITECTURE
   - URL structure
   - Internal linking depth
   - Breadcrumbs and navigation
   - Orphan pages

6. SECURITY & ACCESSIBILITY
   - HTTPS and mixed content
   - Accessibility basics (alt tags, ARIA)

For each item, mark priority (critical / important / nice-to-have) and provide the fix if an issue is found.`,
      },
    ],
  },
  {
    category: "Email Marketing",
    prompts: [
      {
        id: "welcome-sequence",
        title: "Write a Welcome Email Sequence",
        description:
          "Create an automated welcome series that converts new subscribers.",
        prompt: `Write a 7-email welcome sequence for new subscribers:

[BUSINESS/BRAND]:
[PRODUCT/SERVICE]:
[LEAD MAGNET]: (what did they sign up for?)
[BRAND VOICE]: Professional / Casual / Bold / Friendly / Witty
[PRIMARY GOAL]: Purchase / Book Demo / Upgrade / Engage

For each email provide:
1. Send timing (e.g., Immediately, Day 1, Day 3, etc.)
2. Subject line + A/B variant
3. Preview text
4. Email body (150-200 words max)
5. Primary CTA (button text + destination)
6. P.S. line (optional but recommended)

Sequence structure:
Email 1 (Immediate): Deliver the lead magnet + warm welcome
Email 2 (Day 1): Share your origin story or mission
Email 3 (Day 3): Deliver unexpected value (tip, resource, tool)
Email 4 (Day 5): Social proof — share a customer success story
Email 5 (Day 7): Address the #1 objection
Email 6 (Day 10): Make the primary offer
Email 7 (Day 14): Final nudge with urgency or bonus

Each email should feel personal, not promotional. Build trust before selling.`,
      },
      {
        id: "subject-line-generator",
        title: "Generate Email Subject Lines",
        description:
          "Create high-open-rate subject lines using proven formulas.",
        prompt: `Generate 20 email subject lines for:

[EMAIL PURPOSE]: Newsletter / Promotion / Product Launch / Cart Abandonment / Re-engagement / Event
[PRODUCT/SERVICE]:
[TARGET AUDIENCE]:
[BRAND VOICE]: Professional / Casual / Bold / Playful

Create subject lines using these formulas (2-3 per formula):

1. Curiosity Gap — make them need to know more
2. Urgency/Scarcity — time or quantity pressure
3. Personal/Name — use personalization tokens
4. Number/List — specific and scannable
5. Question — spark a thought or challenge
6. How-To/Benefit — promise a clear outcome
7. Social Proof — reference others' success
8. Controversy/Hot Take — challenge a common belief

Rules:
- Keep each under 50 characters (mobile-friendly)
- Avoid spam trigger words (free, act now, limited time)
- Include emoji options where appropriate (mark with 🏷️)
- Test preview text suggestions for the top 5

For each subject line, rate predicted open rate impact (high / medium / baseline).`,
      },
      {
        id: "newsletter-content-plan",
        title: "Plan a Monthly Newsletter Strategy",
        description:
          "Design a newsletter content calendar with engagement-focused topics.",
        prompt: `Create a monthly newsletter content plan for:

[BUSINESS/BRAND]:
[INDUSTRY/NICHE]:
[AUDIENCE]: (describe your subscriber base)
[SEND FREQUENCY]: Weekly / Bi-weekly / Monthly
[NEWSLETTER GOAL]: Engagement / Traffic / Sales / Thought Leadership

Provide:
1. Newsletter Format/Template
   - Recommended sections and their order
   - Ideal length (word count per section)
   - Visual style recommendations

2. Content Calendar (4 issues)
   For each issue:
   - Theme/Topic
   - Subject line
   - Main story/article idea (2-3 sentences)
   - Secondary content blocks (quick tips, links, resources)
   - CTA for each issue
   - Engagement element (poll, question, reply prompt)

3. Content Mix Strategy
   - Percentage split: educational / promotional / entertainment / curated
   - How to repurpose newsletter content for social media

4. Growth Tactics
   - 5 ways to grow the subscriber list
   - Referral program ideas
   - Cross-promotion opportunities

5. Metrics to Track
   - Open rate, CTR, unsubscribe rate targets
   - How to segment based on engagement

Make each issue valuable enough that subscribers look forward to it.`,
      },
    ],
  },
];
