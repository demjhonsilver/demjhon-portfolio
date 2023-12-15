

export const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Demjhon Blog</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                 Portfolio
                </a>
              </li>



{/*               <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog">
                  Blog
                </a>
              </li>

              <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/demjhonsilver"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill" style={{ fontSize: '18px', color: 'white' }}></i>
              </a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}