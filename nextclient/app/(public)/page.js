'use client'

/**
 * Home Page — Visual Redesign
 * Same gold/cream/dark brand theme, same copy — new layout that leads with
 * imagery instead of text blocks, and turns the services grid into an
 * interactive showcase.
 * Icons: lucide-react | Imagery: Unsplash
 */

import { useState, useEffect ,useRef} from 'react';
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
  Bot,
  Users,
  Plane,
  GraduationCap,
  ShoppingCart,
  Quote,
  Layout,
  Layers,
  Server,
  HeartPulse,
  Sparkles,
  Plus,
  CheckCircle2,
} from 'lucide-react';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#dcc28a';
const cream = '#f5f2ed';
const creamLight = '#faf8f5';
const ink = '#1a1a1a';

const displayFont = "'Cormorant Garamond', serif";
const bodyFont = "'DM Sans', sans-serif";

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

// Reusable eyebrow label
function Eyebrow({ children, dark = false }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 11,
      letterSpacing: 3,
      textTransform: 'uppercase',
      color: gold,
      fontWeight: 600,
      marginBottom: 12,
    }}>
      <span style={{ width: 24, height: 1, background: gold, opacity: dark ? 0.8 : 1 }} />
      {children}
    </div>
  );
}



// ─── HERO SECTION ─────────────────────────────────────────────────────────────
// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection() {
  const isMobile = useIsMobile();
  const videoRef = useRef(null);
  const videoSrc = '/assets/mfgbg.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked by browser — video will still show first frame via preload
      });
    }
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Darken bottom-left so left-aligned text stays legible over the video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(6,6,6,0.75) 0%, rgba(6,6,6,0.35) 45%, transparent 70%), linear-gradient(0deg, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.15) 55%, rgba(6,6,6,0.4) 100%)',
      }} />

      {/* Fine corner frame — signature detail */}
      {!isMobile && (
        <>
          <div style={{ position: 'absolute', top: 40, left: 40, width: 56, height: 56, borderTop: `1.5px solid ${goldLight}`, borderLeft: `1.5px solid ${goldLight}`, opacity: 0.6 }} />
          <div style={{ position: 'absolute', bottom: 40, right: 40, width: 56, height: 56, borderBottom: `1.5px solid ${goldLight}`, borderRight: `1.5px solid ${goldLight}`, opacity: 0.6 }} />
        </>
      )}

      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'left',
        padding: isMobile ? '40px 20px 60px' : '0 64px 90px',
        maxWidth: 720,
        width: '100%',
      }}>
        <h1 style={{
          fontSize: isMobile ? 'clamp(28px, 8vw, 36px)' : 'clamp(34px, 3.4vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.15,
          margin: '0 0 16px',
          fontFamily: displayFont,
          textShadow: '0 4px 30px rgba(0,0,0,0.4)',
        }}>
          We Build <span style={{ color: gold }}>Growth-First Brands</span> & Digital Programs for SaaS, Healthcare & Consumer Brands.
        </h1>

        <p style={{
          fontSize: isMobile ? 14 : 15,
          color: 'rgba(255,255,255,0.82)',
          lineHeight: 1.7,
          margin: '0 0 18px',
        }}>
          Strategy — SEO — Creative — Web.<br />
          Measurable ROI. Book a free 30-minute growth audit.
        </p>

        <p style={{
          fontSize: 13,
          color: goldLight,
          fontWeight: 600,
          letterSpacing: 0.5,
          margin: '0 0 28px',
        }}>
          Creative &nbsp;|&nbsp; Branding &nbsp;|&nbsp; Performance Marketing &nbsp;|&nbsp; IT Solutions
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/contact-us" style={{
            padding: '13px 30px',
            background: gold,
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: 0.3,
            borderRadius: 8,
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 30px rgba(201,168,76,0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = goldDark; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = 'translateY(0)'; }}>
            Let's Discuss Your Business
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/our-work" style={{
            padding: '13px 30px',
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: 0.3,
            borderRadius: 8,
            border: '1.5px solid rgba(255,255,255,0.25)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backdropFilter: 'blur(6px)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = gold; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}>
            See Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── LEADING BRANDS SECTION ──────────────────────────────────────────────────
