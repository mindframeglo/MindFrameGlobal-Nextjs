'use client'

/**
 * Blogs Page
 * Display all published blogs with pagination and search
 * UI aligned with the "Our Work" page's premium gold theme
 */

import { useState, useEffect, useRef } from 'react';
import blogService from '@/services/blogService';
import BlogCard from '@/components/BlogCard';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

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

  const categories = ['Marketing', 'Social Media', 'SEO', 'Content', 'Design'];

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

  // Parallax effect on scroll for CTA (matches Our Work page)
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
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #d4b483;
          background: rgba(176, 141, 87, 0.15);
          border: 1px solid rgba(176, 141, 87, 0.35);
          padding: 6px 20px;
          border-radius: 50px;
          margin-bottom: 20px;
          font-weight: 600;
          backdrop-filter: blur(4px);
        }
        .bl-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5.5vw, 60px);
          font-weight: 700; color: #fff;
          letter-spacing: -0.5px; line-height: 1.15;
          text-align: center; max-width: 860px;
        }
        .bl-hero-title em {
          font-style: italic; color: #d4b483;
        }
        .bl-hero-divider {
          width: 60px; height: 2px;
          background: linear-gradient(to right, #b08d57, #d4c4a8);
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
          border-bottom: 1px solid #eee4d6;
          padding: 40px 60px;
          box-shadow: 0 4px 20px rgba(176, 141, 87, 0.06);
          position: relative;
          z-index: 2;
        }
        .bl-filter-inner {
          max-width: 1200px; margin: 0 auto;
        }
        .bl-search-row {
          display: flex; gap: 12px; margin-bottom: 28px;
          position: relative;
        }
        .bl-search-icon {
          position: absolute;
          left: 18px; top: 50%;
          transform: translateY(-50%);
          color: #b08d57;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
        .bl-search-input {
          flex: 1; padding: 14px 18px 14px 46px;
          border: 1.5px solid #e0d8ce; border-radius: 50px;
          font-size: 13.5px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          background: #faf8f5;
        }
        .bl-search-input:focus {
          border-color: #b08d57;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(176, 141, 87, 0.1);
        }
        .bl-search-input::placeholder { color: #aaa; }
        .bl-search-btn {
          padding: 14px 34px;
          background: #b08d57; color: #fff;
          font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          border: none; cursor: pointer; border-radius: 50px;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          white-space: nowrap;
          box-shadow: 0 6px 20px rgba(176, 141, 87, 0.3);
        }
        .bl-search-btn:hover {
          background: #9a7842;
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(176, 141, 87, 0.4);
        }

        /* Filter label */
        .bl-filter-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px; font-weight: 600;
          color: #1a1510; margin-bottom: 14px;
          letter-spacing: 0.3px;
          display: flex; align-items: center; gap: 8px;
        }
        .bl-filter-label::before {
          content: '';
          display: inline-block;
          width: 4px; height: 16px;
          background: #b08d57;
          border-radius: 2px;
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
        }
        .bl-cat-btn:hover {
          border-color: #b08d57; color: #b08d57;
          background: rgba(176, 141, 87, 0.06);
          transform: translateY(-1px);
        }
        .bl-cat-btn.active {
          background: #b08d57; border-color: #b08d57;
          color: #fff;
          box-shadow: 0 4px 14px rgba(176, 141, 87, 0.3);
        }
        .bl-cat-btn.active:hover { background: #9a7a4a; border-color: #9a7a4a; }

        /* ── RESULTS INFO ── */
        .bl-results-info {
          max-width: 1200px; margin: 0 auto;
          padding: 32px 60px 0;
          font-size: 13px; color: #8a7a6a; font-weight: 400;
          letter-spacing: 0.3px;
        }
        .bl-results-info strong { color: #b08d57; font-weight: 700; }

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
          border-radius: 12px;
        }
        .bl-grid > *:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(176, 141, 87, 0.15);
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
        .bl-page-info strong { color: #b08d57; font-weight: 700; }
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
          border-color: #b08d57; color: #fff;
          background: #b08d57;
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
        .bl-pg-num:hover { border-color: #b08d57; color: #b08d57; transform: translateY(-1px); }
        .bl-pg-num.active {
          background: #b08d57; border-color: #b08d57;
          color: #fff; font-weight: 700;
          box-shadow: 0 4px 14px rgba(176, 141, 87, 0.3);
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
          border: 1px dashed #e0d8ce;
        }
        .bl-empty-icon {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(176, 141, 87, 0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 22px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px; color: #b08d57;
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
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; cursor: pointer; border-radius: 50px;
          transition: all 0.25s;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 6px 20px rgba(176, 141, 87, 0.3);
        }
        .bl-clear-btn:hover { background: #9a7842; transform: translateY(-2px); }

        /* ── CTA STRIP (parallax, matches Our Work page) ── */
        .bl-cta-parallax-bg {
          background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bl-cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(26,21,16,0.93) 0%, rgba(26,21,16,0.78) 100%);
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
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 3px;
          text-transform: uppercase; color: #b08d57;
          background: rgba(176, 141, 87, 0.15);
          padding: 6px 20px; border-radius: 50px;
          margin-bottom: 18px; font-weight: 600;
          border: 1px solid rgba(176, 141, 87, 0.2);
        }
        .bl-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600; color: #fff;
          line-height: 1.18; margin-bottom: 16px;
        }
        .bl-cta-title em { font-style: italic; color: #b08d57; }
        .bl-cta-sub {
          font-size: 15.5px; font-weight: 300;
          color: rgba(255,255,255,0.80);
          margin-bottom: 32px; max-width: 520px;
          margin-left: auto; margin-right: auto;
          line-height: 1.75;
        }
        .bl-cta-btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 15px 40px;
          background: #b08d57; color: #fff;
          font-size: 12px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; cursor: pointer; text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 50px;
          box-shadow: 0 8px 30px rgba(176, 141, 87, 0.35);
        }
        .bl-cta-btn:hover {
          background: #9a7842;
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(176, 141, 87, 0.45);
        }

        /* ── LOADING ── */
        .bl-loading {
          display: flex; justify-content: center;
          padding: 70px 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
          .bl-filter-wrap { padding: 32px 24px; }
          .bl-content { padding: 24px 24px 60px; }
          .bl-results-info { padding: 28px 24px 0; }
        }
        @media (max-width: 640px) {
          .bl-grid { grid-template-columns: 1fr; gap: 22px; }
          .bl-hero { height: 340px; }
          .bl-hero-title { font-size: 30px !important; }
          .bl-search-row { flex-direction: column; }
          .bl-search-btn { width: 100%; }
          .bl-cta-content { padding: 50px 20px !important; }
          .bl-cta-title { font-size: 28px !important; }
          .bl-cta-sub { font-size: 14px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="bl-hero">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=85"
          alt="Mind Frame India Blog"
        />
        <div className="bl-hero-overlay">
          <span className="bl-hero-badge">Insights &amp; Strategies</span>
          <h1 className="bl-hero-title">
            Our Digital Marketing <br /><em>Blog</em>
          </h1>
          <div className="bl-hero-divider" />
          <p className="bl-hero-sub-text">
            Insights, strategies, and tips to help your business succeed in the digital landscape.
          </p>
        </div>
      </div>

      {/* ── SEARCH & FILTER ── */}
      <div className="bl-filter-wrap">
        <div className="bl-filter-inner">
          <form onSubmit={handleSearch} className="bl-search-row">
            <span className="bl-search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search blogs by title or content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bl-search-input"
            />
            <button type="submit" className="bl-search-btn">Search</button>
          </form>

          <div className="bl-filter-label">Filter by Category</div>
          <div className="bl-cats">
            <button
              className={`bl-cat-btn${category === '' ? ' active' : ''}`}
              onClick={() => { setCategory(''); setPage(1); }}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bl-cat-btn${category === cat ? ' active' : ''}`}
                onClick={() => { setCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS INFO ── */}
      {blogs.length > 0 && (
        <div className="bl-results-info">
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
            <div className="bl-grid">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bl-pagination">
                <span className="bl-page-info">
                  Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                </span>

                <button
                  className="bl-pg-btn"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
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
                      {showEllipsisBefore && <span className="bl-pg-ellipsis">···</span>}
                      <button
                        className={`bl-pg-num${page === pageNum ? ' active' : ''}`}
                        onClick={() => setPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                      {showEllipsisAfter && <span className="bl-pg-ellipsis">···</span>}
                    </span>
                  );
                })}

                <button
                  className="bl-pg-btn"
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                >
                  Next →
                </button>
              </div>
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

      {/* ── CTA STRIP with Parallax Background ── */}
      {!loading && blogs.length > 0 && (
        <div
          ref={ctaRef}
          className="bl-cta-parallax-bg"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
        >
          <div className="bl-cta-overlay" />
          <div className="bl-cta-content">
            <span className="bl-cta-badge">Get Started</span>
            <h3 className="bl-cta-title">
              Interested in Our <em>Services?</em>
            </h3>
            <p className="bl-cta-sub">
              Explore our digital marketing services and let&rsquo;s grow your business together.
            </p>
            <a href="/contact-us" className="bl-cta-btn">
              Contact Us Today
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 10 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      )}
      </div>
    </>
  );
}