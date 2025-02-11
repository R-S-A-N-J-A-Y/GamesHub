import Body from "../main/Body";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="row m-0 p-0">
        <div
          className="col-lg-2 d-none d-lg-block border border-start-0 bg-black bg-opacity-10 border-dark-subtle rounded-end p-0"
          style={{ marginTop: "100px" }}
        >
          <SideBar />
        </div>
        <div className="col-md-12 col-lg-10" style={{ marginTop: "100px" }}>
          <Body />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
