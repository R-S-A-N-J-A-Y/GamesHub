import Header from "./components/header/Header";
import Body from "./components/main/Body";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="row gap-2 m-0">
      <div className="row m-0">
        <div className="col-md-12">
          <Header />
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-lg-2 d-none d-lg-block border border-start-0 bg-black bg-opacity-10 border-dark-subtle rounded-end p-0">
          <SideBar />
        </div>
        <div className="col-md-12 col-lg-10">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
