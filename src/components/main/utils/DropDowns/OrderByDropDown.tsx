import { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

interface props {
  orderBy: string;
  setOrderBy: (p: string) => void;
}

const OrderByDropDown = ({ orderBy, setOrderBy }: props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("orderBy")?.toLowerCase();
    if (order) setOrderBy(order);
    else setOrderBy("");
  });

  const handleOrder = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const order = e.currentTarget.getAttribute("data-key");
    if (order === null) return;

    const params = new URLSearchParams(searchParams);
    if (order === "clear") params.delete("orderBy");
    else params.set("orderBy", order);

    setSearchParams(params);
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
            {orderBy === "clear" || orderBy == ""
              ? "Order By"
              : orderBy.charAt(0).toUpperCase() + orderBy.slice(1)}
          </a>
          <ul className="dropdown-menu p-2" aria-labelledby="platformsDropDown">
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                // onClick={() => handleOrder("Popularity")}
              >
                Popularity
              </a>
            </li>
            <li>
              <a
                className="nav-link dropdown-item"
                role="button"
                data-key={"Name"}
                onClick={handleOrder}
              >
                Name
              </a>
            </li>
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                // onClick={() => handleOrder("Date")}
              >
                Release Date
              </a>
            </li>
            <li>
              <a
                className="nav-link dropdown-item"
                href="#"
                // onClick={() => handleOrder("Likes")}
              >
                Ratings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link dropdown-item d-flex justify-content-start align-items-center gap-2 text-danger"
                role="button"
                data-key="clear"
                onClick={handleOrder}
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
