'use client'

/**
 * Home Page — Complete Redesign
 * Based on reference images with gold theme
 * Fully responsive with modern UI
 * Icons: lucide-react | Imagery: Unsplash
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { organizationSchema } from '@/components/SEO';
import Testimonial from '@/components/Testimonial';
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

// Small helper for Unsplash-hosted images with sane defaults
function unsplash(id, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}



// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  const isMobile = useIsMobile();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Replace with your own hosted .mp4 whenever you have one — agency/team/strategy themed b-roll works best.
  const videoSrc = 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4';

  // Force video to reload on component mount
  useEffect(() => {
    // Reset video state when component mounts
    setVideoLoaded(false);
    setVideoError(false);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Fallback background color while video loads */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#0a0a0a',
        opacity: videoLoaded ? 0 : 1,
        transition: 'opacity 0.8s ease',
      }} />

      {/* Background video — now renders on ALL devices, including mobile */}
      {!videoError && (
        <video
          key={videoSrc} // Force re-render when src changes
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onCanPlay={() => {
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onLoadedData={() => {
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onError={(e) => {
            console.error('Video loading error:', e);
            setVideoError(true);
            setVideoLoaded(false);
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback image if video fails to load */}
      {videoError && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${unsplash('photo-1551288049-bebda4e38f71', 2000, 80)}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      )}

      {/* Gold Glow */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
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
          ROI-Focused Digital Agency
        </div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(32px, 10vw, 48px)' : 'clamp(48px, 6vw, 72px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.08,
          margin: '0 0 16px',
          fontFamily: "'Cormorant Garamond', serif",
        }}>
          We Build Strategies<br />
          <span style={{ color: gold }}>That Bring Guaranteed ROI.</span>
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 18,
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          maxWidth: 560,
          margin: '0 auto 32px',
        }}>
          Data-driven digital marketing for ambitious businesses.<br />
          We build strategies that bring ROI. Period.
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
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>90-Day</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Results Guarantee</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>150+</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Happy Clients</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: gold }}>100%</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Transparent Reporting</div>
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
          <Link href="/our-work" style={{
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
            View Our Work
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
          {['SEO', 'Website Dev', 'Social Media', 'Google Ads', 'Branding', 'Meta Ads', 'Google My Business', 'Content', 'Email', 'AEO', 'GEO', 'Consultancy'].map((tag) => (
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


// ─── LEADING BRANDS SECTION ──────────────────────────────────────────────────
function LeadingBrands() {
  const isMobile = useIsMobile();

  const brands = [
    { name: 'Pamcea', tag: 'Healthcare' },
    { name: 'BYP', tag: 'Internationally Recognized' },
    { name: 'Technology Co.', tag: 'Enterprise SaaS' },
  ];

  return (
    <section style={{
      padding: isMobile ? '40px 20px' : '60px 48px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h3 style={{
            fontSize: isMobile ? 20 : 26,
            fontWeight: 700,
            color: '#1a1a1a',
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: 1,
          }}>
            Leading Brands We've Scaled
          </h3>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? 16 : 24,
        }}>
          {brands.map((brand, idx) => (
            <div key={idx} style={{
              background: '#f5f2ed',
              borderRadius: 12,
              padding: isMobile ? '24px 16px' : '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = gold;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: isMobile ? 18 : 24,
                fontWeight: 700,
                color: '#1a1a1a',
                fontFamily: "'Cormorant Garamond', serif",
              }}>
                {brand.name}
              </div>
              {brand.tag && (
                <div style={{
                  fontSize: 10,
                  color: '#8a7a6a',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}>
                  {brand.tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 360 MARKETING HUB SHOWREEL ─────────────────────────────────────────────
function ShowreelSection() {
  const isMobile = useIsMobile();

  const stats = [
    { icon: TrendingUp, value: '3x', label: 'Average Growth', note: '+ 200% over industry baseline' },
    { icon: Users, value: '95%', label: 'Client Retention', note: 'Built on long-term scalability' },
    { icon: DollarSign, value: '$5M+', label: 'Ad Spend Managed', note: 'Daily optimization for ROAS' },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            360 Marketing Hub <span style={{ color: gold }}>Showreel</span>
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '0 auto' }} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h3 style={{
            fontSize: isMobile ? 20 : 28,
            fontWeight: 600,
            color: '#1a1a1a',
            fontFamily: "'Cormorant Garamond', serif",
          }}>
            Numbers That Speak <span style={{ color: gold }}>Louder</span>
          </h3>
          <p style={{
            fontSize: isMobile ? 14 : 16,
            color: '#6b5f53',
            maxWidth: 600,
            margin: '8px auto 0',
            lineHeight: 1.6,
          }}>
            We don't just promise results; we engineer them through high-performance data architectures.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 24 : 32,
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: 16,
                padding: isMobile ? '28px 20px' : '40px 32px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.04)',
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
                <div style={{
                  fontSize: isMobile ? 36 : 48,
                  fontWeight: 700,
                  color: gold,
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: '#8a7a6a', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 12, color: '#aaa', marginTop: 8 }}>{stat.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── ELEVATE REVENUE METRICS ─────────────────────────────────────────────────
function RevenueMetrics() {
  const isMobile = useIsMobile();

  const metrics = [
    { icon: Bot, label: 'LLM Visibility' },
    { icon: TrendingUp, label: 'Higher Website Traffic' },
    { icon: Target, label: 'Generate Leads' },
    { icon: DollarSign, label: 'Boost Product Sales' },
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 40 : 60,
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontSize: isMobile ? 28 : 38,
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1a1a1a',
              margin: '0 0 16px',
            }}>
              Elevate <span style={{ color: gold }}>Revenue Metrics</span>
            </h2>
            <h3 style={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: 600,
              color: '#333',
              marginBottom: 24,
              fontFamily: "'Cormorant Garamond', serif",
            }}>
              Growth Architecture
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}>
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} style={{
                    background: '#f5f2ed',
                    borderRadius: 10,
                    padding: isMobile ? '16px 12px' : '20px 16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = gold;
                    e.currentTarget.style.background = '#faf8f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = '#f5f2ed';
                  }}>
                    <Icon size={26} color={gold} strokeWidth={1.8} style={{ marginBottom: 6 }} />
                    <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600, color: '#1a1a1a' }}>{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Performance Layer */}
          <div style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            padding: isMobile ? '32px 24px' : '48px 40px',
            color: '#fff',
            isolation: 'isolate',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: -2,
              backgroundImage: `url("${unsplash('photo-1460925895917-afdab827c52f', 1200, 75)}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              background: 'linear-gradient(135deg, rgba(15,15,15,0.94) 0%, rgba(30,30,30,0.9) 100%)',
            }} />
            <h3 style={{
              fontSize: isMobile ? 18 : 24,
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              margin: '0 0 12px',
            }}>
              Performance Layer
            </h3>
            <h4 style={{
              fontSize: isMobile ? 16 : 20,
              fontWeight: 600,
              margin: '0 0 16px',
            }}>
              Accelerate Growth with <span style={{ color: gold }}>AI-Driven Search Optimization</span>
            </h4>
            <p style={{
              fontSize: isMobile ? 14 : 15,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              marginBottom: 24,
            }}>
              The future of search is conversational. Our high-end agency specializes in scaling revenue through data-backed strategies that place your brand at the forefront of the LLM revolution. We don't just drive traffic; we capture intent at the source of modern discovery.
            </p>
            <Link href="/contact-us" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              background: gold,
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = goldDark;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = gold;
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Accelerate Growth
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── OUR EXPERTISE / SERVICES ─────────────────────────────────────────────────
function ExpertiseSection() {
  const isMobile = useIsMobile();

  const serviceCategories = [
    {
      title: 'Creative Solutions',
      icon: Layout,
      items: [
        { name: 'Logo Designing', link: '/logo-designing-service' },
        { name: 'UI/UX Designing', link: '/ui-ux-design-service' },
        { name: 'Creative Designing', link: '/graphic-design-services' },
        { name: '2D/3D Designing', link: '/video-animation-services' },
        { name: 'Corporate Films & TVCs', link: '/corporate-video-production-services' },
        { name: 'Print Ads', link: '/ads-print-services' },
      ]
    },
    {
      title: 'Branding Solutions',
      icon: Layers,
      items: [
        { name: 'Brand Strategy', link: '/branding-strategy-services' },
        { name: 'Brand Identity', link: '/brand-identity-services' },
        { name: 'Brand Guidelines', link: '/brand-guideline-services' },
        { name: 'Brand Architecture', link: '/brand-architecture-services' },
        { name: 'Campaign Ideation', link: '/campaign-ideation-services' },
      ]
    },
    {
      title: 'Performance Solutions',
      icon: Target,
      items: [
        { name: 'Search Engine Marketing', link: '/search-engine-marketing-services' },
        { name: 'Search Engine Optimization', link: '/search-engine-optimization-services' },
        { name: 'Social Media Advertising', link: '/social-media-advertising-services' },
        { name: 'Email Marketing', link: '/email-marketing-services' },
        { name: 'Content Marketing', link: '/content-marketing-services' },
      ]
    },
    {
      title: 'IT Solutions',
      icon: Server,
      items: [
        { name: 'Web Development', link: '/web-development-services' },
        { name: 'Mobile App Development', link: '/mobile-app-development-services' },
        { name: 'Cloud Computing', link: '/cloud-computing-services' },
        { name: 'Cyber Security', link: '/cyber-security-services' },
        { name: 'Database and Mining', link: '/database-management-services' },
        { name: 'Managed Services', link: '/managed-services' },
      ]
    }
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
            Our Services
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Focused Expertise from a Leading <span style={{ color: gold }}>Digital Marketing</span> & Advertising Agency to Grow Your Business
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 24 : 20,
        }}>
          {serviceCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} style={{
                background: '#fff',
                borderRadius: 12,
                padding: isMobile ? '20px 16px' : '24px 20px',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
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
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={gold} strokeWidth={2} />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? 14 : 15,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}>
                    {category.title}
                  </h3>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{
                      padding: '4px 0',
                      borderBottom: itemIdx < category.items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                    }}>
                      <Link href={item.link} style={{
                        fontSize: isMobile ? 12 : 13,
                        color: '#4a4a4a',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'block',
                        padding: '2px 0',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = gold;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#4a4a4a';
                      }}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── INDUSTRIES WE TRANSFORM ──────────────────────────────────────────────────
function IndustriesSection() {
  const isMobile = useIsMobile();

  const industries = [
    { title: 'Healthcare', desc: 'Patient acquisition compliant with med-regulations.', icon: HeartPulse, image: unsplash('photo-1576091160399-112ba8d25d1d', 800, 70) },
    { title: 'Wellness', desc: 'Building lifestyle brands for health consumers.', icon: Sparkles, image: unsplash('photo-1544367567-0f2fcb009e0b', 800, 70) },
    { title: 'Eldercare', desc: 'Compassionate marketing connecting families.', icon: Users, image: unsplash('photo-1516307365426-bea591f05011', 800, 70) },
    { title: 'Travel & Tourism', desc: 'Destination branding and visitor automation.', icon: Plane, image: unsplash('photo-1488646953014-85cb44e25828', 800, 70) },
    { title: 'Coaching Classes', desc: 'Scaling student enrollment for educational institutions.', icon: GraduationCap, image: unsplash('photo-1523240795612-9a054b0db644', 800, 70) },
    { title: 'E-commerce', desc: 'ROI-focused scaling for online retail brands.', icon: ShoppingCart, image: unsplash('photo-1556742049-0cfed4f6a45d', 800, 70) },
    { title: 'Manufacturing', desc: 'B2B lead generation and digital inventory visibility.', icon: Factory, image: unsplash('photo-1581091226825-a6a2a5aee158', 800, 70) },
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
            Specialized Knowledge
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            Industries We <span style={{ color: gold }}>Transform</span>
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 16 : 24,
        }}>
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div key={idx} style={{
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,0,0,0.06)',
                background: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.15)';
                e.currentTarget.style.borderColor = gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
              }}>
                <div style={{
                  position: 'relative',
                  height: 120,
                  backgroundImage: `url("${industry.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.55) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}>
                    <Icon size={20} color="#fff" strokeWidth={2} />
                  </div>
                </div>
                <div style={{ padding: isMobile ? '18px 16px' : '22px 20px' }}>
                  <h3 style={{
                    fontSize: isMobile ? 16 : 19,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    fontFamily: "'Cormorant Garamond', serif",
                    margin: '0 0 8px',
                  }}>
                    {industry.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? 12 : 13,
                    color: '#6b5f53',
                    lineHeight: 1.6,
                    margin: '0 0 12px',
                  }}>
                    {industry.desc}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 600,
                    color: gold,
                    letterSpacing: 0.5,
                    textTransform: 'uppercase',
                  }}>
                    Structure Growth <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER SECTION ──────────────────────────────────────────────────────────
function FounderSection() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div style={{
            display: 'inline-block',
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 600,
            marginBottom: 8,
          }}>
            The Vision Behind The Engine
          </div>
          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 32px',
          }}>
            Driven by <span style={{ color: gold }}>Expertise</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : 48,
          alignItems: 'center',
        }}>
          {/* Founder Image */}
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            aspectRatio: '4/3',
            position: 'relative',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          }}>
            <img
              src={unsplash('photo-1560250097-0b93528c311a', 900, 80)}
              alt="Raj Sharma, Founder of 360 Marketing Hub"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.55) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              color: '#fff',
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              Founder
            </div>
          </div>

          {/* Founder Bio */}
          <div>
            <h3 style={{
              fontSize: isMobile ? 24 : 32,
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1a1a1a',
              margin: '0 0 4px',
            }}>
              Raj Sharma
            </h3>
            <p style={{
              fontSize: isMobile ? 13 : 14,
              color: gold,
              fontWeight: 600,
              margin: '0 0 20px',
            }}>
              FOUNDER & DIGITAL MARKETING STRATEGIST
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <Quote size={28} color={gold} style={{ flexShrink: 0, opacity: 0.5 }} />
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#4a4a4a',
                lineHeight: 1.8,
                margin: 0,
                fontStyle: 'italic',
              }}>
                I built 360 Marketing Hub on a single principle: ROI is the only metric that matters. Every system we deploy is architected to be a long-term growth asset, not an expense.
              </p>
            </div>
            <Link href="https://linkedin.com" target="_blank" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 24px',
              background: '#0a66c2',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}>
              Connect on LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function FAQSection() {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    q: "What makes Mind Frame Global one of the best digital marketing agencies in the USA?",
    a: "Mind Frame Global delivers ROI-driven digital marketing strategies, creative branding, AI-powered solutions, and measurable business growth for startups, SMEs, and enterprises across the USA.",
  },
  {
    q: "What digital marketing services does Mind Frame Global offer?",
    a: "We provide SEO, PPC, Social Media Marketing, Website Design & Development, Branding, Content Marketing, Video Production, AI Marketing, AEO, GEO, and performance-driven digital campaigns.",
  },
  {
    q: "How is Mind Frame Global different from other marketing agencies?",
    a: "Our approach combines creativity, data, AI-driven insights, and transparent reporting to create customized strategies that deliver measurable results.",
  },
  {
    q: "How much do your digital marketing services cost?",
    a: "Our pricing depends on your business goals and project scope. We offer flexible packages tailored to startups, growing businesses, and enterprise clients.",
  },
  {
    q: "How long does it take to see digital marketing results?",
    a: "Paid advertising can generate immediate traffic, while SEO and organic marketing typically deliver measurable growth within 3–6 months.",
  },
  {
    q: "Do you work with businesses outside the USA?",
    a: "Yes. Mind Frame Global serves clients worldwide, helping businesses expand their digital presence across global markets.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "We work with healthcare, technology, finance, real estate, education, hospitality, e-commerce, manufacturing, and professional service businesses.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We track KPIs including website traffic, lead generation, conversion rates, ROI, engagement, and revenue growth through detailed performance reports.",
  },
  {
    q: "Can I see your previous work or case studies?",
    a: "Yes. Visit our portfolio to explore successful branding, website development, and digital marketing projects completed for clients across various industries.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "We use Google Analytics, Google Ads, Meta Business Suite, SEMrush, Ahrefs, HubSpot, AI-powered marketing tools, and advanced reporting platforms to optimize campaigns.",
  },
];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '80px 48px',
      background: '#fff',
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
            Everything you need to know about partnering with leading digital marketing agency.
          </p>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                borderBottom: '1px solid rgba(0,0,0,0.08)',
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

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
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
        backgroundImage: `url("${unsplash('photo-1522071820081-009f0129c71c', 1800, 75)}")`,
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
          Have a Project?  <span style={{ color: gold }}>Let Us Help.</span>
        </h2>
        <p style={{
          fontSize: isMobile ? 14 : 16,
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          margin: '0 0 32px',
        }}>
         Boost your business growth with a professionally optimized website that attracts new visitors and leads. Let MFG create a tailored strategy to fuel your success online.
        </p>
        <Link href="/contact-us" style={{
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
        }}>
          Contact Us
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}

// ─── MAIN HOME COMPONENT ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <SEO
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        path={seoConfig.home.path}
        structured={organizationSchema}
      />

      <div style={{ fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>
        <HeroSection />
        <LeadingBrands />
        <ShowreelSection />
        <RevenueMetrics />
        <ExpertiseSection />
        <IndustriesSection />
        <FounderSection />
        <Testimonial />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}