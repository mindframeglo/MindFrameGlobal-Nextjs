'use client'

/**
 * Single Blog Page — redesigned layout
 * - Title overlaid on hero (editorial style)
 * - Icon-based meta bar (author / date / views / read time)
 * - Sticky share rail on desktop, inline share row on mobile
 * - Narrower, more readable prose column
 */

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import blogService from '@/services/blogService';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { getBlogSEOData, createArticleSchema } from '@/config/seoConfig';
import { formatDate } from '@/utils/formatters';


export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);


  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await blogService.getBlogBySlug(slug);
        setBlog(response.data.blog);
      } catch (error) {
        setError('Failed to load blog');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);



  const handleShare = async (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (e) {
        // no-op
      }
      return;
    }
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(blog?.title || '')}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent((blog?.title || '') + ' ' + url)}`,
    };
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  if (loading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
        <Loading />
      </div>
    );

  if (error)
    return (
      <div style={styles.stateWrap}>
        <div style={styles.errorBox}>{error}</div>
        <Link href="/blogs" style={styles.backLink}>← Back to Blogs</Link>
      </div>
    );

  if (!blog)
    return (
      <div style={styles.stateWrap}>
        <p style={{ color: '#888', fontSize: '15px', marginBottom: '16px' }}>Blog not found.</p>
        <Link href="/blogs" style={styles.backLink}>← Back to Blogs</Link>
      </div>
    );

  const authorInitial = (blog.author || 'A').trim().charAt(0).toUpperCase();

  return (
    <>
      {/* {blog && (
        <SEO
          title={getBlogSEOData(blog).title}
          description={getBlogSEOData(blog).description}
          keywords={getBlogSEOData(blog).keywords}
          path={getBlogSEOData(blog).path}
          image={getBlogSEOData(blog).image}
          type="article"
          structured={createArticleSchema(blog)}
        />
      )} */}

      {blog && (
  <SEO
    title={blog.title} // Direct usage instead of getBlogSEOData
    description={blog.excerpt || blog.description?.substring(0, 160)}
    keywords={blog.category}
    path={`/blogs/${blog.slug}`}
    image={blog.image}
    type="article"
    structured={createArticleSchema(blog)}
  />
)}
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO (title overlay, editorial style) ── */
        .sb-hero {
          position: relative;
          width: 100%; height: 560px;
          overflow: hidden; background: #111;
        }
        .sb-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }
        .sb-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10,8,6,0.35) 0%,
            rgba(10,8,6,0.35) 35%,
            rgba(10,8,6,0.92) 100%
          );
        }
        .sb-hero-inner {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px 44px;
        }
        .sb-hero-content {
          max-width: 860px; margin: 0 auto; width: 100%;
        }
        .sb-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.75); text-decoration: none;
          margin-bottom: 22px;
          transition: opacity 0.2s, color 0.2s;
        }
        .sb-back:hover { color: #d4b483; }

        .sb-category {
          display: inline-block;
          font-size: 10px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #1a1510; background: #d4b483;
          padding: 6px 16px; margin-bottom: 20px;
          border-radius: 2px;
        }

        .sb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4.6vw, 54px);
          font-weight: 700; color: #fff;
          line-height: 1.15; margin-bottom: 24px;
          letter-spacing: -0.5px;
          max-width: 780px;
        }

        /* Meta bar (icons, on the dark hero) */
        .sb-meta {
          display: flex; flex-wrap: wrap;
          align-items: center; gap: 20px;
        }
        .sb-meta-item {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12.5px; font-weight: 400;
          color: rgba(255,255,255,0.75); letter-spacing: 0.2px;
        }
        .sb-meta-item svg { flex-shrink: 0; opacity: 0.85; }
        .sb-meta-item strong { color: #fff; font-weight: 600; }
        .sb-author-badge {
          width: 22px; height: 22px; border-radius: 50%;
          background: #b08d57; color: #fff;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── LAYOUT: content + sticky share rail ── */
        .sb-layout {
          max-width: 1040px;
          margin: 0 auto;
          padding: 56px 40px 90px;
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Share rail */
        .sb-share-rail {
          position: sticky;
          top: 100px;
          display: flex; flex-direction: column;
          align-items: center; gap: 10px;
        }
        .sb-share-label {
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #aaa; margin-bottom: 4px; text-align: center;
        }
        .sb-share-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #e8e2d9; background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #6a5f52;
          transition: all 0.2s;
          position: relative;
        }
        .sb-share-btn:hover {
          border-color: #b08d57; color: #b08d57;
          background: rgba(176,141,87,0.06);
          transform: translateY(-2px);
        }
        .sb-copied-tip {
          position: absolute; left: 50px; top: 50%;
          transform: translateY(-50%);
          background: #1a1510; color: #fff;
          font-size: 10.5px; font-weight: 600;
          padding: 5px 10px; border-radius: 4px;
          white-space: nowrap;
        }

        /* Mobile inline share row */
        .sb-share-row-mobile { display: none; }

        /* ── ARTICLE ── */
        .sb-article { min-width: 0; }

        .sb-gold-line {
          width: 48px; height: 2px;
          background: #b08d57; margin-bottom: 26px;
        }

        .sb-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400; font-style: italic;
          color: #555; line-height: 1.75;
          margin-bottom: 36px;
          padding-left: 20px;
          border-left: 3px solid #b08d57;
        }

        .sb-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 40px;
        }
        .sb-tag {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #b08d57; background: rgba(176,141,87,0.08);
          border: 1px solid rgba(176,141,87,0.25);
          padding: 5px 14px; border-radius: 2px;
        }

        /* ── PROSE CONTENT ── */
        .sb-prose {
          font-size: 16px; font-weight: 300;
          color: #3a342c; line-height: 1.95;
          margin-bottom: 56px;
          overflow-wrap: break-word;
          max-width: 720px;
        }
        .sb-prose h1, .sb-prose h2, .sb-prose h3,
        .sb-prose h4, .sb-prose h5, .sb-prose h6 {
          font-family: 'Cormorant Garamond', serif;
          color: #1a1510; font-weight: 700;
          margin: 44px 0 16px; line-height: 1.25;
        }
        .sb-prose h2 { font-size: 30px; }
        .sb-prose h3 { font-size: 23px; }
        .sb-prose p { margin-bottom: 22px; }
        .sb-prose ul, .sb-prose ol {
          padding-left: 24px; margin-bottom: 22px;
        }
        .sb-prose li { margin-bottom: 9px; }
        .sb-prose a {
          color: #b08d57; text-decoration: underline;
          text-underline-offset: 3px; word-break: break-word;
        }
        .sb-prose strong { font-weight: 600; color: #1a1510; }
        .sb-prose em { font-style: italic; }
        .sb-prose blockquote {
          border-left: 3px solid #b08d57;
          padding: 14px 26px; margin: 30px 0;
          background: rgba(176,141,87,0.05);
          font-style: italic; color: #5a5044;
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
        }
        .sb-prose img {
          max-width: 100%; height: auto; border-radius: 6px;
          margin: 30px 0; display: block;
        }
        .sb-prose table {
          display: block;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-collapse: collapse;
        }
        .sb-prose iframe { max-width: 100%; }
        .sb-prose hr {
          border: none; border-top: 1px solid #e8e2d9;
          margin: 40px 0;
        }

        /* ── CTA STRIP ── */
        .sb-cta {
          background: #1a1510;
          padding: 56px 48px;
          text-align: center;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .sb-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #b08d57, #d4c4a8, #b08d57);
        }
        .sb-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 700; color: #fff;
          margin-bottom: 12px; line-height: 1.25;
        }
        .sb-cta-heading em { font-style: italic; color: #b08d57; }
        .sb-cta-sub {
          font-size: 13.5px; font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin-bottom: 28px; line-height: 1.75;
          max-width: 420px; margin-left: auto; margin-right: auto;
        }
        .sb-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 36px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          text-decoration: none; border-radius: 50px;
          transition: background 0.25s, transform 0.2s;
        }
        .sb-cta-btn:hover { background: #9a7842; transform: translateY(-2px); }

        /* ══════════════ RESPONSIVE ══════════════ */

        @media (max-width: 900px) {
          .sb-layout { grid-template-columns: 1fr; padding: 44px 32px 70px; }
          .sb-share-rail { display: none; }
          .sb-share-row-mobile {
            display: flex; align-items: center; gap: 10px;
            margin-bottom: 36px; padding-bottom: 28px;
            border-bottom: 1px solid #e8e2d9;
          }
          .sb-share-row-mobile .sb-share-label { margin: 0 4px 0 0; }
        }

        @media (max-width: 768px) {
          .sb-hero { height: 400px; }
          .sb-hero-inner { padding: 0 24px 32px; }
        }

        @media (max-width: 640px) {
          .sb-hero { height: 320px; }
          .sb-hero-inner { padding: 0 18px 26px; }
          .sb-back { font-size: 10px; letter-spacing: 1.5px; margin-bottom: 16px; }
          .sb-category { font-size: 9px; letter-spacing: 2px; padding: 5px 13px; margin-bottom: 14px; }
          .sb-title { font-size: 25px !important; margin-bottom: 16px; }
          .sb-meta { gap: 12px 16px; }
          .sb-meta-item { font-size: 11px; }

          .sb-layout { padding: 32px 18px 50px; }
          .sb-share-row-mobile { margin-bottom: 26px; padding-bottom: 20px; flex-wrap: wrap; }
          .sb-share-btn { width: 36px; height: 36px; }

          .sb-desc { font-size: 16px !important; padding-left: 14px; margin-bottom: 26px; }
          .sb-tags { margin-bottom: 26px; gap: 6px; }
          .sb-tag { font-size: 9px; padding: 4px 11px; }

          .sb-prose { font-size: 14.5px; line-height: 1.85; margin-bottom: 40px; }
          .sb-prose h2 { font-size: 22px; margin: 32px 0 12px; }
          .sb-prose h3 { font-size: 18px; margin: 26px 0 10px; }
          .sb-prose blockquote { padding: 10px 16px; font-size: 15.5px; margin: 22px 0; }
          .sb-prose ul, .sb-prose ol { padding-left: 20px; }

          .sb-cta { padding: 34px 18px; }
          .sb-cta-heading { font-size: 20px !important; }
          .sb-cta-sub { font-size: 12.5px !important; margin-bottom: 22px; }
          .sb-cta-btn { display: flex; justify-content: center; padding: 13px 24px; font-size: 10.5px; letter-spacing: 2px; }
        }

        @media (max-width: 400px) {
          .sb-hero { height: 260px; }
          .sb-title { font-size: 22px !important; }
        }
      `}</style>

      {/* ── HERO with title overlay ── */}
      <div className="sb-hero">
        <img src={blog.image} alt={blog.title} />
        <div className="sb-hero-overlay" />
        <div className="sb-hero-inner">
          <div className="sb-hero-content">
            <Link href="/blogs" className="sb-back">← Back to Blogs</Link>

            {blog.category && (
              <div className="sb-category">{blog.category}</div>
            )}

            <h1 className="sb-title">{blog.title}</h1>

            <div className="sb-meta">
              <span className="sb-meta-item">
                <span className="sb-author-badge">{authorInitial}</span>
                <strong>{blog.author || 'Admin'}</strong>
              </span>
              <span className="sb-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {formatDate(blog.createdAt)}
              </span>
              {blog.views !== undefined && (
                <span className="sb-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  {blog.views} views
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── LAYOUT: share rail + article ── */}
      <div className="sb-layout">

        {/* Sticky share rail (desktop) */}
        <div className="sb-share-rail">
          <div className="sb-share-label">Share</div>
          <button className="sb-share-btn" onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.5c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.5 2-2.5-.9.5-1.8.9-2.9 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.6-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.2-3.5 2-5.7 2-.4 0-.7 0-1.1-.1 2 1.3 4.4 2 7 2 8.4 0 13-7 13-13v-.6c.9-.6 1.6-1.4 2.2-2.3z"/></svg>
          </button>
          <button className="sb-share-btn" onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7C18.3 21.1 22 17 22 12z"/></svg>
          </button>
          <button className="sb-share-btn" onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.8 13H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/></svg>
          </button>
          <button className="sb-share-btn" onClick={() => handleShare('whatsapp')} aria-label="Share on WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.7 8.6-8.2 8.6zm4.6-6.3c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.2.4 1.6.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          </button>
          <button className="sb-share-btn" onClick={() => handleShare('copy')} aria-label="Copy link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/></svg>
            {copied && <span className="sb-copied-tip">Copied!</span>}
          </button>
        </div>

        {/* Article */}
        <article className="sb-article">

          {/* Mobile inline share row */}
          <div className="sb-share-row-mobile">
            <span className="sb-share-label">Share:</span>
            <button className="sb-share-btn" onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.5c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.5 2-2.5-.9.5-1.8.9-2.9 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.6-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.2-3.5 2-5.7 2-.4 0-.7 0-1.1-.1 2 1.3 4.4 2 7 2 8.4 0 13-7 13-13v-.6c.9-.6 1.6-1.4 2.2-2.3z"/></svg>
            </button>
            <button className="sb-share-btn" onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7C18.3 21.1 22 17 22 12z"/></svg>
            </button>
            <button className="sb-share-btn" onClick={() => handleShare('whatsapp')} aria-label="Share on WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.7 8.6-8.2 8.6zm4.6-6.3c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.2.4 1.6.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
            </button>
            <button className="sb-share-btn" onClick={() => handleShare('copy')} aria-label="Copy link" style={{ position: 'relative' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/></svg>
              {copied && <span className="sb-copied-tip">Copied!</span>}
            </button>
          </div>

          {/* Gold line */}
          <div className="sb-gold-line" />

          {/* Description */}
          {blog.description && (
            <p className="sb-desc">{blog.description}</p>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="sb-tags">
              {blog.tags.map((tag) => (
                <span key={tag} className="sb-tag">#{tag}</span>
              ))}
            </div>
          )}

          {/* Content */}
          <div
            className="sb-prose"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* CTA */}
          <div className="sb-cta">
            <h3 className="sb-cta-heading">
              Want more <em>insights?</em>
            </h3>
            <p className="sb-cta-sub">
              Explore our other articles and stay updated with the latest digital marketing trends.
            </p>
            <Link href="/blogs" className="sb-cta-btn">
              Read More Articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>

        </article>
      </div>
      </div>
    </>
  );
}

const styles = {
  stateWrap: {
    maxWidth: '600px',
    margin: '80px auto',
    padding: '0 24px',
    textAlign: 'center',
  },
  errorBox: {
    background: '#fdf2f2',
    border: '1px solid #f5c6c6',
    color: '#c0392b',
    padding: '14px 20px',
    fontSize: '13.5px',
    marginBottom: '20px',
    borderRadius: '2px',
  },
  backLink: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#b08d57',
    textDecoration: 'none',
  },
};