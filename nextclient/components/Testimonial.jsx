'use client'

/**
 * Testimonials Page — Professional Redesign
 * Features: Hero section, animated auto-sliding client/non-profit/more-brands logo carousels,
 * video testimonials carousel with reviews side by side (fixed-size, animated on navigation), "Get in Touch" modal
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import {
  FaStar,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaRegBuilding,
  FaTimes,
  FaChevronDown,
  FaPlay,
  FaCheckCircle,
  FaVideo,
  FaComment,
} from 'react-icons/fa';

//our client
const client1 = '/assets/client-logo/client1.png';
const client2 = '/assets/client-logo/client2.png';
const client3 = '/assets/client-logo/client3.png';
const client4 = '/assets/client-logo/client4.png';
const client5 = '/assets/client-logo/client5.png';
const client6 = '/assets/client-logo/client6.png';
const client7 = '/assets/client-logo/client7.png';
const client8 = '/assets/client-logo/client8.png';
const client9 = '/assets/client-logo/client9.png';
const client10 = '/assets/client-logo/client10.png';
const client11 = '/assets/client-logo/client11.png';
const client12 = '/assets/client-logo/client12.png';
const client13 = '/assets/client-logo/client13.png';
const client14 = '/assets/client-logo/client14.png';
const client15 = '/assets/client-logo/client15.png';
const client16 = '/assets/client-logo/client16.png';
const client17 = '/assets/client-logo/client17.png';
const client18 = '/assets/client-logo/client18.png';
const client19 = '/assets/client-logo/client19.png';
const client20 = '/assets/client-logo/client20.png';
const client21 = '/assets/client-logo/client21.png';
const client22 = '/assets/client-logo/client22.png';
const client23 = '/assets/client-logo/client23.png';
const client24 = '/assets/client-logo/client24.png';
const client25 = '/assets/client-logo/client25.png';
const client26 = '/assets/client-logo/client26.png';
const client27 = '/assets/client-logo/client27.png';
const client28 = '/assets/client-logo/client28.png';
const client29 = '/assets/client-logo/client29.png';

// Non profit
const non1 = '/assets/client-logo/non1.png';
const non2 = '/assets/client-logo/non2.png';
const non3 = '/assets/client-logo/non3.png';
const non4 = '/assets/client-logo/non4.png';

// More brand
const more1 = '/assets/client-logo/more1.png';
const more2 = '/assets/client-logo/more2.png';
const more3 = '/assets/client-logo/more3.png';
const more5 = '/assets/client-logo/more5.png';
const more6 = '/assets/client-logo/more6.png';
const more7 = '/assets/client-logo/more7.png';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#f5f0e8';
const goldLikeBorder = '#c3a06f';

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

// Logo data
const logos = [
  { name: 'New India Assurance', image: client1 },
  { name: 'InFocus', image: client2 },
  { name: 'Pratimoksha', image: client3 },
  { name: 'Leadership Mavericks', image: client4 },
  { name: 'Lilavati Hospital', image: client5 },
  { name: 'Supreme Furniture', image: client6 },
  { name: 'Mindframe India', image: client7 },
  { name: 'Additional Client', image: client8 },
];

// Non-Profit and More Brands
const clientsData = {
  nonProfit: [
    { name: 'Non-Profit Partner 1', image: non1 },
    { name: 'Non-Profit Partner 2', image: non2 },
    { name: 'Non-Profit Partner 3', image: non3 },
    { name: 'Non-Profit Partner 4', image: non4 },
  ],
  moreBrands: [
    { name: 'Brand Partner 1', image: more1 },
    { name: 'Brand Partner 2', image: more2 },
    { name: 'Brand Partner 3', image: more3 },
    { name: 'Brand Partner 4', image: more5 },
    { name: 'Brand Partner 5', image: more6 },
    { name: 'Brand Partner 6', image: more7 },
  ],
};

// ─── TEXT TESTIMONIALS ──────────────────────────────────────────────────────
const testimonials = [
  {
    text: "One thing I wanted to say about Mindframe Global is that they make a big difference in our annual banquet that we have hosted for the last 16 years. They absolutely did a wonderful job. They made everybody in the room happy and appreciated all of the professional jobs that they had accomplished for the Arizona Muslim Police Advisory Board. We are absolutely floored with the professionalism and the design that they come up with. Thank you, Mindframe Global. We appreciate your work.",
    author: 'Mohamed EL-Sharkawy',
    company: 'AZMPAB',
    rating: 5,
  },
  {
    text: "Our Company is glad to be associated with Mind Frame India. Extremely efficient and hard working team very well led by their Super efficient, energetic and brilliant director Shahnawaz. They understand the world of marketing in its true sense. Their ability to meet the timelines at short notice without compromising on quality, is commendable. We look forward to a mutually beneficial business association with them even in near future and wish them success.",
    author: 'Dr. Aneesah Nadir',
    company: 'Head of I.S.S.A',
    rating: 5,
  },
];

// ─── VIDEO TESTIMONIALS DATA ──────────────────────────────────────────────
const videoTestimonials = [
  {
    videoUrl: 'https://youtube.com/shorts/4m5r0SQyE7s?si=WNo11qrezJncCx4A',
    author: 'Mohamed EL-Sharkawy',
    company: 'AZMPAB',
    logo: non3,
    text: "They made everybody in the room happy and appreciated all of the professional jobs that they had accomplished for the Arizona Muslim Police Advisory Board.",
    rating: 5,
  },
  {
    videoUrl: 'https://youtube.com/shorts/Z1pH_0_5_Ik?si=3QvkbF7s_UvTxork',
    author: 'Dr. Aneesah Nadir',
    company: 'Head of I.S.S.A',
    logo: non3,
    text: "Extremely efficient and hard working team, very well led by their super efficient, energetic and brilliant director Shahnawaz.",
    rating: 5,
  },
];


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

function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// ─── VALIDATION SCHEMA ─────────────────────────────────────────────────────
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

// ─── GET IN TOUCH MODAL ─────────────────────────────────────────────────────
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
    padding: '8px 2px',
    fontSize: 15,
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
        maxWidth: 620,
        maxHeight: '92vh',
        overflowY: 'auto',
        background: '#fff',
        border: `10px solid ${goldLikeBorder}`,
        borderRadius: 4,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        padding: isMobile ? '32px 22px' : '40px 48px',
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            color: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 18,
          }}
        >
          <FaTimes />
        </button>

        <h2 style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 28 : 34,
          fontWeight: 700,
          color: gold,
          margin: '0 0 16px',
        }}>
          Get in Touch
        </h2>
        <hr style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '0 0 28px' }} />

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
                columnGap: 32,
                rowGap: 22,
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
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, flex: '0 0 auto', padding: '8px 2px' }}>
                      <USAFlag size={22} />
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
                    <FaChevronDown size={12} color="#888" style={{ position: 'absolute', right: 4, top: 12, pointerEvents: 'none' }} />
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
                    <FaChevronDown size={12} color="#888" style={{ position: 'absolute', right: 4, top: 12, pointerEvents: 'none' }} />
                  </div>
                  <FieldError name="budgetRange" />
                </div>

                <div style={{ gridColumn: isMobile ? 'auto' : '1 / -1' }}>
                  <Field
                    as="textarea"
                    name="comments"
                    placeholder="Additional Comments / Specific Requirements"
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 90 }}
                  />
                  <FieldError name="comments" />
                </div>
              </div>

              <div style={{ marginTop: 28 }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  border: '1px solid #d3d3d3',
                  borderRadius: 4,
                  padding: '14px 18px',
                  background: '#f9f9f9',
                  cursor: 'pointer',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Field
                      type="checkbox"
                      name="notRobot"
                      style={{ width: 20, height: 20, accentColor: gold, cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: 14, color: '#1a1a1a' }}>I'm not a robot</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2">
                      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" strokeLinecap="round" />
                      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" strokeLinecap="round" />
                      <path d="M17 3v5h-5M7 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 9, color: '#999' }}>reCAPTCHA</span>
                  </span>
                </label>
                <FieldError name="notRobot" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: 24,
                  padding: '15px 0',
                  background: '#1a1a1a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 15,
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

// ─── AUTO-SLIDING LOGO CAROUSEL (single line, continuous auto-play) ────────
// Reused for "Our Clients", "Non-Profit" and "More Brands" so all three
// sections behave the same way: one line, sliding on their own.
function LogoCarousel({ items, isMobile, intervalMs = 3000, itemWidth, itemHeight }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 640) return 2;
    if (w < 768) return 3;
    if (w < 1024) return 4;
    return Math.min(5, items.length);
  }, [items.length]);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount]);

  useEffect(() => {
    if (items.length <= visibleCount) return; // nothing to slide
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, visibleCount, intervalMs]);

  const visibleItems = [];
  const count = Math.min(visibleCount, items.length);
  for (let i = 0; i < count; i++) {
    visibleItems.push(items[(startIndex + i) % items.length]);
  }

  const width = itemWidth ?? (isMobile ? 110 : 160);
  const height = itemHeight ?? (isMobile ? 70 : 100);

  return (
    <div>
      {/* Fixed-height viewport so the row never reflows the page */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          gap: isMobile ? 20 : 40,
          height: height + (isMobile ? 16 : 24),
          padding: isMobile ? '8px 0' : '12px 0',
        }}
      >
        {visibleItems.map((item, idx) => (
          <div
            key={`${item.name}-${startIndex}-${idx}`}
            className="logo-item"
            style={{
              flex: `0 0 ${width}px`,
              width,
              height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
              filter: 'grayscale(30%)',
              transition: 'opacity 0.35s ease, filter 0.35s ease, transform 0.35s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.filter = 'grayscale(0%)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7';
              e.currentTarget.style.filter = 'grayscale(30%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={item.image}
              alt={item.name || 'Logo'}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      {/* Progress dots */}
      {items.length > visibleCount && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === startIndex ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === startIndex ? gold : '#ddd',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── VIDEO TESTIMONIAL CAROUSEL ────────────────────────────────────────────
function VideoTestimonialCarousel({ isMobile }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const current = videoTestimonials[activeIndex];
  const videoId = getYouTubeId(current.videoUrl);
  const thumbnailSrc = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  const embedSrc = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;

  const goTo = (idx) => {
    const nextIndex = (idx + videoTestimonials.length) % videoTestimonials.length;
    setActiveIndex(nextIndex);
    setIsPlaying(false);
    setAnimKey((k) => k + 1); // retrigger enter animation every navigation
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} size={14} color={i < rating ? gold : '#e0e0e0'} style={{ marginRight: 3 }} />
    ));

  // Fixed container height so the card never resizes with content length
  const CARD_HEIGHT = isMobile ? undefined : 460;
  const VIDEO_HEIGHT = isMobile ? 220 : 460;

  return (
    <div style={{
      padding: isMobile ? '50px 20px' : '70px 48px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
                      <Eyebrow>Testimonial</Eyebrow>

          <h2 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 700,
            fontFamily: "'Cormorant Garamond', serif",
            color: '#1a1a1a',
            margin: '0 0 8px',
          }}>
            What Our<span style={{ color: gold }}> Client Say</span>
          </h2>
          <div style={{ width: 50, height: 2, background: gold, margin: '0 auto 12px' }} />
        </div>

        {/* Video + Review side by side — fixed height on desktop, animated on navigation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1px solid rgba(201,168,76,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
          height: CARD_HEIGHT,
        }}>
          {/* Video side */}
          <div style={{
            position: 'relative',
            height: VIDEO_HEIGHT,
            background: '#0a0a0a',
            overflow: 'hidden',
          }}>
            <div
              key={`video-${animKey}`}
              style={{ width: '100%', height: '100%', animation: 'fadeInScale 0.45s ease-out' }}
            >
              {isPlaying && embedSrc ? (
                <iframe
                  key={embedSrc}
                  src={embedSrc}
                  title={`${current.company} video testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              ) : thumbnailSrc ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Play testimonial video from ${current.company}`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'block',
                  }}
                >
                  <img
                    src={thumbnailSrc}
                    alt={`${current.company} testimonial thumbnail`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 100%)' }} />

                  <div style={{ position: 'absolute', top: 18, left: 18, width: 28, height: 28, borderTop: `2px solid ${gold}`, borderLeft: `2px solid ${gold}`, opacity: 0.7 }} />
                  <div style={{ position: 'absolute', bottom: 18, right: 18, width: 28, height: 28, borderBottom: `2px solid ${gold}`, borderRight: `2px solid ${gold}`, opacity: 0.7 }} />

                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile ? 60 : 76,
                    height: isMobile ? 60 : 76,
                    borderRadius: '50%',
                    background: gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 34px rgba(201,168,76,0.5)',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'; }}
                  >
                    <FaPlay size={isMobile ? 18 : 24} color="#fff" style={{ marginLeft: 4 }} />
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 18,
                    left: 18,
                    right: 70,
                    textAlign: 'left',
                  }}>
                    <div style={{
                      fontSize: isMobile ? 12 : 14,
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: "'Cormorant Garamond', serif",
                      background: 'rgba(0,0,0,0.4)',
                      padding: '4px 12px',
                      borderRadius: 4,
                      display: 'inline-block',
                    }}>
                      {current.company}
                    </div>
                  </div>
                </button>
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 13,
                  textAlign: 'center',
                  padding: 24,
                }}>
                  Invalid video URL
                </div>
              )}
            </div>
          </div>

          {/* Review side — fixed height, content vertically centered, scrolls if it ever overflows */}
          <div style={{
            height: isMobile ? 'auto' : CARD_HEIGHT,
            display: 'flex',
            flexDirection: 'column',
            background: '#fff',
            overflow: 'hidden',
          }}>
            <div
              key={`review-${animKey}`}
              style={{
                flex: 1,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: isMobile ? '28px 22px' : '40px 40px 28px',
                overflowY: 'auto',
                animation: 'slideUp 0.45s ease-out',
              }}
            >
              {current.logo && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: 16,
                  flexShrink: 0,
                }}>
                  <img
                    src={current.logo}
                    alt={`${current.company} logo`}
                    style={{
                      height: isMobile ? 35 : 60,
                      width: 'auto',
                      maxWidth: 160,
                      objectFit: 'contain',
                      opacity: 0.8,
                      filter: 'grayscale(20%)',
                    }}
                  />
                </div>
              )}

              <FaQuoteLeft size={22} color={gold} style={{ opacity: 0.3, marginBottom: 12, flexShrink: 0 }} />

              <div style={{ display: 'flex', marginBottom: 12, flexShrink: 0 }}>
                {renderStars(current.rating)}
              </div>

              <p style={{
                fontSize: isMobile ? 14 : 15.5,
                color: '#3a3a3a',
                lineHeight: 1.75,
                fontStyle: 'italic',
                margin: '0 0 18px',
              }}>
                "{current.text}"
              </p>

              <div style={{ paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>
                <div style={{
                  fontSize: isMobile ? 15 : 17,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  fontFamily: "'Cormorant Garamond', serif"
                }}>
                  {current.author}
                </div>
                <div style={{ fontSize: 12, color: gold, fontWeight: 600, marginTop: 2 }}>
                  {current.company}
                </div>
              </div>
            </div>

            {/* Navigation — pinned outside the animated block so it stays put */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: isMobile ? '0 22px 24px' : '0 40px 28px',
              flexShrink: 0,
            }}>
              <button
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous testimonial"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1.5px solid #e0d8ce',
                  background: 'transparent', color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.background = gold; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0d8ce'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}
              >
                <FaArrowLeft size={13} />
              </button>

              <div style={{ display: 'flex', gap: 6, flex: 1 }}>
                {videoTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      flex: 1,
                      height: 4,
                      borderRadius: 2,
                      background: i === activeIndex ? gold : 'rgba(0,0,0,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.3s ease',
                      maxWidth: 60,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next testimonial"
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1.5px solid #e0d8ce',
                  background: 'transparent', color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.background = gold; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e0d8ce'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}
              >
                <FaArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO
        title={seoConfig.testimonial.title}
        description={seoConfig.testimonial.description}
        keywords={seoConfig.testimonial.keywords}
        path={seoConfig.testimonial.path}
      />

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .logo-item {
          animation: fadeInScale 0.5s ease-out;
        }
      `}</style>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        color: '#1a1a1a',
        background: '#faf8f5',
        minHeight: '100vh',
      }}>

        {/* ============== OUR CLIENTS SECTION ============== */}
        <div style={{
          padding: isMobile ? '50px 20px' : '70px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(201,168,76,0.08)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{
                fontSize: isMobile ? 28 : 38,
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1a1a1a',
                margin: '0 0 8px',
              }}>
                Our <span style={{ color: gold }}>Clients</span>
              </h2>
              <div style={{ width: 50, height: 2, background: gold, margin: '0 auto' }} />
            </div>

            {/* Professional Logo Carousel */}
            <div style={{ padding: isMobile ? '20px 0 30px' : '20px 0 40px' }}>
              <LogoCarousel items={logos} isMobile={isMobile} intervalMs={3000} />
            </div>

            {/* Non-Profit Section — auto-sliding, single line */}
            <div style={{ marginBottom: 48, marginTop: 30 }}>
              <h3 style={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: 600,
                color: '#333',
                marginBottom: 12,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <FaRegBuilding size={20} color={gold} />
                Non-Profit
              </h3>
              <LogoCarousel
                items={clientsData.nonProfit}
                isMobile={isMobile}
                intervalMs={2600}
                itemWidth={isMobile ? 120 : 170}
                itemHeight={isMobile ? 70 : 100}
              />
            </div>

            {/* More Brands Section — auto-sliding, single line */}
            <div>
              <h3 style={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: 600,
                color: '#333',
                marginBottom: 12,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <FaGlobe size={20} color={gold} />
                More Brands
              </h3>
              <LogoCarousel
                items={clientsData.moreBrands}
                isMobile={isMobile}
                intervalMs={2800}
                itemWidth={isMobile ? 120 : 170}
                itemHeight={isMobile ? 70 : 100}
              />
            </div>
          </div>
        </div>

        {/* ============== VIDEO TESTIMONIALS CAROUSEL ============== */}
        <VideoTestimonialCarousel isMobile={isMobile} />

        {/* ============== CTA SECTION ============== */}
        <div style={{
          padding: isMobile ? '50px 20px' : '70px 48px',
          background: '#1a1a1a',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{
              fontSize: isMobile ? 28 : 38,
              fontWeight: 700,
              color: '#fff',
              fontFamily: "'Cormorant Garamond', serif",
              margin: '0 0 12px',
            }}>
              Ready to Join Our <span style={{ color: gold }}>Happy Clients</span>?
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 16,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}>
              Let's create something amazing together. Get in touch and let's start your brand's success story.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 42px',
                background: gold,
                color: '#fff',
                borderRadius: 50,
                border: 'none',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = goldDark;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = gold;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.3)';
              }}
            >
              Request a free consultation
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>

        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </>
  );
};

export default Testimonials;