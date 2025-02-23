import Admin from "./Content/Admin";
import NoUser from "./Content/NoUser";
import User from "./Content/User";

import { Props } from "../../../../../App";

const app = ({ onClick, userMode }: Props) => {
  if (userMode === "admin") return <Admin />;
  else if (userMode === "user") return <User />;
  return <NoUser onClick={onClick} />;
};

export default app;
