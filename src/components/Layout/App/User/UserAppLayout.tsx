import useFetchByOrder from "../../../../hooks/useFetchByOrder";
import Context from "../../../main/Context";
import Header from "./utils/Header";
import SideBar from "./utils/SideBar";

const UserAppLayout = () => {
  const { gameData, isLoading, setOrderBy, setPlatform, setGenre } =
    useFetchByOrder();

  const handleGenre = (g: string) => {
    console.log(g);
    setGenre(g);
  };
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <div className="container-fluid" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block position-relative sidebar">
            <div
              className="rounded-end-4 p-0 position-fixed bg-white"
              style={{ width: "inherit" }}
            >
              <SideBar onClick={handleGenre} />
            </div>
          </div>

          <div className="col-lg-10 ">
            <Context
              gameData={gameData}
              isLoading={isLoading}
              setOrderBy={setOrderBy}
              setPlatform={setPlatform}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppLayout;
