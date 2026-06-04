'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '70vh', background: 'var(--brand-bg)' }}>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 400 }}>
            <Image
              src="https://source.unsplash.com/480x480/?eco-friendly,personal-care,green"
              alt="GreenGroom Story"
              width={400}
              height={400}
              style={{ borderRadius: '1.25rem', objectFit: 'cover', width: '100%', boxShadow: '0 4px 24px rgba(44,62,80,0.10)' }}
            />
          </div>
          <div style={{ flex: '2 1 400px', minWidth: 260, maxWidth: 500 }}>
            <h1 style={{ color: 'var(--brand-primary)', fontSize: '2rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '0.01em' }}>
              Our Story
            </h1>
            <p style={{ fontSize: '1.08rem', color: 'var(--brand-text)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              GreenGroom was founded with a simple mission: to make sustainable personal care accessible, effective, and beautiful. We believe that small changes in your daily routine can make a big impact on the planet.
            </p>
            <h2 style={{ color: 'var(--brand-primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em' }}>
              Why GreenGroom?
            </h2>
            <ul style={{ color: '#3a6351', fontSize: '1.03rem', marginBottom: '1.2rem', lineHeight: 1.6, paddingLeft: '1.2em' }}>
              <li>🌱 Plant-based, biodegradable materials</li>
              <li>♻️ Zero-waste, compostable packaging</li>
              <li>🌊 Gentle on skin, safe for waterways</li>
              <li>🚚 Free shipping on orders $30+</li>
            </ul>
            <h2 style={{ color: 'var(--brand-primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em' }}>
              Sustainability Commitment
            </h2>
            <p style={{ fontSize: '1.03rem', color: '#3a6351', marginBottom: '1.2rem', lineHeight: 1.6 }}>
              Every GreenGroom product is thoughtfully designed to minimize environmental impact, from sourcing to shipping. We partner with ethical suppliers and use only recyclable or compostable packaging.
            </p>
            <h2 style={{ color: 'var(--brand-primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em' }}>
              Contact Us
            </h2>
            <p style={{ fontSize: '1.03rem', color: '#3a6351', marginBottom: '0.7rem', lineHeight: 1.6 }}>
              Have questions or want to collaborate? Email us at <a href="mailto:hello@greengroom.com" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>hello@greengroom.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
