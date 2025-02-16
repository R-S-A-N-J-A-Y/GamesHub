import GameCard from "./gameCard";

const Context = () => {
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
        <GameCard />
      </div>
    </div>
  );
};

export default Context;
