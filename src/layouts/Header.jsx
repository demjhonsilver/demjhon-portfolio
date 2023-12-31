

export const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Demjhon&apos;s website</a>
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
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#services">
                  Services
                </a>
              </li>



              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>






              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>



              <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/demjhonsilver"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                <i className="ri-twitter-x-line" style={{ fontSize: '18px', color: 'white' }}></i>
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
