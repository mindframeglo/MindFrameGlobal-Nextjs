'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Code, 
  Layout, 
  ShoppingCart, 
  Globe, 
  Smartphone,
  Server,
  Shield,
  Database,
  Cloud,
  Rocket,
  Target,
  BarChart3,
  Users,
  Clock,
  Award,
  ChevronRight,
  Check,
  ExternalLink,
  Sparkles,
  Gauge,
  DollarSign,
  TrendingUp,
  PenTool,
  Star,
  Play,
  Quote,
  Search,
  Eye,
  MousePointer,
  Megaphone,
  Radio,
  PieChart,
  BookOpen
} from 'lucide-react';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#dcc28a';

// ── Services Data ──
const services = [
  {
    id: 1,
    icon: Search,
    title: "Google Search Ads (PPC)",
    desc: "Targeted search campaigns that put your business at the top of Google when global customers are searching for your products.",
    color: "#4f46e5"
  },
  {
    id: 2,
    icon: Eye,
    title: "Display Advertising",
    desc: "Visual banner ads across Google's Display Network to build brand awareness and retarget potential customers.",
    color: "#7c3aed"
  },
  {
    id: 3,
    icon: MousePointer,
    title: "Shopping Ads",
    desc: "Product listing ads that showcase your products directly in search results with images, prices, and reviews.",
    color: "#dc2626"
  },
  {
    id: 4,
    icon: Megaphone,
    title: "YouTube Video Ads",
    desc: "Engaging video campaigns that capture attention and drive action on the world's second-largest search engine.",
    color: "#059669"
  },
];

// ── 5-Step Formula Data ──
const steps = [
  {
    number: "01",
    title: "Keyword Research",
    desc: "Deep analysis of high-intent keywords that drive qualified traffic to your business.",
    icon: Search,
  },
  {
    number: "02",
    title: "Campaign Structure",
    desc: "Strategic account setup with organized ad groups, ad copy, and audience targeting.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Bid Management",
    desc: "Smart bidding strategies that maximize ROI while controlling ad spend.",
    icon: DollarSign,
  },
  {
    number: "04",
    title: "Ad Creative Development",
    desc: "Compelling ad copy and visuals designed to increase click-through rates.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    desc: "Continuous A/B testing and performance monitoring to improve results.",
    icon: BarChart3,
  },
];

// ── Case Studies ──
const caseStudies = [
  {
    title: "global Real Estate Developer",
    result: "3.2x",
    label: "ROAS",
    icon: Award,
    link: "#",
    color: "#4f46e5"
  },
  {
    title: "E-commerce Brand",
    result: "+210%",
    label: "Conversion Growth",
    icon: TrendingUp,
    link: "#",
    color: "#dc2626"
  },
];

// ── Tech Stack ──
const techStack = [
  { name: 'Google Ads', icon: Search },
  { name: 'Microsoft Advertising', icon: Target },
  { name: 'Google Analytics 4', icon: BarChart3 },
  { name: 'Google Tag Manager', icon: Code },
  { name: 'SEMrush', icon: Globe },
  { name: 'Ahrefs', icon: Database },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "How much does Google Ads cost?",
    answer: "Costs vary based on your industry and target keywords. We work with budgets starting from ₹50,000/month and optimize to get the best possible return on your investment. We provide transparent reporting on every rupee spent."
  },
  {
    question: "How soon will I see results?",
    answer: "Many campaigns start showing results within the first week. However, we typically recommend a 3-month window to gather sufficient data for optimal optimization and to see meaningful trends in conversions and ROI."
  },
  {
    question: "Do you handle both search and display ads?",
    answer: "Absolutely! We offer comprehensive SEM services including Search, Display, Shopping, and Video ads. We can create an integrated strategy that uses the right mix of formats to achieve your business goals."
  },
  {
    question: "What's the difference between SEO and SEM?",
    answer: "SEO focuses on organic (free) traffic through search engine optimization, which takes time to build. SEM (Search Engine Marketing) is paid advertising that delivers immediate visibility. The best approach often combines both strategies."
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics including Click-Through Rate (CTR), Cost-Per-Click (CPC), Conversion Rate, Return on Ad Spend (ROAS), and overall Cost-Per-Acquisition (CPA). We provide detailed monthly dashboards so you can see exactly how your campaigns are performing."
  },
];

// ── Related Services ──
const relatedServices = [
  { title: "SEO Optimization", desc: "Organic traffic that grows over time", icon: Target, link: "/services/seo-optimization" },
  { title: "Content Marketing", desc: "Content that ranks and converts", icon: PenTool, link: "/services/content-marketing" },
  { title: "Website Development", desc: "Fast, SEO-friendly websites", icon: Code, link: "/services/website-development" },
];

