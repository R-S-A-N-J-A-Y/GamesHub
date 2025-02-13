import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        //   padding: `150px 0 0 ${window.innerWidth < 1420 ? "0" : "250px"}`,
      }}
    >
      <AppLayout />
    </div>
  );
}

export default App;
