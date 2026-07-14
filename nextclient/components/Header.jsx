'use client'

/**
 * Header Component — Responsive (Mindframe India)
 * Desktop: Left logo + CENTERED horizontal nav + separate mega-menus for Industries, Services, Service Areas + CTA button
 * Mobile: Logo (left) + hamburger (right) opens right sidebar with accordion nav
 */

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const gold = "#c9a84c";
const goldDark = "#b38f3d";
const ink = "#1a1a1a";

/* ---------------------------------------------------------
   Simple dependency-free line icons (no external icon lib)
--------------------------------------------------------- */
const ICON_PATHS = {
  tag: (
    <>
      <path d="M20.59 13.41 12 22 2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
      <circle cx="7" cy="7" r="1.4" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  tv: (
    <>
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  chart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  trending: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  cursor: (
    <>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  cube: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </>
  ),
  film: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
      <path d="M12 2.5a15 15 0 0 1 4 9.5 15 15 0 0 1-4 9.5 15 15 0 0 1-4-9.5 15 15 0 0 1 4-9.5z" />
    </>
  ),
  smartphone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="15" y2="22" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </>
  ),
  map: (
    <>
      <polygon points="3 11 9 7 15 11 21 7 21 18 15 22 9 18 3 22 3 11" />
      <line x1="9" y1="7" x2="9" y2="18" />
      <line x1="15" y1="11" x2="15" y2="22" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
};

function Icon({ name, size = 18, color = "currentColor", strokeWidth = 1.7 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {ICON_PATHS[name] || null}
    </svg>
  );
}

/* ---------------------------------------------------------
   INDUSTRIES MEGA MENU DATA
--------------------------------------------------------- */
const industriesData = [
  {
    category: "Healthcare",
    icon: "users",
    items: [
      { name: "Dental Marketing Agency Phoenix AZ | Mind Frame Global", path: "/dental-marketing-agency-phoenix", desc: "Specialized dental practice marketing", icon: "target" },
      { name: "Best Health Care Marketing Agency | Advertising Solutions", path: "/health-care-industry", desc: "Comprehensive healthcare advertising", icon: "users" },
    ],
  },
  {
    category: "Financial Services",
    icon: "chart",
    items: [
      { name: "Best Financial Services Marketing Agency in San Francisco", path: "/finance-industry", desc: "Banking & financial brand growth", icon: "chart" },
    ],
  },
  {
    category: "Food & Beverage",
    icon: "tag",
    items: [
      { name: "Top Restaurant Marketing Services | Fast Food Advertising", path: "/food-and-beverage-industry", desc: "Fast food & fine dining promotion", icon: "tag" },
    ],
  },
  {
    category: "Real Estate",
    icon: "building",
    items: [
      { name: "Top Real Estate Marketing Agency in San Francisco Bay Area", path: "/real-estate-industry", desc: "Property & development advertising", icon: "building" },
    ],
  },
  {
    category: "FMCG",
    icon: "layers",
    items: [
      { name: "Fast Moving Consumer Goods", path: "/fmcg-industry", desc: "Consumer product branding", icon: "layers" },
    ],
  },
  {
    category: "Startups & SMBs",
    icon: "trending",
    items: [
      { name: "Startups, SMBs, & Large Corporates Industry", path: "/small-businesses-industry", desc: "Scale-up & growth strategies", icon: "trending" },
    ],
  },
];

/* ---------------------------------------------------------
   SERVICES MEGA MENU DATA
--------------------------------------------------------- */
const servicesData = [
  {
    category: "Creative Solutions",
    icon: "pen",
    items: [
      { name: "Logo Designing", path: "/logo-designing-service", desc: "Professional brand identity design", icon: "tag" },
      { name: "UI/UX Designing", path: "/ui-ux-design-service", desc: "User-centric interface design", icon: "layers" },
      { name: "Creative Designing", path: "/graphic-design-services", desc: "Visual communication & design", icon: "pen" },
      { name: "2D/3D Animation", path: "/video-animation-services", desc: "Motion graphics & animation", icon: "film" },
      { name: "Corporate Films & TVCs", path: "/corporate-video-production-services", desc: "Professional video production", icon: "tv" },
      { name: "Print Ads", path: "/ads-print-services", desc: "Magazine & newspaper advertising", icon: "grid" },
    ],
  },
  {
    category: "Branding Solutions",
    icon: "star",
    items: [
      { name: "Brand Strategy", path: "/branding-strategy-services", desc: "Strategic brand positioning", icon: "trending" },
      { name: "Brand Identity", path: "/brand-identity-services", desc: "Complete brand identity development", icon: "star" },
      { name: "Brand Guidelines", path: "/brand-guideline-services", desc: "Comprehensive brand standards", icon: "grid" },
      { name: "Brand Architecture", path: "/brand-architecture-services", desc: "Brand portfolio structuring", icon: "layers" },
      { name: "Campaign Ideation", path: "/campaign-ideation-services", desc: "Creative campaign development", icon: "cursor" },
    ],
  },
  {
    category: "Performance Marketing",
    icon: "target",
    items: [
      { name: "Search Engine Marketing", path: "/search-engine-marketing-services", desc: "Paid search & PPC campaigns", icon: "chart" },
      { name: "Search Engine Optimization", path: "/search-engine-optimization-services", desc: "Organic search visibility", icon: "target" },
      { name: "Social Media Advertising", path: "/social-media-advertising-services", desc: "Social platform campaigns", icon: "users" },
      { name: "Email Marketing", path: "/email-marketing-services", desc: "Email automation & campaigns", icon: "cursor" },
      { name: "Content Marketing", path: "/content-marketing-services", desc: "Content-driven engagement", icon: "pen" },
    ],
  },
  {
    category: "IT Solutions",
    icon: "globe",
    items: [
      { name: "Website Development", path: "/web-development-services", desc: "Custom website design & development", icon: "globe" },
      { name: "Mobile App Development", path: "/mobile-app-development-services", desc: "iOS & Android app solutions", icon: "smartphone" },
      { name: "SaaS Development", path: "/software-as-a-service-saas", desc: "Software as a Service solutions", icon: "cube" },
      { name: "CRM Solutions", path: "/customer-relationship-management-crm", desc: "Customer relationship management", icon: "users" },
      { name: "Cloud Computing", path: "/cloud-computing-solutions", desc: "Cloud infrastructure & services", icon: "globe" },
      { name: "Cyber Security", path: "/cyber-security-services", desc: "Security & compliance solutions", icon: "target" },
      { name: "Database Management", path: "/database-management-and-mining", desc: "Data management & mining", icon: "chart" },
      { name: "Managed Services", path: "/managed-services", desc: "IT support & management", icon: "layers" },
    ],
  },
];

/* ---------------------------------------------------------
   SERVICE AREAS MEGA MENU DATA
--------------------------------------------------------- */
const serviceAreasData = [
  {
    category: "Arizona",
    icon: "map",
    items: [
      { name: "Marketing Agency in Phoenix", path: "/marketing-agency-in-phoenix", desc: "Phoenix marketing solutions", icon: "map" },
      { name: "Marketing Agency in Arizona", path: "/marketing-agency-in-arizona", desc: "Arizona advertising", icon: "building" },
      { name: "Marketing Agency in Tempe", path: "/marketing-agency-in-tempe", desc: "Tempe brand services", icon: "map" },
      { name: "Marketing Agency in Scottsdale", path: "/marketing-agency-in-scottsdale", desc: "Scottsdale advertising", icon: "map" },
    ],
  },
  {
    category: "California",
    icon: "globe",
    items: [
      { name: "Marketing Agency in Los Angeles", path: "/digital-marketing-agency-los-angeles", desc: "LA marketing solutions", icon: "globe" },
      { name: "Marketing Agency in San Francisco", path: "/digital-marketing-agency-silicon-valley", desc: "Bay Area brand services", icon: "globe" },
    ],
  },
  {
    category: "Other States",
    icon: "building",
    items: [
      { name: "Marketing Agency in Seattle", path: "/digital-marketing-agency-seattle", desc: "Seattle advertising solutions", icon: "building" },
      { name: "Marketing Agency in New York", path: "/digital-marketing-agency-new-york", desc: "NYC brand marketing", icon: "building" },
    ],
  },
];

/* ---------------------------------------------------------
   NAV LINKS
--------------------------------------------------------- */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Industries", to: "/industries", mega: "industries" },
  { label: "Services", to: "/services", mega: "services" },
  { label: "Service Areas", to: "/service-areas", mega: "serviceareas" },
  { label: "Our Work", to: "/our-work" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact-us" },
];

/* ---------------------------------------------------------
   CONTACT MODAL (Copy from Testimonials page)
--------------------------------------------------------- */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

// USA Flag SVG Component
const USAFlag = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 40"
    width={size}
    height={size * (2 / 3)}
    style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}
  >
    <rect width="60" height="40" fill="#B22234" />
    <rect y="4" width="60" height="4" fill="#FFFFFF" />
    <rect y="12" width="60" height="4" fill="#FFFFFF" />
    <rect y="20" width="60" height="4" fill="#FFFFFF" />
    <rect y="28" width="60" height="4" fill="#FFFFFF" />
    <rect y="36" width="60" height="4" fill="#FFFFFF" />
    <rect width="26" height="20" fill="#3C3B6E" />
    <circle cx="3" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="5.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="3" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="5.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="3" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="5.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="19.5" r="1.2" fill="#FFFFFF" />
  </svg>
);

