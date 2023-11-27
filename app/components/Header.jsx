import { Link } from "@remix-run/react"
import logo from "../../public/img/logo.svg"
import Navigation from "./Navigation"

const Header = () => {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
