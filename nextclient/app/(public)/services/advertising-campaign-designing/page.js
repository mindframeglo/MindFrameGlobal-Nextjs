'use client'

const services = [
  {
    id: 1,
    title: "Strategic Campaign Conceptualization",
    desc: "We strategically conceptualize creative campaigns that align with your brand's vision and goals. Our team works closely with you to understand your target audience, market trends, and business objectives to create campaigns that resonate and drive results.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="#b08d57" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Theme-Based Campaign Creation",
    desc: "We create all your strategic theme-based campaigns, content, and visuals that appeal to your target audience. Our creative team ensures every campaign tells a compelling story that connects with your customers on an emotional level.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 18l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 28h20" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Visual Content Development",
    desc: "Our team of talented designers creates stunning visuals that capture attention and communicate your brand message effectively. From graphics to videos, we ensure every visual element aligns with your campaign theme.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 28l10-8 8 6 6-5 4 7" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Campaign Supervision & Management",
    desc: "We supervise all deliverables to ensure you hit your campaign deadlines and achieve incredible results. Our project management team keeps everything on track, from concept to completion.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v12l6 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 6v4M24 38v4M8 24H4M44 24h-4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Results-Driven Campaigns",
    desc: "We focus on delivering incredible results through data-driven strategies and creative excellence. Our campaigns are designed to maximize engagement, conversions, and ROI for your brand.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6v36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Multi-Platform Campaign Execution",
    desc: "We execute your campaigns across multiple platforms including digital, print, social media, and outdoor advertising to ensure maximum reach and impact for your brand message.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="4" y="10" width="18" height="18" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="26" y="10" width="18" height="18" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="4" y="32" width="18" height="10" rx="2" stroke="#b08d57" strokeWidth="1.5" />
        <rect x="26" y="32" width="18" height="10" rx="2" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const benefits = [
  {
    id: 1,
    title: "Strategic Planning",
    desc: "We develop comprehensive campaign strategies that align with your business goals and target audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="12" r="3" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Creative Excellence",
    desc: "Our team brings award-winning creativity to every campaign, ensuring your brand stands out.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4L24 6z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Timely Delivery",
    desc: "We pride ourselves on meeting deadlines and delivering campaigns on schedule, every time.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v12l6 6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Measurable Results",
    desc: "We track and measure campaign performance to ensure you achieve incredible ROI.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
        <path d="M6 38l10-14 8 8 10-16 8 10" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 42h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.3px",
  },
  darkTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(28px, 4vw, 38px)",
    fontWeight: 700,
    color: "#1a1510",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.5px",
  },
  underline: {
    width: "60px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 24px",
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.75,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1510",
    textAlign: "center",
    margin: "18px 0 12px",
    letterSpacing: "-0.2px",
  },
};

function ServiceCard({ svc }) {
  return (
    <div className="service-card">
      <div className="service-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{benefit.icon}</div>
      <h3 style={{ ...styles.cardTitle, fontSize: "18px", margin: "16px 0 10px" }}>{benefit.title}</h3>
      <p style={{ ...styles.body, fontSize: "13px", textAlign: "center" }}>{benefit.desc}</p>
    </div>
  );
}

export default function CustomizedCampaignDesign() {
  return (
    <div style={styles.page}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .service-card {
            background: #fff;
            border: 1px solid #e8e2d9;
            border-radius: 12px;
            padding: 40px 28px 36px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
          }
          .service-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .service-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .service-card:hover .service-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .service-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .service-card:hover .service-icon svg stroke {
            stroke: #9a7842;
          }

          .benefit-card {
            background: #fff;
            border: 1px solid #e8e2d9;
            border-radius: 12px;
            padding: 32px 24px 28px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
          }
          .benefit-card:hover {
            box-shadow: 0 15px 30px rgba(176, 141, 87, 0.1);
            transform: translateY(-4px);
            border-color: #b08d57;
          }
          .benefit-icon {
            transition: transform 0.3s ease;
          }
          .benefit-card:hover .benefit-icon {
            transform: scale(1.05);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 640px) {
            .services-grid, .benefits-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .service-card {
              padding: 32px 24px 28px;
            }
          }

          .hero-section {
            position: relative;
            height: 500px;
            overflow: hidden;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .hero-title {
            font-family: 'DM Sans', sans-serif;
            font-size: clamp(32px, 5vw, 56px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -1.5px;
            line-height: 1.2;
            text-align: center;
            max-width: 900px;
            margin: 0 24px;
          }
          .hero-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(16px, 2vw, 20px);
            color: #b08d57;
            margin-top: 20px;
            letter-spacing: 4px;
            text-transform: uppercase;
          }
          .breadcrumb {
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            text-align: center;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px;
            letter-spacing: 2px;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase;
          }

          .intro-section {
            background: #fff;
            padding: 64px 24px 56px;
            border-bottom: 1px solid #e8e2d9;
          }

          .services-section {
            background: #f5f3ef;
            padding: 60px 0 40px;
          }

          .benefits-section {
            background: #fff;
            padding: 60px 0 40px;
          }

          .cta-section {
            background: linear-gradient(135deg, #1a1510 0%, #2a2015 100%);
            padding: 60px 24px;
          }

          .footer-strip {
            border-top: 1px solid #e8e2d9;
            padding: 28px 24px;
            text-align: center;
            background: #fff;
          }

          .mid-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }
          @media (max-width: 768px) {
            .mid-image {
              height: 250px;
            }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
          alt="Customized Campaign Design"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="hero-title">
            Creative Advertising<br />Campaign Designing
          </div>
          <div className="hero-subtitle">CUSTOMIZED SOLUTIONS FOR YOUR BRAND</div>
        </div>
      </div>

      {/* INTRO SECTION - EXACT CONTENT FROM REFERENCE */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "16px", lineHeight: 1.8 }}>
            We strategically conceptualize, create all your strategic theme based campaigns, content and visuals which appeal to your target audience. We also supervise all deliverables to ensure you hit your campaign deadlines and achieve incredible results.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="services-section">
        <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Our Campaign Design Services</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, maxWidth: "700px", margin: "16px auto 0", textAlign: "center" }}>
            We offer comprehensive campaign design solutions tailored to your brand's unique needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

      {/* MIDDLE IMAGE SECTION */}
      <div style={{ padding: "0 24px", marginBottom: "60px" }}>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=85"
          alt="Creative Campaign Team"
          className="mid-image"
          style={{ borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        />
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="benefits-section">
        <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Why Choose Us</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, maxWidth: "700px", margin: "16px auto 0", textAlign: "center" }}>
            We combine creativity, strategy, and execution to deliver campaigns that drive real results
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>

   


    </div>
  );
}


