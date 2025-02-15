import { FaPlaystation } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";

const header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed p-1"
      style={{
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 1,
        height: "100px",
        background: "whitesmoke",
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center rounded-4 m-3 px-4 py-0"
        style={{
          background:
            "linear-gradient(202deg, rgba(255,164,204,1) 0%, rgba(98,170,255,1) 100%)",
        }}
      >
        <div className="navbar">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>

        <div className="d-flex w-50">
          <input
            className="form-control me-2 rounded-pill px-3 m-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div className="navbar d-none d-lg-block">
          <ul className="navbar-nav mx-auto w-100 d-flex justify-content-around fs-6 fw-bolder fs-color gap-5">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="platformsDropDown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Platforms
              </a>
              <ul
                className="dropdown-menu p-2"
                aria-labelledby="platformDropDown"
              >
                <li>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <FaWindows size={"20px"} />
                    PC
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <FaPlaystation size={"20px"} />
                    Play Station
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <FaXbox size={"18px"} />
                    Xbox
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <BsNintendoSwitch size={"16px"} />
                    Nintendo
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <FaApple size={"20px"} />
                    Mac
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <FaApple size={"20px"} />
                    Ios
                  </a>
                  <a
                    href="#"
                    className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                  >
                    <BsAndroid2 size={"20px"} className="p-0" />
                    Android
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" style={{ color: "white" }}>
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" style={{ color: "white" }}>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;
