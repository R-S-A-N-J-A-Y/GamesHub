import useFetchByOrder from "../../../../../hooks/useFetchByOrder";
import Context from "../../../../main/Context";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminAppLayout = () => {
  const {
    gameData,
    isLoading,
    orderBy,
    setOrderBy,
    setPlatform,
    genre,
    setGenre,
  } = useFetchByOrder();

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
              <SideBar setGenre={setGenre} genre={genre} />
            </div>
          </div>

          <div className="col-lg-10 ">
            <Context
              gameData={gameData}
              isLoading={isLoading}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              setPlatform={setPlatform}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppLayout;
