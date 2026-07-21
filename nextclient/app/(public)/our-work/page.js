'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { FaArrowRight, FaCheckCircle, FaBriefcase, FaUsers, FaTrophy } from 'react-icons/fa';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#f5f0e8';
const goldLikeBorder = '#c3a06f';

const projects = [
  {
    id: 1,
    slug: "mind-frame-india-drives-online-sales-for-arijit-singh-and-pankaj-udhas-ji-concerts-in-arizona",
    title: "Online Sales for Arijit Singh and Pankaj Udhas Ji Concerts in Arizona",
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
    title: "PerkinElmer Digital Growth Strategy",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work7.png',
  },
  {
    id: 8,
    slug: "marashli-shoes",
    title: "Website Design & Branding for Marashali",
    category: "Case Study · OUR WORK",
    image: '/assets/work/work8.png',
  },
];

export default function OurWork() {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

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
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-decoration: none;
            display: block;
            color: inherit;
            box-shadow: 0 2px 20px rgba(0,0,0,0.04);
            border: 1px solid rgba(201, 168, 76, 0.08);
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 60px rgba(201, 168, 76, 0.15);
            border-color: rgba(201, 168, 76, 0.2);
          }

          .card-img-wrap {
            overflow: hidden;
            position: relative;
            background: #f5f2ed;
          }

          .card-img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
            transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .project-card:hover .card-img {
            transform: scale(1.06);
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
            border: 1.5px solid rgba(255,255,255,0.3);
            padding: 10px 32px;
            border-radius: 50px;
            transform: translateY(20px);
            transition: all 0.4s ease;
            background: rgba(201, 168, 76, 0.15);
            backdrop-filter: blur(4px);
          }

          .project-card:hover .hover-cta {
            transform: translateY(0);
            border-color: ${gold};
            background: rgba(201, 168, 76, 0.3);
          }

          .card-body {
            padding: 22px 26px 26px;
            background: #fff;
          }

          .card-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            font-weight: 600;
            color: #1a1510;
            line-height: 1.3;
            margin-bottom: 8px;
            transition: color 0.3s ease;
          }

          .project-card:hover .card-title {
            color: ${gold};
          }

          .card-category {
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: ${gold};
            font-weight: 500;
            font-family: 'DM Sans', sans-serif;
          }

          .card-number {
            position: absolute;
            top: 16px;
            right: 16px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 13px;
            color: rgba(255,255,255,0.7);
            background: rgba(0,0,0,0.3);
            padding: 4px 14px;
            border-radius: 20px;
            backdrop-filter: blur(4px);
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .card-number {
            opacity: 1;
          }

          .gold-accent-line {
            width: 40px;
            height: 2px;
            background: ${gold};
            margin-top: 10px;
            transition: width 0.3s ease;
          }

          .project-card:hover .gold-accent-line {
            width: 60px;
          }

          .filter-btn {
            padding: 10px 28px;
            border: 1.5px solid #e0d8ce;
            border-radius: 50px;
            background: transparent;
            color: #5a4f44;
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            letter-spacing: 0.5px;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .filter-btn:hover {
            border-color: ${gold};
            color: ${gold};
            background: rgba(201, 168, 76, 0.05);
          }

          .filter-btn.active {
            background: ${gold};
            color: #fff;
            border-color: ${gold};
          }

          .filter-btn.active:hover {
            background: ${goldDark};
            border-color: ${goldDark};
          }

          .work-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px 80px;
          }

          .stat-card {
            background: #fff;
            padding: 32px 24px;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(201, 168, 76, 0.1);
            transition: all 0.3s ease;
            box-shadow: 0 2px 15px rgba(0,0,0,0.03);
          }

          .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 40px rgba(201, 168, 76, 0.1);
            border-color: rgba(201, 168, 76, 0.2);
          }

          .stat-icon {
            color: ${gold};
            margin-bottom: 12px;
          }

          @media (max-width: 1024px) {
            .work-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px;
            }
            .card-img {
              height: 240px !important;
            }
          }

          @media (max-width: 640px) {
            .work-grid {
              grid-template-columns: 1fr !important;
              gap: 20px;
              padding: 0 16px 50px !important;
            }
            .card-img {
              height: 220px !important;
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
              padding: 7px 18px !important;
              font-size: 11px !important;
            }
            .heading {
              font-size: 28px !important;
            }
            .cta-content {
              padding: 40px 20px !important;
            }
            .cta-title {
              font-size: 28px !important;
            }
            .cta-description {
              font-size: 14px !important;
            }
            .stats-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }
        `}</style>

        {/* Header */}
        <div className="work-header" style={styles.header}>
          <div style={styles.headerBadge}>
            <span style={styles.badgeDot}></span>
            PORTFOLIO
          </div>
          <h1 style={styles.heading}>
            Where <br />
            <span style={styles.headingAccent}>Creativity Meets Strategy</span>
          </h1>
          <p style={styles.description}>
            Explore our curated collection of impactful campaigns that drive results
          </p>
          <div style={styles.divider} />
          
          <div className="filter-bar" style={styles.filterBar}>
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Work
            </button>
            <button
              className={`filter-btn ${filter === 'Case Study' ? 'active' : ''}`}
              onClick={() => setFilter('Case Study')}
            >
              Case Studies
            </button>
          </div>
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
                  <span className="hover-cta">View Case Study</span>
                </div>
                <span className="card-number">0{index + 1}</span>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-category">{project.category}</p>
                <div className="gold-accent-line" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statsContainer}>
            <div className="stats-grid" style={styles.statsGrid}>
              <div className="stat-card">
                <div className="stat-icon"><FaBriefcase size={32} /></div>
                <span style={styles.statNumber}>32+</span>
                <span style={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaUsers size={32} /></div>
                <span style={styles.statNumber}>12+</span>
                <span style={styles.statLabel}>Industries Served</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTrophy size={32} /></div>
                <span style={styles.statNumber}>8+</span>
                <span style={styles.statLabel}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaOverlay} />
          <div style={styles.ctaContent}>
            <div style={styles.ctaBadge}>
              <FaCheckCircle size={14} style={{ marginRight: 8 }} />
              GET STARTED
            </div>
            <h2 style={styles.ctaTitle}>
              Have a Project? <br />
              <span style={styles.ctaAccent}>Let's Make It Happen.</span>
            </h2>
            <p style={styles.ctaDescription}>
              Boost your business growth with a professionally optimized website that attracts new visitors and leads. 
              Let MFG create a tailored strategy to fuel your success online.
            </p>
            <Link href="/contact-us" style={styles.ctaButton}>
              Start Your Project
              <FaArrowRight size={16} style={{ marginLeft: 12 }} />
            </Link>
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
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: gold,
    background: "rgba(201, 168, 76, 0.1)",
    padding: "8px 22px",
    borderRadius: "50px",
    marginBottom: "20px",
    fontWeight: 600,
    border: "1px solid rgba(201, 168, 76, 0.15)",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    background: gold,
    borderRadius: "50%",
    marginRight: "10px",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(32px, 4.5vw, 52px)",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.15,
    marginBottom: "14px",
  },
  headingAccent: {
    color: gold,
    position: "relative",
  },
  description: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    color: "#6b5f53",
    lineHeight: 1.7,
    maxWidth: "540px",
    margin: "0 auto 24px",
  },
  divider: {
    width: "60px",
    height: "2px",
    background: `linear-gradient(to right, ${gold}, #d4c4a8)`,
    margin: "0 auto 32px",
    borderRadius: "2px",
  },
  filterBar: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "4px",
  },
  statsSection: {
    background: "#fff",
    padding: "50px 24px 60px",
    borderTop: "1px solid rgba(201, 168, 76, 0.08)",
    borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
    marginTop: "20px",
  },
  statsContainer: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  statNumber: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "38px",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.1,
    display: "block",
    marginBottom: "4px",
  },
  statLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    letterSpacing: "0.5px",
    color: "#8a7a6a",
    display: "block",
  },
  ctaSection: {
    position: "relative",
    overflow: "hidden",
    minHeight: "420px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a1510 0%, #2a2218 100%)",
    marginTop: "20px",
  },
  ctaOverlay: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at center, rgba(201, 168, 76, 0.05) 0%, transparent 70%)",
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
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: gold,
    background: "rgba(201, 168, 76, 0.12)",
    padding: "8px 22px",
    borderRadius: "50px",
    marginBottom: "20px",
    fontWeight: 600,
    border: "1px solid rgba(201, 168, 76, 0.15)",
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
    color: gold,
  },
  ctaDescription: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    color: "rgba(255,255,255,0.8)",
    lineHeight: 1.8,
    maxWidth: "550px",
    margin: "0 auto 34px",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 40px",
    background: gold,
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    textDecoration: "none",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 35px rgba(201, 168, 76, 0.3)",
    border: "none",
    cursor: "pointer",
  },
};

// Add keyframes for pulse animation
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
`;
document.head.appendChild(styleTag);