import img1 from '../assets/images/DU-Week2-HW-TitleImage.JPG'
import img2 from '../assets/images/DU-Week2-HW-MeImage.JPG'

const Nav = ({ currentPage, handlePageChange}) => {
    return (
        <div>
        <header>
          <h1>Michael J.</h1>
          <nav>
              <ul>
                  <li>
                    <a 
                      className="borderunderline"
                      href="#About"
                      onClick={() => handlePageChange('About')}
                      //TODO: ternary to highlight page that is current
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a 
                      className="borderunderline" 
                      href="#Work"
                      onClick={() => handlePageChange('Work')}
                    >Work</a>
                  </li>
                  <li>
                      <a
                      className="borderunderline"
                      href="#Contact"
                      onClick={() => handlePageChange('Contact')}
                      >
                        Contact Me
                      </a>
                  </li>
                  <li>
                      <a
                      className="borderunderline"
                      href="#Resume"
                      onClick={() => handlePageChange('Resume')}
                      >
                        Resume
                      </a>
                  </li>
              </ul>
          </nav>
        </header>
        <figure id="BGimage">
            <img id="headerbackground" src={img1} alt="Mountain Landscape" />
            <img id="header-image-over" src={img2} alt="Headshot of Individual" />
            <div id="subtitle-over">Experience Life!</div>
        </figure>
        </div>
    );
}

export default Nav;