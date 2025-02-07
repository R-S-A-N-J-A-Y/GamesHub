import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div style={{ marginBottom: "1000px" }}>
      <div className="row">
        <div className="col-md-12 bg-primary">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 d-none d-md-block bg-danger">
          <SideBar />
        </div>
        <div className="col-md-10 bg-success">Bye</div>
      </div>
    </div>
  );
}

export default App;
