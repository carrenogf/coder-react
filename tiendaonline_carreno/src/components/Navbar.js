import CartWidget from "./CartWidget";
function Navbar () {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Tienda Online</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#">Guitarras</a></li>
                  <li><a className="dropdown-item" href="/#">Bajos</a></li>
                  <li><a className="dropdown-item" href="/#">Tecládos</a></li>
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