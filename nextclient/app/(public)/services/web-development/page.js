'use client'

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 44h16M24 36v8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20l5 5-5 5M22 28h8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Extensive Industry Experience",
    desc: "Creatives Design Agency boasts a team of seasoned professionals with extensive experience in web development. They have successfully worked with clients from various industries, including e-commerce, healthcare, real estate, and more. Their deep industry knowledge allows them to understand the unique requirements of each business and tailor their solutions accordingly.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#b08d57" strokeWidth="2"/>
        <path d="M6 16h36M16 6v10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 28h12M18 34h8" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customized Website Development",
    desc: "Understanding that every business has its own identity, Creatives Design Agency adopts a personalized approach to website development. They take the time to understand your brand, target audience, and business objectives before crafting a bespoke website that reflects your vision. Whether you need a simple informational website or a complex e-commerce platform, they have the expertise to deliver outstanding results.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="2"/>
        <path d="M24 6v36M6 24h36" stroke="#b08d57" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="10" ry="18" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Stunning Visual Design",
    desc: "The team at Creatives Design Agency believes that aesthetics play a crucial role in capturing the attention of visitors. They combine stunning visual design elements with intuitive user interfaces to create websites that are visually appealing and easy to navigate. By incorporating your brand elements, they ensure that your website maintains a cohesive and professional look throughout.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="28" y="6" width="14" height="20" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="6" y="6" width="18" height="12" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="6" y="22" width="18" height="20" rx="2" stroke="#b08d57" strokeWidth="2"/>
        <rect x="28" y="30" width="14" height="12" rx="2" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Mobile-First Approach",
    desc: "With the majority of internet users accessing websites through mobile devices, having a mobile-friendly website is no longer a luxury but a necessity. Creatives Design Agency follows a mobile-first approach, ensuring that your website is fully responsive and optimized for seamless viewing across all screen sizes. This not only enhances user experience but also boosts your website's search engine rankings.",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="13" stroke="#b08d57" strokeWidth="2"/>
        <path d="M30 30l10 10" stroke="#b08d57" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 20h10M20 15v10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Search Engine Optimization (SEO) Expertise",
    desc: "Creatives Design Agency understands the importance of SEO in driving organic traffic to your website. They employ best practices in on-page optimization, including keyword research, meta tags, and optimized content, to enhance your website's visibility on search engines. By incorporating the relevant keywords strategically, they ensure that your website ranks higher in search results, attracting more potential customers.",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="10" width="28" height="20" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M32 18h8a4 4 0 014 4v6a4 4 0 01-4 4H32" stroke="#b08d57" strokeWidth="2"/>
        <circle cx="38" cy="24" r="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M10 38h28" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Seamless Integration and Functionality",
    desc: "A website is more than just a collection of web pages. It needs to seamlessly integrate with other business systems, such as customer relationship management (CRM) software, e-commerce platforms, and payment gateways. Creatives Design Agency excels in developing websites that have seamless integrations and advanced functionality, ensuring a smooth user experience and streamlined business processes.",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" stroke="#b08d57" strokeWidth="2"/>
        <path d="M4 24h40M24 4c-5.5 6-8 13-8 20s2.5 14 8 20M24 4c5.5 6 8 13 8 20s-2.5 14-8 20" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Domain Registration, Hosting & Deployment",
    desc: "We help you design and develop the best website for your business.",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="10" y="4" width="28" height="40" rx="4" stroke="#b08d57" strokeWidth="2"/>
        <path d="M18 36h12M22 10h4" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <rect x="16" y="16" width="16" height="14" rx="2" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "Mobile App Design & Development",
    desc: "People are engaging with their phones in crucial moments. We make sure to give the best quality of mobile app's user experience.",
  },
  {
    id: 9,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M6 36h8v4H6zM20 28h8v12h-8zM34 20h8v20h-8z" stroke="#b08d57" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 28l8-8 8 4 10-14" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "E-commerce Website Design",
    desc: "We help you in the easiest way to open a store where the whole world can visit and buy your products or services.",
  },
  {
    id: 10,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="4" y="8" width="40" height="32" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M4 16h40" stroke="#b08d57" strokeWidth="2"/>
        <path d="M15 26h18M15 32h12" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="12" r="2" fill="#b08d57"/>
        <circle cx="16" cy="12" r="2" fill="#b08d57"/>
      </svg>
    ),
    title: "Website Development & Maintenance",
    desc: "We develop websites and back-end services so that you don't have to worry about time consuming scripting and programming to build and maintain your website. We are consistent in checking your website if there are any issues and mistakes and keep it updated and relevant.",
  },
  {
    id: 11,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 22l6 6 10-10" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18h36" stroke="#b08d57" strokeWidth="2"/>
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Our UI designers make sure the application's interface is attractive, visually-stimulating and themed appropriately to match the purpose. Our UI designers are tasked with deciding how the user interface will look. UX designers are in charge of determining how the user interface operates.",
  },
  {
    id: 12,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="#b08d57" strokeWidth="2"/>
        <path d="M24 14v10l7 4" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 36l6-6M40 36l-6-6" stroke="#b08d57" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Scraping / Competitive Analysis",
    desc: "We develop a website design that has an impressive user interface which will result in a much better conversion rate, and will lead to better business and revenue.",
  },
  {
    id: 13,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="#b08d57" strokeWidth="2"/>
        <path d="M16 24h16M24 18l6 6-6 6" stroke="#b08d57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18h32" stroke="#b08d57" strokeWidth="2"/>
        <circle cx="13" cy="14" r="2" fill="#b08d57"/>
      </svg>
    ),
    title: "Email Hosting Services",
    desc: "We offer reliable, secure email hosting that helps your brand look sharp. With us, your emails don't just get delivered, they make an impression. It's not just email, it's your brand voice, elevated.",
  },
];

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    marginBottom: "12px",
  },
  titleUnderline: {
    width: "40px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 20px",
  },
  bodyText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.85,
    maxWidth: "860px",
    margin: "0 auto",
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1a1510",
    marginBottom: "12px",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    color: "#777",
    lineHeight: 1.75,
  },
};

