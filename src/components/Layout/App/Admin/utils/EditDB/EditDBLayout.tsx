import { useState } from "react";
import GameForm from "./GameForm";
import UserForm from "./UserForm";

const EditDBLayout = () => {
  const [isGame, setIsGames] = useState(false);
  const [state, setState] = useState("create");

  return (
    <div className="row m-5 p-5 border rounded-3 border-dark gap-4">
      <div className="col-lg-2 p-5 bg-primary-subtle d-flex flex-column justify-content-around border rounded-4 border-dark">
        <button
          className={`btn btn-primary p-3 ${!isGame ? "opacity-75" : ""}`}
          onClick={() => setIsGames(false)}
        >
          Edit Users
        </button>
        <button
          className={`btn btn-primary p-3 ${isGame ? "opacity-75" : ""}`}
          onClick={() => setIsGames(true)}
        >
          Edit Games
        </button>
      </div>

      <div
        className="col bg-dark-subtle rounded-4 p-5"
        style={{ height: "580px" }}
      >
        {isGame && <GameForm state={state} />}
        {!isGame && <UserForm />}
      </div>

      <div className="m-0 p-4 col-lg-2 bg-primary-subtle d-flex flex-column justify-content-around border rounded-4 border-dark">
        <button
          className={`btn btn-primary p-3 ${
            state === "create" ? "opacity-75" : ""
          }`}
          onClick={() => setState("create")}
        >
          Create
        </button>
        <button
          className={`btn btn-primary p-3 ${
            state === "update" ? "opacity-75" : ""
          }`}
          onClick={() => setState("update")}
        >
          Update
        </button>
        <button
          className={`btn btn-primary p-3 ${
            state === "delete" ? "opacity-75" : ""
          }`}
          onClick={() => setState("delete")}
        >
          Delete
        </button>
        <button
          className={`btn btn-primary p-3 ${
            state === "view" ? "opacity-75" : ""
          }`}
          onClick={() => setState("view")}
        >
          View Card
        </button>
      </div>
    </div>
  );
};

export default EditDBLayout;
