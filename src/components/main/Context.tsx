import { useEffect, useState } from "react";
import useFetchGame from "../../hooks/useFetchGame";
import OrderByDropDown from "./utils/DropDowns/OrderByDropDown";
import PlatformsDropDown from "./utils/DropDowns/PlatformsDropDown";
import GameCard from "./utils/gameCard";
import { gameObj } from "../../hooks/useFetchGame";

const Context = () => {
  const { data, isLoading } = useFetchGame();
  const [gameData, setGameData] = useState<gameObj[]>([]);

  useEffect(() => {
    if (data) {
      setGameData([...data]);
    }
  }, [data]);

  const SpecifiedPlatform = (p: string) => {
    setGameData(
      p === "clear" ? data : data.filter((g) => g.platforms.includes(p))
    );
  };

  const orderBy = (prop: string) => {
    if (prop === "name")
      setGameData([...gameData].sort((a, b) => a.name.localeCompare(b.name)));
    else if (prop === "ratings" || prop === "popularity") {
      setGameData([...gameData].sort((a, b) => b.likes - a.likes));
      console.log("HI");
    } else {
      setGameData(data);
    }
  };

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

      <div className="d-flex justify-content-start gap-3">
        <OrderByDropDown onClick={orderBy} />
        <PlatformsDropDown onClick={SpecifiedPlatform} />
      </div>

      <div className="container-fluid p-0 m-0">
        {isLoading && <p>Loading...</p>}
        {!isLoading && <GameCard data={gameData} />}
      </div>
    </div>
  );
};

export default Context;
