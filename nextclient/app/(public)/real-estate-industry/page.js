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
  Palette,
  Brush,
  Sparkle,
  Crown,
  Gem,
  Compass,
  Lightbulb,
  Flag,
  Trophy,
  Medal,
  CircleDot,
  Hexagon,
  Diamond,
  Shapes,
  Star as StarIcon,
  BadgeCheck,
  UserCheck,
  UsersRound,
  ThumbsUp as ThumbsUpIcon,
  HeartHandshake,
  Handshake,
  Lightbulb as LightbulbIcon,
  Compass as CompassIcon,
  Flag as FlagIcon,
  Crown as CrownIcon,
  Paintbrush,
  Pencil,
  Square,
  Circle,
  Triangle,
  Hexagon as HexagonIcon,
  Octagon,
  RectangleHorizontal,
  Type,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Figma,
  Layers as LayersIcon,
  Book,
  BookMarked,
  BookOpen as BookOpenIcon,
  FileText as FileTextIcon,
  FileCheck as FileCheckIcon,
  Clipboard,
  ClipboardList,
  ListChecks,
  FileCode,
  FileImage as FileImageIcon,
  FileVideo as FileVideoIcon,
  FileAudio,
  FileJson,
  FileSpreadsheet,
  FileX,
  FilePlus,
  FileMinus,
  FileSearch,
  FileSignature,
  FileSliders,
  Files,
  FolderOpen,
  FolderTree,
  Boxes,
  PanelTop,
  PanelBottom,
  PanelRight,
  PanelLeft,
  Columns,
  Rows,
  Grid2x2,
  Grid3x3,
  Grid,
  Table,
  Table2,
  TableProperties,
  TableOfContents,
  BookCopy,
  BookHeadphones,
  BookKey,
  BookLock,
  BookMarked as BookMarkedIcon,
  BookOpenCheck,
  BookPlus,
  BookText,
  BookType,
  BookUser,
  BookX,
  GitBranch,
  GitMerge,
  GitPullRequest,
  GitCommit,
  Network,
  Share,
  GitFork,
  TreePine,
  TreeDeciduous,
  ForkKnife,
  Forklift,
  Code2,
  Box,
  Package,
  Package2,
  PackageCheck,
  PackageOpen,
  PackageX,
  Combine,
  Split,
  Merge,
  Workflow,
  Waypoints,
  Link as LinkIcon,
  Link2Off,
  Scissors,
  Copy,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  ClipboardCopy,
  ClipboardEdit,
  ClipboardSignature,
  ClipboardType,
  ClipboardX,
  ClipboardCheck,
  ClipboardPaste,
  LightbulbOff,
  Sparkles as SparklesIcon,
  PartyPopper,
  Celebration,
  Fireworks,
  Rocket as RocketIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  Users as UsersIcon,
  BarChart,
  TrendingUp as TrendingUpIcon,
  PenTool as PenToolIcon,
  Layout as LayoutIcon,
  Filter as FilterIcon,
  Search as SearchIcon,
  Code as CodeIcon,
  Share2 as Share2Icon,
  MessageCircle as MessageCircleIcon,
  ThumbsUp as ThumbsUpIcon2,
  Video as VideoIcon,
  Image as ImageIcon,
  Mail as MailIcon,
  Send as SendIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Tablet as TabletIcon,
  Tv as TvIcon,
  Radio as RadioIcon,
  Megaphone as MegaphoneIcon,
  Eye as EyeIcon,
  MousePointer as MousePointerIcon,
  PieChart as PieChartIcon,
  Award as AwardIcon,
  Star as StarIcon2,
  Sparkle as SparkleIcon,
  Gem as GemIcon,
  Crown as CrownIcon2,
  Trophy as TrophyIcon,
  Medal as MedalIcon,
  BadgeCheck as BadgeCheckIcon,
  UserCheck as UserCheckIcon,
  UsersRound as UsersRoundIcon,
  HeartHandshake as HeartHandshakeIcon,
  Handshake as HandshakeIcon,
  Compass as CompassIcon2,
  Flag as FlagIcon2,
  Lightbulb as LightbulbIcon2,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  Pencil as PencilIcon,
  Paintbrush as PaintbrushIcon,
  Type as TypeIcon,
  AlignCenter as AlignCenterIcon,
  AlignLeft as AlignLeftIcon,
  AlignRight as AlignRightIcon,
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Figma as FigmaIcon,
  Layers as LayersIcon2,
  Book as BookIcon,
  BookMarked as BookMarkedIcon2,
  BookOpen as BookOpenIcon2,
  FileText as FileTextIcon2,
  FileCheck as FileCheckIcon2,
  Clipboard as ClipboardIcon,
  ClipboardList as ClipboardListIcon,
  ListChecks as ListChecksIcon,
  FileCode as FileCodeIcon,
  FileImage as FileImageIcon2,
  FileVideo as FileVideoIcon2,
  FileAudio as FileAudioIcon,
  FileJson as FileJsonIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileX as FileXIcon,
  FilePlus as FilePlusIcon,
  FileMinus as FileMinusIcon,
  FileSearch as FileSearchIcon,
  FileSignature as FileSignatureIcon,
  FileSliders as FileSlidersIcon,
  Files as FilesIcon,
  FolderOpen as FolderOpenIcon,
  FolderTree as FolderTreeIcon,
  Boxes as BoxesIcon,
  PanelTop as PanelTopIcon,
  PanelBottom as PanelBottomIcon,
  PanelRight as PanelRightIcon,
  PanelLeft as PanelLeftIcon,
  Columns as ColumnsIcon,
  Rows as RowsIcon,
  Grid2x2 as Grid2x2Icon,
  Grid3x3 as Grid3x3Icon,
  Grid as GridIcon,
  Table as TableIcon,
  Table2 as Table2Icon,
  TableProperties as TablePropertiesIcon,
  TableOfContents as TableOfContentsIcon,
  Home,
  Building,
  Building2,
  Construction,
  HardHat,
  Warehouse,
  LandPlot,
  Trees,
  Mountain,
  Waves,
  Sun,
  CloudSun,
  Compass as CompassIcon3,
  Map,
  MapPin as MapPinIcon,
  Locate,
  Navigation,
  Bed,
  Bath,
  Car,
  PawPrint,
  Wifi,
  Utensils,
  Coffee,
  Dumbbell,
  Pool,
  Trees as TreesIcon,
  Mountain as MountainIcon,
  Sun as SunIcon,
  CloudSun as CloudSunIcon,
} from 'lucide-react';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#dcc28a';

