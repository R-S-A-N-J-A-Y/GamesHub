import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";

const ExploreAppLayout = () => {
  return (
    <div style={{ backgroundColor: "pink", paddingBottom: "1000px" }}>
      <Header />
      <div className="container-fluid" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="m-0 p-0 col-lg-2 d-none d-lg-block  rounded-3 position-relative">
            <div
              className="m-0 p-0 d-flex align-items-center position-fixed bg-white"
              style={{ height: "86vh", width: "inherit" }}
            >
              <Sidebar />
            </div>
          </div>
          <div className="m-0 p-0 col-lg-10 bg-success-subtle">hi</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAppLayout;
