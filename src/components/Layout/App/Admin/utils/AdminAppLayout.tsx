import Context from "../../../../main/Context";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminAppLayout = () => {
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
              <SideBar />
            </div>
          </div>

          <div className="col-lg-10 ">
            <Context />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppLayout;