// ── Services Data ──
const services = [
  {
    id: 1,
    icon: Search,
    title: "Real Estate SEO",
    desc: "Optimize your real estate website to rank for high-intent local searches like 'homes for sale,' 'real estate agent,' and 'property listings' in your target markets.",
    color: "#4f46e5"
  },
  {
    id: 2,
    icon: MapPin,
    title: "Local SEO for Realtors",
    desc: "Dominate local search results with optimized Google Business Profiles, local citations, and neighborhood-specific content that attracts qualified leads.",
    color: "#7c3aed"
  },
  {
    id: 3,
    icon: PenTool,
    title: "Content Marketing",
    desc: "Create engaging property listings, neighborhood guides, market reports, and blog content that positions you as a local real estate authority.",
    color: "#dc2626"
  },
  {
    id: 4,
    icon: Layout,
    title: "Real Estate Website Design",
    desc: "Professional, mobile-optimized websites with IDX integration, property search, and listing management designed to convert visitors into leads.",
    color: "#059669"
  },
  {
    id: 5,
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Engage potential buyers and sellers with property showcases, virtual tours, and neighborhood content on Instagram, Facebook, and LinkedIn.",
    color: "#4f46e5"
  },
  {
    id: 6,
    icon: Target,
    title: "Google Ads for Real Estate",
    desc: "Targeted PPC campaigns that connect you with buyers and sellers actively searching for properties and real estate services in your area.",
    color: "#7c3aed"
  },
];

// ── How We Work Data ──
const workSteps = [
  {
    number: "01",
    title: "Market Research",
    desc: "We analyze your local real estate market, target audience, and competitive landscape to develop a winning marketing strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy Development",
    desc: "We create a comprehensive real estate marketing plan that combines SEO, content, social media, and advertising for maximum impact.",
    icon: Target,
  },
  {
    number: "03",
    title: "Execution & Optimization",
    desc: "We implement your marketing strategy, monitor performance, and continuously optimize to ensure you're getting the best results possible.",
    icon: TrendingUp,
  },
];

