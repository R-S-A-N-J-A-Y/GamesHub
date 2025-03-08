import { useState } from "react";
import { useForm } from "react-hook-form";

import UpdateGameForm from "./UpdateGameForm";

export interface gameObj {
  id: string;
  date: Date;
  name: string;
  imageSrc: string;
  likes: number;
  genres: string;
  releaseDate: string;
  platforms: string;
}

const UpdateGame = () => {
  const { register, handleSubmit, reset } = useForm<{ id: string }>();
  const [GameData, setGameData] = useState<gameObj | null>(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isExist, setIsExist] = useState("");

  const Submit = (data: { id: string }) => {
    console.log(data);
    CallBackend(data);
  };

  const alertBoxTimeDanger = (msg: string) => {
    setIsExist(msg);
    setTimeout(() => {
      setIsExist("");
    }, 3000);
  };

  const alertBoxTimePrimary = () => {
    setIsUpdated(true);
    setTimeout(() => {
      setIsUpdated(false);
    }, 3000);
  };

  const CallBackend = async (data: { id: string }) => {
    await fetch(`http://localhost:3000/admin/getGameById/${data.id}`)
      .then(async (res) => {
        if (res.status === 400) {
          const result = await res.text();
          alertBoxTimeDanger(result);
          reset();
          setGameData(null);
          return null;
        }
        return res.json();
      })
      .then((res) => {
        if (!res) return;
        setGameData({ ...res, id: data.id });
        console.log(res);
      })
      .catch((err) => {
        alert("Error Connecting to backend... " + err);
        console.log(err);
      });
  };

  const onUpdateForm = (status: boolean) => {
    setGameData(null);
    if (status) alertBoxTimePrimary();
    else alertBoxTimeDanger("Unable to Update the Game...");
    reset();
  };

  return (
    <>
      {isExist && (
        <div className="p-3 alert-box bg-danger text-white fw-bold rounded-3">
          {isExist}
        </div>
      )}
      {isUpdated && (
        <div className="p-3 alert-box bg-primary text-white fw-bold rounded-3">
          Game Updated Successfully...
        </div>
      )}
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
        {GameData && (
          <UpdateGameForm GameData={GameData} onUpdate={onUpdateForm} />
        )}
      </div>
    </>
  );
};

export default UpdateGame;
