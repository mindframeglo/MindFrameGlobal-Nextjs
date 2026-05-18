'use client'

import { useState } from "react";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
const bannerImage = '/assets/news-room/banner.jpg';
const img1 = '/assets/news-room/2016-1.jpg';
const img2 = '/assets/news-room/2016-2.jpg';
const img3 = '/assets/news-room/2017-1.jpg';
const img4 = '/assets/news-room/2017-2.jpg';
const img5 = '/assets/news-room/2018-1.jpg';
const img6 = '/assets/news-room/2018-2.jpg';
const img7 = '/assets/news-room/2018-3.png';
const img8 = '/assets/news-room/2020.png';
const img9 = '/assets/news-room/2021-1.png';
const img10 = '/assets/news-room/2021-2.png';
const img11 = '/assets/news-room/2021-3.png';
const img12 = '/assets/news-room/2021-4.png';
const img13 = '/assets/news-room/2022-1.jpg';
const img14 = '/assets/news-room/2022-2.png';
const img15 = '/assets/news-room/2022-3.jpg';
const img16 = '/assets/news-room/2022-4.png';
const img17 = '/assets/news-room/2023-1.png';
const img18 = '/assets/news-room/2023-2.png';
const img19 = '/assets/news-room/2023-3.png';
const img20 = '/assets/news-room/2023-4.png';
const img21 = '/assets/news-room/2023-5.png';
const img22 = '/assets/news-room/2023-6.png';
const img23 = '/assets/news-room/2024-1.jpg';
const img24 = '/assets/news-room/2024-2.png';
const img25 = '/assets/news-room/2024-3.jpg';





const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
};

const newsData = {
  2024: [
    { id: 1, title: "A Timeless Anthem: 8 Years & Counting…", image: img25},
    { id: 2, title: "Mind Frame India Secures Fashion Week Brand Mandate for TOTS Couture Week", image: img24 },
    { id: 3, title: "Mind Frame India Wins Rirasa: Elevating Luxury Indian Fashion to New Heights", image: img23 },
  ],
  2023: [
    { id: 4, title: "Mind Frame India Revamps Realty Brands Post-Pandemic with Strategic Digital Campaigns", image: img22 },
    { id: 5, title: "Revamping Jayashri Gaytri Foods Pvt Ltd – From Bhopal to New York", image: img21 },
    { id: 6, title: "Mind Frame India’s Influencer Campaigns Propel Kolorr to New Heights", image: img20 },
    { id: 7, title: "Mind Frame India Transforms Nesco Foods With Successful QSR Launches & Branding of Gourmet Craft", image: img19 },
    { id: 8, title: "Mind Frame India’s Barter Strategy Delivers Massive Reach for Persian Darbar", image: img18 },
    { id: 9, title: "Transforming Geeta Aluminium: A Case Study of Strategic Branding Success", image: img17 },
  ],
  2022: [
    { id: 10, title: "Mind Frame India Drives Online Sales For Arijit Singh and Pankaj Udhas Ji Concerts in Arizona", image: img16 },
    { id: 11, title: "Mind Frame India Chooses Nawazuddin Siddiqui for Bharat Agri Kisan App Campaign", image: img15 },
     { id: 12, title: "Mind Frame India Takes Thane Realty by Storm With Strategic Campaigns for Four Competing Brands", image: img14 },
    { id: 13, title: "Roping in Celebrity Couple Shreyas & Prarthana for West Pioneer’s Metro Grande: A Mind Frame India Success Story", image: img13 },
  ],
  2021: [
    { id: 14, title: "Mind Frame India Bags Digital Marketing Mandate for Mahatta Art", image: img12 },
    { id: 15, title: "Creating a Landmark AYUSKA by Avadh :- Your Organic life Begins Here", image: img11 },
     { id: 16, title: "Mind Frame India Powers Hdfc’s Largest Retail Webinar to Unprecedented Success", image: img10 },
    { id: 17, title: "Ayuska by Avach Crafting Longevity in Real Estate Marketing", image: img9 },
  ],
  2020: [
    { id: 18, title: "Mind Frame India Elevates Travel Brands to New Heights With Innovative Marketing Strategies", image: img8 },
  ],

  2018: [
    { id: 19, title: "Mind Frame India Reignites Supreme’s Market Presence with a Vibrant Campaign", image: img5 },
    { id: 20, title: "How Mind Frame India Won the Supreme Furniture Mandate", image: img6 },
        { id: 21, title: "Mind Frame India’s Innovative Campaign for Aditya Birla Memorial Hospital", image: img7 },

  ],
  2017: [
    { id: 22, title: "In the campaign conceptualised by Mind Frame India, Aditya Birla Memorial Hospital gives hope to cancer patients with its ‘Ummeed’ campaign", image: img3 },
    { id: 23, title: "Javed Ali marks debut as a Music Director for Ummeed, a cancer awareness campaign launched by Aditya Birla Memorial Hospital", image: img4 },
  ],
  2016: [
    { id: 24, title: "Ummeed: Illuminating Hope in the Journey Against Cancer – Mind Frame India’s Compassionate Campaign for Aditya Birla Memorial Hospital", image: img1 },
    { id: 25, title: "Ummeed: The Journey Behind the Music – Raising Cancer Awareness for ABMH Hospital", image: img2 },
  ],
};

