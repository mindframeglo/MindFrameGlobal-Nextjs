// 'use client'

// /**
//  * About Page — Updated Design (Mindframe India)
//  */

// import { useEffect, useRef, useState } from 'react';
// import SEO from '@/components/SEO';
// import { seoConfig } from '@/config/seoConfig';

// const gold = '#c9a84c';

// const skills = [
//   { label: 'Digital Marketing', value: 96 },
//   { label: 'Branding Solutions', value: 90 },
//   { label: 'Creative Designing', value: 93 },
//   { label: 'Print Media Creative', value: 89 },
//   { label: '2D / 3D Animation', value: 76 },
//   { label: 'Website Development', value: 95 },
//   { label: 'Mobile App Development', value: 90 },
//   { label: 'Corporate Films & TVCs', value: 80 },
// ];

// const sections = [
//   {
//     title: 'Our Vision',
//     text: `Our vision lies in creating a subtle marketplace for all big-small businesses by providing win-win opportunities in the digital world. We understand our clients' requirements and then serve them a broad spectrum of services blended with creativity, technology, and innovation.`,
//   },
//   {
//     title: 'Our Mission',
//     text: `Our mission is to become a leading Advertising Agency for the top global brands in the market. We have been providing the perfect balance between strategy, creativity, and on-target digital marketing to our clients. And so we look forward to continuing the legacy of delivering the result-oriented services to the business that seek our assistance.`,
//   },
//   {
//     title: 'Our Commitment',
//     text: [
//       `Our Commitment is to give value to your business and help you soar beyond the horizons of success.`,
//       `Together we can develop innovative solutions to all your online and offline advertising and marketing dilemmas. To which, we need you to provide us with sufficient understanding of your business, company, services, products, competitors and the market you operate in.`,
//       `Without this critical information, a plan for a successful advertising campaign is nothing more than a matchstick expecting the sun to ignite it.`,
//     ],
//   },
// ];

// function SkillBar({ label, value, animate }) {
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
//         <span style={{ fontSize: 13, color: '#333' }}>{label}</span>
//         <strong style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{value}%</strong>
//       </div>
//       <div style={{ height: 4, background: '#e0ddd5', overflow: 'hidden' }}>
//         <div
//           style={{
//             height: 4,
//             background: gold,
//             width: animate ? `${value}%` : '0%',
//             transition: 'width 1.2s ease',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   const skillsRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
//       { threshold: 0.2 }
//     );
//     if (skillsRef.current) observer.observe(skillsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const bodyText = { fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 18px' };

//   return (
//     <>
//       <SEO 
//         title={seoConfig.about.title}
//         description={seoConfig.about.description}
//         keywords={seoConfig.about.keywords}
//         path={seoConfig.about.path}
//       />
//       <div style={{ background: '#f7f6f2', fontFamily: 'Georgia, serif', color: '#1a1a1a', minHeight: '100vh' }}>
//       <style>{`
//         .about-wrapper {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 56px 48px 80px;
//         }

//         .about-top-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 56px;
//           margin-bottom: 64px;
//           align-items: flex-start;
//         }

//         .about-divider {
//           border: none;
//           border-top: 1px solid #ddd;
//           margin: 0 0 48px;
//         }

//         @media (max-width: 768px) {
//           .about-wrapper {
//             padding: 36px 20px 60px;
//           }

//           .about-top-grid {
//             grid-template-columns: 1fr;
//             gap: 40px;
//             margin-bottom: 40px;
//           }

//           .about-title {
//             font-size: 26px !important;
//             margin-bottom: 28px !important;
//           }

//           .about-section-title {
//             font-size: 18px !important;
//           }
//         }

//         @media (max-width: 480px) {
//           .about-wrapper {
//             padding: 28px 16px 48px;
//           }

//           .about-title {
//             font-size: 22px !important;
//           }
//         }
//       `}</style>

//       <div className="about-wrapper">

//         {/* Title */}
//         <h1
//           className="about-title"
//           style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', margin: '0 0 40px', letterSpacing: 0 }}
//         >
//           About Us
//         </h1>

//         {/* Top Two Column */}
//         <div className="about-top-grid">

//           {/* Left: Text */}
//           <div>
//             <p style={bodyText}>
//               Mind Frame India, a leading Agency in the Advertising world, was established on the 6th Oct 2009.
//             </p>
//             <p style={bodyText}>
//               It has a panel of Creative Directors who happen to be marketing evangelists, brand strategists, creative
//               writers & filmmakers by profession. The team has successfully managed to create advertisements for many
//               leading brands including Microsoft, HP, and Dell to name a few. Working with several marketing agencies &
//               media companies helped Mind Frame gain an enormous amount of strategic experience that helped in initiating
//               and accomplishing many successful creative marketing projects.
//             </p>
//             <p style={{ ...bodyText, marginBottom: 0 }}>
//               Mind Frame has sourced the best creative talent in the industry lets it meet the challenges and demands of
//               the advertising world with also servicing the requirements of its clients. Mind Frame team comprises
//               Creative Marketing & Communication Professionals, Art Directors, Business & Creative Heads, Concept
//               Designers, Copywriters, Content Creators, Production Supervisors & Designers who work together to create
//               the most memorable and sophisticated experience for its Clientele.
//             </p>
//           </div>

