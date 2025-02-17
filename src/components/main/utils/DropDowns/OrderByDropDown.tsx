import { useState } from "react";
import { ImCross } from "react-icons/im";

interface props {
  onClick: (prop: string) => void;
}

const OrderByDropDown = ({ onClick }: props) => {
  const [order, setOrder] = useState("Order By");

  const handleOrder = (o: string) => {
    setOrder(o === "Clear" ? "Order By" : o);
    onClick(o.toLowerCase());
  };

  return (
    <div className="navbar navbar-expand-sm-xs ">
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
            {order}
          </a>
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                onClick={() => handleOrder("Popularity")}
              >
                Popularity
              </a>
            </li>
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                onClick={() => handleOrder("Name")}
              >
                Name
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-item" href="#">
                Release Date
              </a>
            </li>
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                onClick={() => handleOrder("Ratings")}
              >
                Ratings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 text-danger"
                onClick={() => handleOrder("Clear")}
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

export default OrderByDropDown;
