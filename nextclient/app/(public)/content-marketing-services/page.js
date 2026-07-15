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
  BookOpen,
  FileText,
  Link2,
  MapPin,
  Share2,
  Activity,
  MessageCircle,
  ThumbsUp,
  Video,
  Image,
  Filter,
  Mail,
  Send,
  Inbox,
  MailOpen,
  MailCheck,
  Gift,
  Heart,
  User,
  Briefcase,
  Calendar,
  FileCheck,
  Layers,
  List,
  MessageSquare,
  Repeat,
  Settings,
  Sliders,
  File,
  FileImage,
  FileVideo,
  Headphones,
  Mic,
  Newspaper,
  Podcast,
  Tv,
  Monitor,
  Tablet,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#dcc28a';

// ── Services Data ──
const services = [
  {
    id: 1,
    icon: FileText,
    title: "Blog & Article Writing",
    desc: "SEO-optimized, authoritative blog posts that establish thought leadership and drive organic traffic to your website.",
    color: "#4f46e5"
  },
  {
    id: 2,
    icon: Video,
    title: "Video Content Production",
    desc: "Engaging video content including explainer videos, product demos, and brand stories that capture attention and drive engagement.",
    color: "#dc2626"
  },
  {
    id: 3,
    icon: Image,
    title: "Visual Content & Infographics",
    desc: "Compelling visual content, infographics, and illustrations that simplify complex information and increase shareability.",
    color: "#7c3aed"
  },
  {
    id: 4,
    icon: BookOpen,
    title: "E-books & Whitepapers",
    desc: "In-depth, value-packed resources that establish authority and generate qualified leads through gated content.",
    color: "#059669"
  },
];

// ── 5-Step Formula Data ──
const steps = [
  {
    number: "01",
    title: "Content Strategy",
    desc: "Develop a data-driven content strategy aligned with your business goals and audience needs.",
    icon: Target,
  },
  {
    number: "02",
    title: "Research & Planning",
    desc: "In-depth topic research, keyword analysis, and content calendar development.",
    icon: Search,
  },
  {
    number: "03",
    title: "Content Creation",
    desc: "Professional content production including writing, design, and multimedia development.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Distribution & Promotion",
    desc: "Strategic content distribution across channels to maximize reach and engagement.",
    icon: Share2,
  },
  {
    number: "05",
    title: "Measurement & Optimization",
    desc: "Track performance, analyze data, and continuously refine your content strategy.",
    icon: TrendingUp,
  },
];

// ── Case Studies ──
const caseStudies = [
  {
    title: "global SaaS Company",
    result: "+280%",
    label: "Organic Traffic Growth",
    icon: Award,
    link: "#",
    color: "#4f46e5"
  },
  {
    title: "B2B Service Provider",
    result: "4.2x",
    label: "Lead Generation Increase",
    icon: TrendingUp,
    link: "#",
    color: "#dc2626"
  },
];

// ── Tech Stack ──
const techStack = [
  { name: 'SEMrush', icon: Search },
  { name: 'Ahrefs', icon: Link2 },
  { name: 'Google Analytics', icon: BarChart3 },
  { name: 'Canva', icon: Image },
  { name: 'Adobe Creative Suite', icon: PenTool },
  { name: 'WordPress', icon: Code },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What is content marketing and why is it important?",
    answer: "Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. It builds trust, establishes authority, drives organic traffic, and ultimately converts prospects into customers. Companies that prioritize content marketing see 3x more leads than those that don't."
  },
  {
    question: "How much does content marketing cost?",
    answer: "Content marketing costs vary based on the type and volume of content. Small businesses typically invest ₹30,000-₹1,00,000/month for a comprehensive content strategy including blog posts, social content, and visual assets. We customize packages based on your specific needs and goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "Content marketing is a long-term strategy. You typically start seeing initial results in 3-6 months, with significant traffic and lead generation improvements in 6-12 months. Unlike paid ads, content marketing builds sustainable, compounding value over time."
  },
  {
    question: "What types of content do you create?",
    answer: "We create a wide range of content including blog posts, articles, case studies, e-books, whitepapers, infographics, videos, social media content, newsletters, and more. We tailor content types to your audience preferences and business goals."
  },
  {
    question: "How do you measure content marketing success?",
    answer: "We track key metrics including organic traffic, keyword rankings, engagement rates, time on page, social shares, lead generation, conversion rates, and overall ROI. You receive comprehensive reports showing how your content contributes to business growth."
  },
];