import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

export default function WebDevelopment() {
  return (
    <>
      <SEO 
        title={seoConfig.services.webDevelopment.title}
        description={seoConfig.services.webDevelopment.description}
        keywords={seoConfig.services.webDevelopment.keywords}
        path={seoConfig.services.webDevelopment.path}
      />
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .service-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 6px;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 8px 32px rgba(176,141,87,0.14);
          transform: translateY(-5px);
          border-color: #b08d57;
        }
        .svc-icon {
          margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .service-card:hover .svc-icon {
          transform: scale(1.12);
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80"
          alt="Web Design"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 9vw, 110px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}>
            Web <span style={{ color: "#b08d57" }}>Design</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#b08d57",
            marginTop: "20px",
          }}>
            Creating Engaging and Effective Web Solutions
          </p>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Intro */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2 style={styles.sectionTitle}>Creating Engaging and Effective Web Solutions</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            In today's digital age, having a strong online presence is crucial for businesses to succeed. A well-designed and optimized website can be a powerful tool for attracting customers and generating leads. When it comes to website development in Mumbai, you need a reliable agency that understands the dynamics of the local market and can deliver top-notch solutions. In this article, we will explore the best website development agency in Mumbai that excels in creating engaging and effective web solutions.
          </p>
        </div>

        {/* Power of Web */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2 style={styles.sectionTitle}>The Power of Web Design and Development</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            Web design and development play a pivotal role in shaping a user's perception of your brand. A visually appealing and user-friendly website can leave a lasting impression, driving conversions and fostering customer loyalty. It is essential to partner with a website development agency that has a deep understanding of design principles, user experience, and search engine optimization (SEO). By leveraging the expertise of such an agency, you can ensure that your website stands out in the competitive online landscape.
          </p>
        </div>

        {/* Meet */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={styles.sectionTitle}>Meet the Best Website Development Agency in Mumbai</h2>
          <div style={styles.titleUnderline} />
          <p style={styles.bodyText}>
            Creatives Design Agency is the epitome of excellence when it comes to website development in Mumbai. With their innovative approach and meticulous attention to detail, they have earned a reputation for delivering outstanding web solutions that align with their clients' business goals. Let's delve into what sets them apart from the competition.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-3">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="svc-icon">{svc.icon}</div>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  );
}