//           {/* Right: Skill Bars */}
//           <div ref={skillsRef}>
//             {skills.map((s) => (
//               <SkillBar key={s.label} label={s.label} value={s.value} animate={animate} />
//             ))}
//           </div>
//         </div>

//         {/* Vision / Mission / Commitment */}
//         {sections.map((sec, i) => (
//           <div key={i}>
//             <hr className="about-divider" />
//             <div style={{ marginBottom: 52 }}>
//               <h2
//                 className="about-section-title"
//                 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 20px' }}
//               >
//                 {sec.title}
//               </h2>
//               {Array.isArray(sec.text) ? (
//                 sec.text.map((para, j) => (
//                   <p key={j} style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 10px' }}>
//                     {para}
//                   </p>
//                 ))
//               ) : (
//                 <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: 0 }}>{sec.text}</p>
//               )}
//             </div>
//           </div>
//         ))}

//       </div>
//       </div>
//     </>
//   );
// }


















'use client'

/**
 * About Page — Updated Design (Mindframe India)
 * Includes SEO FAQ section for Mumbai agency keywords
 */

import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const gold = '#c9a84c';

const skills = [
  { label: 'Digital Marketing', value: 96 },
  { label: 'Branding Solutions', value: 90 },
  { label: 'Creative Designing', value: 93 },
  { label: 'Print Media Creative', value: 89 },
  { label: '2D / 3D Animation', value: 76 },
  { label: 'Website Development', value: 95 },
  { label: 'Mobile App Development', value: 90 },
  { label: 'Corporate Films & TVCs', value: 80 },
];

const sections = [
  {
    title: 'Our Vision',
    text: `Our vision lies in creating a subtle marketplace for all big-small businesses by providing win-win opportunities in the digital world. We understand our clients' requirements and then serve them a broad spectrum of services blended with creativity, technology, and innovation.`,
  },
  {
    title: 'Our Mission',
    text: `Our mission is to become a leading Advertising Agency for the top global brands in the market. We have been providing the perfect balance between strategy, creativity, and on-target digital marketing to our clients. And so we look forward to continuing the legacy of delivering the result-oriented services to the business that seek our assistance.`,
  },
  {
    title: 'Our Commitment',
    text: [
      `Our Commitment is to give value to your business and help you soar beyond the horizons of success.`,
      `Together we can develop innovative solutions to all your online and offline advertising and marketing dilemmas. To which, we need you to provide us with sufficient understanding of your business, company, services, products, competitors and the market you operate in.`,
      `Without this critical information, a plan for a successful advertising campaign is nothing more than a matchstick expecting the sun to ignite it.`,
    ],
  },
];

const faqs = [
  {
    question: 'Is Mind Frame India one of the best television advertising agencies in Mumbai?',
    answer:
      'Yes. Mind Frame India has been crafting high-impact TV ad campaigns since 2009. Our team of Creative Directors, filmmakers, and brand strategists has produced TVCs for leading brands across industries. From concept to final broadcast, we handle every stage of television advertising — scripting, production, media planning, and placement — making us one of Mumbai\'s most trusted names in TV advertising.',
  },
  {
    question: 'What TV ad campaigns and services does Mind Frame offer in Mumbai?',
    answer:
      'Mind Frame India offers end-to-end television campaign services including TVC concept development, scriptwriting, video production, post-production, 2D/3D animation integration, and media buying for regional and national TV channels. We have successfully delivered campaigns for brands across FMCG, real estate, retail, education, and healthcare sectors in Mumbai and beyond.',
  },
  {
    question: 'Why is Mind Frame India considered a leading branding company in Mumbai?',
    answer:
      'Mind Frame India brings together brand strategists, art directors, copywriters, and concept designers who collaborate to build brands from the ground up. We offer complete brand identity services — including logo design, brand guidelines, visual language, packaging, and communication strategy — tailored to your market and audience. Our work for brands like Microsoft, HP, and Dell reflects our capability to deliver at the highest level.',
  },
  {
    question: 'What digital marketing and advertising services does Mind Frame India provide in Mumbai?',
    answer:
      'As a full-service Digital Marketing & Advertising Agency in Mumbai, Mind Frame India covers SEO, social media marketing, paid advertising (Google Ads, Meta Ads), content marketing, email campaigns, performance analytics, and influencer marketing. We blend data-driven strategies with creative storytelling to grow your brand visibility and generate measurable business results across all digital platforms.',
  },
  {
    question: 'Does Mind Frame India offer media buying and media planning services in Mumbai?',
    answer:
      'Absolutely. Our media buying team negotiates the best rates across TV, print, outdoor, digital, and radio platforms. We design customised media plans based on your target audience, campaign goals, and budget — ensuring maximum reach and ROI. Whether you need a hyperlocal Mumbai campaign or a pan-India rollout, Mind Frame handles the full media mix strategically.',
  },
  {
    question: 'What brand identity services does Mind Frame India offer as a branding agency in Mumbai?',
    answer:
      'Mind Frame India offers comprehensive brand identity services including logo design, brand naming, tagline development, color palettes, typography systems, brand style guides, stationery, signage, and digital brand assets. We ensure your brand communicates consistently and confidently across every touchpoint — online and offline — building trust and recognition in the Mumbai market and nationally.',
  },
  {
    question: 'Does Mind Frame India provide Virtual Reality (AR & VR) solutions in Mumbai?',
    answer:
      'Yes. Mind Frame India offers immersive AR (Augmented Reality) and VR (Virtual Reality) experiences for brands looking to stand out. From virtual product demos and 360° brand experiences to AR filters and interactive installations, our tech-creative team builds cutting-edge immersive solutions tailored to your marketing and communication objectives. We are one of the few agencies in Mumbai combining creative advertising with advanced immersive technology.',
  },
];

