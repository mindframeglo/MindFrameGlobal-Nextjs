'use client'

/**
 * Marketing Agency in Arizona Page
 * Based on Mind Frame Global - Arizona Digital Marketing Agency
 * Gold theme with full responsiveness
 * Image background instead of video
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { organizationSchema } from '@/components/SEO';
import {
  ArrowRight,
  TrendingUp,
  Target,
  DollarSign,
  Search,
  Megaphone,
  Share2,
  Code2,
  PenTool,
  Mail,
  Palette,
  MapPin,
  Smartphone,
  Bot,
  Globe2,
  Lightbulb,
  HeartPulse,
  Sparkles,
  Users,
  Plane,
  GraduationCap,
  ShoppingCart,
  Factory,
  Quote,
  Layout,
  Film,
  Printer,
  Layers,
  Database,
  Shield,
  Cloud,
  Server,
  Phone,
  Calendar,
  CheckCircle,
  Award,
  Star,
  Building,
  Zap,
  Clock,
  BarChart,
  MessageCircle,
  Compass,
  Sun,
  Mountain,
} from 'lucide-react';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#dcc28a';

// Shared responsive hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

// Small helper for Unsplash-hosted images
function unsplash(id, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  const isMobile = useIsMobile();

  return (
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
                backgroundImage: `url("${unsplash('photo-1504384308090-c894fdcc538d', 2000, 80)}")`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      
     {/* Overlay */}
