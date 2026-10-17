import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Leaf, ShoppingBag } from "lucide-react";
import { plants, categories } from "../data/plants.js";
import { addToCart } from "../store/CartSlice.jsx";
import Navbar from "./Navbar.jsx";

const money = (amount) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(amount);

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <div className="page-shell">
      <Navbar />
      <main className="catalogue page-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow"><Leaf size={14} /> THE PLANT EDIT</p>
            <h1>Find your <em>kind of green.</em></h1>
            <p className="section-intro">Good plants, good energy. Find a new favourite for your space.</p>
          </div>
          <Link to="/cart" className="text-link">View bag <ArrowRight size={16} /></Link>
        </div>

        <div className="catalogue-stats">
          <span>{plants.length} considered favourites</span>
          <span>Free plant-care tips with every order</span>
        </div>

        {categories.map((category) => (
          <section className="plant-category" key={category.id}>
            <div className="category-heading">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span className="category-count">
                {plants.filter((plant) => plant.category === category.id).length} plants
              </span>
            </div>
            <div className="plant-grid">
              {plants.filter((plant) => plant.category === category.id).map((plant, index) => {
                const isAdded = addedIds.has(plant.id);
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-wrap">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85";
                        }}
                      />
                      <span className="plant-number">0{index + 1}</span>
                    </div>
                    <div className="plant-card-body">
                      <div className="plant-name-price">
                        <h3>{plant.name}</h3>
                        <span className="plant-price">{money(plant.price)}</span>
                      </div>
                      <p className="plant-care">{plant.light}</p>
                      <p className="plant-water">{plant.water}</p>
                      <button
                        className={`add-button ${isAdded ? "is-added" : ""}`}
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={isAdded}
                      >
                        {isAdded ? <><Check size={16} /> Added to cart</> : <><ShoppingBag size={16} /> Add to Cart</>}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        <div className="catalogue-bottom">
          <div><span className="bottom-icon"><Leaf size={20} /></span><span><strong>A greener home starts here.</strong><small>Picked with care, ready for your space.</small></span></div>
          <Link className="primary-button" to="/cart">Go to cart ({cartCount}) <ArrowRight size={17} /></Link>
        </div>
      </main>
      <footer className="site-footer"><span>© 2026 Paradise Nursery</span><span>Rooted in good things.</span></footer>
    </div>
  );
}