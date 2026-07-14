/**
 * SEO Configuration
 * Contains SEO metadata for all pages in the application
 * Uses react-helmet-async for meta tag management
 *
 * NOTE: All `path` values below are matched EXACTLY to the links used in
 * the Header component (navLinks / servicesData / industriesData / serviceAreasData)
 * so every menu item has corresponding SEO metadata.
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mindframeglobal.com';

export const seoConfig = {
  // ─────────────────────────────────────────────────────────
  // Main Pages
  // ─────────────────────────────────────────────────────────
  home: {
    title: 'Mindframe Global',
    description:
      'Leading digital marketing & advertising agency offering web development, mobile app development, branding, SEO, and media buying. Grow your business with Mindframe Global.',
    keywords:
      'digital marketing agency, advertising agency, web development, mobile app development, branding services, media buying, SEO company, digital marketing services',
    path: '/',
    type: 'website',
  },

  about: {
    title: 'About Us - Mind Frame Global',
    description:
      'Learn about Mindframe Global - our mission to transform brands through digital innovation, our expert team, and how we help businesses succeed in the digital landscape.',
    keywords: 'about mindframe, digital marketing company, creative agency, our team, company story, advertising agency',
    path: '/about-us',
    type: 'website',
  },

  contact: {
    title: 'Contact - Mindframe Global ',
    description:
      'Contact Mindframe Global today for digital marketing, advertising, web development, and creative services. Reach out to discuss your project with our experts.',
    keywords: 'contact mindframe, get in touch, digital marketing consultation, advertising agency contact, mindframe support',
    path: '/contact-us',
    type: 'website',
  },

  blogs: {
    title: 'Blogs - Mindframe Global',
    description:
      'Read the latest insights, tips, and strategies on digital marketing, SEO, social media marketing, content strategy, and creative design from Mindframe Global experts.',
    keywords:
      'digital marketing blog, SEO blog, social media marketing tips, content strategy, marketing insights, digital advertising trends',
    path: '/blogs',
    type: 'website',
  },

  ourWork: {
    title: 'Our Work - Mind Frame Global',
    description:
      'Explore our award-winning digital marketing and advertising campaigns. See how Mindframe helps brands achieve their goals through creative solutions.',
    keywords:
      'portfolio, case studies, marketing campaigns, advertising campaigns, our work, success stories, campaign examples',
    path: '/our-work',
    type: 'website',
  },

  testimonial: {
    title: 'Mindframe Global',
    description:
      'Read testimonials from our satisfied clients. Discover why brands trust Mindframe Global for digital marketing, advertising, and creative services.',
    keywords: 'client testimonial, success stories, client reviews, feedback, client satisfaction, case studies',
    path: '/testimonial',
    type: 'website',
  },

  careers: {
    title: 'Careers at Mindframe Global - Join Our Creative Team',
    description:
      'Join Mindframe Global! Explore exciting career opportunities in digital marketing, design, development, and creative services. Build your future with us.',
    keywords: 'careers, jobs, employment opportunities, digital marketing jobs, design jobs, development jobs, mindframe careers',
    path: '/careers',
    type: 'website',
  },

  team: {
    title: 'Our Team - Meet the Mindframe Global Experts',
    description:
      'Meet the talented and experienced team at Mindframe Global. Discover the creative minds behind our successful campaigns and innovative solutions.',
    keywords: 'our team, team members, experts, staff, creative team, leadership, mindframe team',
    path: '/our-team',
    type: 'website',
  },

  privacy: {
    title: 'Privacy Policy - Mindframe Global',
    description: 'Mindframe Global Privacy Policy. Learn how we collect, use, protect, and manage your personal information and data.',
    keywords: 'privacy policy, data protection, privacy terms, data policy, personal information, terms and conditions',
    path: '/privacy',
    type: 'website',
  },

  disclaimer: {
    title: 'Beware of Fraudulent Activities - Mindframe Global',
    description: 'Mindframe Global Disclaimer. Learn about the risks of fraudulent activities and how to protect yourself.',
    keywords: 'disclaimer, fraud, scams, protection, awareness, mindframe',
    path: '/disclaimer',
    type: 'website',
  },

  industriesLanding: {
    title: 'Industries We Serve - Healthcare, Finance, Real Estate & More | Mindframe Global',
    description:
      'Mindframe Global delivers specialized marketing solutions across healthcare, financial services, food & beverage, real estate, FMCG, and startups. Explore industry-specific strategies.',
    keywords: 'industries we serve, healthcare marketing, financial services marketing, real estate marketing, FMCG marketing, startup marketing',
    path: '/industries',
    type: 'website',
  },

  servicesLanding: {
    title: 'Our Services - Creative, Branding, Performance & IT Solutions | Mindframe Global',
    description:
      'Explore Mindframe Global\'s full range of services: creative design, branding, performance marketing, and IT solutions built to grow your business.',
    keywords: 'digital marketing services, creative solutions, branding solutions, performance marketing, IT solutions',
    path: '/services',
    type: 'website',
  },

  serviceAreasLanding: {
    title: 'Service Areas - Marketing Agency Locations | Mindframe Global',
    description:
      'Mindframe Global provides digital marketing and advertising services across Arizona, California, and beyond. Find your local marketing agency.',
    keywords: 'marketing agency locations, service areas, local digital marketing agency, marketing agency near me',
    path: '/service-areas',
    type: 'website',
  },

  // ─────────────────────────────────────────────────────────
  // Creative Solutions (matches Header → servicesData → "Creative Solutions")
  // ─────────────────────────────────────────────────────────
  creativeSolutions: {
    logoDesigning: {
      title: 'Logo Designing Services - Professional Brand Identity | Mindframe Global',
      description:
        'Get a distinctive, memorable logo that captures your brand\'s essence. Mindframe Global\'s expert designers craft professional logos that build instant brand recognition.',
      keywords: 'logo designing, logo design services, brand identity design, professional logo design, custom logo, logo designer',
      path: '/logo-designing-service',
      type: 'website',
    },
    uiUxDesigning: {
      title: 'UI/UX Designing Services - User-Centric Interfaces | Mindframe Global',
      description:
        'Mindframe Global designs intuitive, user-centric UI/UX experiences for websites and apps that improve engagement, usability, and conversions.',
      keywords: 'UI UX design, user interface design, user experience design, UX design services, UI design agency, app UI design',
      path: '/ui-ux-design-service',
      type: 'website',
    },
    creativeDesigning: {
      title: 'Creative Designing Services - Visual Communication | Mindframe Global',
      description:
        'From social creatives to marketing collateral, Mindframe Global\'s creative design services turn ideas into compelling visual communication.',
      keywords: 'creative designing, visual design services, graphic design agency, creative design agency, marketing creatives',
      path: '/graphic-design-services',
      type: 'website',
    },
    twoDThreeDAnimation: {
      title: '2D/3D Animation Services - Motion Graphics | Mindframe Global',
      description:
        'Bring your brand story to life with Mindframe Global\'s 2D and 3D animation and motion graphics services, crafted for maximum audience engagement.',
      keywords: '2D animation, 3D animation, motion graphics services, animation studio, explainer video animation',
      path: '/video-animation-services',
      type: 'website',
    },
    corporateFilmsTvcs: {
      title: 'Corporate Films & TVCs - Professional Video Production | Mindframe Global',
      description:
        'Mindframe Global produces professional corporate films and television commercials (TVCs) that communicate your brand story with impact.',
      keywords: 'corporate films, TVC production, television commercials, corporate video production, brand film agency',
      path: '/corporate-video-production-services',
      type: 'website',
    },
    printAds: {
      title: 'Print Ads Design Services - Magazine & Newspaper Advertising | Mindframe Global',
      description:
        'Mindframe Global creates high-impact print ad designs for magazines, newspapers, and out-of-home media that command attention.',
      keywords: 'print ads design, print advertising agency, magazine ads, newspaper advertising, print media design',
      path: '/ads-print-services',
      type: 'website',
    },
  },

  // ─────────────────────────────────────────────────────────
  // Branding Solutions (matches Header → servicesData → "Branding Solutions")
  // ─────────────────────────────────────────────────────────
  brandingSolutions: {
    brandStrategy: {
      title: 'Brand Strategy Services - Strategic Brand Positioning | Mindframe Global',
      description:
        'Mindframe Global develops data-backed brand strategies that position your business for long-term growth and market differentiation.',
      keywords: 'brand strategy services, brand positioning, brand strategy agency, strategic branding, brand planning',
      path: '/branding-strategy-services',
      type: 'website',
    },
    brandIdentity: {
      title: 'Brand Identity Development Services - Mindframe Global',
      description:
        'From logo to voice and visuals, Mindframe Global builds complete brand identity systems that make your business instantly recognizable.',
      keywords: 'brand identity services, brand identity design, brand identity development, visual identity system',
      path: '/brand-identity-services',
      type: 'website',
    },
    brandGuidelines: {
      title: 'Brand Guidelines & Brand Standards - Mindframe Global',
      description:
        'Mindframe Global creates comprehensive brand guideline documents that ensure consistent brand presentation across every touchpoint.',
      keywords: 'brand guidelines, brand standards, brand style guide, brand book, brand consistency',
      path: '/brand-guideline-services',
      type: 'website',
    },
    brandArchitecture: {
      title: 'Brand Architecture Services - Portfolio Structuring | Mindframe Global',
      description:
        'Mindframe Global structures multi-brand portfolios with clear brand architecture strategies that support growth and clarity for customers.',
      keywords: 'brand architecture, brand portfolio structuring, multi-brand strategy, sub-brand strategy',
      path: '/brand-architecture-services',
      type: 'website',
    },
    campaignIdeation: {
      title: 'Campaign Ideation Services - Creative Campaign Development | Mindframe Global',
      description:
        'Mindframe Global\'s campaign ideation process turns brand goals into breakthrough creative campaigns that resonate and convert.',
      keywords: 'campaign ideation, creative campaign development, advertising campaign ideas, campaign strategy agency',
      path: '/campaign-ideation-services',
      type: 'website',
    },
  },

  // ─────────────────────────────────────────────────────────
  // Performance Marketing (matches Header → servicesData → "Performance Marketing")
  // ─────────────────────────────────────────────────────────
  performanceMarketing: {
    searchEngineMarketing: {
      title: 'Search Engine Marketing (SEM) Services - Paid Search & PPC | Mindframe Global',
      description:
        'Mindframe Global runs high-converting paid search and PPC campaigns that drive qualified traffic and measurable ROI through search engine marketing.',
      keywords: 'search engine marketing, SEM services, PPC agency, paid search campaigns, google ads management',
      path: '/search-engine-marketing-services',
      type: 'website',
    },
    searchEngineOptimization: {
      title: 'Search Engine Optimization (SEO) Services - Mindframe Global',
      description:
        'Boost your organic search visibility with Mindframe Global\'s SEO services, built on technical, on-page, and content-driven strategies.',
      keywords: 'search engine optimization, SEO services, SEO agency, organic search ranking, SEO company',
      path: '/search-engine-optimization-services',
      type: 'website',
    },
    socialMediaAdvertising: {
      title: 'Social Media Advertising Services - Mindframe Global',
      description:
        'Mindframe Global plans and executes high-performing social media ad campaigns across Meta, Instagram, LinkedIn, and more to grow your brand.',
      keywords: 'social media advertising, social media ads agency, Meta ads, Instagram advertising, social media marketing services',
      path: '/social-media-advertising-services',
      type: 'website',
    },
    emailMarketing: {
      title: 'Email Marketing Services - Automation & Campaigns | Mindframe Global',
      description:
        'Mindframe Global builds email marketing automation and campaigns that nurture leads and drive repeat business for your brand.',
      keywords: 'email marketing services, email automation, email campaign agency, newsletter marketing',
      path: '/email-marketing-services',
      type: 'website',
    },
    contentMarketing: {
      title: 'Content Marketing Services - Content-Driven Engagement | Mindframe Global',
      description:
        'Mindframe Global creates content marketing strategies that build authority, engagement, and long-term organic growth for your brand.',
      keywords: 'content marketing services, content strategy agency, content marketing company, blog content marketing',
      path: '/content-marketing-services',
      type: 'website',
    },
  },

  // ─────────────────────────────────────────────────────────
  // IT Solutions (matches Header → servicesData → "IT Solutions")
  // ─────────────────────────────────────────────────────────
  itSolutions: {
    websiteDevelopment: {
      title: 'Website Development Services - Custom Design & Development | Mindframe Global',
      description:
        'Mindframe Global builds custom, responsive, and SEO-friendly websites engineered for performance, scalability, and business growth.',
      keywords: 'website development services, custom website design, responsive web development, website development company',
      path: '/web-development-services',
      type: 'website',
    },
    mobileAppDevelopment: {
      title: 'Mobile App Development Services - iOS & Android | Mindframe Global',
      description:
        'Mindframe Global develops custom iOS and Android mobile applications that deliver seamless user experiences and drive engagement.',
      keywords: 'mobile app development services, iOS app development, Android app development, app development company',
      path: '/mobile-app-development-services',
      type: 'website',
    },
    saasDevelopment: {
      title: 'SaaS Development Services - Software as a Service Solutions | Mindframe Global',
      description:
        'Mindframe Global builds scalable SaaS products and platforms tailored to your business model, from MVP to full-scale deployment.',
      keywords: 'SaaS development, software as a service solutions, SaaS product development, SaaS development company',
      path: '/software-as-a-service-saas',
      type: 'website',
    },
    crmSolutions: {
      title: 'CRM Solutions - Customer Relationship Management | Mindframe Global',
      description:
        'Mindframe Global implements and customizes CRM solutions that help businesses manage customer relationships and streamline sales pipelines.',
      keywords: 'CRM solutions, customer relationship management, CRM implementation, CRM software development',
      path: '/customer-relationship-management-crm',
      type: 'website',
    },
    cloudComputing: {
      title: 'Cloud Computing Solutions - Infrastructure & Services | Mindframe Global',
      description:
        'Mindframe Global provides cloud infrastructure, migration, and managed cloud services that improve scalability, security, and cost efficiency.',
      keywords: 'cloud computing solutions, cloud infrastructure services, cloud migration, cloud services company',
      path: '/cloud-computing-solutions',
      type: 'website',
    },
    cyberSecurity: {
      title: 'Cyber Security Services - Security & Compliance Solutions | Mindframe Global',
      description:
        'Mindframe Global delivers cyber security services including risk assessment, compliance, and protection solutions to safeguard your business.',
      keywords: 'cyber security services, IT security solutions, security compliance, cybersecurity company',
      path: '/cyber-security-services',
      type: 'website',
    },
    databaseManagement: {
      title: 'Database Management & Mining Services - Mindframe Global',
      description:
        'Mindframe Global offers database management and data mining services that turn raw data into actionable business insights.',
      keywords: 'database management services, data mining services, database administration, data management company',
      path: '/database-management-and-mining',
      type: 'website',
    },
    managedServices: {
      title: 'Managed IT Services - Support & Management | Mindframe Global',
      description:
        'Mindframe Global provides managed IT services covering support, monitoring, and infrastructure management so you can focus on your business.',
      keywords: 'managed IT services, IT support and management, managed services provider, IT outsourcing company',
      path: '/managed-services',
      type: 'website',
    },
  },

  // ─────────────────────────────────────────────────────────
  // Industries (matches Header → industriesData)
  // ─────────────────────────────────────────────────────────
  industries: {
    dentalMarketing: {
      title: 'Dental Marketing Agency Phoenix AZ - Advertising Solutions | Mindframe Global',
      description:
        'Mindframe Global is a specialized dental marketing agency in Phoenix, AZ, helping dental practices attract patients and grow revenue.',
      keywords: 'dental marketing agency phoenix, dental practice marketing, dentist advertising, dental SEO agency',
      path: '/dental-marketing-agency-phoenix',
      type: 'website',
    },
    healthCareIndustry: {
      title: 'Best Health Care Marketing Agency - Advertising Solutions | Mindframe Global',
      description:
        'Mindframe Global delivers comprehensive healthcare marketing and advertising solutions that build patient trust and drive practice growth.',
      keywords: 'healthcare marketing agency, health care advertising, medical practice marketing, healthcare digital marketing',
      path: '/health-care-industry',
      type: 'website',
    },
    financeIndustry: {
      title: 'Best Financial Services Marketing Agency in San Francisco | Mindframe Global',
      description:
        'Mindframe Global helps banks and financial services firms in San Francisco grow their brand with compliant, results-driven marketing.',
      keywords: 'financial services marketing agency, banking marketing, fintech marketing, finance industry advertising',
      path: '/finance-industry',
      type: 'website',
    },
    foodAndBeverageIndustry: {
      title: 'Top Restaurant Marketing Services - Fast Food Advertising | Mindframe Global',
      description:
        'Mindframe Global offers restaurant and food & beverage marketing services covering fast food promotion, fine dining branding, and more.',
      keywords: 'restaurant marketing services, food and beverage advertising, fast food marketing, restaurant branding agency',
      path: '/food-and-beverage-industry',
      type: 'website',
    },
    realEstateIndustry: {
      title: 'Top Real Estate Marketing Agency in San Francisco Bay Area | Mindframe Global',
      description:
        'Mindframe Global provides real estate marketing services for property developers and agents across the San Francisco Bay Area.',
      keywords: 'real estate marketing agency, property marketing, real estate advertising, real estate digital marketing',
      path: '/real-estate-industry',
      type: 'website',
    },
    fmcgIndustry: {
      title: 'FMCG Marketing Agency - Fast Moving Consumer Goods | Mindframe Global',
      description:
        'Mindframe Global helps FMCG brands build consumer product branding and marketing strategies that drive shelf and online sales.',
      keywords: 'FMCG marketing agency, consumer goods branding, FMCG advertising, fast moving consumer goods marketing',
      path: '/fmcg-industry',
      type: 'website',
    },
    smallBusinessesIndustry: {
      title: 'Startups, SMBs & Large Corporates Marketing Services | Mindframe Global',
      description:
        'Mindframe Global delivers scale-up and growth marketing strategies tailored for startups, SMBs, and large corporates.',
      keywords: 'startup marketing agency, SMB marketing services, small business advertising, corporate marketing agency',
      path: '/small-businesses-industry',
      type: 'website',
    },
  },

  // ─────────────────────────────────────────────────────────
  // Service Areas (matches Header → serviceAreasData)
  // ─────────────────────────────────────────────────────────
  serviceAreas: {
    phoenix: {
      title: 'Marketing Agency in Phoenix, AZ - Mindframe Global',
      description:
        'Mindframe Global is a full-service marketing agency in Phoenix, AZ, offering digital marketing, branding, and advertising solutions.',
      keywords: 'marketing agency phoenix, phoenix digital marketing, phoenix advertising agency',
      path: '/marketing-agency-in-phoenix',
      type: 'website',
    },
    arizona: {
      title: 'Marketing Agency in Arizona - Mindframe Global',
      description:
        'Mindframe Global provides digital marketing and advertising services to businesses across Arizona.',
      keywords: 'marketing agency arizona, arizona digital marketing, arizona advertising agency',
      path: '/marketing-agency-in-arizona',
      type: 'website',
    },
    tempe: {
      title: 'Marketing Agency in Tempe, AZ - Mindframe Global',
      description:
        'Mindframe Global delivers brand marketing services to businesses in Tempe, Arizona, from strategy to execution.',
      keywords: 'marketing agency tempe, tempe digital marketing, tempe advertising agency',
      path: '/marketing-agency-in-tempe',
      type: 'website',
    },
    scottsdale: {
      title: 'Marketing Agency in Scottsdale, AZ - Mindframe Global',
      description:
        'Mindframe Global offers advertising and digital marketing services for businesses in Scottsdale, Arizona.',
      keywords: 'marketing agency scottsdale, scottsdale digital marketing, scottsdale advertising agency',
      path: '/marketing-agency-in-scottsdale',
      type: 'website',
    },
    losAngeles: {
      title: 'Digital Marketing Agency in Los Angeles - Mindframe Global',
      description:
        'Mindframe Global provides digital marketing solutions for Los Angeles businesses looking to grow their brand and revenue.',
      keywords: 'digital marketing agency los angeles, LA marketing agency, los angeles advertising agency',
      path: '/digital-marketing-agency-los-angeles',
      type: 'website',
    },
    sanFrancisco: {
      title: 'Digital Marketing Agency in San Francisco (Silicon Valley) - Mindframe Global',
      description:
        'Mindframe Global delivers Bay Area brand and digital marketing services for businesses across San Francisco and Silicon Valley.',
      keywords: 'digital marketing agency san francisco, silicon valley marketing agency, bay area advertising agency',
      path: '/digital-marketing-agency-silicon-valley',
      type: 'website',
    },
    seattle: {
      title: 'Digital Marketing Agency in Seattle - Mindframe Global',
      description:
        'Mindframe Global offers digital marketing and advertising solutions tailored for businesses in Seattle, Washington.',
      keywords: 'digital marketing agency seattle, seattle advertising agency, seattle marketing solutions',
      path: '/digital-marketing-agency-seattle',
      type: 'website',
    },
    newYork: {
      title: 'Digital Marketing Agency in New York - Mindframe Global',
      description:
        'Mindframe Global provides NYC brand marketing and digital advertising services for businesses across New York.',
      keywords: 'digital marketing agency new york, NYC marketing agency, new york advertising agency',
      path: '/digital-marketing-agency-new-york',
      type: 'website',
    },
  },
};

/**
 * Get SEO data for a page
 * Supports dotted-path lookups, e.g. getSEOData('creativeSolutions.logoDesigning')
 */
