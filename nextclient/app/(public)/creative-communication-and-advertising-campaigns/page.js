'use client'

import { useState } from "react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
const wrk1 = '/assets/work/wrk1.png';
const wrk2 = '/assets/work/wrk2.jpg';
const wrk3 = '/assets/work/wrk3.png';
const wrk4 = '/assets/work/wrk4.png';
const wrk5 = '/assets/work/wrk5.jpg';
const wrk6 = '/assets/work/wrk6.jpg';
const wrk7 = '/assets/work/wrk7.jpg';
const wrk8 = '/assets/work/wrk8.jpg';
const wrk9 = '/assets/work/wrk9.jpg';
const wrk10 = '/assets/work/wrk10.jpg';
const wrk11 = '/assets/work/wrk11.jpg';
const wrk12 = '/assets/work/wrk12.jpg';
const wrk13 = '/assets/work/wrk13.jpg';
const wrk14 = '/assets/work/wrk14.jpg';
const wrk15 = '/assets/work/wrk15.jpg';
const wrk16 = '/assets/work/wrk16.jpg';
const wrk17 = '/assets/work/wrk17.jpg';
const wrk18 = '/assets/work/wrk18.jpg';
const wrk19 = '/assets/work/wrk19.jpg';
const wrk20 = '/assets/work/wrk20.jpg';
const wrk21 = '/assets/work/wrk21.jpg';
const wrk22 = '/assets/work/wrk22.jpg';
const wrk23 = '/assets/work/wrk23.jpg';
const wrk24 = '/assets/work/wrk24.jpg';
const wrk25 = '/assets/work/wrk25.jpg';
const wrk26 = '/assets/work/wrk26.jpg';
const wrk27 = '/assets/work/wrk27.jpg';
const wrk28 = '/assets/work/wrk28.jpg';
const wrk29 = '/assets/work/wrk29.jpg';
const wrk30 = '/assets/work/wrk30.jpg';
const wrk31 = '/assets/work/wrk31.jpg';
const wrk32 = '/assets/work/wrk32.jpg';




const projects = [
  {
    id: 1,
    title: "Dil Se Rock",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk1,
  },
  {
    id: 2,
    title: "Mysticity Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk2,
  },
  {
    id: 3,
    title: "Ummeed",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk3,
  },
  {
    id: 4,
    title: "Supreme Furnitures",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Events",
    image: wrk4,
  },
  {
    id: 5,
    title: "Tots Couture Week (Registration Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Campaign",
    image: wrk5,
  },
  {
    id: 6,
    title: "Metro Grande - Gudi Padwa (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk6,
  },
  {
    id: 7,
    title: "Metro Grande: Plus Kya Hai? (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk7,
  },
  {
    id: 8,
    title: "Soul Packaging Design",
    category: "DESIGN · HOARDING · BRANDING · OUR WORK",
    tag: "Outdoor",
    image: wrk8,
  },
  {
    id: 9,
    title: "Metro Grande 200+ Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk9,
  },
  {
    id: 10,
    title: "Metro Grande Blockbuster Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk10,
  },
  {
    id: 11,
    title: "Oishi Oishi Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk11,
  },
  {
    id: 12,
    title: "Sqiinful Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk12,
  },
  {
    id: 13,
    title: "Sqiinful Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk13,
  },
  {
    id: 14,
    title: "Nesco Hoardings – Advertising for Food & Beverages, Hospitality Industry",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk14,
  },
  {
    id: 15,
    title: "Donear Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk15,
  },
  {
    id: 16,
    title: "PD Ramadan Food Photoshoot",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk16,
  },
  {
    id: 17,
    title: "Magnum Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk17,
  },
  {
    id: 18,
    title: "Metro Grande 200+ Outdoor Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk18,
  },
  {
    id: 19,
    title: "Metro Grande Blockbuster Outdoor Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk19,
  },
  {
    id: 20,
    title: "My Beauty World Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk20,
  },
  {
    id: 21,
    title: "Oishi Oishi packagind Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk21,
  },
  {
    id: 22,
    title: "EarthBased Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk22,
  },
  {
    id: 23,
    title: "Imperial Decor Catalogue Design",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk23,
  },
  {
    id: 24,
    title: "Travel Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk24,
  },
  {
    id: 25,
    title: "Lifestyle and luxury",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk25,
  },
  {
    id: 26,
    title: "Travel Industry",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk26,
  },
  {
    id: 27,
    title: "Food & Beverages",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk27,
  },
  {
    id: 28,
    title: "Magazine Advertising for FMCG Industry",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk28,
  },
  {
    id: 29,
    title: "FMCG / OTC Campaign",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk29,
  },
  {
    id: 30,
    title: "Creative Designing for Food & Beverages",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk30,
  },
  {
    id: 31,
    title: "OOH Advertising for Food & Beverages, Hospitality Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk31,
  },
  {
    id: 32,
    title: "Brand Awareness For HealthCare Industry",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk32,
  },
];

