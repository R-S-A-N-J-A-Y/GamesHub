import NUserAppLayout from "./NonUser/NUserAppLayout";
import UserAppLayout from "./User/UserAppLayout";
import AdminController from "./Admin/AdminController";

interface Props {
  mode: string;
}

const AppLayout = ({ mode }: Props) => {
  if (mode === "admin") return <AdminController />;
  if (mode == "user") return <UserAppLayout />;
  return <NUserAppLayout />;
};

export default AppLayout;
