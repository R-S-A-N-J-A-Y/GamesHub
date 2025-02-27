import NUserAppLayout from "./NonUser/NUserAppLayout";
import AdminAppLayout from "./Admin/AdminAppLayout";
import UserAppLayout from "./User/UserAppLayout";

interface Props {
  mode: string;
}

const AppLayout = ({ mode }: Props) => {
  if (mode === "admin") return <AdminAppLayout />;
  if (mode == "user") return <UserAppLayout />;
  return <NUserAppLayout />;
};

export default AppLayout;
