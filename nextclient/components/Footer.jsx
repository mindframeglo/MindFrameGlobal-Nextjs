'use client';

/**
 * Footer Component — Mind Frame Global
 * Fully Responsive - Mobile First Design
 * Mobile: Everything centered | Tablet/Desktop: Normal layout
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';
import { RiThreadsFill } from "react-icons/ri";
import { 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const goldColor = '#c9a84c';

// Converts "Logo Designing" -> "logo-designing"
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-');

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Each entry now carries a label + the route it should navigate to.
  // Adjust the `href` base path (e.g. "/services") to match your actual routes.
  const creativeSolutions = [
    { label: 'Logo Designing', href: '/logo-designing-service' },
    { label: 'UI / UX Designing', href: '/ui-ux-design-service' },
    { label: 'Creative Designing', href: '/graphic-design-services' },
    { label: '2D/3D Animation', href: '/video-animation-services' },
    { label: 'Corporate Films and TVCs', href: '/corporate-video-production-services'},
    { label: 'Print Ads', href: '/ads-print-services' },
  ];

  const brandingSolutions = [
    { label: 'Brand Strategy', href: '/branding-strategy-services' },
    { label: 'Brand Identity', href: '/brand-identity-services' },
    { label: 'Brand Guidelines', href: '/brand-guideline-services' },
    { label: 'Brand Architecture', href: '/brand-architecture-services' },
    { label: 'Campaign Ideation', href: '/campaign-ideation-services' },
  ];

  const performanceSolutions = [
    { label: 'Search Engine Marketing', href: '/search-engine-marketing-services' },
    { label: 'Search Engine Optimization', href: '/search-engine-optimization-services' },
    { label: 'Social Media Advertising', href: '/social-media-advertising-services' },
    { label: 'Email Marketing', href: '/email-marketing-services' },
    { label: 'Content Marketing', href: '/content-marketing-services' },
  ];

  const itSolutions = [
    { label: 'Web Development', href: '/web-development-services' },
    { label: 'Mobile App Development', href: '/mobile-app-development-services' },
    { label: 'Cloud Computing', href: '/cloud-computing-solutions' },
    { label: 'Cyber Security', href: '/cyber-security-services' },
    { label: 'Database and Mining', href: '/database-management-and-mining' },
    { label: 'Managed Services', href: '/managed-services' },
  ];

  // Social links with react-icons
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/mindframeglobal', label: 'Facebook', color: '#ff0000' },
    { icon:  RiThreadsFill, href: 'https://x.com/MindFrameGlobal', label: 'Thread', color: '#ff0000' },
    { icon: FaInstagram, href: 'https://www.instagram.com/mindframeglobal', label: 'Instagram', color: '#ff0000' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/mind-frame-global?_l=en_US', label: 'LinkedIn', color: '#ff0000' },
    { icon: FaYoutube, href: 'https://www.youtube.com/channel/UCi4GIIParm1_1l7RZ83H5Fw', label: 'YouTube', color: '#ff0000' },
  ];

  const columnHeadingStyle = {
    fontSize: isMobile ? 14 : 16,
    fontWeight: 700,
    color: goldColor,
    margin: '0 0 14px',
    fontFamily: "'DM Sans', sans-serif",
    textAlign: isMobile ? 'center' : 'left',
  };

  const listItemStyle = {
    fontSize: isMobile ? 12 : 13,
    color: '#e8e8e8',
    lineHeight: 2.2,
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    textAlign: isMobile ? 'center' : 'left',
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
  };

  // Get grid columns based on screen size
  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return '220px repeat(4, 1fr)';
  };

  // Renders a <ul> of navigable links for a given solutions array
  const renderLinkList = (items) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={listItemStyle}>
          <Link
            href={item.href}
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = goldColor; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#e8e8e8'; }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer style={{ 
      background: '#0a0a0a', 
      color: '#fff', 
      padding: isMobile ? '40px 16px 20px' : '56px 40px 24px', 
      width: '100%',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Logo + Solution Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? 24 : 32,
            alignItems: 'start',
            marginBottom: isMobile ? 32 : 48,
            justifyItems: isMobile ? 'center' : 'stretch',
          }}
        >
     <Link
  href="/"
  style={{
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-start",
    width: "100%",
  }}
>
  <div
    style={{
      width: isMobile ? 100 : 140,
      height: isMobile ? 100 : 140,
      borderRadius: "50%",
      backgroundColor: "#fff",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px",
      boxSizing: "border-box",
    }}
  >
    <img
      src="/assets/logo-MFG.png"
      alt="Mind Frame Global Logo"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        cursor: "pointer",
      }}
    />
  </div>
</Link>

          {/* Creative Solutions */}
          <div style={{ width: '100%' }}>
            <h4 style={columnHeadingStyle}>Creative Solutions</h4>
            {renderLinkList(creativeSolutions)}
          </div>

          {/* Branding Solutions */}
          <div style={{ width: '100%' }}>
            <h4 style={columnHeadingStyle}>Branding Solutions</h4>
            {renderLinkList(brandingSolutions)}
          </div>

          {/* Performance Solutions */}
          <div style={{ width: '100%' }}>
            <h4 style={columnHeadingStyle}>Performance Solutions</h4>
            {renderLinkList(performanceSolutions)}
          </div>

          {/* IT Solutions */}
          <div style={{ width: '100%' }}>
            <h4 style={columnHeadingStyle}>IT Solutions</h4>
            {renderLinkList(itSolutions)}
          </div>
        </div>

        {/* Our Locations */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 24 : 32 }}>
          <h3
            style={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: 700,
              color: goldColor,
              margin: '0 0 12px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Locations
          </h3>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: isMobile ? 8 : 4,
            padding: '0 8px',
          }}>
            <p style={{ 
              fontSize: isMobile ? 11 : 13, 
              color: '#ddd', 
              margin: 0, 
              lineHeight: 1.7,
              textAlign: 'center',
            }}>
              <MapPin size={isMobile ? 12 : 14} style={{ display: 'inline', marginRight: 6, color: goldColor }} />
              <strong style={{ color: '#fff' }}>Affiliate Branch:</strong> {isMobile ? 'San Ramon, CA, USA' : 'Mind Frame Global LLC – Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America'}
            </p>
            <p style={{ 
              fontSize: isMobile ? 11 : 13, 
              color: '#ddd', 
              margin: 0, 
              lineHeight: 1.7,
              textAlign: 'center',
            }}>
              <MapPin size={isMobile ? 12 : 14} style={{ display: 'inline', marginRight: 6, color: goldColor }} />
              <strong style={{ color: '#fff' }}>Affiliate Branch:</strong> {isMobile ? 'Tempe, AZ, USA' : 'Mind Frame Global LLC – 740 W University Drive, Tempe, Arizona, United States of America'}
            </p>
            <p style={{ 
              fontSize: isMobile ? 11 : 13, 
              color: '#ddd', 
              margin: '6px 0 0', 
              lineHeight: 1.7,
              textAlign: 'center',
            }}>
              <MapPin size={isMobile ? 12 : 14} style={{ display: 'inline', marginRight: 6, color: goldColor }} />
              <strong style={{ color: '#fff' }}>Head Office:</strong> Mumbai, India
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: isMobile ? 12 : 24, 
            marginTop: 12, 
            flexWrap: 'wrap',
            padding: '0 8px',
          }}>
            <p style={{ 
              fontSize: isMobile ? 11 : 13, 
              color: '#ddd', 
              margin: 0,
              textAlign: 'center',
            }}>
              <Phone size={isMobile ? 12 : 14} style={{ display: 'inline', marginRight: 6, color: goldColor }} />
              <strong style={{ color: '#fff' }}>Contact:</strong> {isMobile ? '+1 (925) 205-8356' : '+1 (925) 205 8356 / 909 910 6650'}
            </p>
            <p style={{ 
              fontSize: isMobile ? 11 : 13, 
              color: '#ddd', 
              margin: 0,
              textAlign: 'center',
            }}>
              <Mail size={isMobile ? 12 : 14} style={{ display: 'inline', marginRight: 6, color: goldColor }} />
              <strong style={{ color: '#fff' }}>Email:</strong> info@mindframeglobal.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ 
          border: 'none', 
          borderTop: `1px solid rgba(201,168,76,0.2)`, 
          margin: '0 0 16px' 
        }} />

        {/* Bottom Bar with Social Icons */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: isMobile ? 16 : 16,
        }}>
          {/* Copyright */}
          <p style={{ 
            fontSize: isMobile ? 10 : 12, 
            color: '#888', 
            margin: 0, 
            fontWeight: 500,
            textAlign: 'center',
          }}>
            Copyright © {new Date().getFullYear()}. All Rights Reserved Mind Frame Global.
          </p>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            gap: isMobile ? 8 : 12,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: isMobile ? 34 : 38,
                    height: isMobile ? 34 : 38,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#aaa',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${social.color}40`;
                    e.currentTarget.style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#aaa';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon size={isMobile ? 14 : 18} />
                </a>
              );
            })}
          </div>
        </div>

       
      
      </div>
    </footer>
  );
}