'use client'

/**
 * Testimonials Page — Professional Redesign
 * Features: Hero section, client logos, testimonials, "Get in Touch" modal (Formik + Yup)
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
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaCheckCircle,
  FaRegBuilding,
  FaTimes,
  FaChevronDown,
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
const client15= '/assets/client-logo/client15.png';
const client16 = '/assets/client-logo/client16.png';
const client17= '/assets/client-logo/client17.png';
const client18= '/assets/client-logo/client18.png';
const client19= '/assets/client-logo/client19.png';
const client20 = '/assets/client-logo/client20.png';
const client21= '/assets/client-logo/client21.png';
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
const goldLikeBorder = '#c3a06f';


// USA Flag SVG Component (matches the Contact page flag)
const USAFlag = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 40"
    width={size}
    height={size * (2 / 3)}
    style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}
  >
    {/* Background - Stripes */}
    <rect width="60" height="40" fill="#B22234" />

    {/* White stripes */}
    <rect y="4" width="60" height="4" fill="#FFFFFF" />
    <rect y="12" width="60" height="4" fill="#FFFFFF" />
    <rect y="20" width="60" height="4" fill="#FFFFFF" />
    <rect y="28" width="60" height="4" fill="#FFFFFF" />
    <rect y="36" width="60" height="4" fill="#FFFFFF" />

    {/* Blue Canton */}
    <rect width="26" height="20" fill="#3C3B6E" />

    {/* Stars - rows */}
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

// Logo data with imported images
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

// Non-Profit and More Brands - images only (no text)
const clientsData = {
  nonProfit: [
    { image: non1 },
    { image: non2 },
    { image: non3 },
    { image: non4 },
  ],
  moreBrands: [
    { image: more1 },
    { image: more2 },
    { image: more3 },
    { image: more5 },
    { image: more6 },
    { image: more7 },
  ]
};

const testimonials = [
  {
    text: "These days social media is the most sought after branding & communication medium and we could have no better partner than Mind Frame India for providing us with all the necessary assistance in making our presence felt on the social media platforms. I am particularly impressed with their creativity and agility to engage with our social media followers.",
    author: 'Officer – Marketing',
    company: 'Lilavati Hospital And Research Centre',
    rating: 5,
  },
  {
    text: "Mind Frame India has been an exceptional partner in our branding journey. Their team's deep understanding of digital marketing combined with their creative prowess has helped us build a strong online presence. The results have been outstanding and we couldn't be more pleased with their work.",
    author: 'Director – Brand Strategy',
    company: 'Leadership Mavericks',
    rating: 5,
  },
  {
    text: "Working with Mind Frame India has been a transformative experience for our brand. Their strategic approach to creative communication and their ability to understand our target audience has helped us grow significantly. We highly recommend their services.",
    author: 'Head – Marketing & Communications',
    company: 'InFocus',
    rating: 5,
  },
  {
    text: "The team at Mind Frame India brings unmatched creativity and professionalism to every project. From concept to execution, they have consistently delivered beyond our expectations. Their commitment to quality makes them a true partner in our success.",
    author: 'General Manager',
    company: 'Supreme Furniture',
    rating: 5,
  },
  {
    text: "Mind Frame has been instrumental in transforming our digital presence. Their holistic approach combining creativity with data-driven strategies has yielded remarkable results for our wellness brand. We are proud to have them as our marketing partners.",
    author: 'Founder & Director',
    company: 'Pratimoksha Yoga Center',
    rating: 5,
  },
];

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

// ─── FIELD ERROR TEXT ───────────────────────────────────────────────────────
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
        {/* Close button */}
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

        {/* Heading */}
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
                {/* Name */}
                <div>
                  <Field name="name" type="text" placeholder="Name" style={inputStyle} />
                  <FieldError name="name" />
                </div>

                {/* Company */}
                <div>
                  <Field name="company" type="text" placeholder="Company/Organization" style={inputStyle} />
                  <FieldError name="company" />
                </div>

                {/* Contact Number */}
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

                {/* Email */}
                <div>
                  <Field name="email" type="email" placeholder="Email" style={inputStyle} />
                  <FieldError name="email" />
                </div>

                {/* Creative Solution */}
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

                {/* Budget Range */}
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

                {/* Comments — full width */}
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

              {/* Not a robot */}
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

              {/* Submit */}
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

