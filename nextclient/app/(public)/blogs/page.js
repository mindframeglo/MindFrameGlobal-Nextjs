'use client'

/**
 * Blogs Page
 * Display all published blogs with pagination and search
 * UI aligned with the premium gold theme
 */

import { useState, useEffect, useRef } from 'react';
import blogService from '@/services/blogService';
import BlogCard from '@/components/BlogCard';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';
import { FaSearch, FaArrowRight, FaCheckCircle, FaTag, FaBookOpen } from 'react-icons/fa';

const gold = '#c9a84c';
const goldDark = '#b38f3d';
const goldLight = '#f5f0e8';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const ctaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    'Advertising Agency',
    'AI',
    'Brand Building',
    'Chatbot Service',
    'Digital Marketing',
    'Influencer Marketing',
    'IT Consulting',
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await blogService.getAllBlogs(page, 9, search, '', category);
        setBlogs(response.data.blogs);
        setTotalPages(response.data.pages);
        setTotalBlogs(response.data.total || response.data.blogs.length);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page, search, category]);

  // Parallax effect on scroll for CTA
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

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
      <SEO
        title={seoConfig.blogs.title}
        description={seoConfig.blogs.description}
        keywords={seoConfig.blogs.keywords}
        path={seoConfig.blogs.path}
      />

      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Mind Frame India Digital Marketing Blog',
            description: 'Expert digital marketing insights and strategies',
            url: 'https://mindframeglobal.com/blogs',
            publisher: {
              '@type': 'Organization',
              name: 'Mind Frame Global',
              logo: 'https://mindframeglobal.com/logo.png',
            },
          }),
        }}
      />

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#faf8f5', minHeight: '100vh' }}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          /* ── HERO ── */
          .bl-hero {
            position: relative;
            height: 440px;
            overflow: hidden;
          }
          .bl-hero img {
            width: 100%; height: 100%;
            object-fit: cover; object-position: center 40%;
          }
          .bl-hero-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(26,21,16,0.92) 0%, rgba(26,21,16,0.65) 45%, rgba(26,21,16,0.92) 100%);
            display: flex; align-items: center; justify-content: center; flex-direction: column;
            padding: 24px;
          }
          .bl-hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: ${gold};
            background: rgba(201, 168, 76, 0.12);
            border: 1px solid rgba(201, 168, 76, 0.25);
            padding: 8px 22px;
            border-radius: 50px;
            margin-bottom: 20px;
            font-weight: 600;
            backdrop-filter: blur(4px);
          }
          .bl-hero-badge svg {
            color: ${gold};
          }
          .bl-hero-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(30px, 5.5vw, 60px);
            font-weight: 700; color: #fff;
            letter-spacing: -0.5px; line-height: 1.15;
            text-align: center; max-width: 860px;
          }
          .bl-hero-title em {
            font-style: italic; color: ${gold};
          }
          .bl-hero-divider {
            width: 60px; height: 2px;
            background: linear-gradient(to right, ${gold}, #d4c4a8);
            margin: 20px auto;
            border-radius: 2px;
          }
          .bl-hero-sub-text {
            font-size: 15px; font-weight: 300;
            color: rgba(255,255,255,0.75);
            max-width: 540px; text-align: center;
            line-height: 1.75;
          }

          /* ── SEARCH & FILTER BAR ── */
          .bl-filter-wrap {
            background: #fff;
            border-bottom: 1px solid rgba(201, 168, 76, 0.12);
            padding: 40px 60px;
            box-shadow: 0 4px 20px rgba(201, 168, 76, 0.06);
            position: relative;
            z-index: 2;
          }
          .bl-filter-inner {
            max-width: 1200px; margin: 0 auto;
          }
          .bl-search-row {
  display: flex; gap: 12px; margin-bottom: 28px;
  /* position: relative; -- ab yahan se hata sakte ho, wrapper pe move ho gaya */
}
.bl-search-input-wrap {
  position: relative;
  flex: 1;
  min-width: 0;
}
.bl-search-icon {
  position: absolute;
  left: 18px; top: 50%;
  transform: translateY(-50%);
  color: ${gold};
  pointer-events: none;
  display: flex;
  align-items: center;
}
.bl-search-input {
  width: 100%;
  padding: 14px 18px 14px 46px;
  border: 1.5px solid #e0d8ce; border-radius: 50px;
  font-size: 13.5px; font-family: 'DM Sans', sans-serif;
  color: #333; outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  background: #faf8f5;
}
          .bl-search-input:focus {
            border-color: ${gold};
            background: #fff;
            box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.1);
          }
          .bl-search-input::placeholder { color: #aaa; }
          .bl-search-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 34px;
            background: ${gold}; color: #fff;
            font-size: 12px; font-weight: 700;
            letter-spacing: 1.5px; text-transform: uppercase;
            border: none; cursor: pointer; border-radius: 50px;
            transition: all 0.25s;
            white-space: nowrap;
            box-shadow: 0 6px 20px rgba(201, 168, 76, 0.3);
            flex-shrink: 0;
          }
          .bl-search-btn:hover {
            background: ${goldDark};
            transform: translateY(-2px);
            box-shadow: 0 8px 26px rgba(201, 168, 76, 0.4);
          }

          /* Filter label */
          .bl-filter-label {
            font-family: 'Cormorant Garamond', serif;
            font-size: 16px; font-weight: 600;
            color: #1a1510; margin-bottom: 14px;
            letter-spacing: 0.3px;
            display: flex; align-items: center; gap: 10px;
          }
          .bl-filter-label svg {
            color: ${gold};
          }
          .bl-filter-label::after {
            content: '';
            display: inline-block;
            flex: 1;
            height: 1px;
            background: linear-gradient(to right, rgba(201, 168, 76, 0.2), transparent);
            margin-left: 8px;
          }

          /* Category wrapper */
          .bl-cats-wrap {
            position: relative;
          }
          .bl-cats {
            display: flex; flex-wrap: wrap; gap: 10px;
          }
          .bl-cat-btn {
            padding: 9px 22px;
            border: 1.5px solid #e0d8ce;
            background: transparent;
            font-size: 11.5px; font-weight: 600;
            letter-spacing: 1px; text-transform: uppercase;
            color: #5a4f44; cursor: pointer; border-radius: 50px;
            transition: all 0.25s;
            font-family: 'DM Sans', sans-serif;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .bl-cat-btn:hover {
            border-color: ${gold}; color: ${gold};
            background: rgba(201, 168, 76, 0.06);
            transform: translateY(-1px);
          }
          .bl-cat-btn.active {
            background: ${gold}; border-color: ${gold};
            color: #fff;
            box-shadow: 0 4px 14px rgba(201, 168, 76, 0.3);
          }
          .bl-cat-btn.active:hover { background: ${goldDark}; border-color: ${goldDark}; }

          /* ── RESULTS INFO ── */
          .bl-results-info {
            max-width: 1200px; margin: 0 auto;
            padding: 32px 60px 0;
            font-size: 13px; color: #8a7a6a; font-weight: 400;
            letter-spacing: 0.3px;
          }
          .bl-results-info strong { color: ${gold}; font-weight: 700; }

          /* ── CONTENT AREA ── */
          .bl-content {
            max-width: 1200px; margin: 0 auto;
            padding: 24px 60px 90px;
          }

          /* ── BLOGS GRID ── */
          .bl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 64px;
          }
          .bl-grid > * {
            transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease;
            border-radius: 16px;
            border: 1px solid rgba(201, 168, 76, 0.06);
          }
          .bl-grid > *:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(201, 168, 76, 0.12);
            border-color: rgba(201, 168, 76, 0.15);
          }

          /* ── PAGINATION ── */
          .bl-pagination {
            display: flex; align-items: center;
            justify-content: center; gap: 8px;
            flex-wrap: wrap; margin-top: 20px;
          }
          .bl-page-info {
            font-size: 12px; color: #8a7a6a; font-weight: 400;
            margin-right: 18px; letter-spacing: 0.5px;
          }
          .bl-page-info strong { color: ${gold}; font-weight: 700; }
          .bl-pg-btn {
            padding: 10px 22px;
            border: 1.5px solid #e0d8ce;
            background: #fff; color: #5a4f44;
            font-size: 11px; font-weight: 700;
            letter-spacing: 1px; text-transform: uppercase;
            cursor: pointer; border-radius: 50px;
            transition: all 0.25s;
            font-family: 'DM Sans', sans-serif;
          }
          .bl-pg-btn:hover:not(:disabled) {
            border-color: ${gold}; color: #fff;
            background: ${gold};
          }
          .bl-pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
          .bl-pg-num {
            width: 38px; height: 38px;
            display: flex; align-items: center; justify-content: center;
            border: 1.5px solid #e0d8ce;
            background: #fff; color: #5a4f44;
            font-size: 12.5px; font-weight: 600;
            cursor: pointer; border-radius: 50%;
            transition: all 0.25s;
            font-family: 'DM Sans', sans-serif;
          }
          .bl-pg-num:hover { border-color: ${gold}; color: ${gold}; transform: translateY(-1px); }
          .bl-pg-num.active {
            background: ${gold}; border-color: ${gold};
            color: #fff; font-weight: 700;
            box-shadow: 0 4px 14px rgba(201, 168, 76, 0.3);
          }
          .bl-pg-ellipsis {
            font-size: 13px; color: #c4b8a8;
            padding: 0 4px; line-height: 38px;
          }

          /* ── EMPTY STATE ── */
          .bl-empty {
            text-align: center; padding: 90px 24px;
            background: #fff;
            border-radius: 16px;
            border: 1px dashed rgba(201, 168, 76, 0.3);
          }
          .bl-empty-icon {
            width: 64px; height: 64px;
            border-radius: 50%;
            background: rgba(201, 168, 76, 0.1);
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 22px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 30px; color: ${gold};
          }
          .bl-empty-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 30px; font-weight: 600;
            color: #1a1510; margin-bottom: 10px;
          }
          .bl-empty-sub {
            font-size: 13.5px; color: #8a7a6a;
            font-weight: 400; margin-bottom: 30px;
          }
          .bl-clear-btn {
            padding: 13px 38px;
            background: ${gold}; color: #fff;
            font-size: 11px; font-weight: 700;
            letter-spacing: 2px; text-transform: uppercase;
            border: none; cursor: pointer; border-radius: 50px;
            transition: all 0.25s;
            font-family: 'DM Sans', sans-serif;
            box-shadow: 0 6px 20px rgba(201, 168, 76, 0.3);
          }
          .bl-clear-btn:hover { background: ${goldDark}; transform: translateY(-2px); }

          /* ── CTA STRIP ── */
          .bl-cta {
            position: relative;
            overflow: hidden;
            min-height: 420px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #1a1510 0%, #2a2218 100%);
            margin-top: 20px;
          }
          .bl-cta-overlay {
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at center, rgba(201, 168, 76, 0.05) 0%, transparent 70%);
            z-index: 1;
          }
          .bl-cta-content {
            position: relative; z-index: 2;
            text-align: center;
            max-width: 700px;
            padding: 64px 40px;
            margin: 0 auto;
          }
          .bl-cta-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px; letter-spacing: 3px;
            text-transform: uppercase; color: ${gold};
            background: rgba(201, 168, 76, 0.12);
            padding: 8px 22px; border-radius: 50px;
            margin-bottom: 18px; font-weight: 600;
            border: 1px solid rgba(201, 168, 76, 0.15);
          }
          .bl-cta-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(28px, 4.5vw, 48px);
            font-weight: 600; color: #fff;
            line-height: 1.18; margin-bottom: 16px;
          }
          .bl-cta-title em { font-style: italic; color: ${gold}; }
          .bl-cta-sub {
            font-size: 15.5px; font-weight: 300;
            color: rgba(255,255,255,0.80);
            margin-bottom: 32px; max-width: 520px;
            margin-left: auto; margin-right: auto;
            line-height: 1.75;
          }
          .bl-cta-btn {
            display: inline-flex; align-items: center; justify-content: center;
            gap: 10px;
            padding: 16px 40px;
            background: ${gold}; color: #fff;
            font-size: 13px; font-weight: 600;
            letter-spacing: 1px; text-transform: uppercase;
            border: none; cursor: pointer; text-decoration: none;
            transition: all 0.3s ease;
            border-radius: 50px;
            box-shadow: 0 8px 30px rgba(201, 168, 76, 0.35);
          }
          .bl-cta-btn:hover {
            background: ${goldDark};
            transform: translateY(-3px);
            box-shadow: 0 12px 36px rgba(201, 168, 76, 0.45);
          }

          /* ── LOADING ── */
          .bl-loading {
            display: flex; justify-content: center;
            padding: 70px 0;
          }

          /* ══════════════ RESPONSIVE ══════════════ */

          /* Tablet */
          @media (max-width: 1024px) {
            .bl-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .bl-filter-wrap { padding: 32px 24px; }
            .bl-content { padding: 24px 24px 60px; }
            .bl-results-info { padding: 28px 24px 0; }
            .bl-hero { height: 380px; }
          }

          /* Mobile */
          @media (max-width: 640px) {
            .bl-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 44px; }

            /* Hero */
            .bl-hero { height: 300px; }
            .bl-hero-overlay { padding: 18px; }
            .bl-hero-badge { font-size: 9.5px; letter-spacing: 2px; padding: 6px 16px; margin-bottom: 14px; }
            .bl-hero-title { font-size: 28px !important; line-height: 1.2; }
            .bl-hero-divider { margin: 14px auto; }
            .bl-hero-sub-text { font-size: 13px; line-height: 1.6; }

            /* Filter bar */
            .bl-filter-wrap { padding: 22px 16px; }
            .bl-search-row { flex-direction: column; gap: 10px; margin-bottom: 22px; }
            .bl-search-input { padding: 13px 16px 13px 42px; font-size: 13px; }
            .bl-search-btn { width: 100%; padding: 13px 24px; justify-content: center; }
            .bl-filter-label { font-size: 14.5px; margin-bottom: 12px; }

            /* Category chips: horizontal scroll */
            .bl-cats {
              flex-wrap: nowrap;
              overflow-x: auto;
              overflow-y: hidden;
              gap: 8px;
              margin: 0 -16px;
              padding: 2px 16px 10px;
              scroll-snap-type: x proximity;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
            }
            .bl-cats::-webkit-scrollbar { display: none; }
            .bl-cat-btn {
              scroll-snap-align: start;
              padding: 8px 18px;
              font-size: 10.5px;
            }

            /* Results info + content */
            .bl-results-info { padding: 20px 16px 0; font-size: 12px; }
            .bl-content { padding: 18px 16px 50px; }

            /* Pagination */
            .bl-pagination { gap: 6px; }
            .bl-page-info { width: 100%; text-align: center; margin: 0 0 10px; }
            .bl-pg-btn { padding: 9px 16px; font-size: 10px; }
            .bl-pg-num { width: 34px; height: 34px; font-size: 11.5px; }

            /* Empty state */
            .bl-empty { padding: 50px 18px; }
            .bl-empty-title { font-size: 24px; }

            /* CTA */
            .bl-cta { min-height: 320px; }
            .bl-cta-content { padding: 46px 20px !important; }
            .bl-cta-title { font-size: 26px !important; }
            .bl-cta-sub { font-size: 13.5px !important; margin-bottom: 24px; }
            .bl-cta-btn { padding: 14px 32px; font-size: 12px; width: 100%; }
          }

          /* Small phones */
          @media (max-width: 400px) {
            .bl-hero { height: 260px; }
            .bl-hero-title { font-size: 24px !important; }
            .bl-hero-sub-text { max-width: 92%; }
            .bl-cat-btn { padding: 7px 15px; font-size: 10px; }
          }
        `}</style>

        {/* ── HERO ── */}
        <div className="bl-hero">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=85"
            alt="Mind Frame India Digital Marketing Blog - Read Latest Insights and Strategies"
            loading="lazy"
          />
          <div className="bl-hero-overlay">
            <span className="bl-hero-badge">
              <FaBookOpen size={14} />
              Insights &amp; Strategies
            </span>
            <h1 className="bl-hero-title">
              Our Digital Marketing <br /><em>Blog</em>
            </h1>
            <div className="bl-hero-divider" />
            <p className="bl-hero-sub-text">
              Discover proven strategies, expert tips, and actionable insights to elevate your digital marketing game.
            </p>
          </div>
        </div>

        {/* ── SEARCH & FILTER ── */}
        <div className="bl-filter-wrap">
          <div className="bl-filter-inner">
            
        <form onSubmit={handleSearch} className="bl-search-row">
  <div className="bl-search-input-wrap">
    <span className="bl-search-icon">
      <FaSearch size={16} />
    </span>
    <input
      type="text"
      placeholder="Search blogs by title or content..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bl-search-input"
      aria-label="Search blogs"
    />
  </div>
  <button type="submit" className="bl-search-btn">
    <FaSearch size={14} />
    Search
  </button>
</form>

            <div className="bl-filter-label">
              <FaTag size={16} />
              Filter by Category
            </div>
            <div className="bl-cats-wrap">
              <div className="bl-cats" role="group" aria-label="Blog categories">
                <button
                  className={`bl-cat-btn${category === '' ? ' active' : ''}`}
                  onClick={() => { setCategory(''); setPage(1); }}
                  aria-pressed={category === ''}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`bl-cat-btn${category === cat ? ' active' : ''}`}
                    onClick={() => { setCategory(cat); setPage(1); }}
                    aria-pressed={category === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RESULTS INFO ── */}
        {blogs.length > 0 && (
          <div className="bl-results-info" role="status" aria-live="polite">
            Showing <strong>{blogs.length}</strong> of <strong>{totalBlogs}</strong> articles
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        <div className="bl-content">

          {loading ? (
            <div className="bl-loading"><Loading /></div>
          ) : blogs.length > 0 ? (
            <>
              {/* Grid */}
              <div className="bl-grid" role="list">
                {blogs.map((blog) => (
                  <div key={blog._id} role="listitem">
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="bl-pagination" aria-label="Blog pagination">
                  <span className="bl-page-info">
                    Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                  </span>

                  <button
                    className="bl-pg-btn"
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    aria-label="Previous page"
                  >
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const show =
                      pageNum <= 2 ||
                      pageNum > totalPages - 2 ||
                      (pageNum >= page - 1 && pageNum <= page + 1);

                    const showEllipsisBefore = pageNum === 3 && page > 4;
                    const showEllipsisAfter = pageNum === totalPages - 2 && page < totalPages - 3;

                    if (!show) return null;

                    return (
                      <span key={pageNum} style={{ display: 'contents' }}>
                        {showEllipsisBefore && <span className="bl-pg-ellipsis" aria-hidden="true">···</span>}
                        <button
                          className={`bl-pg-num${page === pageNum ? ' active' : ''}`}
                          onClick={() => setPage(pageNum)}
                          aria-label={`Go to page ${pageNum}`}
                          aria-current={page === pageNum ? 'page' : undefined}
                        >
                          {pageNum}
                        </button>
                        {showEllipsisAfter && <span className="bl-pg-ellipsis" aria-hidden="true">···</span>}
                      </span>
                    );
                  })}

                  <button
                    className="bl-pg-btn"
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </nav>
              )}
            </>
          ) : (
            /* Empty state */
            <div className="bl-empty">
              <div className="bl-empty-icon">✦</div>
              <div className="bl-empty-title">No articles found</div>
              <p className="bl-empty-sub">Try adjusting your search or category filter</p>
              <button
                className="bl-clear-btn"
                onClick={() => { setSearch(''); setCategory(''); setPage(1); }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* ── CTA STRIP ── */}
        {!loading && blogs.length > 0 && (
          <div
            ref={ctaRef}
            className="bl-cta"
            style={{ transform: `translateY(${offsetY * 0.05}px)` }}
          >
            <div className="bl-cta-overlay" />
            <div className="bl-cta-content">
              <span className="bl-cta-badge">
                <FaCheckCircle size={14} />
                Get Started
              </span>
              <h2 className="bl-cta-title">
                Ready to Transform Your <em>Business?</em>
              </h2>
              <p className="bl-cta-sub">
                Let our expert team help you implement these strategies and grow your business.
              </p>
              <a href="/contact-us" className="bl-cta-btn">
                Contact Us Today
                <FaArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}