// ── Related Services ──
const relatedServices = [
  { title: "SEO Optimization", desc: "Organic search dominance", icon: Search, link: "/services/search-engine-optimization-services" },
  { title: "Social Media Advertising", desc: "Targeted social campaigns", icon: Share2, link: "/services/social-media-advertising-services" },
  { title: "Email Marketing", desc: "Convert subscribers into customers", icon: Mail, link: "/services/email-marketing-services" },
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
export default function ContentMarketing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO 
         title={seoConfig.services.contentMarketing.title}
         description={seoConfig.services.contentMarketing.description}
         keywords={seoConfig.services.contentMarketing.keywords}
         path={seoConfig.services.contentMarketing.path}
      />

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80")',
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
                CONTENT MARKETING EXPERTS
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
              Content That <br />
              <span className="gradient-text">Drives Results</span>
            </h1>
            
            <p className="fade-in delay-3" style={{
              fontSize: isMobile ? 16 : 18,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 680,
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}>
              Content marketing generates 3x more leads than traditional marketing while costing 62% less. We create compelling content that builds authority, drives traffic, and converts visitors into customers.
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
                Get Free Content Audit
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
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>500+</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Content Pieces Created</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>3.5x</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Lead Generation</div>
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
              "Content is the foundation of modern marketing. We create <span style={{ color: gold }}>value-driven content</span> that builds trust, establishes authority, and drives <span style={{ color: gold }}>measurable business growth</span> through strategic storytelling."
            </p>
            <div style={{
              width: 50,
              height: 2,
              background: gold,
              margin: '20px auto 0',
            }} />
          </div>
        </section>

        {/* ============== WHY CONTENT MARKETING MATTERS ============== */}
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
                Why Content Marketing Matters
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 12px',
              }}>
                Build Authority <span style={{ color: gold }}>Through Value</span>
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
                  <strong>70% of consumers</strong> prefer getting to know a company through content rather than advertising. Content marketing builds <strong>trust, credibility, and relationships</strong> that paid ads simply cannot achieve.
                </p>
                <p style={{
                  fontSize: isMobile ? 15 : 16,
                  color: '#4a4a4a',
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}>
                  Our <span style={{ color: gold, fontWeight: 600 }}>360MH-crafted</span> content strategy ensures every piece serves a purpose—educating prospects, nurturing leads, and driving conversions.
                </p>
                <div style={{
                  display: 'flex',
                  gap: 12,
                  marginTop: 24,
                  flexWrap: 'wrap',
                }}>
                  {['Builds Trust', 'Drives Traffic', 'Generates Leads', 'Establishes Authority'].map((item) => (
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
                  Our Content Stack
                </h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}>
                  We use industry-leading tools for research, creation, distribution, and analysis of your content.
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
                Our <span style={{ color: gold }}>Content Marketing Services</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
                maxWidth: 500,
                margin: '0 auto',
              }}>
                Comprehensive content solutions for global businesses
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
                Our <span style={{ color: gold }}>5-Step Content Formula</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
                maxWidth: 500,
                margin: '0 auto',
              }}>
                A proven framework for content marketing success
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
                  4.2x
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>LEAD GENERATION</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Vs. traditional marketing</div>
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
                  62%
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>LOWER COST</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Than traditional marketing</div>
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
                  85%
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>AUDIENCE ENGAGEMENT</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>Through quality content</div>
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
                Content Marketing <span style={{ color: gold }}>FAQ</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
              }}>
                Everything you need to know about content marketing
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80")',
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
              Ready to Create Content That Converts?
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(34px, 3.5vw, 42px)',
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}>
              Build Authority, Drive Traffic, and Generate Leads with Strategic Content.
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 16,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 32,
              lineHeight: 1.7,
            }}>
              Get a comprehensive audit of your current content marketing strategy and discover exactly how to drive measurable business growth.
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
                GET FREE CONTENT AUDIT
                <ArrowRight size={18} />
              </Link>
              <Link href="/services/email-marketing-services" style={{
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
                VIEW CASE STUDIES
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}