// ── Why Choose Data ──
const whyChoose = [
  {
    title: "Real Estate Expertise",
    desc: "With deep knowledge of the real estate industry and local market dynamics, Mind Frame Global brings unparalleled expertise to every real estate marketing project.",
    icon: Home,
    color: "#4f46e5"
  },
  {
    title: "Creative Excellence",
    desc: "Mind Frame Global is renowned for its creative excellence, consistently delivering innovative and impactful advertising campaigns for real estate professionals.",
    icon: Sparkles,
    color: "#7c3aed"
  },
  {
    title: "Strategic Approach",
    desc: "At Mind Frame Global, we take a strategic approach to real estate marketing, leveraging data and insights to inform our decisions and drive success for our clients.",
    icon: Target,
    color: "#dc2626"
  },
  {
    title: "Client-Centric Focus",
    desc: "Mind Frame Global prioritizes client satisfaction above all else, fostering strong relationships built on trust, transparency, and open communication.",
    icon: Heart,
    color: "#059669"
  },
];

// ── Core Values Data ──
const coreValues = [
  {
    icon: Building,
    title: "Comprehensive Services",
    desc: "We offer a wide range of real estate marketing services including SEO, website design, social media management, content marketing, and advertising tailored to the real estate industry.",
    color: "#4f46e5"
  },
  {
    icon: Compass,
    title: "Local Market Expertise",
    desc: "Our real estate marketing solutions leverage deep knowledge of local markets, neighborhoods, and buyer behavior to connect you with qualified leads in your target areas.",
    color: "#dc2626"
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    desc: "We forge strategic partnerships with our real estate clients, guiding them through every stage of their marketing journey with expertise, integrity, and a commitment to excellence.",
    color: "#059669"
  },
];

