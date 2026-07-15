'use client'

import Link from 'next/link';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

export default function IndustriesPage() {
  const seo = seoConfig.industriesLanding;

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
          Industries we serve
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.04, marginBottom: 20 }}>
          Industry-specific marketing that drives measurable growth.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: '#444', maxWidth: 860 }}>
          Mindframe Global builds specialized campaigns for healthcare, finance, real estate, FMCG, food & beverage, startups, and more. Each industry page is designed to improve visibility, engagement, and conversion with tailored digital marketing and branding strategies.
        </p>
      </section>

      <section style={{ display: 'grid', gap: 20 }}>
        {[
          { label: 'Healthcare Marketing Agency', href: '/health-care-industry' },
          { label: 'Financial Services Marketing', href: '/finance-industry' },
          { label: 'Real Estate Marketing', href: '/real-estate-industry' },
          { label: 'FMCG & Retail Marketing', href: '/fmcg-industry' },
          { label: 'Food & Beverage Marketing', href: '/food-and-beverage-industry' },
          { label: 'Startup & SMB Marketing', href: '/small-businesses-industry' },
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
