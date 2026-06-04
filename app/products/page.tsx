'use client';
import Image from 'next/image';

const allProducts = [
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
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?bamboo-cotton-swabs',
    title: 'Bamboo Cotton Swabs',
    price: '$8',
    alt: 'Bamboo Cotton Swabs',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?eco-shampoo-bar',
    title: 'Eco Shampoo Bar',
    price: '$14',
    alt: 'Eco Shampoo Bar',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?natural-body-wash',
    title: 'Natural Body Wash',
    price: '$16',
    alt: 'Natural Body Wash',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?reusable-cotton-rounds',
    title: 'Reusable Cotton Rounds',
    price: '$10',
    alt: 'Reusable Cotton Rounds',
  },
  {
    badge: '',
    img: 'https://source.unsplash.com/320x320/?eco-toothpaste',
    title: 'Eco Toothpaste',
    price: '$11',
    alt: 'Eco Toothpaste',
  },
];

export default function ProductsPage() {
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
    <main style={{ minHeight: '70vh', background: 'var(--brand-bg)' }}>
      <section className="products-section" id="products">
        <h1 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 700, letterSpacing: '0.01em', marginBottom: '1.5rem', color: 'var(--brand-primary)' }}>
          All GreenGroom Products
        </h1>
        <div className="products-grid">
          {allProducts.map((product, idx) => (
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
    </main>
  );
}
