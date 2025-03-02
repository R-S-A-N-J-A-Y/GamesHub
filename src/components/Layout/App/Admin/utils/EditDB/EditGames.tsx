import { Routes, Route } from "react-router-dom";
import GamesLayout from "./Games/GamesLayout";
import CreateGame from "./Games/CreateGame";
import UpdateGame from "./Games/UpdateGame";
import DeleteGame from "./Games/DeleteGame";
import PatchGame from "./Games/PatchGame";
import ViewCard from "./Games/ViewCard";

const EditGames = () => {
  return (
    <Routes>
      <Route path="/" element={<GamesLayout />} />
      <Route path="/create" element={<CreateGame />} />
      <Route path="/update" element={<UpdateGame />} />
      <Route path="/delete" element={<DeleteGame />} />
      <Route path="/patch" element={<PatchGame />} />
      <Route path="/view" element={<ViewCard />} />
    </Routes>
  );
};

export default EditGames;
