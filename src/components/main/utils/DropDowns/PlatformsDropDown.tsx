import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  BsNintendoSwitch,
  FaApple,
  BsAndroid2,
} from "../../../../../public/Icons/icons";

const PlatformsDropDown = () => {
  return (
    <div className="navbar navbar-expand-sm-xs p-2">
      <ul className="navbar-nav fs-6 fw-bolder fs-color gap-5  border border-dark rounded-pill px-2">
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
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 "
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
      </ul>
    </div>
  );
};

export default PlatformsDropDown;
