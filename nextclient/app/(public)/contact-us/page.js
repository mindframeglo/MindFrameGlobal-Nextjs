'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import apiClient from '@/services/apiClient';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaUser,
  FaBuilding,
  FaArrowRight,
  FaGoogle,
} from 'react-icons/fa';

const gold = '#c9a84c';
const darkBg = '#0d0f1a';

const locations = [
  {
    type: 'Affiliate Branch',
    address: 'Mind Frame Global LLC – Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
    phone: '+1 (925) 205-8356',
    email: 'info@mindframeglobal.com',
    mapUrl: 'https://maps.google.com/maps?q=2603+Camino+Ramon+San+Ramon+CA+94583',
  },
  {
    type: 'Affiliate Branch',
    address: 'Mind Frame Global LLC – 740 W University Drive, Tempe, Arizona, United States of America',
    phone: '+1 (909) 910-6650',
    email: 'info@mindframeglobal.com',
    mapUrl: 'https://maps.google.com/maps?q=740+W+University+Drive+Tempe+AZ',
  },
  {
    type: 'Head Office',
    address: '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    phone: '+91 9892000733',
    email: 'info@mindframeglobal.com',
    mapUrl: 'https://maps.google.com/maps?q=Crescent+Towers+Andheri+West+Mumbai',
  },
  {
    type: 'Branch Office',
    address: 'B28 Venue - 6th Floor Bhukanvala Chambers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    phone: '+91 9892000733',
    email: 'info@mindframeglobal.com',
    mapUrl: 'https://maps.google.com/maps?q=Bhukanvala+Chambers+Andheri+West+Mumbai',
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: Yup.string().required('Email is required').email('Invalid email format'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number format')
    .min(10, 'Phone number must be at least 10 digits'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

// USA Flag SVG Component
const USAFlag = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 40"
    width={size}
    height={size * (2/3)}
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
    
    {/* Stars - 50 stars in 9 rows */}
    {/* Row 1 - 6 stars */}
    <circle cx="3" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="2" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="2" r="1.2" fill="#FFFFFF" />
    
    {/* Row 2 - 5 stars */}
    <circle cx="5.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="5.5" r="1.2" fill="#FFFFFF" />
    
    {/* Row 3 - 6 stars */}
    <circle cx="3" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="9" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="9" r="1.2" fill="#FFFFFF" />
    
    {/* Row 4 - 5 stars */}
    <circle cx="5.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="12.5" r="1.2" fill="#FFFFFF" />
    
    {/* Row 5 - 6 stars */}
    <circle cx="3" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="8" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="13" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="16" r="1.2" fill="#FFFFFF" />
    <circle cx="23" cy="16" r="1.2" fill="#FFFFFF" />
    
    {/* Row 6 - 5 stars */}
    <circle cx="5.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="10.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="15.5" cy="19.5" r="1.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="19.5" r="1.2" fill="#FFFFFF" />
  </svg>
);

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!captchaChecked) {
        toast.error('Please verify that you are not a robot.');
        return;
      }
      setLoading(true);
      try {
        const response = await apiClient.post('/contact', values);
        if (response.data.success) {
          toast.success('Thank you! We will get back to you soon.');
          resetForm();
          setCaptchaChecked(false);
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Contact form error:', error);
        toast.error(error.response?.data?.message || 'Failed to submit. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  const IconBox = ({ children }) => (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'rgba(201, 168, 76, 0.12)',
        border: `1px solid rgba(201, 168, 76, 0.3)`,
        color: gold,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <SEO
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        path={seoConfig.contact.path}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .contact-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        .phone-field {
          display: flex;
          align-items: stretch;
        }

        input::placeholder, textarea::placeholder {
          color: #9a9a9a;
        }

        select:focus, input:focus, textarea:focus {
          border-color: ${gold} !important;
        }

        .captcha-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .captcha-checkbox:checked {
          background: ${gold};
          border-color: ${gold};
        }

        .captcha-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .map-container {
          borderRadius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
        }

        @media (max-width: 1024px) {
          .contact-split {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-form-row {
            grid-template-columns: 1fr;
          }
          .contact-left-pad {
            padding: 40px 24px !important;
          }
          .contact-right-pad {
            padding: 40px 24px !important;
          }
          .contact-headline {
            font-size: 36px !important;
          }
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="contact-split">
        {/* LEFT — Brand / Contact Info Panel */}
        <div
          className="contact-left-pad"
          style={{
            background: darkBg,
            color: '#fff',
            padding: '72px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              alignSelf: 'flex-start',
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(201, 168, 76, 0.12)',
              border: `1px solid rgba(201, 168, 76, 0.35)`,
              fontSize: 12,
              color: gold,
              marginBottom: 28,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: gold, display: 'inline-block' }} />
            GET IN TOUCH WITH US
          </div>

          <h1
            className="contact-headline"
            style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, margin: '0 0 16px', letterSpacing: -1 }}
          >
            We Can Help Your
            <span
              style={{
                background: `linear-gradient(90deg, ${gold}, #e8c874)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              }}
            >
              Business.
            </span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaPhoneAlt size={16} color={gold} />
              <span style={{ fontSize: 14, color: '#ddd' }}>+1 (925) 205-8356</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaPhoneAlt size={16} color={gold} />
              <span style={{ fontSize: 14, color: '#ddd' }}>+1 (909) 910-6650</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <FaEnvelope size={16} color={gold} />
              <span style={{ fontSize: 14, color: '#ddd' }}>info@mindframeglobal.com</span>
            </div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: gold, margin: '0 0 16px' }}>
              Our Locations
            </h3>
            <div className="location-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {locations.map((loc, idx) => (
                <div key={idx} style={{ 
                  background: 'rgba(255,255,255,0.04)', 
                  borderRadius: 10, 
                  padding: 16,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ 
                    fontSize: 11, 
                    fontWeight: 700, 
                    color: gold, 
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    marginBottom: 4,
                  }}>
                    {loc.type}
                  </div>
                  <p style={{ fontSize: 12, color: '#bbb', lineHeight: 1.5, margin: 0 }}>
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/919892000733"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              alignSelf: 'flex-start',
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.35)',
              color: '#25D366',
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <FaWhatsapp size={16} />
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT — Form Panel */}
        <div
          className="contact-right-pad"
          style={{
            background: '#fff',
            padding: '72px 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: gold,
                margin: '0 0 8px',
              }}
            >
              Get a Consultation
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1a1a1a', margin: '0 0 24px', letterSpacing: -0.5 }}>
              Let's Talk About Your Project
            </h2>

            <form onSubmit={formik.handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ 
                  display: 'block',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: 6,
                }}>
                  Name <span style={{ color: '#d32f2f' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                    <FaUser size={13} />
                  </span>
                  <input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      fontFamily: 'inherit',
                      fontSize: 14,
                      color: '#1a1a1a',
                      background: '#fafafa',
                      border: '1px solid #e2e0da',
                      borderRadius: 8,
                      padding: '12px 14px 12px 38px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <div style={{ color: '#d32f2f', fontSize: 11.5, marginTop: 4 }}>{formik.errors.name}</div>
                )}
              </div>

              {/* Email + Phone */}
              <div className="contact-form-row">
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 6,
                  }}>
                    Email <span style={{ color: '#d32f2f' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                      <FaEnvelope size={13} />
                    </span>
                    <input
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Email Address"
                      style={{
                        width: '100%',
                        fontFamily: 'inherit',
                        fontSize: 14,
                        color: '#1a1a1a',
                        background: '#fafafa',
                        border: '1px solid #e2e0da',
                        borderRadius: 8,
                        padding: '12px 14px 12px 38px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div style={{ color: '#d32f2f', fontSize: 11.5, marginTop: 4 }}>{formik.errors.email}</div>
                  )}
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: 6,
                  }}>
                    Mobile No. <span style={{ color: '#d32f2f' }}>*</span>
                  </label>
                  <div className="phone-field">
                    {/* USA Flag with +1 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '0 12px',
                        border: '1px solid #e2e0da',
                        borderRight: 'none',
                        borderRadius: '8px 0 0 8px',
                        background: '#f2f0ea',
                        fontSize: 13,
                        color: '#555',
                        fontWeight: 600,
                      }}
                    >
                      <USAFlag size={24} />
                      +1
                    </div>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
                        <FaPhoneAlt size={12} />
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="(555) 123-4567"
                        style={{
                          width: '100%',
                          fontFamily: 'inherit',
                          fontSize: 14,
                          color: '#1a1a1a',
                          background: '#fafafa',
                          border: '1px solid #e2e0da',
                          borderRadius: '0 8px 8px 0',
                          padding: '12px 14px 12px 32px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <div style={{ color: '#d32f2f', fontSize: 11.5, marginTop: 4 }}>{formik.errors.phone}</div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ 
                  display: 'block',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: 6,
                }}>
                  Message <span style={{ color: '#d32f2f' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Tell us about your project..."
                  rows={3}
                  style={{
                    width: '100%',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    color: '#1a1a1a',
                    background: '#fafafa',
                    border: '1px solid #e2e0da',
                    borderRadius: 8,
                    padding: '12px 14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
                {formik.touched.message && formik.errors.message && (
                  <div style={{ color: '#d32f2f', fontSize: 11.5, marginTop: 4 }}>{formik.errors.message}</div>
                )}
              </div>

              {/* I'm not a robot */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12, 
                marginBottom: 20,
                padding: '12px 16px',
                background: '#f9f9f9',
                borderRadius: 8,
                border: '1px solid #e8e6e0',
              }}>
                <input
                  type="checkbox"
                  id="captcha"
                  checked={captchaChecked}
                  onChange={(e) => setCaptchaChecked(e.target.checked)}
                  className="captcha-checkbox"
                />
                <label htmlFor="captcha" style={{ fontSize: 13, color: '#555', cursor: 'pointer' }}>
                  I'm not a robot
                </label>
                <FaGoogle size={20} style={{ marginLeft: 'auto', color: '#999' }} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? '#b8952e' : gold,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '15px 24px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.75 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 14,
                        height: 14,
                        border: '2px solid #fff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send <FaArrowRight size={13} />
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: 10.5, letterSpacing: 1, color: '#999', textTransform: 'uppercase', marginTop: 16 }}>
                Your information is protected via SSL
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* MAP SECTION - Full Width */}
      <div style={{
        padding: '60px 40px',
        background: '#f5f2ed',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1a1a1a',
              margin: '0 0 8px',
            }}>
              Find Us on <span style={{ color: gold }}>Map</span>
            </h2>
            <div style={{ width: 50, height: 2, background: gold, margin: '0 auto' }} />
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.914923067635!2d72.8305567!3d19.1425326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a37b8c0b3b%3A0x3a3b3c3d3e3f4041!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mind Frame India Location"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <a
              href="https://maps.google.com/maps?q=Bhukanvala+Chambers+Andheri+West+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: gold,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: 8,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = gold;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                e.currentTarget.style.color = gold;
              }}
            >
              <FaMapMarkerAlt size={14} />
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
}