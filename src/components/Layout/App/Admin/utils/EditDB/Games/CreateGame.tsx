import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  imageSrc: string;
  genres: string;
  date: Date;
  platforms: string;
}

const CreateGame = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const Submit = (data: FormData) => {
    console.log(data);

    const formattedData = {
      ...data,
      genres: data.genres
        .split(",")
        .map((genre) => genre.trim().replace(/['"]+/g, "")),
      platforms: data.platforms
        .split(",")
        .map((genre) => genre.trim().replace(/['"]+/g, "")),
    };

    console.log(formattedData);
    CallBackend(formattedData);
    reset();
  };

  const CallBackend = async (data: any) => {
    await fetch("http://localhost:3000/admin/addgame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(() => alert("Error Connecting to Backend..."));
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit(Submit)}>
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
        <input type="date" className="form-control" {...register("date")} />
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateGame;
