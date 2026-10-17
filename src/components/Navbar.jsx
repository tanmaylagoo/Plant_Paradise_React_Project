import { Link, NavLink } from "react-router-dom";
import { Leaf, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark"><Leaf size={21} /></span>
        <span>Paradise Nursery</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav" to="/cart" aria-label={`Cart, ${cartCount} items`}>
          <ShoppingBag size={19} /> <span>Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}