<div style={{
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, rgba(10,10,10,0.70) 0%, rgba(20,20,20,0.65) 100%)',
}} />

      {/* Gold Glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: isMobile ? '40px 20px' : '60px 40px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.25)',
          padding: '6px 20px',
          borderRadius: '50px',
          color: gold,
          fontSize: isMobile ? 10 : 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: 24,
          backdropFilter: 'blur(4px)',
        }}>
          Arizona's Trusted Digital Marketing Agency
        </div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(32px, 10vw, 48px)' : 'clamp(48px, 6vw, 72px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.08,
          margin: '0 0 16px',
          fontFamily: "'Cormorant Garamond', serif",
        }}>
          
Advertising And Branding Agency <br />
          <span style={{ color: gold }}>in Arizona</span>
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 18,
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          maxWidth: 600,
          margin: '0 auto 32px',
        }}>
          Mind Frame Global is an innovative advertising and marketing agency proudly serving clients in Arizona. With our expertise in digital marketing, strategic planning, and creative campaigns, we help businesses thrive and reach their full potential. Our dedicated team of professionals is committed to delivering impactful and results-driven solutions that elevate brands and drive growth. Whether you’re looking to enhance your online presence, create engaging content, or launch a targeted advertising campaign, Mind Frame Global is here to exceed your expectations and help you achieve your business goals. Contact us today to discover how we can elevate your brand and take your marketing efforts to new heights.
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? 24 : 48,
          marginBottom: 32,
          flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>16+</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Years of Experience</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>60-90</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Days to Ranking</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>Statewide</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Coverage Across AZ</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="/contact-us" style={{
            padding: '14px 36px',
            background: gold,
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 14,
            borderRadius: 8,
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 30px rgba(201,168,76,0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = goldDark;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = gold;
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Get In Touch
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
          <Link href="#services" style={{
            padding: '14px 36px',
            background: 'rgba(255,255,255,0.04)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 14,
            borderRadius: 8,
            border: '1.5px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = gold;
            e.currentTarget.style.color = gold;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = '#fff';
          }}>
            View Services
          </Link>
        </div>

        {/* Service Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          marginTop: 40,
        }}>
          {['SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'Branding', 'Web Design', 'Content', 'Email'].map((tag) => (
            <span key={tag} style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 14px',
              borderRadius: '50px',
              letterSpacing: 0.5,
              backdropFilter: 'blur(4px)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY ARIZONA BUSINESSES CHOOSE US ──────────────────────────────────────
function WhyArizonaSection() {
  const isMobile = useIsMobile();

  const reasons = [
    { icon: Award, title: '16+ Years Experience', desc: 'Since 2010, we\'ve helped businesses across Arizona and the US build brands and generate leads.' },
    { icon: Target, title: 'Customized Solutions', desc: 'We tailor our services to meet your specific needs and goals – not generic templates designed for someone else\'s business.' },
    { icon: TrendingUp, title: 'Results-Driven', desc: 'Our focus is on delivering tangible results that grow your business with measurable ROI.' },
    { icon: Compass, title: 'Local & Statewide Expertise', desc: 'Based in Tempe, we understand the Arizona market from Phoenix to Tucson, Scottsdale to Flagstaff like no out-of-state agency ever could.' },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Why Us
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Why Arizona Businesses <span style={{ color: gold }}>Choose Mind Frame Global</span>
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 16,
            color: '#6b5f53',
            maxWidth: 700,
            margin: '8px auto 0',
            lineHeight: 1.7,
          }}>
            Arizona is one of the fastest-growing states in the United States. New businesses are opening every week. Competition for customers is intensifying across every industry from Phoenix to Tucson, Scottsdale to Mesa, and beyond.
          </p>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 16 : 24,
        }}>
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: 12,
                padding: isMobile ? '24px 16px' : '32px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(201,168,76,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Icon size={24} color={gold} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  fontFamily: "'Cormorant Garamond', serif",
                  margin: '0 0 8px',
                }}>
                  {reason.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? 12 : 13,
                  color: '#6b5f53',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ──────────────────────────────────────────────────────
function ServicesSection() {
  const isMobile = useIsMobile();

  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimisation (SEO) Arizona',
      desc: 'We get your business to the top of Google for searches that matter – "marketing agency Arizona," "SEO Phoenix," "best restaurant Tucson." Our SEO covers technical health, keyword strategy, content creation, Google Business Profile optimisation, and link building. Most Arizona clients see ranking improvements within 60–90 days.',
      badge: '60-90 Days'
    },
    {
      icon: DollarSign,
      title: 'Google Ads Management Arizona',
      desc: 'Our Google Ads team builds precision campaigns that put you at the top of search results for the keywords your best clients type. We manage keyword research, ad copy, bid strategy, landing pages, and weekly optimisation. Average cost per lead for Arizona service businesses: $15–35.',
      badge: '$15-35 Per Lead'
    },
    {
      icon: Share2,
      title: 'Meta and Facebook Advertising Arizona',
      desc: 'We run Meta campaigns that reach the right Arizona business owners and consumers by age, income, location, and interest. Our Arizona clients consistently achieve 3–8X ROAS within 90 days of a properly structured campaign.',
      badge: '3-8X ROAS'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing Arizona',
      desc: 'We create and manage social media strategies that build your brand, grow your following, and turn followers into paying clients. We handle content creation, posting, community management, and paid promotion across all major platforms.',
      badge: 'Brand Growth'
    },
    {
      icon: Palette,
      title: 'Branding and Brand Strategy Arizona',
      desc: 'We design and build brands that immediately communicate trust, quality, and authority – from logo and visual identity to brand voice, messaging, and guidelines. Arizona businesses with a strong brand close more deals and charge higher prices.',
      badge: 'Authority Building'
    },
    {
      icon: Code2,
      title: 'Website Design and Development Arizona',
      desc: 'We design fast, mobile-optimised, conversion-focused websites that make visitors trust you instantly and contact you immediately. Every site includes on-page SEO, clear calls to action, and CRM integration.',
      badge: 'Conversion Focused'
    },
    {
      icon: PenTool,
      title: 'Content Marketing Arizona',
      desc: 'We create blog posts, case studies, video scripts, email sequences, and landing page copy that ranks on Google and converts readers into leads. Our Arizona content strategy targets the exact questions your ideal clients are searching.',
      badge: 'Lead Generation'
    },
    {
      icon: Mail,
      title: 'Email Marketing Arizona',
      desc: 'Email delivers the highest ROI of any marketing channel – $42 for every $1 spent. We design and manage email campaigns that nurture your Arizona leads, re-engage past clients, and drive repeat business.',
      badge: '42X ROI'
    },
  ];

  return (
    <section id="services" style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Our Services
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Focused Expertise from a Leading <span style={{ color: gold }}>Digital Marketing Agency</span> to Grow Your Business Across Arizona
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? 16 : 24,
        }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} style={{
                background: '#faf8f5',
                borderRadius: 12,
                padding: isMobile ? '20px 16px' : '28px 24px',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color={gold} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: isMobile ? 14 : 16,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      margin: '0 0 8px',
                      fontFamily: "'Cormorant Garamond', serif",
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? 12 : 13,
                      color: '#6b5f53',
                      lineHeight: 1.7,
                      margin: '0 0 12px',
                    }}>
                      {service.desc}
                    </p>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 10,
                      fontWeight: 600,
                      color: gold,
                      background: 'rgba(201,168,76,0.1)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }}>
                      {service.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CITIES WE SERVE ──────────────────────────────────────────────────────
function CitiesServed() {
  const isMobile = useIsMobile();

  const cities = [
    { name: 'Phoenix', icon: Sun },
    { name: 'Tucson', icon: Sun },
    { name: 'Mesa', icon: Building },
    { name: 'Chandler', icon: Building },
    { name: 'Scottsdale', icon: Sun },
    { name: 'Gilbert', icon: Building },
    { name: 'Glendale', icon: Building },
    { name: 'Peoria', icon: Building },
    { name: 'Flagstaff', icon: Mountain },
    { name: 'Sedona', icon: Mountain },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#faf8f5',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Cities We Serve
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Serving Businesses <span style={{ color: gold }}>Across Arizona</span>
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 16,
            color: '#6b5f53',
            maxWidth: 600,
            margin: '8px auto 0',
          }}>
            From the Valley of the Sun to the high country, we help Arizona businesses grow online.
          </p>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: isMobile ? 12 : 16,
        }}>
          {cities.map((city, idx) => {
            const Icon = city.icon;
            return (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: 10,
                padding: isMobile ? '16px 12px' : '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.background = '#faf8f5';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(201,168,76,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <Icon size={isMobile ? 20 : 24} color={gold} strokeWidth={2} />
                <span style={{
                  fontSize: isMobile ? 12 : 14,
                  color: '#1a1a1a',
                  fontWeight: 600,
                }}>
                  {city.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── INDUSTRIES WE SERVE ──────────────────────────────────────────────────
function IndustriesServed() {
  const isMobile = useIsMobile();

  const industries = [
    { icon: HeartPulse, name: 'Healthcare and medical practices' },
    { icon: Users, name: 'Dental practices and DSOs' },
    { icon: Shield, name: 'Law firms and attorneys' },
    { icon: Building, name: 'Real estate and property developers' },
    { icon: Plane, name: 'Restaurants and food & beverage' },
    { icon: Factory, name: 'Construction and home services' },
    { icon: DollarSign, name: 'Financial services' },
    { icon: GraduationCap, name: 'Education providers' },
    { icon: Globe2, name: 'Hospitality and hotels' },
    { icon: Server, name: 'Technology startups and SaaS' },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Industries
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Industries We <span style={{ color: gold }}>Serve in Arizona</span>
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 12 : 16,
        }}>
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div key={idx} style={{
                background: '#faf8f5',
                borderRadius: 10,
                padding: isMobile ? '16px 12px' : '20px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = gold;
                e.currentTarget.style.background = '#f5f2ed';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.background = '#faf8f5';
              }}>
                <Icon size={isMobile ? 16 : 20} color={gold} strokeWidth={2} />
                <span style={{
                  fontSize: isMobile ? 11 : 13,
                  color: '#1a1a1a',
                  fontWeight: 500,
                }}>
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT SECTION ──────────────────────────────────────────────────────
function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#faf8f5',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : 48,
          alignItems: 'center',
        }}>
          {/* Left - Image */}
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
          }}>
            <img
              src={unsplash('photo-1522071820081-009f0129c71c', 900, 80)}
              alt="Mind Frame Global Team Arizona"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 24px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
                <Compass size={18} color={gold} />
                <span style={{ fontSize: 13, fontWeight: 500 }}>Serving Businesses Across Arizona</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div style={{
              display: 'inline-block',
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: gold,
              fontWeight: 600,
              marginBottom: 8,
            }}>
              About Us
            </div>
            <h2 style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1a1a1a',
              margin: '0 0 16px',
            }}>
              Why <span style={{ color: gold }}>16+ Years</span> Makes a Difference in Arizona
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 15,
              color: '#4a4a4a',
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              Since 2010, Mind Frame Global has helped businesses across Arizona and the United States build brands, generate leads, and grow revenue through digital marketing. Our Arizona presence brings global expertise to the local market.
            </p>
            <p style={{
              fontSize: isMobile ? 14 : 15,
              color: '#4a4a4a',
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              We have managed millions in advertising spend, delivered hundreds of campaigns, and built lasting partnerships with clients across diverse industries throughout the Grand Canyon State. From Phoenix to Tucson, Scottsdale to Flagstaff, we understand the unique dynamics of doing business in Arizona.
            </p>
            <p style={{
              fontSize: isMobile ? 14 : 15,
              color: '#4a4a4a',
              lineHeight: 1.8,
              marginBottom: 24,
            }}>
              When you work with Mind Frame Global, you are not dealing with a junior account manager reading from a script. You are working with experienced strategists who have seen what works and what does not across markets, industries, and platforms – and who bring that knowledge to every decision they make for your Arizona business.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 24,
            }}>
              {['SEO', 'Google Ads', 'Social Media', 'Branding', 'Web Design', 'Content', 'Email', 'Video'].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: isMobile ? 12 : 13,
                  color: '#1a1a1a',
                }}>
                  <CheckCircle size={16} color={gold} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────