export const getSEOData = (page) => {
  const keys = page.split('.');
  let data = seoConfig;

  for (const key of keys) {
    data = data[key];
    if (!data) return null;
  }

  return data;
};

/**
 * Get SEO data by matching a URL path directly against every entry in seoConfig.
 * Useful when you only have the pathname (e.g. from Header links) and don't know
 * which config key it maps to.
 */
export const getSEODataByPath = (path) => {
  const walk = (node) => {
    if (!node || typeof node !== 'object') return null;
    if (typeof node.path === 'string') {
      if (node.path === path) return node;
    }
    for (const key of Object.keys(node)) {
      const found = walk(node[key]);
      if (found) return found;
    }
    return null;
  };
  return walk(seoConfig);
};

/**
 * Get blog SEO data
 */
export const getBlogSEOData = (blog) => ({
  title: blog.title,
  description: blog.excerpt || blog.description?.substring(0, 160),
  keywords: blog.category || 'digital marketing, blog',
  path: `/blogs/${blog.slug || blog._id}`,
  type: 'article',
  image: blog.image || `${BASE_URL}/default-blog-image.png`,
});

export const createArticleSchema = (blog) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: blog.title,
  description: blog.excerpt || blog.description,
  image: blog.image,
  datePublished: blog.createdAt,
  dateModified: blog.updatedAt || blog.createdAt,
  author: {
    '@type': 'Person',
    name: blog.author || 'Mindframe Global',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mindframe Global',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/blogs/${blog.slug || blog._id}`,
  },
});