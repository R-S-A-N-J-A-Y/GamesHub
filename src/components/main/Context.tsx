import useFetchGame from "../../hooks/useFetchGame";
import Like from "./utils/Like";
import { FaPlaystation } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

const Context = () => {
  const { data } = useFetchGame();

  return (
    <div className="container-fluid d-flex flex-column gap-3 p-4 m-0">
      <div className="container-fluid p-0 m-0 ">
        <h1 className="fw-bolder" style={{ fontSize: "50px" }}>
          Hot and Trending
        </h1>
        <h1 className="fs-5 fw-normal">
          Top Games by Popularity and Fresh Releases
        </h1>
      </div>

      <div className="container-fluid p-0 m-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 row-cols-xxl-md-5 row-cols-xxxl-6 m-0">
          {data.length > 0 ? (
            data.map((game, index) => (
              <div key={index} className="col mb-5 m-0">
                <div className="container p-0">
                  <img
                    src={game.imageSrc}
                    alt={game.name}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                    className="rounded-top-4"
                  />
                </div>
                <div
                  className="container p-3 d-flex flex-column justify-content-between bg-dark bg-gradient text-light rounded-bottom-4"
                  style={{ gap: "15px" }}
                >
                  <div
                    className="container p-0 d-flex justify-content-start"
                    style={{ gap: "10px" }}
                  >
                    {game.platforms.includes("ps5") && <FaPlaystation />}
                    {game.platforms.includes("xbox") && <FaXbox />}
                    {game.platforms.includes("pc") && <FaWindows />}
                  </div>
                  <div
                    className="container p-0 fw-medium"
                    style={{ fontSize: "24px", lineHeight: "1.2" }}
                  >
                    {game.name}
                  </div>
                  <div className="container p-0 d-flex justify-content-start">
                    <Like />
                    <p className="m-0 mx-2 p-0">{game.likes}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading games...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Context;
