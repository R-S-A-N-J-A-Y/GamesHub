import Explorecard from "./utils/Explorecard";

const Layout = () => {
  return (
    <div className="container-fluid d-flex flex-column gap-3 m-0 p-4">
      <div className="container-fluid p-0 m-0">
        <h1 className="fw-bolder m-0 p-0" style={{ fontSize: "50px" }}>
          Platforms
        </h1>
      </div>
      <div className=" m-0 p-0">
        <Explorecard />
      </div>
    </div>
  );
};

export default Layout;
