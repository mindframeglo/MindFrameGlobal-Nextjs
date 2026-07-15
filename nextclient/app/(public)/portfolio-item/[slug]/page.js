"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import SEO from '@/components/SEO';

const gold = "#c9a84c";
const goldLight = "#e8c87a";

const portfolioData = {

  "mind-frame-india-drives-online-sales-for-arijit-singh-and-pankaj-udhas-ji-concerts-in-arizona": {
    title: "Mind Frame India Drives Online Sales for Arijit Singh and Pankaj Udhas Ji Concerts in Arizona",
    desc: "Mind Frame India successfully managed the online ticket sales for highly anticipated concerts featuring Arijit Singh and Pankaj Udhas Ji in Arizona. By targeting both Indian and non-Indian communities, the campaign sold 7,000 tickets in just a couple of weeks, showcasing the agency’s prowess in event marketing. The Challenge Organizing ticket sales for major concerts involves reaching a diverse audience and ensuring high turnout. The challenge was to generate significant online sales and create excitement among both Indian and non-Indian communities in Arizona.",
    ProjectType: "Live Concert Management, Social Media Campaigns for Concerts",
    ClientName: "Desi Jhatka",
    images: [
  "/assets/work/wrk1-1.png",
  "/assets/work/wrk1-2.png",
  "/assets/work/wrk1-3.png",
  "/assets/work/wrk1-4.png",
  "/assets/work/wrk1-5.png",
  "/assets/work/wrk1-6.png",
  "/assets/work/wrk1-7.png",
    "/assets/work/wrk1-8.png",
  "/assets/work/wrk1-9.png",
  "/assets/work/wrk1-10.png",

],




  },
    "hdfc-indias-largest-webinar-and-digital-marketing-strategy": {
    title: "HDFC - India's Largest Webinar & Digital Marketing Strategy",
    desc: "In an era where digital engagement is paramount, HDFC sought to revolutionize its approach to customer interaction and brand positioning. Collaborating with Mind Frame India, HDFC aimed to conduct India’s largest webinar, “Let’s Talk Retail,” coupled with an extensive digital marketing strategy to reinforce its market leadership.",
    ProjectType: "Creative for Retail Webinar, Webinar Planning and Promotion, Email Marketing",
    ClientName: "HDFC",
    images: [  "/assets/work/work2.png"],
  },
  "content-creation-and-design-solutions-for-canon": {
    title: "Canon - Content Creation and Design Solutions for Canon",
    desc: "Mind Frame Global partnered with Canon to deliver a range of content writing and creative design services. Our work included print design, outdoor design, and the creation of brochures, emailers, and product brochures. We crafted engaging content and visually appealing designs to enhance Canon’s marketing materials and product presentations.",
    ProjectType: "Content Creation and Design Solutions for Canon",
    ClientName: "Canon - Photograph Company",
    images: ["/assets/work/wrk3-1.png",
      "/assets/work/wrk3-2.png",
            "/assets/work/wrk3-3.png",
      "/assets/work/wrk3-4.png",
      "/assets/work/wrk3-5.png",
      "/assets/work/wrk3-6.png",
      "/assets/work/wrk3-7.png",
    ],
  },
  "us-india": {
    title: "USIPI - Marketing, Website Development for Usipis Donation Drive",
    desc: "Mind Frame Global supported Usipi with a full-service approach for their donation drive and fundraising events. We provided website development and design, content creation, social media marketing, Google advertising, lead generation, and creative designing. Our strategy enhanced Usipis online presence, driving more donations and engagement through targeted campaigns and optimized user experiences. The Challenge Usipi needed an integrated digital marketing solution to promote their donation drive and fundraising events. They required a website, compelling content, and advertising strategies to increase visibility, attract donors, and generate leads for their cause.",
    ProjectType: "Marketing, Website Development for Usipis Donation Drive",
     ClientName: "USIPI - US India Policy Institute",
    images: ["/assets/work/work4.png"],
  },
  "bismaa-corp": {
    title: "USIPI - UI/UX Design, Website Development & SEO for BISMA",
    desc: " Mind Frame Global partnered with BISMA to deliver a comprehensive suite of services, including UI/UX design, website development, content creation, SEO, and creative business presentations. Our team designed a user-friendly website with optimized content, ensuring a seamless user experience. We also implemented strategic SEO to enhance BISMAs online visibility and drive organic traffic.",
    ProjectType: "UI/UX Design, Website Development & SEO for BISMA",
    ClientName: "BISMA CORP - dedicated to revolutionizing your data management journey for BISMA",
    images: ["/assets/work/work5.png"],
  },
  "shahi-zaikha": {
    title: "Branding Solutions for Shahi Zaikha",
    desc: "Mind Frame Global provided comprehensive branding services for Shahi Zaikha, a premium catering service based in San Francisco. Our team developed a cohesive brand identity that reflected the essence of their culinary offerings, including logo design, color schemes, and visual aesthetics that positioned them as a standout in the catering industry",
    ProjectType: "Branding Solutions for Shahi Zaikha",
    ClientName: "Shahi Zaikha - Family Restaurant",
    images: ["/assets/work/work6.png"],
  },
  "perkin-elmer": {
    title: "PerkinElmer Digital Growth Strategy",
    desc: "PerkinElmer aimed to enhance its market presence and drive business growth with a focused Digital Strategy. We provided a suite of services, including Creative Designing, Social Media Marketing, Digital Marketing, Event Pramotion, and Performance Marketing. Our approach was designed to elevate brand visibility, foster engagement, and ultimately boost their market share.",
    ProjectType: "PerkinElmer Digital Growth Strategy",
    ClientName: "PerkinElmer’s - Analytical & Enterprise Solutions business",
    images: [
      
      "/assets/work/wrk7-1.png",
      "/assets/work/wrk7-2.png",
      "/assets/work/wrk7-3.png",
      "/assets/work/wrk7-4.png",
    ],
    
  },
  "marashli-shoes": {
    title: "Website Design & Branding for Marashali",
    desc: "Mind Frame Global partnered with Marashali to deliver a holistic approach, including website design, branding, social media management, creative designing, and performance marketing. Our team also assisted with personal branding strategies, helping Marashali establish a strong digital identity and effectively engage their target audience.",
    ProjectType: "Website Design & Branding for Marashali",
    ClientName: "Marashli Shoes - Step into Luxury with Handcrafted Leather Shoes",
    images: ["/assets/work/work8.png"],
  },
};

