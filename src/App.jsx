import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-shade" />
      <header className="landing-top">
        <Link className="brand brand-light" to="/">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>Paradise Nursery</span>
        </Link>
        <Link className="landing-cart-link" to="/cart">Visit your cart <ArrowRight size={16} /></Link>
      </header>
      <section className="hero-content">
        <p className="eyebrow hero-eyebrow">A little more nature, every day</p>
        <h1>Bring home<br /><em>your happy place.</em></h1>
        <p className="hero-copy">
          At Paradise Nursery, we believe every space deserves a touch of green.
          Discover thoughtfully selected houseplants that make your home feel
          calmer, brighter, and more alive—from your first tiny succulent to a
          statement-making tropical plant.
        </p>
        <AboutUs />
        <Link className="primary-button hero-button" to="/plants">
          Get Started <ArrowRight size={18} />
        </Link>
      </section>
      <div className="hero-note"><span /> Grown with care. Chosen for your home.</div>
    </main>
  );
}