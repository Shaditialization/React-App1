import { Link } from "react-router-dom";

export default function Navbar() {
    return <>
    
    <nav className="navbar bg-dark fixed-top p-3  navbar-expand-lg">
        <div className="container ">
          <li className="nav-item list-unstyled ">
            <Link className="navbar-brand text-white display-1" to="/">Startframework</Link>
            </li>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              

          {/* <li className="nav-item">
            <Link className="nav-link" to="/">Startframework</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-white" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="contact">Contact</Link>
          </li>
              
      </ul>
      
    </div>
  </div>
      </nav>
      



























      {/* <nav class="navbar navbar-expand-lg bg-black navbar-dark fixed-top p-3">  
            <div class="container">
                <a class="navbar-brand fw-medium fs-3" href="#">DevFolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav nav-underline ms-auto mb-2 mb-lg-0 ">
                        <li class="nav-item mx-2">
                            <a class="nav-link active text-white fw-medium" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white fw-medium" href="#about">ABOUT</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white fw-medium" href="#services">SERVICES</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white fw-medium" href="#portfolio">WORK</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link text-white fw-medium" href="#blog">BLOG</a>
                        </li>
                        <li class="nav-item dropdown mx-2">
                            <a class="nav-link dropdown-toggle text-white fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                DROP DOWN
                            </a>
                            <ul class="dropdown-menu" >
                                <li><a class="dropdown-item" href="#">Drop Down 1</a></li>
                                <li class="nav-item dropdown mx-2">
                                    <a class="nav-link dropdown-toggle text-dark" href="#">Deep Drop Down</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Deep Drop Down 1</a></li>
                                        <li><a class="dropdown-item" href="#">Deep Drop Down 2</a></li>
                                        <li><a class="dropdown-item" href="#">Deep Drop Down 3</a></li>
                                        <li><a class="dropdown-item" href="#">Deep Drop Down 4</a></li>
                                        <li><a class="dropdown-item" href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="#">Drop Down 2</a></li>
                                <li><a class="dropdown-item" href="#">Drop Down 3</a></li>
                                <li><a class="dropdown-item" href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li class="nav-item mx-2">
                        <a class="nav-link text-white fw-medium" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
    
    
    
    </>
}