import Logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="apple" />
          </li>

          <li>
            <a className="link-styled" href="#">
              Store
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              iPhone
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              Mac
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              Pro
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              AirPods
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              Watch
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              TV
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              Blog
            </a>
          </li>

          <li>
            <a className="link-styled" href="#">
              Supports
            </a>
          </li>
          <li>
            <a className="link-styled" href="#">
              Learn
            </a>
          </li>

          <li>
            <img src={search} alt="apple" />
          </li>

          <li>
            <img src={store} alt="apple" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
