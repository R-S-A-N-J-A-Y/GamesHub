import { useState } from "react";
import { ImCross } from "react-icons/im";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  BsNintendoSwitch,
  BsApple,
  BsAndroid2,
} from "../../../../../public/Icons/icons";

interface props {
  onClick: (p: string) => void;
}

const PlatformsDropDown = ({ onClick }: props) => {
  const [platform, selectPlatform] = useState("Platforms");

  const handleClick = (p: string) => {
    selectPlatform(p === "Clear" ? "Platforms" : p);
    onClick(p === "PlayStation" ? "ps5" : p.toLowerCase());
  };

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
            style={{
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {platform}
          </a>
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 "
                onClick={() => handleClick("PC")}
              >
                <FaWindows size={"20px"} />
                PC
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("PlayStation")}
              >
                <FaPlaystation size={"20px"} />
                Play Station
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("Xbox")}
              >
                <FaXbox size={"18px"} />
                Xbox
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("Nintendo")}
              >
                <BsNintendoSwitch size={"16px"} />
                Nintendo
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("Mac")}
              >
                <BsApple size={"20px"} />
                Mac
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("IOS")}
              >
                <BsApple size={"20px"} />
                Ios
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                onClick={() => handleClick("Android")}
              >
                <BsAndroid2 size={"20px"} className="p-0" />
                Android
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 text-danger"
                onClick={() => handleClick("Clear")}
              >
                <ImCross color="red" />
                Clear
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PlatformsDropDown;