function SkillBar({ label, value, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: '#333' }}>{label}</span>
        <strong style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{value}%</strong>
      </div>
      <div style={{ height: 4, background: '#e0ddd5', overflow: 'hidden' }}>
        <div
          style={{
            height: 4,
            background: gold,
            width: animate ? `${value}%` : '0%',
            transition: 'width 1.2s ease',
          }}
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #ddd',
        padding: '0',
      }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 0',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#1a1a1a',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontSize: 20,
            color: gold,
            fontWeight: 400,
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            display: 'inline-block',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: '#444',
            lineHeight: 1.9,
            margin: '0 0 18px',
            fontFamily: 'Georgia, serif',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const bodyText = { fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 18px' };

  return (
    <>
      <SEO 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        path={seoConfig.about.path}
      />
      <div style={{ background: '#f7f6f2', fontFamily: 'Georgia, serif', color: '#1a1a1a', minHeight: '100vh' }}>
      <style>{`
        .about-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 48px 80px;
        }

        .about-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          margin-bottom: 64px;
          align-items: flex-start;
        }

        .about-divider {
          border: none;
          border-top: 1px solid #ddd;
          margin: 0 0 48px;
        }

        .faq-section {
          margin-top: 16px;
        }

        .faq-intro {
          font-size: 13px;
          color: #444;
          line-height: 1.9;
          margin: 0 0 32px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .about-wrapper {
            padding: 36px 20px 60px;
          }

          .about-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .about-title {
            font-size: 26px !important;
            margin-bottom: 28px !important;
          }

          .about-section-title {
            font-size: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .about-wrapper {
            padding: 28px 16px 48px;
          }

          .about-title {
            font-size: 22px !important;
          }
        }
      `}</style>

      <div className="about-wrapper">

        {/* Title */}
        <h1
          className="about-title"
          style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', margin: '0 0 40px', letterSpacing: 0 }}
        >
          About Us
        </h1>

        {/* Top Two Column */}
        <div className="about-top-grid">

          {/* Left: Text */}
          <div>
            <p style={bodyText}>
              Mind Frame India, a leading Agency in the Advertising world, was established on the 6th Oct 2009.
            </p>
            <p style={bodyText}>
              It has a panel of Creative Directors who happen to be marketing evangelists, brand strategists, creative
              writers & filmmakers by profession. The team has successfully managed to create advertisements for many
              leading brands including Microsoft, HP, and Dell to name a few. Working with several marketing agencies &
              media companies helped Mind Frame gain an enormous amount of strategic experience that helped in initiating
              and accomplishing many successful creative marketing projects.
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              Mind Frame has sourced the best creative talent in the industry lets it meet the challenges and demands of
              the advertising world with also servicing the requirements of its clients. Mind Frame team comprises
              Creative Marketing & Communication Professionals, Art Directors, Business & Creative Heads, Concept
              Designers, Copywriters, Content Creators, Production Supervisors & Designers who work together to create
              the most memorable and sophisticated experience for its Clientele.
            </p>
          </div>

          {/* Right: Skill Bars */}
          <div ref={skillsRef}>
            {skills.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} animate={animate} />
            ))}
          </div>
        </div>

        {/* Vision / Mission / Commitment */}
        {sections.map((sec, i) => (
          <div key={i}>
            <hr className="about-divider" />
            <div style={{ marginBottom: 52 }}>
              <h2
                className="about-section-title"
                style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 20px' }}
              >
                {sec.title}
              </h2>
              {Array.isArray(sec.text) ? (
                sec.text.map((para, j) => (
                  <p key={j} style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: '0 0 10px' }}>
                    {para}
                  </p>
                ))
              ) : (
                <p style={{ fontSize: 13, color: '#444', lineHeight: 1.9, margin: 0 }}>{sec.text}</p>
              )}
            </div>
          </div>
        ))}

        {/* ── FAQ Section ── */}
        <hr className="about-divider" />
        <div className="faq-section">
          <h2
            className="about-section-title"
            style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', margin: '0 0 16px' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="faq-intro">
            Everything you need to know about Mind Frame India — Mumbai&apos;s full-service advertising, branding, and digital agency.
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}