// Reusable client logo card — images only (no text)
function ClientLogoCard({ client, isMobile }) {
  return (
    <div
      style={{
        background: '#faf8f5',
        borderRadius: 10,
        padding: isMobile ? '24px 16px' : '32px 24px',
        border: '1px solid #eee',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: isMobile ? 80 : 120,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = gold;
        e.currentTarget.style.background = '#f5f2ed';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(201,168,76,0.15)';
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.opacity = '1';
          img.style.filter = 'grayscale(0%)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#eee';
        e.currentTarget.style.background = '#faf8f5';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.opacity = '0.75';
          img.style.filter = 'grayscale(30%)';
        }
      }}
    >
      <div style={{
        width: '100%',
        height: isMobile ? 60 : 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={client.image}
          alt="Client logo"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            opacity: 0.75,
            filter: 'grayscale(30%)',
            transition: 'all 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Logo carousel state
  const [logoStartIndex, setLogoStartIndex] = useState(0);
  const [visibleLogosCount, setVisibleLogosCount] = useState(5);
  const logoCarouselRef = useRef(null);

  // Get visible logos count based on screen size
  const getVisibleLogosCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleLogosCount(getVisibleLogosCount());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // AUTO-SLIDE LOGOS - Changes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoStartIndex((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + testimonials.length) % testimonials.length);
      setVisible(true);
      setTimeout(() => setIsAnimating(false), 400);
    }, 300);
  }, [isAnimating]);

  // AUTO-SLIDE TESTIMONIALS - Changes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  // Get visible logos for carousel
  const getVisibleLogos = () => {
    const result = [];
    for (let i = 0; i < visibleLogosCount; i++) {
      const idx = (logoStartIndex + i) % logos.length;
      result.push(logos[idx]);
    }
    return result;
  };

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        size={16}
        color={i < rating ? gold : '#ddd'}
        style={{ marginRight: 4 }}
      />
    ));
  };

  return (
    <>
      <SEO
        title={seoConfig.testimonial.title}
        description={seoConfig.testimonial.description}
        keywords={seoConfig.testimonial.keywords}
        path={seoConfig.testimonial.path}
      />

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#1a1a1a', background: '#faf8f5' }}>


        {/* ============== OUR CLIENTS - NON-PROFIT & MORE BRANDS ============== */}
        <div style={{
          padding: isMobile ? '50px 20px' : '70px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
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
  {/* ============== PROFESSIONAL LOGO CAROUSEL ============== */}
        <div style={{
          padding: isMobile ? '40px 20px' : '60px 48px',
          background: 'linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            

            {/* Logo Carousel */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? 30 : 50,
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}>
              {getVisibleLogos().map((logo, idx) => (
                <div
                  key={`${logo.name}-${logoStartIndex}-${idx}`}
                  style={{
                    flex: '0 0 auto',
                    width: isMobile ? 120 : 180,
                    height: isMobile ? 80 : 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.7,
                    filter: 'grayscale(30%)',
                    transition: 'all 0.4s ease',
                    cursor: 'default',
                    animation: 'fadeInScale 0.5s ease-out',
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
                    src={logo.image}
                    alt={logo.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              marginTop: 32,
            }}>
              {logos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLogoStartIndex(i)}
                  style={{
                    width: i === logoStartIndex ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === logoStartIndex ? gold : '#ddd',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

            {/* Non-Profit Section */}
            <div style={{ marginBottom: 48 , marginTop:48}}>
              <h3 style={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: 600,
                color: '#333',
                marginBottom: 20,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <FaRegBuilding size={20} color={gold} />
                Non-Profit
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? 12 : 16,
              }}>
                {clientsData.nonProfit.map((client, idx) => (
                  <ClientLogoCard key={idx} client={client} isMobile={isMobile} />
                ))}
              </div>
            </div>

            {/* More Brands Section */}
            <div>
              <h3 style={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: 600,
                color: '#333',
                marginBottom: 20,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <FaGlobe size={20} color={gold} />
                More Brands...
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? 12 : 16,
              }}>
                {clientsData.moreBrands.map((client, idx) => (
                  <ClientLogoCard key={idx} client={client} isMobile={isMobile} />
                ))}
              </div>
            </div>
          </div>
        </div>



      
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
                padding: '14px 36px',
                background: gold,
                color: '#fff',
                borderRadius: 8,
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

        <style>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Testimonials;