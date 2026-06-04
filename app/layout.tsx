'use client';
import './globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'GreenGroom | Sustainable Care, Naturally Yours',
  description: 'GreenGroom – Eco-friendly personal care essentials. Discover bamboo toothbrushes, biodegradable face wipes, and natural deodorants. Sustainable care, naturally yours.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {/* Sticky Glassmorphism Nav */}
        <nav className="nav" id="nav">
          <Link href="/" className="nav__logo" aria-label="GreenGroom Home">
            <Image src="https://source.unsplash.com/36x36/?leaf,eco" alt="" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '0.5rem', boxShadow: '0 1px 4px rgba(44,62,80,0.09)', verticalAlign: 'middle' }} />
            GreenGroom <span>🌱</span>
          </Link>
          <div className="nav__links">
            <Link href="/products" className="nav__link">Shop</Link>
            <Link href="/#features" className="nav__link">Why GreenGroom?</Link>
            <Link href="/#categories" className="nav__link">Categories</Link>
            <button
              className="nav__cta"
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </button>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="footer">
          <div className="footer__col">
            <div className="footer__brand">
              <Image src="https://source.unsplash.com/32x32/?leaf,eco" alt="" width={32} height={32} style={{ borderRadius: '50%', objectFit: 'cover', verticalAlign: 'middle' }} />
              GreenGroom
            </div>
            <div className="footer__desc">
              Sustainable care, naturally yours. Eco-friendly personal care essentials for a cleaner, greener tomorrow.
            </div>
          </div>
          <div className="footer__col">
            <div style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Shop</div>
            <ul className="footer__links">
              <li><a className="footer__link" href="/products">All Products</a></li>
              <li><a className="footer__link" href="/products">Bamboo Toothbrushes</a></li>
              <li><a className="footer__link" href="/products">Face Wipes</a></li>
              <li><a className="footer__link" href="/products">Deodorants</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <div style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Company</div>
            <ul className="footer__links">
              <li><a className="footer__link" href="/about">Our Story</a></li>
              <li><a className="footer__link" href="/about">Sustainability</a></li>
              <li><a className="footer__link" href="/about">Contact</a></li>
              <li><a className="footer__link" href="/">Home</a></li>
            </ul>
          </div>
          <div className="footer__copyright">
            &copy; 2024 GreenGroom. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