// ── FAQ Data ──
const faqs = [
  {
    question: "What real estate marketing services do you offer?",
    answer: "We offer comprehensive real estate marketing services including SEO, local SEO for realtors, content marketing, real estate website design, social media marketing, Google Ads, and property listing optimization."
  },
  {
    question: "How do you help real estate agents get more leads?",
    answer: "We help real estate agents get more leads by optimizing their online presence, ranking them on Google for high-intent searches, creating engaging property content, and running targeted advertising campaigns that attract qualified buyers and sellers."
  },
  {
    question: "What makes your real estate marketing agency different?",
    answer: "We combine deep real estate industry expertise with creative excellence and a strategic, data-driven approach. Our understanding of local markets and buyer behavior sets us apart from general marketing agencies."
  },
  {
    question: "Do you serve real estate professionals across California?",
    answer: "Yes! While we are based in the San Francisco Bay Area, we serve real estate agents, brokers, property developers, and real estate firms across California and beyond."
  },
  {
    question: "How do you measure success in real estate marketing?",
    answer: "We track key metrics including lead generation, website traffic, property listing views, conversion rates, SEO rankings, engagement rates, and ROI. We provide comprehensive monthly reports to demonstrate the impact of our campaigns."
  },
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
export default function RealEstateIndustry() {
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
        title="Real Estate Marketing Agency | Mind Frame Global"
        description="Grow your real estate business with specialized marketing services. SEO, website design, social media, and advertising for real estate professionals."
        keywords="real estate marketing, real estate SEO, real estate agent marketing, property marketing, real estate advertising"
        path="/real-estate-industry"
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
        
        .value-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .value-card:hover {
          transform: translateY(-6px);
          border-color: ${gold};
          box-shadow: 0 12px 40px rgba(201,168,76,0.12);
        }
        
        .choose-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .choose-card:hover {
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
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
                REAL ESTATE MARKETING EXPERTS
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
              Real Estate <br />
              <span className="gradient-text">Marketing Agency</span>
            </h1>
            
            <p className="fade-in delay-3" style={{
              fontSize: isMobile ? 16 : 18,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 680,
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}>
              Sell more properties and build your brand with specialized real estate marketing. From SEO and website design to social media and advertising, we help real estate professionals connect with qualified buyers and sellers.
            </p>
            
            <div className="fade-in delay-4" style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link href="#contact" style={{
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
                Get Free Real Estate Marketing Audit
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
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>75+</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Real Estate Clients</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>10+</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Years of Expertise</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, color: gold }}>4.9★</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== CORE VALUES ============== */}
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
                OUR VALUES
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Building <span style={{ color: gold }}>Real Estate Success</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 24,
            }}>
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="value-card" style={{
                    background: '#faf8f5',
                    borderRadius: 16,
                    padding: isMobile ? '28px 20px' : '36px 28px',
                    textAlign: 'center',
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
                      background: `radial-gradient(circle, ${value.color}08 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: `rgba(201,168,76,0.08)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}>
                      <Icon size={26} color={gold} strokeWidth={2} />
                    </div>
                    <h3 style={{
                      fontSize: isMobile ? 18 : 20,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      fontFamily: "'Cormorant Garamond', serif",
                      margin: '0 0 8px',
                    }}>
                      {value.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? 13 : 14,
                      color: '#666',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== HOW WE WORK ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#faf8f5',
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
                HOW WE WORK
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Our <span style={{ color: gold }}>Real Estate Marketing Approach</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 24,
            }}>
              {workSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="step-card" style={{
                    background: '#fff',
                    borderRadius: 16,
                    padding: isMobile ? '28px 20px' : '36px 28px',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <div style={{
                      fontSize: isMobile ? 32 : 40,
                      fontWeight: 700,
                      color: gold,
                      fontFamily: "'Cormorant Garamond', serif",
                      marginBottom: 8,
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
                      <Icon size={22} color={gold} strokeWidth={2} />
                    </div>
                    <h3 style={{
                      fontSize: isMobile ? 17 : 19,
                      fontWeight: 700,
                      color: '#1a1a1a',
                      fontFamily: "'Cormorant Garamond', serif",
                      margin: '0 0 8px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? 13 : 14,
                      color: '#666',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== WHY CHOOSE US ============== */}
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
                WHY CHOOSE US
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Why Choose Mind Frame as Your <span style={{ color: gold }}>Real Estate Marketing Agency?</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 20,
            }}>
              {whyChoose.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="choose-card" style={{
                    background: '#faf8f5',
                    borderRadius: 16,
                    padding: isMobile ? '24px 20px' : '32px 28px',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 12,
                    }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `rgba(201,168,76,0.08)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={20} color={gold} strokeWidth={2} />
                      </div>
                      <h3 style={{
                        fontSize: isMobile ? 16 : 18,
                        fontWeight: 700,
                        color: '#1a1a1a',
                        fontFamily: "'Cormorant Garamond', serif",
                        margin: 0,
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{
                      fontSize: isMobile ? 13 : 14,
                      color: '#666',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============== OUR SERVICES ============== */}
        <section id="services" style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#faf8f5',
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
                WHAT WE DELIVER
              </div>
              <h2 style={{
                fontSize: isMobile ? 'clamp(28px, 6vw, 38px)' : 'clamp(34px, 3.5vw, 42px)',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Comprehensive <span style={{ color: gold }}>Real Estate Services</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
                maxWidth: 600,
                margin: '0 auto',
              }}>
                Strategic marketing solutions designed to help real estate professionals sell more properties and build lasting brands
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
                    background: '#fff',
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

        {/* ============== FAQ SECTION ============== */}
        <section style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: '#fff',
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
                Real Estate Marketing <span style={{ color: gold }}>FAQ</span>
              </h2>
              <p style={{
                fontSize: isMobile ? 14 : 16,
                color: '#6b5f53',
              }}>
                Everything you need to know about real estate marketing
              </p>
              <div style={{ width: 50, height: 2, background: gold, margin: '12px auto 0' }} />
            </div>

            <div style={{
              background: '#faf8f5',
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

        {/* ============== CTA SECTION ============== */}
        <section id="contact" style={{
          padding: isMobile ? '50px 20px' : '80px 48px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
              HAVE A PROJECT? LET US HELP.
            </div>
            <h2 style={{
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(34px, 3.5vw, 42px)',
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}>
              Sell More Properties with Expert Real Estate Marketing
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 16,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 32,
              lineHeight: 1.7,
            }}>
              Get a professionally optimized real estate marketing strategy that attracts qualified buyers and sellers. Let MFG create a tailored strategy to fuel your success.
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
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link href="#services" style={{
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
                View Our Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}