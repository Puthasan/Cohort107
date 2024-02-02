import { Link } from "react-router-dom"


function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </nav>
  )
}

export default Nav