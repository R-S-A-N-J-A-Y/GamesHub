import Header from "./components/header/Header";
import Body from "./components/main/Body";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div style={{ marginBottom: "1000px" }} className="row gap-2">
      <div className="row m-0">
        <div className="col-md-12">
          <Header />
        </div>
      </div>
      <div className="row m-0 gap-2">
        <div className="col-md-2 d-none d-md-block border border-start-0 bg-black bg-opacity-10 border-dark-subtle rounded-end">
          <SideBar />
        </div>
        <div className="col-md-9 bg-success">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
