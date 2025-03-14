//react hooks
import "react-loading-skeleton/dist/skeleton.css";

//Custom Hooks
// import { gameObj } from "../../hooks/useFetchGame";
// import useFetchGame from "../../hooks/useFetchGame";
// import useFetchByOrder from "../../hooks/useFetchByOrder";
import { gameObj } from "../../hooks/useFetchGame";

//pages
import OrderByDropDown from "./utils/DropDowns/OrderByDropDown";
import PlatformsDropDown from "./utils/DropDowns/PlatformsDropDown";
import GameCard from "./utils/gameCard";
import GameCardSkeleton from "./utils/GameCardSkeleton";

interface Props {
  gameData: gameObj[];
  isLoading: boolean;
  setOrderBy: (order: string) => void;
  setPlatform: (platform: string) => void;
}

const Context = ({ gameData, isLoading, setOrderBy, setPlatform }: Props) => {
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
        <OrderByDropDown onClick={(p) => setOrderBy(p)} />
        <PlatformsDropDown onClick={(p) => setPlatform(p)} />
      </div>

      <div className="container-fluid p-0 m-0">
        {isLoading && <GameCardSkeleton />}
        {!isLoading && <GameCard data={gameData} />}
      </div>
    </div>
  );
};

export default Context;