function LeadingBrands() {
  const isMobile = useIsMobile();

  const brands = [
    { name: 'Pamcea', tag: 'Healthcare', image: unsplash('photo-1576091160550-2173dba999ef', 700, 70) },
    { name: 'BYP', tag: 'Internationally Recognized', image: unsplash('photo-1522071820081-009f0129c71c', 700, 70) },
    { name: 'Technology Co.', tag: 'Enterprise SaaS', image: unsplash('photo-1519389950473-47ba0277781c', 700, 70) },
  ];

  return (
    <section style={{ padding: isMobile ? '48px 20px' : '64px 48px', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h3 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 700, color: ink, fontFamily: displayFont, letterSpacing: 1 }}>
            Leading Brands We've Scaled
          </h3>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? 16 : 24 }}>
          {brands.map((brand, idx) => (
            <div key={idx} style={{
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              height: isMobile ? 130 : 170,
              isolation: 'isolate',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 34px rgba(201,168,76,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${brand.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.85) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '14px 14px' : '18px 20px' }}>
                <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 700, color: '#fff', fontFamily: displayFont }}>{brand.name}</div>
                <div style={{ fontSize: 10, color: goldLight, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{brand.tag}</div>
              </div>
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
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'relative',
        padding: isMobile ? '48px 20px 0' : '80px 48px 0',
        background: `linear-gradient(135deg, ${cream} 0%, ${creamLight} 100%)`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 8px' }}>
              360 Marketing Hub <span style={{ color: gold }}>Showreel</span>
            </h2>
            <div style={{ width: 50, height: 2, background: gold, margin: '0 auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
            gap: isMobile ? 32 : 48,
            alignItems: 'center',
            paddingBottom: isMobile ? 40 : 60,
          }}>
            <div style={{ borderRadius: 18, overflow: 'hidden', position: 'relative', aspectRatio: isMobile ? '16/10' : '4/3', boxShadow: '0 20px 50px rgba(0,0,0,0.18)' }}>
              <img src={unsplash('photo-1551288049-bebda4e38f71', 1200, 80)} alt="Team reviewing performance data" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.5) 100%)' }} />
            </div>

            <div>
              <h3 style={{ fontSize: isMobile ? 20 : 28, fontWeight: 600, color: ink, fontFamily: displayFont, margin: '0 0 12px' }}>
                Numbers That Speak <span style={{ color: gold }}>Louder</span>
              </h3>
              <p style={{ fontSize: isMobile ? 14 : 16, color: '#6b5f53', lineHeight: 1.7, marginBottom: 28 }}>
                We don't just promise results; we engineer them through high-performance data architectures.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : '1fr', gap: isMobile ? 10 : 14 }}>
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} style={{
                      background: '#fff',
                      borderRadius: 14,
                      padding: isMobile ? '16px 10px' : '18px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? 0 : 18,
                      flexDirection: isMobile ? 'column' : 'row',
                      textAlign: isMobile ? 'center' : 'left',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(0,0,0,0.04)',
                    }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: isMobile ? 8 : 0 }}>
                        <Icon size={22} color={gold} strokeWidth={2} />
                      </div>
                      <div>
                        <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: gold, fontFamily: displayFont, lineHeight: 1 }}>{stat.value}</div>
                        <div style={{ fontSize: 12, color: '#8a7a6a', letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
                        {!isMobile && <div style={{ fontSize: 12, color: '#aaa', marginTop: 4 }}>{stat.note}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 60, alignItems: 'center' }}>
          <div>
            <Eyebrow>Growth Architecture</Eyebrow>
            <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 24px' }}>
              Elevate <span style={{ color: gold }}>Revenue Metrics</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} style={{
                    background: cream,
                    borderRadius: 10,
                    padding: isMobile ? '16px 12px' : '20px 16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.background = creamLight; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = cream; }}>
                    <Icon size={26} color={gold} strokeWidth={1.8} style={{ marginBottom: 6 }} />
                    <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600, color: ink }}>{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', padding: isMobile ? '32px 24px' : '48px 40px', color: '#fff', isolation: 'isolate' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${unsplash('photo-1460925895917-afdab827c52f', 1200, 75)}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(135deg, rgba(15,15,15,0.94) 0%, rgba(30,30,30,0.9) 100%)' }} />
            <h3 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, fontFamily: displayFont, color: gold, margin: '0 0 12px' }}>
              Performance Layer
            </h3>
            <h4 style={{ fontSize: isMobile ? 16 : 20, fontWeight: 600, margin: '0 0 16px' }}>
              Accelerate Growth with <span style={{ color: gold }}>AI-Driven Search Optimization</span>
            </h4>
            <p style={{ fontSize: isMobile ? 14 : 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, marginBottom: 24 }}>
              The future of search is conversational. Our high-end agency specializes in scaling revenue through data-backed strategies that place your brand at the forefront of the LLM revolution. We don't just drive traffic; we capture intent at the source of modern discovery.
            </p>
            <Link href="/contact-us" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: gold, color: '#fff',
              textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = goldDark; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = 'translateY(0)'; }}>
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
  const [active, setActive] = useState(0);

  const serviceCategories = [
    {
      title: 'Creative Solutions',
      icon: Layout,
      image: unsplash('photo-1626785774573-4b799315345d', 1000, 75),
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
      image: unsplash('photo-1600880292203-757bb62b4baf', 1000, 75),
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
      image: unsplash('photo-1551288049-bebda4e38f71', 1000, 75),
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
      image: unsplash('photo-1518770660439-4636190af475', 1000, 75),
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

  const current = serviceCategories[active];

  return (
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', background: creamLight, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow>Our Services</Eyebrow>
          <h2 style={{
            fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 auto 8px', maxWidth: 800,
          }}>
            Focused Expertise from a Leading <span style={{ color: gold }}>Digital Marketing</span> & Advertising Agency to Grow Your Business
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        {/* Tab selector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? 8 : 12,
          flexWrap: 'wrap',
          marginBottom: isMobile ? 24 : 36,
        }}>
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = idx === active;
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: isMobile ? '9px 14px' : '11px 20px',
                  borderRadius: 50,
                  border: `1.5px solid ${isActive ? gold : 'rgba(0,0,0,0.1)'}`,
                  background: isActive ? gold : '#fff',
                  color: isActive ? '#fff' : ink,
                  fontSize: isMobile ? 12 : 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <Icon size={16} strokeWidth={2} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active panel: image + chip list */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: isMobile ? 24 : 0,
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
        }}>
          <div style={{ position: 'relative', minHeight: isMobile ? 220 : 380 }}>
            <img src={current.image} alt={current.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: isMobile ? 'static' : 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(10,10,10,0.7) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: 'rgba(201,168,76,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10,
              }}>
                <current.icon size={22} color="#fff" strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: '#fff', fontFamily: displayFont, margin: 0 }}>{current.title}</h3>
            </div>
          </div>

          <div style={{ padding: isMobile ? '24px 20px' : '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
              {current.items.map((item, itemIdx) => (
                <Link key={itemIdx} href={item.link} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 14px',
                  borderRadius: 10,
                  background: cream,
                  color: '#3a3a3a',
                  textDecoration: 'none',
                  fontSize: isMobile ? 13 : 14,
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.12)'; e.currentTarget.style.color = goldDark; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = cream; e.currentTarget.style.color = '#3a3a3a'; }}>
                  <CheckCircle2 size={16} color={gold} strokeWidth={2} style={{ flexShrink: 0 }} />
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/contact-us" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
              padding: '12px 26px', background: ink, color: '#fff', textDecoration: 'none',
              borderRadius: 8, fontWeight: 600, fontSize: 13, transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = gold; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = ink; }}>
              Explore {current.title}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
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
  ];

  return (
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow>Specialized Knowledge</Eyebrow>
          <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 8px' }}>
            Industries We <span style={{ color: gold }}>Transform</span>
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 16 : 24 }}>
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div key={idx} style={{
                position: 'relative',
                borderRadius: 14,
                overflow: 'hidden',
                height: isMobile ? 220 : 280,
                isolation: 'isolate',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,168,76,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${industry.image}")`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s ease' }} />
                <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.9) 100%)' }} />

                <div style={{ position: 'absolute', top: 16, left: 16, width: 40, height: 40, borderRadius: 10, background: 'rgba(201,168,76,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="#fff" strokeWidth={2} />
                </div>

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '18px 16px' : '22px 20px' }}>
                  <h3 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, color: '#fff', fontFamily: displayFont, margin: '0 0 6px' }}>
                    {industry.title}
                  </h3>
                  <p style={{ fontSize: isMobile ? 12 : 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: '0 0 10px' }}>
                    {industry.desc}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: goldLight, letterSpacing: 0.5, textTransform: 'uppercase' }}>
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
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', background: `linear-gradient(135deg, ${cream} 0%, ${creamLight} 100%)`, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <Eyebrow>The Vision Behind The Engine</Eyebrow>
          <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 32px' }}>
            Driven by <span style={{ color: gold }}>Expertise</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48, alignItems: 'center' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', position: 'relative', boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}>
            <img
              src={unsplash('photo-1560250097-0b93528c311a', 900, 80)}
              alt="Raj Sharma, Founder of 360 Marketing Hub"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.55) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>
              Founder
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 4px' }}>
              Raj Sharma
            </h3>
            <p style={{ fontSize: isMobile ? 13 : 14, color: gold, fontWeight: 600, margin: '0 0 20px' }}>
              FOUNDER & DIGITAL MARKETING STRATEGIST
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <Quote size={28} color={gold} style={{ flexShrink: 0, opacity: 0.5 }} />
              <p style={{ fontSize: isMobile ? 14 : 16, color: '#4a4a4a', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
                I built 360 Marketing Hub on a single principle: ROI is the only metric that matters. Every system we deploy is architected to be a long-term growth asset, not an expense.
              </p>
            </div>
            <Link href="https://linkedin.com" target="_blank" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', background: '#0a66c2',
              color: '#fff', textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: 13, transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
              Connect on LinkedIn
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What makes Mind Frame Global one of the best digital marketing agencies in the USA?", a: "Mind Frame Global delivers ROI-driven digital marketing strategies, creative branding, AI-powered solutions, and measurable business growth for startups, SMEs, and enterprises across the USA." },
    { q: "What digital marketing services does Mind Frame Global offer?", a: "We provide SEO, PPC, Social Media Marketing, Website Design & Development, Branding, Content Marketing, Video Production, AI Marketing, AEO, GEO, and performance-driven digital campaigns." },
    { q: "How is Mind Frame Global different from other marketing agencies?", a: "Our approach combines creativity, data, AI-driven insights, and transparent reporting to create customized strategies that deliver measurable results." },
    { q: "How much do your digital marketing services cost?", a: "Our pricing depends on your business goals and project scope. We offer flexible packages tailored to startups, growing businesses, and enterprise clients." },
    { q: "How long does it take to see digital marketing results?", a: "Paid advertising can generate immediate traffic, while SEO and organic marketing typically deliver measurable growth within 3–6 months." },
    { q: "Do you work with businesses outside the USA?", a: "Yes. Mind Frame Global serves clients worldwide, helping businesses expand their digital presence across global markets." },
    { q: "Which industries do you specialize in?", a: "We work with healthcare, technology, finance, real estate, education, hospitality, e-commerce, manufacturing, and professional service businesses." },
    { q: "How do you measure campaign success?", a: "We track KPIs including website traffic, lead generation, conversion rates, ROI, engagement, and revenue growth through detailed performance reports." },
    { q: "Can I see your previous work or case studies?", a: "Yes. Visit our portfolio to explore successful branding, website development, and digital marketing projects completed for clients across various industries." },
    { q: "What tools and technologies do you use?", a: "We use Google Analytics, Google Ads, Meta Business Suite, SEMrush, Ahrefs, HubSpot, AI-powered marketing tools, and advanced reporting platforms to optimize campaigns." },
  ];

  return (
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: isMobile ? 32 : 56 }}>
          {/* Left: image + intro, sticky on desktop */}
          <div style={{ position: isMobile ? 'static' : 'sticky', top: 100, alignSelf: 'start' }}>
            <Eyebrow>Got Questions</Eyebrow>
            <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: ink, margin: '0 0 12px' }}>
              Frequently <span style={{ color: gold }}>Asked Questions</span>
            </h2>
            <p style={{ fontSize: isMobile ? 14 : 16, color: '#6b5f53', lineHeight: 1.7, marginBottom: 24 }}>
              Everything you need to know about partnering with a leading digital marketing agency.
            </p>
            {!isMobile && (
              <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', position: 'relative', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                <img src={unsplash('photo-1600880292203-757bb62b4baf', 900, 78)} alt="Strategy consultation" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.5) 100%)' }} />
              </div>
            )}
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: isMobile ? '16px 0' : '20px 0', textAlign: 'left', gap: 16,
                    }}
                  >
                    <span style={{ fontSize: isMobile ? 14 : 15, fontWeight: 600, color: isOpen ? gold : ink, fontFamily: bodyFont, lineHeight: 1.5, transition: 'color 0.2s ease' }}>
                      {faq.q}
                    </span>
                    <span style={{
                      width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: isOpen ? gold : cream, color: isOpen ? '#fff' : gold,
                      transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                      <Plus size={14} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div style={{ maxHeight: isOpen ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    <p style={{ fontSize: isMobile ? 13 : 14, color: '#4a4a4a', lineHeight: 1.8, margin: '0 0 20px', fontFamily: bodyFont }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function CTASection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ padding: isMobile ? '50px 20px' : '80px 48px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("${unsplash('photo-1522071820081-009f0129c71c', 1800, 75)}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(20,20,20,0.9) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: gold, fontWeight: 600, marginBottom: 16 }}>
          Start Growing Today
        </div>
        <h2 style={{ fontSize: isMobile ? 28 : 38, fontWeight: 700, fontFamily: displayFont, color: '#fff', margin: '0 0 12px' }}>
          Have a Project? <span style={{ color: gold }}>Let Us Help.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, margin: '0 0 32px' }}>
          Boost your business growth with a professionally optimized website that attracts new visitors and leads. Let MFG create a tailored strategy to fuel your success online.
        </p>
        <Link href="/contact-us" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', background: gold, color: '#fff',
          borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, transition: 'all 0.3s ease',
          boxShadow: '0 8px 30px rgba(201,168,76,0.35)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = goldDark; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,0.45)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.35)'; }}>
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

      <div style={{ fontFamily: bodyFont, overflowX: 'hidden' }}>
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