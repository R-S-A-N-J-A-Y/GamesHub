import Spiderman from "../../assets/GameIcons/Spiderman-Rem.jpg";
// import DaysGone from "../../assets/GameIcons/DaysGone.jpg";
import Like from "./utils/Like";

const Body = () => {
  return (
    <div className="container-sm-100 p-2 d-flex flex-column gap-3">
      <div className="container p-0 m-0">
        <h1 className="fw-bolder" style={{ fontSize: "4rem" }}>
          Hot and Trending
        </h1>
        <h1 className="fs-5 fw-normal">
          Top Games by Popularity and Fresh Releases
        </h1>
      </div>
      <div className="container p-0 m-0 d-flex gap-3">
        <div className="container p-2 m-0 w-25">
          <div className="container p-0">
            <img
              src={Spiderman}
              alt="Spiderman"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              className="rounded-top-4"
            />
          </div>
          <div
            className="container p-3 d-flex flex-column justify-content-between bg-dark bg-gradient text-light rounded-bottom-4"
            style={{ minHeight: "160px" }}
          >
            <div className="container p-0">Studio</div>
            <div className="container p-0 fs-3 fw-medium lh-1">
              Spiderman Remastered
            </div>
            <div className="container p-0">
              <Like />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
