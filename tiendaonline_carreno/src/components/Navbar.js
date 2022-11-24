import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function Navbar () {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Instrumentos Online</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/guitarras">Guitarras</Link></li>
                  <li><Link className="dropdown-item" to="/category/organos">Organos</Link></li>
                </ul>
            </li>
            </ul>
            <span className="navbar-text">
              <CartWidget/>
            </span>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;