'use client'

import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

export default function ServiceAreasPage() {
  const seo = seoConfig.serviceAreasLanding;

  return (
    <div style={{ padding: '40px 24px', maxWidth: 1120, margin: '0 auto', fontFamily: 'DM Sans, sans-serif' }}>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
      />

      <section style={{ marginBottom: 48 }}>
        <p style={{ marginBottom: 12, color: '#b08d57', textTransform: 'uppercase', letterSpacing: 2, fontSize: 13, fontWeight: 700 }}>
          Service areas
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.04, marginBottom: 20 }}>
          Local and national digital marketing support for every location.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: '#444', maxWidth: 860 }}>
          Mindframe Global helps clients across Arizona, California, New York, and beyond with locally optimized advertising, website, content, and branding services. We build campaigns that work for your market.
        </p>
      </section>

      <section style={{ display: 'grid', gap: 20 }}>
        {[
          { label: 'Phoenix Marketing Agency', href: '/marketing-agency-in-phoenix' },
          { label: 'Arizona Marketing Agency', href: '/marketing-agency-in-arizona' },
          { label: 'Scottsdale Marketing Agency', href: '/marketing-agency-in-scottsdale' },
          { label: 'Tempe Marketing Agency', href: '/marketing-agency-in-tempe' },
          { label: 'Los Angeles Marketing Agency', href: '/digital-marketing-agency-los-angeles' },
          { label: 'Seattle Marketing Agency', href: '/digital-marketing-agency-seattle' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'block',
              padding: '24px 28px',
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 14px 35px rgba(0,0,0,0.06)',
              color: '#111',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {item.label}
          </Link>
        ))}
      </section>
    </div>
  );
}
