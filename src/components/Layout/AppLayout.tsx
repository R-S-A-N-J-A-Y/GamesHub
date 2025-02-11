import Body from "../main/Body";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Body />
    </>
  );
};

export default AppLayout;
