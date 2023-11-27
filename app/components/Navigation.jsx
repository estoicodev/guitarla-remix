import { Link, useLocation } from "@remix-run/react"
import cartImage from "../../public/img/cart.png"

const Navigation = () => {
  const location = useLocation()

  const activeStyle = (path) => location.pathname === path ? "active" : ""
  return (
    <nav className="navigation">
    <Link
      to="/"
      className={`nav-item ${activeStyle("/")}`}
    >
      Home
    </Link>
    <Link
      to="/store"
      className={`nav-item ${activeStyle("/store")}`}
    >
      Store
    </Link>
    <Link
      to="/blog"
      className={`nav-item ${activeStyle("/blog")}`}
    >
      Blog
    </Link>
    <Link
      to="/about"
      className={`nav-item ${activeStyle("/about")}`}
    >
      About us
    </Link>
    <Link
      to="/cart"
      className={`nav-cart ${activeStyle("/cart")}`}
    >
      <img className="cart" src={cartImage} alt="shopping cart" />
    </Link>
  </nav>
)
}

export default Navigation
