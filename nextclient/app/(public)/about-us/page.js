'use client'

/**
 * About Page — Mind Frame India
 * Professional redesign with gold accent theme and React Icons
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { 
  FaUsers, 
  FaLightbulb, 
  FaRocket, 
  FaEye, 
  FaChartLine, 
  FaGlobe, 
  FaMapMarkerAlt,
  FaChevronRight,
  FaCheckCircle,
  FaStar,
  FaBullseye,
  FaArrowRight,
  FaQuoteLeft,
  FaBuilding,
  FaPenFancy,
  FaLaptopCode,
  FaMobileAlt,
  FaFilm,
  FaPrint,
  FaPalette,
  FaRegLightbulb,
  FaRegBuilding,
  FaRegStar,
  FaRegCheckCircle,
  FaFlag,
  FaTrophy,
  FaAward,
  FaShieldAlt
} from 'react-icons/fa';

/* ---------------------------------------------------------------- */
/* Content                                                           */
/* ---------------------------------------------------------------- */

const capabilities = [
  { name: 'Digital Marketing', icon: FaChartLine },
  { name: 'Branding Solutions', icon: FaPalette },
  { name: 'Creative Designing', icon: FaPenFancy },
  { name: 'Print Media Creative', icon: FaPrint },
  { name: '2D / 3D Animation', icon: FaFilm },
  { name: 'Website Development', icon: FaLaptopCode },
  { name: 'Mobile App Development', icon: FaMobileAlt },
  { name: 'Corporate Films & TVCs', icon: FaFlag },
];

const principles = [
  {
    icon: FaBullseye,
    title: 'Strategy First',
    text: 'We chase the perfect balance between strategy, creativity and on-target digital marketing — every campaign is measured against the metrics that actually move a business forward.',
  },
  {
    icon: FaRegLightbulb,
    title: 'Creativity + Technology',
    text: 'We blend creativity, technology and innovation into one process, so every idea is built to work as hard in a browser as it does on a billboard.',
  },
  {
    icon: FaEye,
    title: 'Radical Transparency',
    text: 'Great work starts with real understanding — your business, your competitors, your market. We ask for that context up front, because a plan built without it rarely ignites.',
  },
];

const operationalForce = [
  'Creative Directors',
  'Brand Strategists',
  'Art Directors',
  'Concept Designers',
  'Copywriters',
  'Content Creators',
  'Production Supervisors',
  'Filmmakers & Designers',
];

const offices = [
  { city: 'Mumbai', tag: 'Head Office', icon: FaBuilding },
  { city: 'Hyderabad', tag: 'India', icon: FaGlobe },
  { city: 'Dubai', tag: 'UAE', icon: FaGlobe },
  { city: 'San Ramon', tag: 'California, USA', icon: FaFlag },
];

