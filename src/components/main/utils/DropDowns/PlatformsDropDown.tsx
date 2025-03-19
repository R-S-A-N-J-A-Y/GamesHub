import { ImCross } from "react-icons/im";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  BsNintendoSwitch,
  FaApple,
  BsAndroid2,
} from "../../../../../public/Icons/icons";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface props {
  setPlatform: (p: string) => void;
  platform: string;
}

const PlatformsDropDown = ({ setPlatform, platform }: props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const URLplatform = searchParams.get("platform")?.toLowerCase();
    console.log(URLplatform);
    if (URLplatform) setPlatform(URLplatform);
    else setPlatform("");
  }, [searchParams]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const Selectedplatform = e.currentTarget.getAttribute("data-key");
    if (Selectedplatform === null) return;

    console.log(Selectedplatform);
    const params = new URLSearchParams(searchParams);
    if (Selectedplatform === "Clear") params.delete("platform");
    else params.set("platform", Selectedplatform);

    setSearchParams(params);
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
            {platform === "clear" || platform === ""
              ? "Platforms"
              : platform.charAt(0).toUpperCase() + platform.slice(1)}
          </a>
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 "
                data-key="Pc"
                onClick={handleClick}
              >
                <FaWindows size={"20px"} />
                PC
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Playstation"
                onClick={handleClick}
              >
                <FaPlaystation size={"20px"} />
                Play Station
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Xbox"
                onClick={handleClick}
              >
                <FaXbox size={"18px"} />
                Xbox
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Nintendo"
                onClick={handleClick}
              >
                <BsNintendoSwitch size={"16px"} />
                Nintendo
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Mac"
                onClick={handleClick}
              >
                <FaApple size={"20px"} />
                Mac
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Ios"
                onClick={handleClick}
              >
                <FaApple size={"20px"} />
                Ios
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2"
                data-key="Android"
                onClick={handleClick}
              >
                <BsAndroid2 size={"20px"} className="p-0" />
                Android
              </a>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 text-danger"
                data-key="Clear"
                onClick={handleClick}
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
