import Context from "../main/Context";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Context />
    </>
  );
};

export default AppLayout;
