'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const projects = [
  {
    id: 1,
    slug: "mind-frame-india-drives-online-sales-for-arijit-singh-and-pankaj-udhas-ji-concerts-in-arizona",
    title: " Online Sales for Arijit Singh and Pankaj Udhas Ji Concerts in Arizona",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work1.png',
  },
  {
    id: 2,
    slug: "hdfc-indias-largest-webinar-and-digital-marketing-strategy",
    title: "HDFC - India's Largest Webinar and Digital Marketing Strategy",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work2.png',
  },
  {
    id: 3,
    slug: "content-creation-and-design-solutions-for-canon",
    title: "Content Creation and Design Solutions for Canon",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work3.png',
  },
  {
    id: 4,
    slug: "us-india",
    title: "Marketing, Website Development for Usipis Donation Drive",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work4.png',
  },
  {
    id: 5,
    slug: "bismaa-corp",
    title: "UI/UX Design, Website Development & SEO for BISMA",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work5.png',
  },
  {
    id: 6,
    slug: "shahi-zaikha",
    title: "Branding Solutions for Shahi Zaikha",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work6.png',
  },
  {
    id: 7,
    slug: "perkin-elmer",
    title: " PerkinElmer Digital Growth Strategy",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work7.png',
  },
  {
    id: 8,
    slug: "marashli-shoes",
    title: " Website Design & Branding for Marashali",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work8.png',
  },
];

