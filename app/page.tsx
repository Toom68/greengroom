'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const products = [
  {
    badge: 'Best Seller',
    img: 'https://source.unsplash.com/320x320/?bamboo-toothbrush',
    title: 'Bamboo Toothbrushes',
    price: '$12',
    alt: 'Bamboo Toothbrushes',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?biodegradable-face-wipes',
    title: 'Biodegradable Face Wipes',
    price: '$15',
    alt: 'Biodegradable Face Wipes',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?natural-deodorant',
    title: 'Natural Deodorants',
    price: '$18',
    alt: 'Natural Deodorants',
  },
];

export default function HomePage() {
  const productsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Add to Cart feedback
  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    const original = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = 'var(--brand-accent)';
    setTimeout(() => {
      if (btn) {
        btn.textContent = original || 'Add to Cart';
        btn.style.background = '';
      }
    }, 1200);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <Image
          className="hero__bg"
          src="https://source.unsplash.com/1920x900/?eco-friendly,personal-care-products"
          alt="Eco-friendly personal care products"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__headline">Eco-Friendly Personal Care Essentials</h1>
          <p className="hero__subtext">Discover sustainable alternatives for your daily routine.</p>
          <div className="hero__btns">
            <button
              className="hero__btn"
              type="button"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop Now
            </button>
            <button
              className="hero__btn hero__btn--alt"
              type="button"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar__item"><span className="trust-bar__icon">🚚</span>Free Shipping $30+</div>
        <div className="trust-bar__item"><span className="trust-bar__icon">↩️</span>30-Day Returns</div>
        <div className="trust-bar__item"><span className="trust-bar__icon">🔒</span>Secure Checkout</div>
        <div className="trust-bar__item">Sustainable Care, Naturally Yours</div>
      </div>

      {/* Categories Bar */}
      <div id="categories" style={{ maxWidth: '1120px', margin: '1.2rem auto 2.2rem auto', padding: '0 1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.6rem', flexWrap: 'wrap' }}>
          <a href="#products" className="nav__link" style={{ fontSize: '1.05rem' }}>All Products</a>
          <a href="#products" className="nav__link" style={{ fontSize: '1.05rem' }}>Oral Care</a>
          <a href="#products" className="nav__link" style={{ fontSize: '1.05rem' }}>Skin Care</a>
          <a href="#products" className="nav__link" style={{ fontSize: '1.05rem' }}>Body Care</a>
        </div>
      </div>

      {/* Features Section */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">🌱</div>
          <div className="feature-card__title">Plant-Based Materials</div>
          <div className="feature-card__desc">All our products are crafted from renewable, biodegradable resources — good for you and the planet.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">♻️</div>
          <div className="feature-card__title">Zero-Waste Packaging</div>
          <div className="feature-card__desc">We use 100% compostable or recyclable packaging, minimizing your environmental footprint with every order.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon">🌊</div>
          <div className="feature-card__title">Gentle & Effective</div>
          <div className="feature-card__desc">Formulated for sensitive skin and safe for waterways — our products are as kind to you as they are to nature.</div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section" id="products" ref={productsRef}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.01em', marginBottom: '1.5rem', color: 'var(--brand-primary)' }}>
          Shop Our Best Sellers
        </h2>
        <div className="products-grid">
          {products.map((product, idx) => (
            <div className="product-card" tabIndex={0} key={product.title}>
              {product.badge && <div className="product-card__badge">{product.badge}</div>}
              <Image className="product-card__img" src={product.img} alt={product.alt} width={180} height={160} style={{ objectFit: 'cover', borderRadius: '1.1rem', marginBottom: '1.2rem', width: '100%', maxWidth: '180px', height: '160px', boxShadow: '0 2px 8px rgba(44,62,80,0.07)' }} />
              <div className="product-card__title">{product.title}</div>
              <div className="product-card__price">{product.price}</div>
              <button className="product-card__btn" aria-label={`Add ${product.title} to cart`} type="button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__headline">Ready to switch to a greener routine?</div>
        <button
          className="cta-banner__btn"
          type="button"
          onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Shop GreenGroom Now
        </button>
      </section>
    </>
  );
}