// ─── Styles ────────────────────────────────────────────────────────────────
const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .portfolio-page {
    font-family: Georgia, serif;
    background: #fff;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    min-height: 600px;
  }

  .image-panel {
    background: #f0f0f0;
    overflow: hidden;
    height: 100%;
  }

  .carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-track {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .image-slide {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
  }

  .image-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    background: rgba(255,255,255,0.9);
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    color: #1a1a1a;
    box-shadow: 0 2px 14px rgba(0,0,0,0.18);
    transition: background 0.2s, color 0.2s;
    line-height: 1;
    user-select: none;
  }

  .arrow-btn:hover { background: ${gold}; color: #fff; }
  .arrow-btn.prev  { left: 14px; }
  .arrow-btn.next  { right: 14px; }

  .img-counter {
    position: absolute;
    top: 14px;
    right: 14px;
    background: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 11px;
    font-family: Georgia, serif;
    letter-spacing: 1px;
    padding: 4px 11px;
    border-radius: 20px;
    z-index: 20;
    user-select: none;
  }

  .dot-row {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 20;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .dot.active {
    background: ${gold};
    transform: scale(1.4);
  }

  .details-panel {
    padding: 64px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
    height: 100%;
  }

  .product-title {
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 900;
    color: #1a1a1a;
    margin: 0 0 28px;
    line-height: 1.2;
  }

  .product-desc {
    font-size: 14px;
    color: #555;
    line-height: 1.9;
    margin: 0 0 40px;
  }

  .meta-section {
    border-top: 1px solid #eee;
    padding-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .meta-label {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .meta-value     { font-size: 13px; color: #777; margin: 0; }
  .meta-value.cat { color: #999; }

  .back-btn {
    display: inline-block;
    margin-top: 40px;
    padding: 12px 28px;
    background: ${gold};
    color: #fff;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: background 0.2s, transform 0.15s;
    border-radius: 2px;
    align-self: flex-start;
  }

  .back-btn:hover {
    background: ${goldLight};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
      height: auto;
      min-height: unset;
    }

    .image-panel {
      height: 75vw;
      max-height: 460px;
      min-height: 260px;
    }

    .arrow-btn       { width: 36px; height: 36px; font-size: 18px; }
    .arrow-btn.prev  { left: 10px; }
    .arrow-btn.next  { right: 10px; }
    .img-counter     { font-size: 10px; top: 10px; right: 10px; }

    .details-panel {
      padding: 32px 20px 48px;
      height: auto;
      overflow-y: visible;
    }

    .product-title { font-size: clamp(20px, 6vw, 28px); margin-bottom: 16px; }
    .product-desc  { margin-bottom: 28px; font-size: 13.5px; }

    .back-btn {
      margin-top: 32px;
      align-self: stretch;
      text-align: center;
      padding: 14px 24px;
      font-size: 12px;
    }

    .meta-section { gap: 16px; padding-top: 20px; }
  }

  @media (max-width: 400px) {
    .details-panel { padding: 24px 16px 40px; }
    .product-title { font-size: 19px; }
    .dot           { width: 7px; height: 7px; }
  }
`;

// ─── Image Carousel ────────────────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  const [activeImg, setActiveImg] = useState(0);
  const total = images.length;

  const prev = () => setActiveImg((i) => (i - 1 + total) % total);
  const next = () => setActiveImg((i) => (i + 1) % total);

  const [touchStart, setTouchStart] = useState(null);
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div className="image-panel">
      <div className="carousel-wrapper" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="image-track" style={{ transform: `translateX(-${activeImg * 100}%)` }}>
          {images.map((src, i) => (
            <div className="image-slide" key={i}>
              <img src={src} alt={`${title} — view ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button className="arrow-btn prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="arrow-btn next" onClick={next} aria-label="Next">&#8250;</button>
            <span className="img-counter">{activeImg + 1} / {total}</span>
            <div className="dot-row">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === activeImg ? " active" : ""}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PortfolioDetail({ params }) {
  const { slug } = use(params);
  const product = portfolioData[slug];

  if (!product) return notFound();

  return (
    <>
      <SEO
        title={product.title}
        description={product.desc}
        keywords={product.ProjectType}
        path={`/portfolio-item/${slug}`}
        image={product.images?.[0]}
        type="article"
      />
      <style>{styles}</style>
      <div className="portfolio-page">
        <div className="portfolio-grid">
          <ImageCarousel images={product.images} title={product.title} />
          <div className="details-panel">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-desc">{product.desc}</p>
            <div className="meta-section">
              <div>
                <p className="meta-label">Client Name:</p>
                <p className="meta-value">{product.ClientName}</p>
              </div>
              <div>
                <p className="meta-label">ProjectType:</p>
                <p className="meta-value cat">{product.ProjectType}</p>
              </div>
            </div>
            <Link href="/our-work" className="back-btn">
              ← Back to Our Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}