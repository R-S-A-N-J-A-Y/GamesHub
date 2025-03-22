import useFetchByOrder from "../../../../../../hooks/useFetchByOrder";
import Context from "../../../../../main/GameCard/Context";
import Header from "./Header";
import SideBar from "./SideBar";

const UserAppLayout = () => {
  const {
    gameData,
    isLoading,
    orderBy,
    setOrderBy,
    platform,
    setPlatform,
    genre,
    setGenre,
  } = useFetchByOrder();

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <div className="container-fluid" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="m-0 p-0 col-lg-2 d-none d-lg-block position-relative">
            <div
              className="m-0 p-0 position-fixed"
              style={{ width: "inherit" }}
            >
              <SideBar setGenre={setGenre} genre={genre} />
            </div>
          </div>

          <div className="col-lg-10 ">
            <Context
              gameData={gameData}
              isLoading={isLoading}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              platform={platform}
              setPlatform={setPlatform}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppLayout;
