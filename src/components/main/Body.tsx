import Spiderman from "../../assets/GameIcons/Spiderman-Rem.jpg";

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
          <div className="col-3 bg-dark bg-gradient row gap-2 m-2 p-0 rounded-3">
            <div className="row p-0 m-0 ">
              <img src={Spiderman} alt="" className="p-0 rounded float-start" />
            </div>
            <div className="row gap-2 p-2 m-0 text-light">
              <div className="row">Studios</div>
              <div className="row">
                <h1 className="fs-4 fw-medium m-0 p-0">
                  Spider-man Remastered
                </h1>
              </div>
              <div className="row">Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