const faqs = [
  {
    question: 'Which is the best television advertising agency in Mumbai for TV commercials (TVCs)?',
    answer:
      "Mind Frame India is a leading television advertising agency in Mumbai, offering full-service TV commercial (TVC) production, scripting, media planning, and broadcast campaigns since 2009. Mind Frame India's team of creative directors and filmmakers has managed successful campaigns for top brands including Microsoft, HP, and Dell, establishing it as a highly trusted advertising agency in Mumbai.",
  },
  {
    question: 'What TV ad campaign production and media buying services does Mind Frame India offer?',
    answer:
      'Mind Frame India provides end-to-end TV advertising services in Mumbai, including concept development, scriptwriting, video production, post-production, 2D and 3D animation, and media buying/planning. Mind Frame India coordinates campaigns across regional and national TV channels, servicing diverse sectors such as FMCG, real estate, retail, education, and healthcare.',
  },
  {
    question: 'Why is Mind Frame India a leading branding agency and company in Mumbai?',
    answer:
      'Mind Frame India is considered a leading branding agency in Mumbai because it offers comprehensive, data-driven brand identity services including logo design, brand guidelines, visual language, packaging, and communication strategy. The agency collaborates with expert brand strategists, art directors, copywriters, and concept designers to build brands from the ground up, delivering high-impact branding solutions for global companies like Microsoft, Dell, and HP.',
  },
  {
    question: 'What digital marketing and advertising services does Mind Frame India provide in Mumbai?',
    answer:
      'Mind Frame India provides a full suite of digital marketing and advertising services in Mumbai, including search engine optimization (SEO), social media marketing, paid advertising (Google Ads, Meta Ads), content marketing, email marketing, performance analytics, and influencer campaigns. Mind Frame India combines data-driven digital strategies with creative brand storytelling to increase visibility and drive business conversions.',
  },
  {
    question: 'How does Mind Frame India execute media planning and media buying in Mumbai?',
    answer:
      'Mind Frame India executes media planning and media buying by negotiating optimal advertising rates across TV, print, outdoor billboard, digital, and radio platforms. Mind Frame India designs customized media plans tailored to specific target demographics, campaign goals, and budgets, managing local Mumbai advertising as well as pan-India campaigns.',
  },
  {
    question: 'What corporate brand identity and logo design services does Mind Frame India provide?',
    answer:
      'Mind Frame India provides comprehensive brand identity and logo design services, including brand naming, tagline development, color palettes, typography, brand style guides, stationery, signage, and digital assets. Mind Frame India ensures consistent visual communication across online and offline platforms, helping businesses establish brand recognition in Mumbai and across international markets.',
  },
  {
    question: 'Does Mind Frame India provide Augmented Reality (AR) and Virtual Reality (VR) solutions?',
    answer:
      'Yes, Mind Frame India provides interactive Augmented Reality (AR) and Virtual Reality (VR) solutions in Mumbai. The agency builds virtual product demonstrations, 360-degree brand experiences, AR filters, and interactive installations, merging creative advertising concepts with advanced immersive technology to drive consumer engagement.',
  },
  {
    question: 'When was Mind Frame India established and where are its offices located?',
    answer:
      "Mind Frame India was established on October 6, 2009. The agency's head office is located in Andheri West, Mumbai, India. Mind Frame India also operates branch offices in Hyderabad (India), Dubai (UAE), and San Ramon, California (USA), offering global advertising and digital marketing solutions.",
  },
];

/* ---------------------------------------------------------------- */
/* Small pieces                                                      */
/* ---------------------------------------------------------------- */

const gold = "#c9a84c";
const goldDark = "#b38f3d";
const ink = "#1a1a1a";

