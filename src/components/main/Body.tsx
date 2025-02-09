import Spiderman from "../../assets/GameIcons/Spiderman-Rem.jpg";
import Like from "./utils/Like";

const Body = () => {
  return (
    <div className="container-sm-100 p-2">
      <div className="container p-0 mx-2 my-4">
        <h1 className="fw-bolder" style={{ fontSize: "4rem" }}>
          Hot and Trending
        </h1>
        <h1 className="fs-5 fw-normal">
          Top Games by Popularity and Fresh Releases
        </h1>
      </div>

      <div className="container m-0">
        <div className="row gap-3">
          <div className="col-lg-3 col-md-5 col-sm-5 bg-dark bg-gradient row gap-2 m-2 p-0 rounded-3">
            <div className="row p-0 m-0 ">
              <img src={Spiderman} alt="" className="p-0 rounded float-start" />
            </div>
            <div className="row gap-3 p-2 m-0 text-light">
              <div className="d-flex align-items-center gap-2">Studios</div>
              <div className="d-flex align-items-center gap-2">
                <h1 className="fs-3 fw-medium m-0 p-0">
                  Spider-man Remastered
                </h1>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Like />
                <p className="m-0 p-0"> 8.2% </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-5 bg-dark bg-gradient row gap-2 m-2 p-0 rounded-3">
            <div className="row p-0 m-0 ">
              <img src={Spiderman} alt="" className="p-0 rounded float-start" />
            </div>
            <div className="row gap-3 p-2 m-0 text-light">
              <div className="d-flex align-items-center gap-2">Studios</div>
              <div className="d-flex align-items-center gap-2">
                <h1 className="fs-3 fw-medium m-0 p-0">
                  Spider-man Remastered
                </h1>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Like />
                <p className="m-0 p-0"> 8.2% </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