const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().min(2, 'Name is too short').required('Name is required'),
  company: Yup.string().trim(),
  contactNumber: Yup.string()
    .matches(/^[0-9]{7,15}$/, 'Enter a valid contact number')
    .required('Contact number is required'),
  email: Yup.string().trim().email('Enter a valid email address').required('Email is required'),
  creativeSolution: Yup.string().required('Please select a service'),
  budgetRange: Yup.string(),
  comments: Yup.string().max(1000, 'Keep it under 1000 characters'),
  notRobot: Yup.boolean().oneOf([true], 'Please confirm you are not a robot'),
});

const initialValues = {
  name: '',
  company: '',
  countryCode: '+1',
  contactNumber: '',
  email: '',
  creativeSolution: 'Creative Solution',
  budgetRange: '',
  comments: '',
  notRobot: false,
};

const serviceOptions = [
  'Creative Solution',
  'Branding Solution',
  'Performance Solution',
  'IT Solution',
];

const budgetOptions = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000+',
];

const FieldError = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => (
      <div style={{ fontSize: 11, color: '#d33', marginTop: 4, textAlign: 'left' }}>{msg}</div>
    )}
  </ErrorMessage>
);

function ContactModal({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const inputStyle = {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #ddd',
    padding: '6px 2px',
    fontSize: 14,
    color: '#1a1a1a',
    background: 'transparent',
    outline: 'none',
    fontFamily: "'DM Sans', sans-serif",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  };

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isMobile ? 16 : 24,
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 520, // Reduced from 620
        maxHeight: '85vh', // Reduced from 92vh
        overflowY: 'auto',
        background: '#fff',
        border: `8px solid ${gold}`, // Reduced from 10px
        borderRadius: 4,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        padding: isMobile ? '28px 18px' : '32px 36px', // Reduced padding
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            color: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 16,
          }}
        >
          <FaTimes />
        </button>

        <h2 style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 24 : 28, // Reduced from 28/34
          fontWeight: 700,
          color: gold,
          margin: '0 0 12px', // Reduced margin
        }}>
          Get a Free Quote
        </h2>
        <hr style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '0 0 20px' }} /> {/* Reduced margin */}

        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await new Promise((resolve) => setTimeout(resolve, 800));
              console.log('Contact form submitted:', values);
              toast.success("Thanks! We'll get back to you shortly.");
              resetForm();
              onClose();
            } catch (err) {
              toast.error('Something went wrong. Please try again.');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                columnGap: 24, // Reduced from 32
                rowGap: 16, // Reduced from 22
              }}>
                <div>
                  <Field name="name" type="text" placeholder="Name" style={inputStyle} />
                  <FieldError name="name" />
                </div>

                <div>
                  <Field name="company" type="text" placeholder="Company/Organization" style={inputStyle} />
                  <FieldError name="company" />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #ddd' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, flex: '0 0 auto', padding: '6px 2px' }}>
                      <USAFlag size={20} />
                    </span>
                    <span style={{ color: '#ccc' }}>|</span>
                    <Field
                      name="contactNumber"
                      type="tel"
                      placeholder="Contact Number"
                      style={{ ...inputStyle, borderBottom: 'none' }}
                    />
                  </div>
                  <FieldError name="contactNumber" />
                </div>

                <div>
                  <Field name="email" type="email" placeholder="Email" style={inputStyle} />
                  <FieldError name="email" />
                </div>

                <div>
                  <div style={{ position: 'relative' }}>
                    <Field as="select" name="creativeSolution" style={{
                      ...selectStyle,
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </Field>
                    <FaChevronDown size={12} color="#888" style={{ position: 'absolute', right: 4, top: 10, pointerEvents: 'none' }} />
                  </div>
                  <FieldError name="creativeSolution" />
                </div>

                <div>
                  <div style={{ position: 'relative' }}>
                    <Field as="select" name="budgetRange" style={selectStyle}>
                      <option value="">Budget Range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </Field>
                    <FaChevronDown size={12} color="#888" style={{ position: 'absolute', right: 4, top: 10, pointerEvents: 'none' }} />
                  </div>
                  <FieldError name="budgetRange" />
                </div>

                <div style={{ gridColumn: isMobile ? 'auto' : '1 / -1' }}>
                  <Field
                    as="textarea"
                    name="comments"
                    placeholder="Additional Comments / Specific Requirements"
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 60 }}
                  />
                  <FieldError name="comments" />
                </div>
              </div>

              <div style={{ marginTop: 20 }}> {/* Reduced from 28 */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  border: '1px solid #d3d3d3',
                  borderRadius: 4,
                  padding: '10px 14px', // Reduced padding
                  background: '#f9f9f9',
                  cursor: 'pointer',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Field
                      type="checkbox"
                      name="notRobot"
                      style={{ width: 18, height: 18, accentColor: gold, cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: 13, color: '#1a1a1a' }}>I'm not a robot</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2">
                      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" strokeLinecap="round" />
                      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" strokeLinecap="round" />
                      <path d="M17 3v5h-5M7 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 8, color: '#999' }}>reCAPTCHA</span>
                  </span>
                </label>
                <FieldError name="notRobot" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: 18, // Reduced from 24
                  padding: '12px 0', // Reduced from 15px
                  background: '#1a1a1a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 14, // Reduced from 15
                  letterSpacing: 0.5,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'opacity 0.2s ease',
                }}
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);
  const [sidebarActiveCategory, setSidebarActiveCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRefs = useRef({});
  const closeTimeoutRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setSidebarOpen(false);
    setActiveMega(null);
    setSidebarServicesOpen(false);
    setSidebarActiveCategory(null);
  }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      const refs = Object.values(dropdownRefs.current).filter(Boolean);
      const clickedInsideAny = refs.some((node) => node.contains(e.target));
      if (!clickedInsideAny) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterMega = (type) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMega(type);
  };
  const handleMouseLeaveMega = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  };

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  // Check if any service page is active (for highlighting Services nav link)
  const isServicePageActive = () => {
    const servicePaths = [
      '/web-development-services',
      '/mobile-app-development-services',
      '/software-as-a-service-saas',
      '/customer-relationship-management-crm',
      '/cloud-computing-solutions',
      '/cyber-security-services',
      '/database-management-and-mining',
      '/managed-services',
      '/logo-designing-service',
      '/ui-ux-design-service',
      '/graphic-design-services',
      '/video-animation-services',
      '/corporate-video-production-services',
      '/ads-print-services',
      '/branding-strategy-services',
      '/brand-identity-services',
      '/brand-guideline-services',
      '/brand-architecture-services',
      '/campaign-ideation-services',
      '/search-engine-marketing-services',
      '/search-engine-optimization-services',
      '/social-media-advertising-services',
      '/email-marketing-services',
      '/content-marketing-services',
    ];
    return servicePaths.some(path => pathname === path || pathname.startsWith(path + '/'));
  };

  const linkStyle = (to) => ({
    fontSize: 14,
    color: isActive(to) ? gold : ink,
    textDecoration: "none",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: 5,
    paddingBottom: 4,
    borderBottom: isActive(to) ? `2px solid ${gold}` : "2px solid transparent",
    fontWeight: isActive(to) ? 600 : 500,
    fontFamily: "Georgia, serif",
    transition: "all 0.2s ease",
    cursor: "pointer",
  });

  const bar = (extra) => ({
    display: "block", width: 22, height: 2,
    background: sidebarOpen ? gold : "#333",
    borderRadius: 2,
    transition: "all 0.3s ease",
    ...extra,
  });

  // Helper to render mega menu content based on type
  const renderMegaMenu = (type) => {
    let data = [];
    let title = "";
    
    if (type === "industries") {
      data = industriesData;
      title = "Industries We Serve";
    } else if (type === "services") {
      data = servicesData;
      title = "Our Services";
    } else if (type === "serviceareas") {
      data = serviceAreasData;
      title = "Service Areas";
    }
    
    return (
      <div style={{
        position: "fixed", left: 0, right: 0, top: 76,
        background: "#fff", borderTop: `3px solid ${gold}`,
        boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
        zIndex: 100,
        opacity: activeMega === type ? 1 : 0,
        visibility: activeMega === type ? "visible" : "hidden",
        transform: activeMega === type ? "translateY(0)" : "translateY(-8px)",
        transition: "all 0.22s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: activeMega === type ? "auto" : "none",
      }}>
        <div style={{
          maxWidth: 1320, margin: "0 auto", padding: "32px 40px 36px",
          display: "grid", 
          gridTemplateColumns: `repeat(${Math.min(data.length, 4)}, 1fr)`, 
          gap: 32,
        }}>
          {data.map((col) => (
            <div key={col.category}>
              <div style={{ fontSize: 11.5, letterSpacing: 1.2, textTransform: "uppercase", color: gold, fontWeight: 700, marginBottom: 14, fontFamily: "Georgia, serif", display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name={col.icon} size={14} color={gold} strokeWidth={2} />
                {col.category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {col.items.map((item) => (
                  <Link key={item.path} href={item.path}
                    onClick={() => setActiveMega(null)}
                    className="mf-mega-item"
                    style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "9px 8px", borderRadius: 8, textDecoration: "none" }}
                  >
                    <span className="mf-mega-icon" style={{ width: 32, height: 32, borderRadius: 8, background: "#f3ecd8", color: gold, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={item.icon} size={16} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: ink, fontFamily: "Georgia, serif", lineHeight: 1.3 }}>{item.name}</span>
                      <span style={{ display: "block", fontSize: 11.5, color: "#888", fontFamily: "Georgia, serif", marginTop: 1 }}>{item.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Get mega data for sidebar
  const getMegaDataForSidebar = (type) => {
    if (type === "industries") return industriesData;
    if (type === "services") return servicesData;
    if (type === "serviceareas") return serviceAreasData;
    return [];
  };

  return (
    <>
      <style>{`
        .mf-desktop-nav {
          display: flex;
          flex: 1;
          justify-content: center;
        }
        .mf-cta-label { display: inline; }
        .mf-hamburger { display: none; }
        .mf-cta-btn {
          display: inline-flex !important;
        }

        @media (max-width: 1100px) {
          .mf-desktop-nav { display: none !important; }
          .mf-hamburger { display: flex !important; }
          .mf-cta-btn {
            display: none !important;
          }
        }
        .mf-logo {
          height: 52px; width: auto; max-width: 180px;
          object-fit: contain; display: block;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .mf-logo:hover { transform: scale(1.03); opacity: 0.9; }
        .mf-sidebar-scroll::-webkit-scrollbar { width: 4px; }
        .mf-sidebar-scroll::-webkit-scrollbar-track { background: #f5f5f5; }
        .mf-sidebar-scroll::-webkit-scrollbar-thumb { background: ${gold}; border-radius: 4px; }
        .mf-mega-item { transition: background 0.18s ease, transform 0.18s ease; }
        .mf-mega-item:hover { background: #faf7ef; }
        .mf-mega-item:hover .mf-mega-icon { background: ${gold}; color: #fff; }
        .mf-mega-icon { transition: all 0.18s ease; }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{ background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100, fontFamily: "Georgia, serif", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <nav style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, gap: 24 }}>

          {/* Logo - Left side */}
          <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <img src="/assets/logo-MFG.png" alt="Mindframe Global Logo" className="mf-logo" />
            </Link>
          </div>

          {/* Desktop Nav — centered */}
          <div className="mf-desktop-nav" style={{ alignItems: "center", gap: 26 }}>
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.to} style={{ position: "relative" }} 
                  ref={(el) => { dropdownRefs.current[link.mega] = el; }}
                  onMouseEnter={() => handleMouseEnterMega(link.mega)} 
                  onMouseLeave={handleMouseLeaveMega}
                >
                  <span
                    style={{
                      ...linkStyle(link.to),
                      color: (link.mega === "services" && isServicePageActive()) ? gold : linkStyle(link.to).color,
                      borderBottom: (link.mega === "services" && isServicePageActive()) ? `2px solid ${gold}` : linkStyle(link.to).borderBottom,
                      fontWeight: (link.mega === "services" && isServicePageActive()) ? 600 : linkStyle(link.to).fontWeight,
                    }}
                    onClick={() => setActiveMega(activeMega === link.mega ? null : link.mega)}
                  >
                    {link.label}
                    <span style={{ color: activeMega === link.mega ? gold : "#999", transition: "transform 0.2s ease", transform: activeMega === link.mega ? "rotate(180deg)" : "none", display: "inline-flex" }}>
                      <Icon name="chevronDown" size={13} strokeWidth={2.2} />
                    </span>
                  </span>

                  {/* Mega Menu Panel */}
                  {renderMegaMenu(link.mega)}
                </div>
              ) : (
                <Link key={link.to} href={link.to} style={linkStyle(link.to)}
                  onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = gold; e.currentTarget.style.color = gold; }}
                  onMouseOut={(e) => { if (!isActive(link.to)) { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.color = ink; } }}
                >{link.label}</Link>
              )
            )}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            {/* CTA Button - opens modal */}
            <button
              className="mf-cta-btn"
              onClick={() => setModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 22px",
                background: gold,
                color: "#fff",
                borderRadius: 999,
                border: "none",
                textDecoration: "none",
                fontSize: 13.5,
                fontWeight: 600,
                fontFamily: "Georgia, serif",
                whiteSpace: "nowrap",
                boxShadow: "0 6px 16px rgba(201,168,76,0.35)",
                transition: "background 0.2s ease, transform 0.2s ease",
                flexShrink: 0,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = goldDark;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = gold;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="mf-cta-label">Get a Free Quote</span>
              <Icon name="arrowRight" size={15} strokeWidth={2.2} color="#fff" />
            </button>

            {/* Hamburger — mobile/tablet only */}
            <button
              className="mf-hamburger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 4px", flexDirection: "column", gap: 5, justifyContent: "center", flexShrink: 0 }}
            >
              <span style={bar({ transform: sidebarOpen ? "rotate(45deg) translateY(7px)" : "none" })} />
              <span style={bar({ opacity: sidebarOpen ? 0 : 1, transform: sidebarOpen ? "scaleX(0)" : "none" })} />
              <span style={bar({ transform: sidebarOpen ? "rotate(-45deg) translateY(-7px)" : "none" })} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── BACKDROP ── */}
      <div
        onClick={() => setSidebarOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 149,
          background: "rgba(10,8,5,0.5)",
          opacity: sidebarOpen ? 1 : 0,
          visibility: sidebarOpen ? "visible" : "hidden",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
        }}
      />

      {/* ── RIGHT SIDEBAR ── */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: 340, maxWidth: "90vw",
        background: "#fff",
        zIndex: 150,
        transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
        display: "flex", flexDirection: "column",
      }}>

        {/* Sidebar top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 72, borderBottom: `2px solid ${gold}`, flexShrink: 0, background: "#fff" }}>
          <Link href="/" onClick={() => setSidebarOpen(false)} style={{ textDecoration: "none" }}>
            <img src="/assets/logo2.png" alt="Mindframe India" style={{ height: 44, width: "auto", objectFit: "contain" }} />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close"
            style={{ background: "none", border: `1px solid #e0e0e0`, borderRadius: "50%", width: 34, height: 34, cursor: "pointer", color: "#555", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = gold; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#e0e0e0"; }}
          >
            <Icon name="close" size={15} strokeWidth={2} />
          </button>
        </div>

        {/* Nav links */}
        <div className="mf-sidebar-scroll" style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          <nav style={{ paddingBottom: 16 }}>
            {navLinks.map((link) => {
              if (link.mega) {
                const megaData = getMegaDataForSidebar(link.mega);
                return (
                  <div key={link.to}>
                    <button
                      onClick={() => setSidebarServicesOpen(!sidebarServicesOpen)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 28px", background: "none", border: "none", borderBottom: "1px solid #f0f0f0", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 14.5, color: ink, fontWeight: 500, textAlign: "left", transition: "color 0.2s" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = gold}
                      onMouseLeave={(e) => e.currentTarget.style.color = ink}
                    >
                      {link.label}
                      <span style={{ color: "#aaa", transform: sidebarServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s ease", display: "inline-flex" }}>
                        <Icon name="chevronDown" size={13} strokeWidth={2.2} />
                      </span>
                    </button>

                    <div style={{ maxHeight: sidebarServicesOpen ? "3000px" : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", background: "#fafaf8" }}>
                      {megaData.map((col) => {
                        const isOpen = sidebarActiveCategory === col.category;
                        return (
                          <div key={col.category}>
                            <button
                              onClick={() => setSidebarActiveCategory(isOpen ? null : col.category)}
                              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 28px 11px 36px", background: "none", border: "none", borderBottom: "1px solid #ebebeb", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 13, color: "#444", textAlign: "left", fontWeight: 600, transition: "color 0.2s" }}
                              onMouseEnter={(e) => e.currentTarget.style.color = gold}
                              onMouseLeave={(e) => e.currentTarget.style.color = "#444"}
                            >
                              <Icon name={col.icon} size={15} color={gold} strokeWidth={1.8} />
                              <span style={{ flex: 1 }}>{col.category}</span>
                              <span style={{ color: "#bbb", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}>
                                <Icon name="chevronRight" size={13} strokeWidth={2.2} />
                              </span>
                            </button>
                            <div style={{ maxHeight: isOpen ? "800px" : 0, overflow: "hidden", transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)", background: "#f5f4f1" }}>
                              {col.items.map((item) => (
                                <Link key={item.path} href={item.path}
                                  onClick={() => setSidebarOpen(false)}
                                  style={{ display: "block", padding: "10px 28px 10px 52px", fontSize: 12.5, color: "#666", textDecoration: "none", borderBottom: "1px solid #ebebeb", fontFamily: "Georgia, serif", transition: "all 0.2s" }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.background = "#eeede9"; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; e.currentTarget.style.background = "transparent"; }}
                                >— {item.name}</Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.to} href={link.to}
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    display: "block", padding: "15px 28px", fontSize: 14.5,
                    textDecoration: "none",
                    color: isActive(link.to) ? gold : ink,
                    fontWeight: isActive(link.to) ? 600 : 400,
                    fontFamily: "Georgia, serif",
                    borderBottom: "1px solid #f0f0f0",
                    borderLeft: isActive(link.to) ? `3px solid ${gold}` : "3px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { if (!isActive(link.to)) { e.currentTarget.style.color = gold; e.currentTarget.style.background = "#fafaf8"; } }}
                  onMouseLeave={(e) => { if (!isActive(link.to)) { e.currentTarget.style.color = ink; e.currentTarget.style.background = "transparent"; } }}
                >{link.label}</Link>
              );
            })}
          </nav>

          {/* Contact block */}
          <div style={{ padding: "20px 28px 28px", borderTop: "1px solid #f0f0f0" }}>
            <p style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: gold, fontFamily: "Georgia, serif", margin: "0 0 12px", fontWeight: 700 }}>Get In Touch</p>
            <p style={{ fontSize: 13, color: "#444", margin: "0 0 3px", fontFamily: "Georgia, serif" }}>
              Contact No.: +1 (925) 205 8356   / 909 910 6650</p>
            <p style={{ fontSize: 13, color: "#444", margin: "0 0 18px", fontFamily: "Georgia, serif" }}>info@mindframeglobal.com</p>
            <button
              onClick={() => {
                setSidebarOpen(false);
                setModalOpen(true);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 22px",
                background: gold,
                color: "#fff",
                fontSize: 12.5,
                fontFamily: "Georgia, serif",
                border: "none",
                borderRadius: 999,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = goldDark}
              onMouseLeave={(e) => e.currentTarget.style.background = gold}
            >
              Contact Us <Icon name="arrowRight" size={14} strokeWidth={2.2} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* ── CONTACT MODAL ── */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}