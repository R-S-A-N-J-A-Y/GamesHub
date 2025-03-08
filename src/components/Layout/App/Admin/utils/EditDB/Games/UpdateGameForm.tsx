import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { format } from "date-fns";

import { gameObj } from "./UpdateGame";

interface formObj
  extends Omit<gameObj, "releaseDate" | "genres" | "platforms"> {
  releaseDate: Date;
  genres: string[];
  platforms: string[];
}

interface Props {
  GameData: gameObj;
  onUpdate: (status: boolean) => void;
}

const UpdateGameForm = ({ GameData, onUpdate }: Props) => {
  const { register, handleSubmit, setValue } = useForm<gameObj>();

  useEffect(() => {
    if (GameData) {
      setValue("name", GameData.name);
      setValue("imageSrc", GameData.imageSrc);
      setValue("genres", GameData.genres);
      setValue("releaseDate", format(new Date(GameData.date), "yyyy-MM-dd"));
      setValue("platforms", GameData.platforms);
    }
  }, [GameData, setValue]);

  const Submit = (data: gameObj) => {
    const genresArray =
      typeof data.genres === "string"
        ? data.genres.split(",").map((item) => item.trim())
        : data.genres;
    const platformArray =
      typeof data.platforms === "string"
        ? data.platforms.split(",").map((item) => item.trim())
        : data.platforms;

    const updatedData = {
      ...data,
      releaseDate: new Date(data.releaseDate),

      genres: genresArray,
      platforms: platformArray,
      id: GameData === null ? "" : GameData.id,
    };
    console.log(updatedData);
    callBackend(updatedData);
  };

  const callBackend = (data: formObj) => {
    fetch(`http://localhost:3000/admin/updateGame/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 400) {
          onUpdate(false);
        } else onUpdate(true);
      })
      .catch(() => alert("Unable to Connect Backend..."));
  };

  return (
    <form
      className="d-flex flex-column gap-2 m-2"
      onSubmit={handleSubmit(Submit)}
    >
      <div>
        <label className="form-label"> Game Name </label>
        <input type="text" className="form-control" {...register("name")} />
      </div>
      <div>
        <label className="form-label"> Image Src </label>
        <input type="text" className="form-control" {...register("imageSrc")} />
      </div>
      <div>
        <label className="form-label"> Genres </label>
        <input type="text" className="form-control" {...register("genres")} />
      </div>
      <div>
        <label className="form-label"> Release Date </label>
        <input
          type="date"
          className="form-control"
          {...register("releaseDate")}
        />
      </div>
      <div>
        <label className="form-label"> Platforms </label>
        <input
          type="text"
          className="form-control"
          {...register("platforms")}
        />
      </div>
      <div>
        <button className="btn btn-primary p-2" type="submit">
          Update Game
        </button>
      </div>
    </form>
  );
};

export default UpdateGameForm;