const years = [2024, 2023, 2022, 2021, 2020, 2018, 2017, 2016];

export default function NewsRoom() {
  const [openYears, setOpenYears] = useState({ 2024: true });

  const toggle = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <>
      <SEO 
        title={seoConfig.newsroom.title}
        description={seoConfig.newsroom.description}
        keywords={seoConfig.newsroom.keywords}
        path={seoConfig.newsroom.path}
      />
      <div style={styles.page}>
      <style>{`

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-title-black {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 900;
          color: #111;
          line-height: 1;
          letter-spacing: -2px;
        }
        .hero-title-gold {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 700;
          color: #b08d57;
          line-height: 1;
          letter-spacing: -2px;
        }

        .news-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          flex: 0 0 300px;
          height: 200px;
          transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 48px rgba(0,0,0,0.2);
        }

        .news-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .news-card:hover img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,8,5,0.85) 0%, rgba(10,8,5,0.1) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .news-card:hover .card-overlay {
          opacity: 1;
        }

        .card-overlay-text {
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
        }

        .year-row {
          border-top: 1px solid #e0d9ce;
          padding: 18px 0;
          cursor: pointer;
          transition: background 0.2s;
          user-select: none;
        }

        .year-row:hover .year-label {
          color: #b08d57;
        }

        .year-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #555;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .year-label.open {
          color: #1a1510;
          font-weight: 500;
        }

        .scroll-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding: 6px 0 20px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #b08d57 #f0ece4;
        }

        .scroll-track::-webkit-scrollbar { height: 4px; }
        .scroll-track::-webkit-scrollbar-thumb { background: #b08d57; border-radius: 2px; }
        .scroll-track::-webkit-scrollbar-track { background: #f0ece4; }

        .accordion-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
        }

        .breadcrumb {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #b08d57;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        @media (max-width: 600px) {
          .news-card { flex: 0 0 240px; height: 160px; }
          .hero-section { height: 240px !important; }
        }
      `}</style>

      {/* HERO BANNER */}
      <div
        className="hero-section"
        style={{
          position: "relative",
          height: "360px",
          overflow: "hidden",
          background: "#1a1510",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
            filter: "grayscale(100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(250,248,245,0.55) 0%, rgba(250,248,245,0.15) 100%)",
          }}
        />
       
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            zIndex: 2,
            flexWrap: "wrap",
            padding: "0 24px",
          }}
        >
          <span className="hero-title-black">News</span>
          <span className="hero-title-gold">Room</span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {years.map((year, i) => {
          const isOpen = !!openYears[year];
          const items = newsData[year] || [];
          return (
            <div key={year}>
              {/* Year Row */}
              <div className="year-row" onClick={() => toggle(year)}>
                <div className={`year-label ${isOpen ? "open" : ""}`}>
                  <span
                    style={{
                      fontSize: "18px",
                      color: isOpen ? "#b08d57" : "#aaa",
                      lineHeight: 1,
                      width: "20px",
                      textAlign: "center",
                    }}
                  >
                    {isOpen ? "—" : "+"}
                  </span>
                  {year} Newsroom
                </div>
              </div>

              {/* Accordion Body */}
              <div
                className="accordion-body"
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="scroll-track">
                  {items.map((item) => (
                    <div key={item.id} className="news-card">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="card-overlay">
                        <p className="card-overlay-text">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {i === years.length - 1 && (
                <div style={{ borderTop: "1px solid #e0d9ce" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}