function FAQSection() {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'What digital marketing services does Mind Frame Global offer in Arizona?',
      a: 'We offer comprehensive digital marketing services including SEO, Google Ads, Meta Advertising, Social Media Marketing, Branding, Website Design & Development, Content Marketing, and Email Marketing for businesses across Arizona.' },
    { q: 'Why should I choose Mind Frame Global as my digital marketing agency in Arizona?',
      a: 'With 16+ years of experience, local market expertise, and a proven track record of delivering results, we help Arizona businesses get found, build trust, and convert online visitors into paying customers.' },
    { q: 'How long does it take to see results from your digital marketing services in Arizona?',
      a: 'Most Arizona clients see SEO ranking improvements within 60–90 days. PPC and social media campaigns can show immediate traction with optimized campaigns.' },
    { q: 'What cities in Arizona do you serve?',
      a: 'We serve businesses across the entire state of Arizona including Phoenix, Tucson, Mesa, Chandler, Scottsdale, Gilbert, Glendale, Peoria, Flagstaff, Sedona, and more.' },
    { q: 'What industries do you specialize in for Arizona businesses?',
      a: 'We specialize in healthcare, dental, legal, real estate, restaurants, construction, financial services, education, hospitality, and technology startups across Arizona.' },
    { q: 'How does your digital marketing agency measure success for Arizona clients?',
      a: 'We track key metrics like ROI, conversion rates, traffic growth, lead generation, keyword rankings, and client retention to measure success.' },
    { q: 'Do you work with businesses outside of Arizona?',
      a: 'Yes, while we have deep expertise in the Arizona market, we work with clients across the United States and internationally providing remote digital marketing services.' },
    { q: 'How can I get started with Mind Frame Global\'s digital marketing services in Arizona?',
      a: 'Contact us today to schedule a consultation. We\'ll discuss your goals, analyze your current online presence, and create a custom digital marketing strategy for your Arizona business.' },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Got Questions
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Frequently <span style={{ color: gold }}>Asked Questions</span>
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 16,
            color: '#6b5f53',
          }}>
            Everything you need to know about partnering with Mind Frame Global in Arizona.
          </p>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                background: '#faf8f5',
                borderRadius: isOpen ? '8px 8px 0 0' : '8px',
                marginBottom: 8,
                padding: '0 16px',
                transition: 'all 0.3s ease',
              }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: isMobile ? '16px 0' : '20px 0',
                    textAlign: 'left',
                    gap: 16,
                  }}
                >
                  <span style={{
                    fontSize: isMobile ? 14 : 15,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.5,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: 20,
                    color: gold,
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    fontSize: isMobile ? 13 : 14,
                    color: '#4a4a4a',
                    lineHeight: 1.8,
                    margin: '0 0 20px',
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION WITH CALENDLY ──────────────────────────────────────────────
function CTASection() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
                backgroundImage: `url("${unsplash('photo-1504384308090-c894fdcc538d', 2000, 80)}")`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(20,20,20,0.9) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
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
        }}>
          Start Growing Today
        </div>
        <h2 style={{
          fontSize: isMobile ? 28 : 38,
          fontWeight: 700,
          fontFamily: "'Cormorant Garamond', serif",
          color: '#fff',
          margin: '0 0 12px',
        }}>
          Have a Project? <span style={{ color: gold }}>Let Us Help.</span>
        </h2>
        <p style={{
          fontSize: isMobile ? 14 : 16,
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          margin: '0 0 32px',
        }}>
          Boost your Arizona business growth with a professionally optimized website and digital marketing strategy that attracts new visitors and leads. Let MFG create a tailored strategy to fuel your success online.
        </p>

        {/* Calendly Integration */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Calendly Button */}
          <Link
            href="https://calendly.com/mindframeglobal/consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 36px',
              background: gold,
              color: '#fff',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(201,168,76,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = goldDark;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = gold;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.35)';
            }}
          >
            <Calendar size={18} />
            Schedule a Consultation
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact-us" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 36px',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 14,
            border: '1.5px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = gold;
            e.currentTarget.style.color = gold;
            e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          }}>
            Contact Us
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Call Now */}
        <div style={{
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}>
          <Phone size={16} color={gold} />
          <span style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
          }}>
            Or call us directly:
          </span>
          <a
            href="tel:+14805551234"
            style={{
              color: gold,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 16,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = goldDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = gold;
            }}
          >
            (480) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────
export default function MarketingAgencyArizona() {
  return (
    <>
      <SEO
        title="Digital Marketing Agency in Arizona – Mind Frame Global"
        description="Mind Frame Global is Arizona's full-service digital marketing agency helping businesses across the Grand Canyon State get found, build trust, and convert online visitors into paying customers."
        keywords="digital marketing agency arizona, seo arizona, google ads arizona, social media marketing arizona, web design arizona, branding arizona, marketing agency phoenix"
        path="/marketing-agency-in-arizona"
        structured={organizationSchema}
      />

      <div style={{ fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
        <HeroSection />
        <WhyArizonaSection />
        <ServicesSection />
        <CitiesServed />
        <IndustriesServed />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}