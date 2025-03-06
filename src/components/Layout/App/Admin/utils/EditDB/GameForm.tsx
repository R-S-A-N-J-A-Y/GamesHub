import CreateGame from "./Games/CreateGame";
import DeleteGame from "./Games/DeleteGame";
import UpdateGame from "./Games/UpdateGame";
import ViewCard from "./Games/ViewCard";

interface Props {
  state: string;
}

const GameForm = ({ state }: Props) => {
  if (state === "create") return <CreateGame />;
  if (state === "update") return <UpdateGame />;
  if (state === "delete") return <DeleteGame />;
  if (state === "view") return <ViewCard />;
};

export default GameForm;
