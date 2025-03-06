import { useState } from "react";
import { useForm } from "react-hook-form";

import { gameObj } from "../../../../../../main/Context";

const UpdateGame = () => {
  const { register, handleSubmit } = useForm<{ id: string }>();
  const [GetGame, setGetGame] = useState<boolean>(false);
  const [GameData, setGameData] = useState<gameObj | null>(null);

  const Submit = (data: { id: string }) => {
    console.log(data);
    CallBackend(data);
  };

  const CallBackend = async (data: { id: string }) => {
    await fetch(`http://localhost:3000/admin/getGameById/${data.id}`)
      .then(async (res) => {
        if (res.status === 400) {
          const result = await res.text();
          console.log(result);
          return null;
        }
        return res.json();
      })
      .then((res) => {
        if (!res) return;
        setGetGame(true);
        setGameData(res);
        console.log(res);
      })
      .catch((err) => {
        alert("Error Connecting to backend... " + err);
        console.log(err);
      });
  };

  return (
    <div className="d-flex flex-column gap-4">
      <form
        className="d-flex align-items-center"
        onSubmit={handleSubmit(Submit)}
      >
        <label
          className="form-label m-0 fw-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          Enter Game Id:
        </label>
        <input
          type="text"
          className="form-control mx-4 flex-grow-1"
          {...register("id")}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ whiteSpace: "nowrap" }}
        >
          Enter Request
        </button>
      </form>
      {GetGame && GameData && <div>{JSON.stringify(GameData, null, 2)}</div>}
    </div>
  );
};

export default UpdateGame;
