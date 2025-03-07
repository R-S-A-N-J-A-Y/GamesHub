import { useForm } from "react-hook-form";
import { gameObj } from "../../../../../../main/Context";
import { useEffect } from "react";
import { format } from "date-fns";

const UpdateGameForm = ({ GameData }: { GameData: gameObj | null }) => {
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
    const updatedData = {
      ...data,
      releaseDate: new Date(data.releaseDate),
    };
    console.log(updatedData);
  };

  if (GameData === null) return null;

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