function FrameEyebrow({ icon: Icon, label }) {
  return (
    <div className="frame-eyebrow">
      <span className="frame-code">
        <Icon size={14} style={{ display: 'inline', marginRight: 6 }} />
      </span>
      <span className="frame-label">{label}</span>
    </div>
  );
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}>
      {children}
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <h3 style={{ margin: 0, padding: 0 }}>
        <button
          id={`faq-btn-${index}`}
          aria-controls={`faq-panel-${index}`}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="faq-trigger"
        >
          <span className="faq-question">{question}</span>
          <span className={`faq-icon ${open ? 'is-open' : ''}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        aria-labelledby={`faq-btn-${index}`}
        role="region"
        className="faq-panel"
        style={{ maxHeight: open ? '600px' : '0' }}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                               */
/* ---------------------------------------------------------------- */

export default function About() {
  return (
    <>
      <SEO
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        path={seoConfig.about.path}
      />

      <div className="mf-about">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

          .mf-about {
            --gold: #c9a84c;
            --gold-dark: #b38f3d;
            --gold-light: #dcc28a;
            --ink: #1a1a1a;
            --ink-light: #4a4a4a;
            --ink-faint: #8a8a8a;
            --bg: #faf8f5;
            --bg-panel: #ffffff;
            --bg-panel-2: #f5f2ed;
            --line: rgba(0,0,0,0.08);
            --shadow: 0 4px 20px rgba(0,0,0,0.06);

            background: var(--bg);
            color: var(--ink);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
          }

          .mf-about * { box-sizing: border-box; }

          .mf-about h1, .mf-about h2, .mf-about h3 {
            font-family: 'Cormorant Garamond', serif;
            letter-spacing: -0.01em;
          }

          .mf-shell {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 48px;
          }

          /* -------- shared bits -------- */

          .frame-eyebrow {
            display: inline-flex; align-items: center; gap: 12px;
            margin-bottom: 16px;
          }
          .frame-code {
            font-family: 'DM Sans', sans-serif;
            font-size: 11px; letter-spacing: 0.12em;
            color: var(--gold);
            background: rgba(201, 168, 76, 0.1);
            border: 1px solid rgba(201, 168, 76, 0.2);
            padding: 4px 10px; border-radius: 4px;
            font-weight: 600;
            display: flex;
            align-items: center;
          }
          .frame-label {
            font-family: 'DM Sans', sans-serif;
            font-size: 11px; letter-spacing: 0.14em;
            color: var(--ink-faint); text-transform: uppercase;
            font-weight: 500;
          }

          .reveal { 
            opacity: 0; 
            transform: translateY(30px); 
            transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          }
          .reveal-in { opacity: 1; transform: translateY(0); }

          .divider { 
            border: none; 
            border-top: 1px solid var(--line); 
            margin: 0; 
            max-width: 1180px;
            margin: 0 auto;
          }

          .img-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* -------- hero -------- */

          .hero {
            position: relative;
            padding: 100px 48px 80px;
            text-align: center;
            background: linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%);
            overflow: hidden;
          }
          .hero::before {
            content: '';
            position: absolute; inset: 0;
            background: 
              radial-gradient(ellipse 600px 400px at 50% 0%, rgba(201, 168, 76, 0.08), transparent 65%);
            pointer-events: none;
          }
          .hero-bg-img {
            position: absolute;
            inset: 0;
            opacity: 0.06;
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
          }
          .hero-inner { 
            position: relative; 
            max-width: 780px; 
            margin: 0 auto; 
            z-index: 1;
          }
          .hero-pill {
            display: inline-flex; align-items: center; gap: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
            color: var(--gold);
            background: rgba(201, 168, 76, 0.12);
            padding: 6px 18px; border-radius: 999px;
            margin-bottom: 24px;
            font-weight: 600;
            border: 1px solid rgba(201, 168, 76, 0.15);
          }
          .hero h1 {
            font-size: 56px; font-weight: 700; line-height: 1.08;
            margin: 0 0 20px;
            color: var(--ink);
          }
          .hero h1 span { color: var(--gold); }
          .hero p {
            font-size: 17px; line-height: 1.8; color: var(--ink-light);
            max-width: 580px; margin: 0 auto;
          }
          .hero p strong { color: var(--gold-dark); font-weight: 600; }

          .hero-scroll {
            margin-top: 48px; display: flex; flex-direction: column; align-items: center; gap: 12px;
          }
          .hero-chevron {
            width: 40px; height: 40px; border-radius: 50%;
            border: 1.5px solid rgba(201, 168, 76, 0.3);
            display: flex; align-items: center; justify-content: center;
            color: var(--gold); font-size: 18px;
            animation: bob 2.4s ease-in-out infinite;
            transition: border-color 0.3s ease;
          }
          .hero-chevron:hover { border-color: var(--gold); }
          @keyframes bob { 0%,100% { transform: translateY(0);} 50% { transform: translateY(6px);} }
          .hero-dots { display: flex; gap: 8px; }
          .hero-dots span { 
            width: 6px; height: 6px; border-radius: 50%; 
            background: rgba(201, 168, 76, 0.3); 
          }
          .hero-dots span:first-child { 
            background: var(--gold); 
            width: 20px; 
            border-radius: 3px; 
          }

          /* -------- story -------- */

          .story {
            padding: 80px 0 100px;
          }
          .story-grid {
            display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 64px; align-items: center;
          }
          .story h2 {
            font-size: 36px; font-weight: 700; line-height: 1.15; margin: 0 0 18px; color: var(--ink);
          }
          .story h2 span { color: var(--gold); }
          .story p {
            font-size: 15px; line-height: 1.85; color: var(--ink-light); margin: 0 0 14px;
          }

          .stat-row { display: flex; gap: 48px; margin: 28px 0 32px; flex-wrap: wrap; }
          .stat-num { 
            font-family: 'Cormorant Garamond', serif; 
            font-size: 34px; font-weight: 700; 
            color: var(--gold); 
            line-height: 1;
          }
          .stat-label { 
            font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; 
            color: var(--ink-faint); margin-top: 4px; 
            font-weight: 500;
          }

          .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
          .chip {
            font-size: 12px; color: var(--ink-light);
            border: 1px solid var(--line); border-radius: 999px;
            padding: 6px 14px; background: #fff;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .chip:hover {
            border-color: var(--gold);
            color: var(--gold);
            background: rgba(201, 168, 76, 0.05);
          }
          .chip svg { font-size: 12px; }

          .story-visual { 
            position: relative; 
            height: 400px; 
            border-radius: 16px; 
            overflow: hidden;
            box-shadow: var(--shadow);
          }
          .story-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .story-visual-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(26, 26, 26, 0.4) 0%, rgba(26, 26, 26, 0.1) 100%);
          }
          .story-visual-badge {
            position: absolute;
            bottom: 24px;
            left: 24px;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #fff;
            background: rgba(201, 168, 76, 0.85);
            padding: 6px 16px;
            border-radius: 4px;
            font-weight: 600;
          }

          /* -------- principles (FULL WIDTH) -------- */

          .principles-section { 
            padding: 80px 0; 
            background: #ffffff;
            width: 100%;
          }
          .principles-section .section-head { 
            text-align: center; 
            max-width: 680px; 
            margin: 0 auto 48px; 
          }
          .principles-section .section-head h2 { 
            font-size: 34px; 
            font-weight: 700; 
            margin: 0 0 12px; 
            font-family: 'Cormorant Garamond', serif;
          }
          .principles-section .section-head h2 span { color: var(--gold); }
          .principles-section .section-head p { 
            font-size: 15px; 
            color: var(--ink-light); 
            line-height: 1.8; 
            margin: 0; 
            font-family: 'DM Sans', sans-serif;
          }

          .principle-grid { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 24px; 
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 48px;
          }
          .principle-card {
            background: var(--bg-panel-2);
            border: 1px solid var(--line);
            border-radius: 14px;
            padding: 32px 28px;
            transition: all 0.3s ease;
            text-align: center;
          }
          .principle-card:hover { 
            border-color: var(--gold); 
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(201, 168, 76, 0.1);
          }
          .principle-card .principle-icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: rgba(201, 168, 76, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            color: var(--gold);
            font-size: 24px;
            transition: all 0.3s ease;
          }
          .principle-card:hover .principle-icon {
            background: var(--gold);
            color: #fff;
            transform: scale(1.05);
          }
          .principle-card h3 { 
            font-size: 20px; 
            font-weight: 600; 
            margin: 0 0 10px; 
            color: var(--ink);
            font-family: 'Cormorant Garamond', serif;
          }
          .principle-card p { 
            font-size: 14px; 
            line-height: 1.75; 
            color: var(--ink-light); 
            margin: 0; 
            font-family: 'DM Sans', sans-serif;
          }

          /* -------- team -------- */

          .team { padding: 80px 0; }
          .team-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center;
            margin-bottom: 56px;
          }
          .team-copy h2 { 
            font-size: 34px; font-weight: 700; margin: 0 0 16px;
            font-family: 'Cormorant Garamond', serif;
          }
          .team-copy h2 span { color: var(--gold); }
          .team-copy p { 
            font-size: 15px; color: var(--ink-light); line-height: 1.85; 
            margin: 0 0 24px; max-width: 460px; 
            font-family: 'DM Sans', sans-serif;
          }
          .team-cta {
            display: inline-flex; align-items: center; gap: 10px;
            background: var(--gold); color: #fff; font-weight: 600; font-size: 14px;
            padding: 12px 28px; border-radius: 8px; border: none; text-decoration: none;
            transition: all 0.3s ease;
            font-family: 'DM Sans', sans-serif;
          }
          .team-cta:hover {
            background: var(--gold-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201, 168, 76, 0.3);
          }

          .team-visual {
            position: relative; 
            height: 320px; 
            border-radius: 14px; 
            overflow: hidden;
            box-shadow: var(--shadow);
          }
          .team-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .team-visual-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(26, 26, 26, 0.3) 0%, rgba(26, 26, 26, 0.05) 100%);
          }
          .team-visual-label {
            position: absolute; 
            bottom: 20px; 
            right: 24px;
            font-family: 'DM Sans', sans-serif; 
            font-size: 11px; 
            color: #fff;
            letter-spacing: 0.06em;
            background: rgba(0,0,0,0.4);
            padding: 6px 16px;
            border-radius: 4px;
            backdrop-filter: blur(4px);
          }

          .force-label {
            font-family: 'DM Sans', sans-serif;
            font-size: 12px; letter-spacing: 0.14em;
            text-transform: uppercase; color: var(--ink-faint); 
            margin-bottom: 18px;
            font-weight: 600;
          }
          .force-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
          .force-card {
            border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px;
            background: #fff;
            text-align: center;
            transition: all 0.3s ease;
          }
          .force-card:hover {
            border-color: var(--gold);
            box-shadow: 0 4px 16px rgba(201, 168, 76, 0.08);
          }
          .force-card .role { 
            font-size: 13px; 
            font-weight: 600; 
            color: var(--ink);
            font-family: 'DM Sans', sans-serif;
          }

          /* -------- offices strip -------- */

          .offices { 
            padding: 60px 0; 
            background: linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%);
            width: 100%;
          }
          .offices .office-grid { 
            display: grid; 
            grid-template-columns: repeat(4, 1fr); 
            gap: 16px; 
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 48px;
          }
          .office-card {
            border: 1px solid var(--line); 
            border-radius: 12px; 
            padding: 24px 20px;
            text-align: center; 
            background: #fff;
            transition: all 0.3s ease;
          }
          .office-card:hover {
            border-color: var(--gold);
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(201, 168, 76, 0.1);
          }
          .office-icon {
            font-size: 32px;
            color: var(--gold);
            margin-bottom: 8px;
            display: block;
          }
          .office-city { 
            font-family: 'Cormorant Garamond', serif; 
            font-weight: 600; 
            font-size: 18px; 
            color: var(--ink); 
          }
          .office-tag { 
            font-size: 11.5px; 
            color: var(--ink-faint); 
            margin-top: 4px;
            font-family: 'DM Sans', sans-serif;
          }

          /* -------- FAQ (FULL WIDTH) -------- */

          .faq-section { 
            padding: 80px 0 100px; 
            background: #ffffff;
            width: 100%;
          }
          .faq-section .section-head { 
            text-align: center; 
            max-width: 680px; 
            margin: 0 auto 40px; 
          }
          .faq-section .section-head h2 { 
            font-size: 34px; 
            font-weight: 700; 
            margin: 0 0 12px; 
            font-family: 'Cormorant Garamond', serif;
          }
          .faq-section .section-head h2 span { color: var(--gold); }
          .faq-section .section-head p { 
            font-size: 15px; 
            color: var(--ink-light); 
            line-height: 1.8; 
            margin: 0; 
            font-family: 'DM Sans', sans-serif;
          }
          .faq-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 48px;
          }
          .faq-item { border-bottom: 1px solid var(--line); }
          .faq-trigger {
            width: 100%; background: none; border: none; cursor: pointer;
            display: flex; justify-content: space-between; align-items: center;
            padding: 20px 0; text-align: left; gap: 20px;
          }
          .faq-trigger:hover .faq-question { color: var(--gold); }
          .faq-question {
            font-size: 15px; 
            font-weight: 600; 
            color: var(--ink);
            font-family: 'DM Sans', sans-serif; 
            line-height: 1.5;
            transition: color 0.3s ease;
          }
          .faq-icon {
            flex-shrink: 0;
            transition: transform 0.3s ease;
            color: var(--gold);
          }
          .faq-icon.is-open { transform: rotate(45deg); }
          .faq-panel { overflow: hidden; transition: max-height 0.4s ease; }
          .faq-answer { 
            font-size: 14px; 
            color: var(--ink-light); 
            line-height: 1.9; 
            margin: 0 0 20px; 
            font-family: 'DM Sans', sans-serif;
            max-width: 800px;
          }

          /* -------- CTA (FULL WIDTH) -------- */

          .cta-section { 
            padding: 80px 0; 
            text-align: center; 
            background: var(--ink);
            position: relative;
            overflow: hidden;
            width: 100%;
          }
          .cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
              radial-gradient(ellipse 600px 400px at 50% 50%, rgba(201, 168, 76, 0.08), transparent 65%);
            pointer-events: none;
          }
          .cta-section-inner {
            position: relative;
            z-index: 1;
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 48px;
          }
          .cta-section h2 { 
            font-size: 38px; 
            font-weight: 700; 
            margin: 0 0 14px; 
            color: #fff;
            font-family: 'Cormorant Garamond', serif;
          }
          .cta-section h2 span { color: var(--gold); }
          .cta-section p { 
            font-size: 16px; 
            color: rgba(255,255,255,0.7); 
            max-width: 520px; 
            margin: 0 auto 32px; 
            line-height: 1.8; 
            font-family: 'DM Sans', sans-serif;
          }
          .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
          .btn-primary {
            background: var(--gold); 
            color: #fff; 
            font-weight: 600; 
            font-size: 14px;
            padding: 14px 32px; 
            border-radius: 8px; 
            text-decoration: none; 
            border: none;
            transition: all 0.3s ease;
            font-family: 'DM Sans', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-primary:hover {
            background: var(--gold-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201, 168, 76, 0.3);
          }
          .btn-secondary {
            background: transparent; 
            color: #fff; 
            font-weight: 600; 
            font-size: 14px;
            padding: 14px 32px; 
            border-radius: 8px; 
            text-decoration: none;
            border: 1.5px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
            font-family: 'DM Sans', sans-serif;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-secondary:hover {
            border-color: var(--gold);
            color: var(--gold);
            transform: translateY(-2px);
          }

          /* -------- responsive -------- */

          @media (max-width: 1024px) {
            .mf-shell { padding: 0 24px; }
            .hero { padding: 80px 24px 60px; }
            .hero h1 { font-size: 42px; }
            .story-grid, .team-grid { grid-template-columns: 1fr; gap: 36px; }
            .story-visual, .team-visual { height: 280px; }
            .principle-grid { grid-template-columns: 1fr 1fr; padding: 0 24px; }
            .force-grid { grid-template-columns: repeat(2, 1fr); }
            .offices .office-grid { grid-template-columns: repeat(2, 1fr); padding: 0 24px; }
            .faq-container { padding: 0 24px; }
            .cta-section-inner { padding: 0 24px; }
            .stat-row { gap: 28px; }
          }

          @media (max-width: 640px) {
            .mf-shell { padding: 0 16px; }
            .hero { padding: 60px 16px 40px; }
            .hero h1 { font-size: 32px; }
            .hero p { font-size: 15px; }
            .principle-grid { grid-template-columns: 1fr; padding: 0 16px; }
            .force-grid { grid-template-columns: 1fr 1fr; }
            .offices .office-grid { grid-template-columns: 1fr 1fr; gap: 12px; padding: 0 16px; }
            .office-card { padding: 16px; }
            .faq-container { padding: 0 16px; }
            .cta-section-inner { padding: 0 16px; }
            .cta-section h2 { font-size: 28px; }
            .story h2, .team-copy h2, .section-head h2 { font-size: 28px; }
            .stat-row { gap: 20px; flex-wrap: wrap; }
            .stat-num { font-size: 28px; }
            .story-visual, .team-visual { height: 220px; }
          }
        `}</style>

        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <div className="hero-bg-img"></div>
          <div className="hero-inner">
            <span className="hero-pill">✦ Full-Service Advertising Agency</span>
            <h1>About <span>Mind Frame</span> Global</h1>
            <p>
              Since 2009, we've helped brands get <strong>seen, remembered and chosen</strong> —
              blending strategy, craft and technology into advertising that earns its place on screen.
            </p>
            <div className="hero-scroll">
              <div className="hero-chevron">⌄</div>
              <div className="hero-dots"><span /><span /><span /></div>
            </div>
          </div>
        </section>

        <div className="mf-shell">
          <hr className="divider" />

          {/* ---------------- STORY ---------------- */}
          <Reveal>
            <section className="story">
              <FrameEyebrow icon={FaFlag} label="Our Story" />
              <div className="story-grid">
                <div>
                  <h2>From an Andheri Office to a <span>Global Advertising Partner</span></h2>
                  <p>
                    Mind Frame India was founded on 6th October 2009 by a panel of marketing evangelists,
                    brand strategists, creative writers and filmmakers. Since then, the team has created
                    advertising for major brands including Microsoft, HP and Dell — work built on
                    hard-won strategic experience from years of partnering with agencies and media
                    companies across the industry.
                  </p>
                  <p>
                    Today that founding panel has grown into a full production and design bench —
                    Creative & Communication Professionals, Art Directors, Business and Creative Heads,
                    Concept Designers, Copywriters, Content Creators, and Production Supervisors, all
                    working from one frame of reference to build memorable, sophisticated work for every client.
                  </p>

                  <div className="stat-row">
                    <div>
                      <div className="stat-num">17+</div>
                      <div className="stat-label">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="stat-num">4</div>
                      <div className="stat-label">Global Offices</div>
                    </div>
                    <div>
                      <div className="stat-num">500+</div>
                      <div className="stat-label">Projects Delivered</div>
                    </div>
                  </div>

                  <div className="chip-row">
                    {capabilities.map((c) => {
                      const Icon = c.icon;
                      return (
                        <span className="chip" key={c.name}>
                          <Icon size={12} />
                          {c.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="story-visual">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mind Frame India team collaboration"
                  />
                  <div className="story-visual-overlay"></div>
                  <span className="story-visual-badge">EST. 2009</span>
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        <hr className="divider" style={{ maxWidth: '1180px', margin: '0 auto' }} />

        {/* ---------------- PRINCIPLES - FULL WIDTH ---------------- */}
        <Reveal>
          <section className="principles-section">
            <div className="section-head">
              <FrameEyebrow icon={FaRegLightbulb} label="The Way We Work" />
              <h2>Built on <span>Principles</span></h2>
              <p>
                Our vision, mission and commitment, distilled into how we actually run every project.
              </p>
            </div>
            <div className="principle-grid">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div className="principle-card" key={p.title}>
                    <div className="principle-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        <div className="mf-shell">
          <hr className="divider" />

          {/* ---------------- TEAM ---------------- */}
          <Reveal>
            <section className="team">
              <div className="team-grid">
                <div className="team-copy">
                  <FrameEyebrow icon={FaUsers} label="The Collective" />
                  <h2>The Creative Directors <span>Behind Every Frame</span></h2>
                  <p>
                    Mind Frame India is led by a panel of Creative Directors — marketing evangelists,
                    brand strategists and filmmakers by profession, sourced from across the advertising
                    world to meet the demands of every brief.
                  </p>
                  <Link className="team-cta" href="/contact">
                    Work With Us
                    <FaArrowRight size={14} />
                  </Link>
                </div>
                <div className="team-visual">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Creative team at work"
                  />
                  <div className="team-visual-overlay"></div>
                  <span className="team-visual-label">MIND FRAME · CREATIVE STUDIO</span>
                </div>
              </div>

              <div className="force-label">Operational Force</div>
              <div className="force-grid">
                {operationalForce.map((role) => (
                  <div className="force-card" key={role}>
                    <div className="role">{role}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        <hr className="divider" style={{ maxWidth: '1180px', margin: '0 auto' }} />

        {/* ---------------- OFFICES - FULL WIDTH ---------------- */}
        <Reveal>
          <section className="offices">
            <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 48px' }}>
              <FrameEyebrow icon={FaMapMarkerAlt} label="Where We Work" />
            </div>
            <div className="office-grid">
              {offices.map((o) => {
                const Icon = o.icon;
                return (
                  <div className="office-card" key={o.city}>
                    <span className="office-icon">
                      <Icon size={28} />
                    </span>
                    <div className="office-city">{o.city}</div>
                    <div className="office-tag">{o.tag}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        <hr className="divider" style={{ maxWidth: '1180px', margin: '0 auto' }} />

        {/* ---------------- FAQ - FULL WIDTH ---------------- */}
        <Reveal>
          <section className="faq-section">
            <div className="section-head">
              <FrameEyebrow icon={FaRegCheckCircle} label="Common Questions" />
              <h2>Frequently <span>Asked Questions</span></h2>
              <p>
                Everything you need to know about our advertising and digital marketing services.
              </p>
            </div>
            <div className="faq-container">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
              ))}
            </div>
          </section>
        </Reveal>

        <hr className="divider" style={{ maxWidth: '1180px', margin: '0 auto' }} />

        {/* ---------------- CTA - FULL WIDTH ---------------- */}
        <Reveal>
          <section className="cta-section">
            <div className="cta-section-inner">
              <h2>Ready to put your brand <span>in the frame?</span></h2>
              <p>
                Tell us about your business, your market and your competitors — that's all we need
                to start building a campaign worth remembering.
              </p>
              <div className="cta-buttons">
                <Link className="btn-primary" href="/contact-us">
                  Start Your Project <FaArrowRight size={14} />
                </Link>
                <Link className="btn-secondary" href="/creative-communication-and-advertising-campaigns">
                  View Our Work <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'AboutPage',
                '@id': 'https://mindframeglobal.com/about-us#webpage',
                url: 'https://mindframeglobal.com/about-us',
                name: 'About Mindframe India - Our Mission, Vision & Expert Team',
                description:
                  'Learn about Mindframe India - our history, expertise, and full-service advertising & digital marketing capabilities in Mumbai and globally.',
                about: { '@id': 'https://mindframeglobal.com/#organization' },
              },
              {
                '@type': 'AdvertisingAgency',
                '@id': 'https://mindframeglobal.com/#organization',
                name: 'Mind Frame India',
                url: 'https://mindframeglobal.com',
                logo: 'https://mindframeglobal.com/assets/favicon.png',
                image: 'https://mindframeglobal.com/og-image.png',
                foundingDate: '2009-10-06',
                description:
                  'Mind Frame India is a full-service advertising, branding, and digital marketing agency established in 2009, with offices in Mumbai, Hyderabad, Dubai, and California.',
                telephone: '+91 9892000733',
                email: 'info@mindframeglobal.com',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '6th Floor Bhukanvala Chambers, B-22, Off Link Road, Veera Desai Rd, Andheri West',
                  addressLocality: 'Mumbai',
                  addressRegion: 'Maharashtra',
                  postalCode: '400053',
                  addressCountry: 'IN',
                },
                areaServed: [
                  { '@type': 'AdministrativeArea', name: 'Mumbai' },
                  { '@type': 'AdministrativeArea', name: 'Hyderabad' },
                  { '@type': 'Country', name: 'India' },
                  { '@type': 'Country', name: 'United Arab Emirates' },
                  { '@type': 'Country', name: 'United States' },
                ],
                knowsAbout: [
                  'Television Advertising',
                  'Digital Marketing',
                  'Branding',
                  'Media Buying',
                  'Media Planning',
                  'Creative Design',
                  'Augmented Reality',
                  'Virtual Reality',
                  '2D Animation',
                  '3D Animation',
                ],
                sameAs: [
                  'https://www.facebook.com/mindframeglobal',
                  'https://twitter.com/mindframeglobal',
                  'https://www.instagram.com/mindframeglobal',
                  'https://www.linkedin.com/company/mindframe-india',
                ],
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://mindframeglobal.com/about-us#faq',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}