const tags = ["All", "Packaging", "Campaign", "Outdoor", "Events"];

const tagColors = {
  Packaging: "#b08d57",
  Campaign: "#7a9e7e",
  Outdoor: "#5b7fa6",
  Events: "#a0748a",
  All: "#888",
};

export default function OurWork() {
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tag === activeTag);

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: box-shadow 0.3s ease;
        }

        .project-card:hover .card-img {
          transform: scale(1.06);
        }

        .project-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.13);
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,15,10,0.72) 0%, rgba(20,15,10,0.1) 60%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          pointer-events: none;
        }

        .project-card:hover .hover-overlay {
          opacity: 1;
        }

        .hover-cta {
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding-bottom: 2px;
        }

        .filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 2px;
          border: 1px solid #ccc;
          background: transparent;
          cursor: pointer;
          transition: all 0.22s ease;
          color: #888;
        }

        .filter-btn:hover {
          border-color: #b08d57;
          color: #b08d57;
        }

        .filter-btn.active {
          background: #b08d57;
          border-color: #b08d57;
          color: #fff;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .card-img {
            height: 180px !important;
          }
        }

        @media (max-width: 560px) {
          .work-grid {
            grid-template-columns: 1fr !important;
            padding: 0 16px 60px !important;
          }
          .card-img {
            height: 220px !important;
          }
          .work-header {
            padding: 40px 16px 24px !important;
          }
          .work-filters {
            padding: 0 16px !important;
            gap: 8px !important;
          }
          .filter-btn {
            font-size: 11px !important;
            padding: 6px 13px !important;
          }
        }
      `}</style>

      {/* Header */}
      <div className="work-header" style={styles.header}>
        <p style={styles.subheading}>Mind Frame India's</p>
        <h1 style={styles.heading}>Creative Communication<br />& Advertising Campaigns</h1>
        <div style={styles.divider} />
      </div>

      {/* Filter Tabs */}
      <div className="work-filters" style={styles.filters}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="work-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src={project.image}
                alt={project.title}
                className="card-img"
              />
              <div className="hover-overlay">
                {/* <span className="hover-cta">View Project</span> */}
              </div>
            </div>

            <div style={styles.cardBody}>
              <span
                style={{
                  ...styles.tag,
                  background: tagColors[project.tag] + "18",
                  color: tagColors[project.tag],
                  borderColor: tagColors[project.tag] + "40",
                }}
              >
                {project.tag}
              </span>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardCategory}>{project.category}</p>
            </div>
          </div>
        ))}
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
    padding: "64px 24px 32px",
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b08d57",
    marginBottom: "10px",
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.25,
    marginBottom: "20px",
  },
  divider: {
    width: "48px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 40px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "1100px",
    margin: "0 auto 40px",
    padding: "0 24px",
  },
  cardBody: {
    padding: "16px 18px 20px",
    background: "#fff",
  },
  tag: {
    display: "inline-block",
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "2px",
    border: "1px solid",
    marginBottom: "10px",
    fontWeight: 500,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.4,
    marginBottom: "8px",
  },
  cardCategory: {
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#b08d57",
    fontWeight: 400,
  },
};