export default function OurWork() {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [offsetY, setOffsetY] = useState(0);
  const ctaRef = useRef(null);

  // Extract unique categories for filter
  const categories = ['all', ...new Set(projects.map(p => p.category.split(' · ')[0]))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementPosition = rect.top + scrollPosition;
        const distanceFromTop = scrollPosition - elementPosition;
        setOffsetY(distanceFromTop * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title={seoConfig.ourWork.title}
        description={seoConfig.ourWork.description}
        keywords={seoConfig.ourWork.keywords}
        path={seoConfig.ourWork.path}
      />
      <div style={styles.page}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .project-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-decoration: none;
            display: block;
            color: inherit;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          }

          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(176, 141, 87, 0.15);
          }

          .card-img-wrap {
            overflow: hidden;
            position: relative;
            background: #f5f2ed;
          }

          .card-img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .project-card:hover .card-img {
            transform: scale(1.05);
          }

          .hover-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(26, 21, 16, 0.85) 0%, rgba(26, 21, 16, 0.2) 50%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 30px;
            pointer-events: none;
          }

          .project-card:hover .hover-overlay {
            opacity: 1;
          }

          .hover-cta {
            color: #fff;
            font-family: 'DM Sans', sans-serif;
            font-size: 12px;
            letter-spacing: 2px;
            text-transform: uppercase;
            border: 1.5px solid rgba(255,255,255,0.4);
            padding: 10px 28px;
            border-radius: 50px;
            transform: translateY(20px);
            transition: all 0.4s ease;
            background: rgba(176, 141, 87, 0.15);
            backdrop-filter: blur(4px);
          }

          .project-card:hover .hover-cta {
            transform: translateY(0);
            border-color: #b08d57;
            background: rgba(176, 141, 87, 0.3);
          }

          .card-body {
            padding: 20px 24px 24px;
            background: #fff;
            border-top: 1px solid rgba(0,0,0,0.04);
          }

          .card-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 19px;
            font-weight: 600;
            color: #1a1510;
            line-height: 1.3;
            margin-bottom: 6px;
            transition: color 0.3s ease;
          }

          .project-card:hover .card-title {
            color: #b08d57;
          }

          .card-category {
            font-size: 10px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #b08d57;
            font-weight: 500;
            font-family: 'DM Sans', sans-serif;
          }

          .card-number {
            position: absolute;
            top: 16px;
            right: 16px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 14px;
            color: rgba(255,255,255,0.6);
            background: rgba(0,0,0,0.3);
            padding: 4px 12px;
            border-radius: 20px;
            backdrop-filter: blur(4px);
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .card-number {
            opacity: 1;
          }

          .filter-btn {
            padding: 8px 22px;
            border: 1.5px solid #e0d8ce;
            border-radius: 50px;
            background: transparent;
            color: #5a4f44;
            font-family: 'DM Sans', sans-serif;
            font-size: 12px;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .filter-btn:hover {
            border-color: #b08d57;
            color: #b08d57;
            background: rgba(176, 141, 87, 0.05);
          }

          .filter-btn.active {
            background: #b08d57;
            color: #fff;
            border-color: #b08d57;
          }

          .filter-btn.active:hover {
            background: #9a7a4a;
            border-color: #9a7a4a;
          }

          .work-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          .cta-parallax-bg {
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            transform: translateY(0);
            transition: transform 0.1s ease-out;
          }

          .cta-parallax-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(26, 21, 16, 0.92) 0%, rgba(26, 21, 16, 0.75) 100%);
            z-index: 1;
          }

          @media (max-width: 1024px) {
            .work-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px;
            }
            .card-img {
              height: 220px !important;
            }
          }

          @media (max-width: 640px) {
            .work-grid {
              grid-template-columns: 1fr !important;
              gap: 20px;
              padding: 0 16px 60px !important;
            }
            .card-img {
              height: 240px !important;
            }
            .work-header {
              padding: 40px 16px 20px !important;
            }
            .filter-bar {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 8px !important;
            }
            .filter-btn {
              padding: 6px 16px !important;
              font-size: 11px !important;
            }
            .heading {
              font-size: 28px !important;
            }
            .cta-content {
              padding: 50px 20px !important;
            }
            .cta-title {
              font-size: 28px !important;
            }
            .cta-description {
              font-size: 14px !important;
            }
            .stats-container {
              gap: 20px !important;
            }
            .stat-divider {
              display: none !important;
            }
          }
        `}</style>

        {/* Header */}
        <div className="work-header" style={styles.header}>
          <div style={styles.headerBadge}>PORTFOLIO</div>
          <h1 style={styles.heading}>
            Where 
            <br /><span style={styles.headingAccent}>Creativity Meets Strategy</span>
          </h1>
          <p style={styles.description}>
            Explore our curated collection of impactful campaigns across industries
          </p>
          <div style={styles.divider} />
          
         
        </div>

        {/* Grid */}
        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio-item/${project.slug}`}
              className="project-card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                  loading="lazy"
                />
                <div className="hover-overlay">
                  <span className="hover-cta">Explore Project</span>
                </div>
                <span className="card-number">0{index + 1}</span>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-category">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>32+</span>
              <span style={styles.statLabel}>Projects Delivered</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statItem}>
              <span style={styles.statNumber}>12+</span>
              <span style={styles.statLabel}>Industries Served</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statItem}>
              <span style={styles.statNumber}>8+</span>
              <span style={styles.statLabel}>Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* CTA Section with Parallax Background */}
        <div 
          ref={ctaRef}
          className="cta-parallax-bg"
          style={{
            ...styles.ctaSection,
            transform: `translateY(${offsetY * 0.05}px)`,
          }}
        >
          <div style={styles.ctaOverlay}>
            <div style={styles.ctaContent}>
              <div style={styles.ctaBadge}>GET STARTED</div>
              <h2 style={styles.ctaTitle}>
                Have a Project? <br />
                <span style={styles.ctaAccent}>Let Us Help.</span>
              </h2>
              <p style={styles.ctaDescription}>
                Boost your business growth with a professionally optimized website that attracts new visitors and leads. 
                Let MFG create a tailored strategy to fuel your success online.
              </p>
              <Link href="/contact-us" style={styles.ctaButton}>
                Contact Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 10 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "60px 24px 32px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  headerBadge: {
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#b08d57",
    background: "rgba(176, 141, 87, 0.1)",
    padding: "6px 20px",
    borderRadius: "50px",
    marginBottom: "16px",
    fontWeight: 600,
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(32px, 4.5vw, 48px)",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.2,
    marginBottom: "12px",
  },
  headingAccent: {
    color: "#b08d57",
  },
  description: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "#6b5f53",
    lineHeight: 1.6,
    maxWidth: "520px",
    margin: "0 auto 20px",
  },
  divider: {
    width: "60px",
    height: "2px",
    background: "linear-gradient(to right, #b08d57, #d4c4a8)",
    margin: "0 auto 28px",
    borderRadius: "2px",
  },
  filterBar: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "8px",
  },
  statsSection: {
    background: "linear-gradient(135deg, #f5f2ed 0%, #faf8f5 100%)",
    padding: "40px 24px 60px",
    borderTop: "1px solid rgba(176, 141, 87, 0.15)",
    marginTop: "20px",
  },
  statsContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  statNumber: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "36px",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.1,
  },
  statLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#8a7a6a",
  },
  statDivider: {
    width: "1px",
    height: "36px",
    background: "rgba(176, 141, 87, 0.25)",
  },
  // CTA Section Styles
  ctaSection: {
    position: "relative",
    overflow: "hidden",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundAttachment: "fixed",
     paddingBottom: "40px", // Add this line for bottom spacing
  },
  ctaOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(26, 21, 16, 0.92) 0%, rgba(26, 21, 16, 0.75) 100%)",
    zIndex: 1,
  },
  ctaContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "700px",
    padding: "60px 40px",
    margin: "0 auto",
  },
  ctaBadge: {
    display: "inline-block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#b08d57",
    background: "rgba(176, 141, 87, 0.15)",
    padding: "6px 20px",
    borderRadius: "50px",
    marginBottom: "16px",
    fontWeight: 600,
    border: "1px solid rgba(176, 141, 87, 0.2)",
  },
  ctaTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(32px, 4vw, 48px)",
    fontWeight: 600,
    color: "#fff",
    lineHeight: 1.15,
    marginBottom: "16px",
  },
  ctaAccent: {
    color: "#b08d57",
  },
  ctaDescription: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.7,
    maxWidth: "550px",
    margin: "0 auto 32px",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 36px",
    background: "#b08d57",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 30px rgba(176, 141, 87, 0.35)",
    border: "none",
    cursor: "pointer",
  },
};