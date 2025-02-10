import Spiderman from "../../assets/GameIcons/Spiderman-Rem.jpg";
import DaysGone from "../../assets/GameIcons/DaysGone.jpg";
import Like from "./utils/Like";

const Body = () => {
  return (
    <div className="container-sm-100 p-2 d-flex flex-column gap-3 p-4">
      <div className="container p-0 m-0">
        <h1 className="fw-bolder" style={{ fontSize: "4rem" }}>
          Hot and Trending
        </h1>
        <h1 className="fs-5 fw-normal">
          Top Games by Popularity and Fresh Releases
        </h1>
      </div>
      <div className="container p-0 m-0 d-flex flex-wrap gap-4">
        <div
          className="row container p-2 m-0"
          style={{ minWidth: "250px", maxWidth: "300px", flexGrow: 1 }}
        >
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
            <div
              className="container p-0 fw-medium"
              style={{ fontSize: "28px", lineHeight: "1.2" }}
            >
              Spiderman Remastered
            </div>
            <div className="container p-0 d-flex justify-content-start">
              <Like />
              <p className="m-0 mx-2 p-0">9.2</p>
            </div>
          </div>
        </div>
        <div
          className="row container p-2 m-0"
          style={{ minWidth: "250px", maxWidth: "300px", flexGrow: 1 }}
        >
          <div className="container p-0">
            <img
              src={DaysGone}
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
            <div
              className="container p-0 fw-medium"
              style={{ fontSize: "28px", lineHeight: "1.2" }}
            >
              Days Gone
            </div>
            <div className="container p-0 d-flex justify-content-start">
              <Like />
              <p className="m-0 mx-2 p-0">9.2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
