'use client';
import { useEffect } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mindframeglobal.com';
const TWITTER_HANDLE = '@mindframeglobal';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mindframe global",
  "url": BASE_URL,
  "logo": `${BASE_URL}/assets/favicon.png`,
  "sameAs": [
    "https://www.facebook.com/mindframeglobal",
    "https://twitter.com/mindframeglobal",
    "https://www.instagram.com/mindframeglobal",
    "https://www.linkedin.com/company/mindframe-global"
  ]
};

const setMetaTag = (selector, attrName, attrValue, value) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const setLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

const setStructuredData = (schema) => {
  if (!schema) return;
  const id = 'seo-structured-data';
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(schema);
};

export default function SEO({ title, description, keywords, path, image, type = 'website', structured }) {
  useEffect(() => {
    const canonical = `${BASE_URL}${path || window.location.pathname}`;

    if (title) {
      document.title = title;
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }

    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index,follow');
    setLinkTag('canonical', canonical);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Mindframe global');
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    setMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', TWITTER_HANDLE);
    setMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', TWITTER_HANDLE);

    if (image) {
      const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', imageUrl);
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    }

    if (structured) {
      setStructuredData(structured);
    }
  }, [title, description, keywords, path, image, type, structured]);

  return null;
}
