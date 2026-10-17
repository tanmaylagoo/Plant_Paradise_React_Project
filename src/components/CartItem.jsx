import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2, Leaf } from "lucide-react";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../store/CartSlice.jsx";
import Navbar from "./Navbar.jsx";

const money = (amount) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(amount);

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-shell">
      <Navbar />
      <main className="cart-page page-content">
        <Link to="/plants" className="back-link"><ArrowLeft size={16} /> Continue browsing</Link>
        <div className="page-heading cart-heading">
          <div>
            <p className="eyebrow"><ShoppingBag size={14} /> YOUR LITTLE GREEN CORNER</p>
            <h1>Your shopping <em>bag.</em></h1>
            <p className="section-intro">A little greenery is on its way to feeling like home.</p>
          </div>
          <div className="cart-total-pill"><strong>{totalQuantity}</strong><span>{totalQuantity === 1 ? "plant" : "plants"} in your bag</span></div>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon"><Leaf size={34} /></div>
            <h2>Your bag is taking a little breather.</h2>
            <p>It’s a good time to find a plant that makes you smile.</p>
            <Link className="primary-button" to="/plants">Explore the plants <ArrowRight size={17} /></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list" aria-label="Items in your cart">
              <div className="cart-list-top"><span>YOUR SELECTION</span><span>{items.length} {items.length === 1 ? "type" : "types"}</span></div>
              {items.map((item) => (
                <article className="cart-line-item" key={item.id}>
                  <img
                    className="cart-plant-image"
                    src={item.image}
                    alt={item.name}
                    onError={(event) => {
                      event.currentTarget.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-kicker">HOUSEPLANT</p>
                    <h3>{item.name}</h3>
                    <p className="unit-price">{money(item.price)} <span>/ plant</span></p>
                    <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button>
                    </div>
                    <strong className="line-total">{money(item.price * item.quantity)}</strong>
                    <span className="line-total-label">Item total</span>
                  </div>
                </article>
              ))}
              <Link to="/plants" className="keep-shopping"><ArrowLeft size={15} /> Add another plant</Link>
            </section>

            <aside className="order-summary">
              <p className="eyebrow">THE TOTAL</p>
              <h2>Order summary</h2>
              <div className="summary-row"><span>Plants ({totalQuantity})</span><span>{money(totalCost)}</span></div>
              <div className="summary-row"><span>Delivery</span><span className="free-delivery">Calculated at checkout</span></div>
              <div className="summary-divider" />
              <div className="summary-total"><span>Subtotal</span><strong>{money(totalCost)}</strong></div>
              <p className="summary-note">Taxes and delivery, if applicable, are calculated at checkout.</p>
              <button className="checkout-button" onClick={() => window.alert("Coming Soon! Checkout will be available soon.")}>Checkout <ArrowRight size={17} /></button>
              <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear entire bag</button>
              <div className="summary-promise"><Leaf size={17} /><span>Every plant deserves a happy home.</span></div>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer"><span>© 2026 Paradise Nursery</span><span>Rooted in good things.</span></footer>
    </div>
  );
}