// ── Helper Components ──
function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ 
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      transition: 'all 0.3s ease',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{
          fontSize: 15,
          fontWeight: 600,
          color: '#1a1a1a',
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.5,
        }}>
          {question}
        </span>
        <span style={{
          fontSize: 20,
          color: gold,
          flexShrink: 0,
          transition: 'transform 0.3s ease, background 0.3s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: open ? 'rgba(201,168,76,0.1)' : 'transparent',
        }}>
          +
        </span>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <p style={{
          fontSize: 14,
          color: '#555',
          lineHeight: 1.8,
          margin: '0 0 24px',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function SearchEngineMarketing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* <SEO 
        title={seoConfig.services.searchEngineMarketing.title}
        description={seoConfig.services.searchEngineMarketing.description}
        keywords={seoConfig.services.searchEngineMarketing.keywords}
        path={seoConfig.services.searchEngineMarketing.path}
      /> */}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.1); }
          50% { box-shadow: 0 0 40px rgba(201,168,76,0.2); }
        }
        .fade-in { animation: fadeInUp 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        .float-animation { animation: float 3s ease-in-out infinite; }
        .pulse-animation { animation: pulseGlow 3s ease-in-out infinite; }
        
        .stat-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .stat-card:hover {
          transform: translateY(-6px);
        }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: ${gold};
          box-shadow: 0 12px 40px rgba(201,168,76,0.12);
        }
        
        .step-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .step-card:hover {
          transform: translateY(-4px);
          border-color: ${gold};
          box-shadow: 0 8px 30px rgba(201,168,76,0.1);
        }
        
        .related-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .related-card:hover {
          transform: translateY(-4px);
          border-color: ${gold};
          box-shadow: 0 8px 30px rgba(201,168,76,0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, ${gold}, ${goldLight});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#1a1a1a', background: '#faf8f5', overflowX: 'hidden' }}>
        
        {/* ============== HERO SECTION ============== */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1432888622747-4eb9a8f2d56a?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(8,8,8,0.92) 0%, rgba(10,10,10,0.85) 50%, rgba(8,8,8,0.92) 100%)',
          }} />

          {/* Gold Glow */}
          <div style={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1200,
            margin: '0 auto',
            padding: isMobile ? '80px 20px 60px' : '100px 40px 80px',
            textAlign: 'center',
            width: '100%',
          }}>
            <div className="fade-in delay-1">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.2)',
                padding: '6px 20px',
                borderRadius: '50px',
                color: gold,
                fontSize: isMobile ? 10 : 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 24,
              }}>
                <Sparkles size={14} />
                PAID SEARCH SPECIALISTS
              </div>
            </div>
            
            <h1 className="fade-in delay-2" style={{
              fontSize: isMobile ? 'clamp(36px, 10vw, 48px)' : 'clamp(48px, 6vw, 72px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.08,
              margin: '0 0 20px',
              fontFamily: "'Cormorant Garamond', serif",
            }}>
              Google Ads That <br />
              <span className="gradient-text">Drive Profit, Not Clicks</span>
            </h1>
            
            <p className="fade-in delay-3" style={{
              fontSize: isMobile ? 16 : 18,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 680,
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}>
              Stop wasting money on clicks that don't convert. We build targeted campaigns that put your business in front of high-intent buyers in global.
            </p>
            
            <div className="fade-in delay-4" style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href="/contact-us" style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                background: gold,
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: isMobile ? 13 : 14,
                borderRadius: 8,
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 30px rgba(201,168,76,0.35)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = goldDark; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Get Your Free Audit
                <ArrowRight size={18} />
              </Link>
              <Link href="#services" style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: isMobile ? 13 : 14,
                borderRadius: 8,
                border: '1.5px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = gold; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}>
                See Our Services
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="fade-in delay-5" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? 20 : 40,
              marginTop: 40,
              flexWrap: 'wrap',
              paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>₹100M+</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Ad Spend Managed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>3.5x</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Average ROAS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>4.9★</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== REVENUE MACHINES QUOTE ============== */}
        <section style={{
          padding: isMobile ? '40px 20px' : '60px 40px',
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <Quote size={32} color={gold} style={{ opacity: 0.2, marginBottom: 8 }} />
            <p style={{
              fontSize: isMobile ? 'clamp(18px, 4vw, 24px)' : 'clamp(22px, 2.5vw, 28px)',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: 1.6,
              fontFamily: "'Cormorant Garamond', serif",
            }}>
              "We don't run ads. We build revenue engines. Every campaign is structured to deliver <span style={{ color: gold }}>profit</span>, not vanity metrics. Our focus is on <span style={{ color: gold }}>conversion value</span>—not just clicks."
            </p>
            <div style={{
              width: 50,
              height: 2,
              background: gold,
              margin: '20px auto 0',
            }} />
          </div>
        </section>

        {/* ============== WHY SEM MATTERS ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#f5f2ed',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                Why SEM Matters
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 12px',
              }}>
                Reach Customers <span style={{ color: gold }}>When They're Ready</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '0 auto' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 32 : 48,
              alignItems: 'center',
            }}>
              <div>
                <p style={{
                  fontSize: isMobile ? 15 : 16,
                  color: '#4a4a4a',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}>
                  With Google processing over <strong>3.5 billion searches daily</strong>, SEM puts your business in front of customers with <strong>purchase intent</strong>—right when they're searching for what you offer.
                </p>
                <p style={{
                  fontSize: isMobile ? 15 : 16,
                  color: '#4a4a4a',
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}>
                  Our <span style={{ color: gold, fontWeight: 600 }}>360MH-managed</span> campaigns deliver measurable ROI through smart bidding, precise targeting, and continuous optimization.
                </p>
                <div style={{
                  display: 'flex',
                  gap: 12,
                  marginTop: 24,
                  flexWrap: 'wrap',
                }}>
                  {['High-Intent Targeting', 'Immediate Visibility', 'Measurable ROI', 'Budget Control'].map((item) => (
                    <span key={item} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      color: '#1a1a1a',
                      background: '#fff',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}>
                      <CheckCircle size={14} color={gold} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{
                background: '#fff',
                borderRadius: 16,
                padding: isMobile ? '28px 20px' : '36px 32px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{
                  fontSize: isMobile ? 18 : 20,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  fontFamily: "'Cormorant Garamond', serif",
                  marginBottom: 16,
                }}>
                  Our Ad Tech Stack
                </h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}>
                  We leverage industry-leading tools to manage, optimize, and report on your campaigns with precision.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                  gap: 8,
                }}>
                  {techStack.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: 12,
                        color: '#555',
                        background: '#f5f2ed',
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: '1px solid rgba(0,0,0,0.04)',
                      }}>
                        <Icon size={14} color={gold} />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== WHAT WE DELIVER (SERVICES) ============== */}
        <section id="services" style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                What We Deliver
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Our <span style={{ color: gold }}>Paid Search Services</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
                maxWidth: 500,
                margin: '0 auto',
              }}>
                Comprehensive SEM solutions tailored for global businesses
              </p>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 20,
            }}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="service-card" style={{
                    background: '#faf8f5',
                    borderRadius: 16,
                    padding: isMobile ? '24px 20px' : '32px 28px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: -40,
                      right: -40,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${service.color}08 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `rgba(201,168,76,0.08)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}>
                      <Icon size={24} color={gold} strokeWidth={2} />
                    </div>
                    <h3 style={{
                      fontSize: isMobile ? 17 : 19,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      fontFamily: "'Cormorant Garamond', serif",
                      margin: '0 0 8px',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? 13 : 14,
                      color: '#666',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== EXECUTION HUB - 5-STEP FORMULA ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                EXECUTION HUB
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Our <span style={{ color: gold }}>5-Step SEM Formula</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
                maxWidth: 500,
                margin: '0 auto',
              }}>
                A proven framework for profitable paid search campaigns
              </p>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
              gap: isMobile ? 16 : 20,
            }}>
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="step-card" style={{
                    background: '#fff',
                    borderRadius: 16,
                    padding: isMobile ? '24px 16px' : '28px 20px',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <div style={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 700,
                      color: gold,
                      fontFamily: "'Cormorant Garamond', serif",
                      marginBottom: 4,
                    }}>
                      {step.number}
                    </div>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                    }}>
                      <Icon size={20} color={gold} strokeWidth={2} />
                    </div>
                    <h4 style={{
                      fontSize: isMobile ? 13 : 14,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      margin: '0 0 6px',
                    }}>
                      {step.title}
                    </h4>
                    <p style={{
                      fontSize: isMobile ? 11 : 12,
                      color: '#666',
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                    {idx < steps.length - 1 && !isMobile && (
                      <div style={{
                        position: 'absolute',
                        right: -10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'rgba(0,0,0,0.1)',
                      }}>
                        <ChevronRight size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== PROVEN RESULTS - CASE STUDIES ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                PROVEN RESULTS
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Success Stories In <span style={{ color: gold }}>global</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 24,
            }}>
              {caseStudies.map((study, idx) => {
                const Icon = study.icon;
                return (
                  <div key={idx} style={{
                    background: '#f5f2ed',
                    borderRadius: 16,
                    padding: isMobile ? '24px 20px' : '32px 28px',
                    transition: 'all 0.4s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = gold;
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 12,
                    }}>
                      <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: `rgba(201,168,76,0.1)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={18} color={gold} />
                      </div>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: gold,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                      }}>
                        CASE STUDY
                      </span>
                    </div>
                    <div style={{
                      fontSize: isMobile ? 32 : 40,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      fontFamily: "'Cormorant Garamond', serif",
                      marginBottom: 4,
                    }}>
                      {study.result}
                    </div>
                    <div style={{
                      fontSize: 13,
                      color: '#666',
                      marginBottom: 4,
                    }}>
                      {study.label}
                    </div>
                    <p style={{
                      fontSize: isMobile ? 14 : 15,
                      color: '#1a1a1a',
                      fontWeight: 500,
                      marginBottom: 16,
                    }}>
                      {study.title}
                    </p>
                    <Link href={study.link} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: gold,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}>
                      READ FULL STORY
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? 16 : 24,
              marginTop: 40,
            }}>
              <div className="stat-card" style={{
                textAlign: 'center',
                padding: isMobile ? '20px' : '28px',
                background: '#faf8f5',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'default',
              }}>
                <div style={{
                  fontSize: isMobile ? 32 : 40,
                  fontWeight: 700,
                  color: gold,
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  3.5x
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>AVERAGE ROAS</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Across all campaigns</div>
              </div>
              <div className="stat-card" style={{
                textAlign: 'center',
                padding: isMobile ? '20px' : '28px',
                background: '#faf8f5',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'default',
              }}>
                <div style={{
                  fontSize: isMobile ? 32 : 40,
                  fontWeight: 700,
                  color: gold,
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  45%
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>AVG CTR IMPROVEMENT</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Through optimization</div>
              </div>
              <div className="stat-card" style={{
                textAlign: 'center',
                padding: isMobile ? '20px' : '28px',
                background: '#faf8f5',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'default',
              }}>
                <div style={{
                  fontSize: isMobile ? 32 : 40,
                  fontWeight: 700,
                  color: gold,
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  32%
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>LOWER CPA</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Through bid optimization</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== FAQ SECTION ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#faf8f5',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                KNOWLEDGE BASE
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                SEM <span style={{ color: gold }}>FAQ</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
              }}>
                Everything you need to know about paid search marketing
              </p>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 16,
              padding: isMobile ? '20px' : '32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}>
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ============== RELATED SERVICES ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{
                display: 'inline-block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                EXPLORE MORE
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Explore Related <span style={{ color: gold }}>Growth Services</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 20,
            }}>
              {relatedServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Link key={idx} href={service.link} style={{ textDecoration: 'none' }}>
                    <div className="related-card" style={{
                      background: '#f5f2ed',
                      borderRadius: 16,
                      padding: isMobile ? '24px 20px' : '32px 28px',
                      transition: 'all 0.4s ease',
                      border: '1px solid transparent',
                      textAlign: 'center',
                    }}>
                      <div style={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        background: 'rgba(201,168,76,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                      }}>
                        <Icon size={24} color={gold} strokeWidth={2} />
                      </div>
                      <h4 style={{
                        fontSize: isMobile ? 16 : 17,
                        fontWeight: 700,
                        color: '#1a1a1a',
                        fontFamily: "'Cormorant Garamond', serif",
                        margin: '0 0 4px',
                      }}>
                        {service.title}
                      </h4>
                      <p style={{
                        fontSize: isMobile ? 12 : 13,
                        color: '#666',
                        margin: '0 0 16px',
                      }}>
                        {service.desc}
                      </p>
                      <span style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: gold,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.gap = '8px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.gap = '4px'; }}>
                        EXPLORE SERVICE <ChevronRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== CTA SECTION ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
          }} />
                                {/* Overlay */}
<div style={{
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, rgba(10,10,10,0.70) 0%, rgba(20,20,20,0.65) 100%)',
}} />
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: gold,
              fontWeight: 600,
              marginBottom: 16,
              background: 'rgba(201,168,76,0.08)',
              padding: '6px 20px',
              borderRadius: '50px',
              border: '1px solid rgba(201,168,76,0.15)',
            }}>
              Ready to Dominate global Search Results?
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(34px, 3.5vw, 42px)',
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}>
              Turn Clicks into Customers with Data-Driven SEM
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 16,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 32,
              lineHeight: 1.7,
            }}>
              Get a free audit of your current Google Ads account and discover hidden opportunities for growth.
            </p>
            <div style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href="/contact-us" style={{
                padding: isMobile ? '12px 28px' : '14px 36px',
                background: gold,
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: isMobile ? 13 : 14,
                borderRadius: 8,
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 30px rgba(201,168,76,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = goldDark;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = gold;
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                GET FREE AUDIT
                <ArrowRight size={18} />
              </Link>
              <Link href="/services/website-development" style={{
                padding: isMobile ? '12px 28px' : '14px 36px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: isMobile ? 13 : 14,
                borderRadius: 8,
                border: '1.5px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.color = gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = '#fff';
              }}>
                VIEW OUR WORK
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}