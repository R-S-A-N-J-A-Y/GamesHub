import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../../../../../styles/AlertBox.css";

interface FormData {
  name: string;
  imageSrc: string;
  genres: string;
  date: Date;
  platforms: string;
}

const CreateGame = () => {
  const [isGameExists, setIsGameExists] = useState(false);
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

  const alertBoxTime = () => {
    setIsGameExists(true);
    setTimeout(() => {
      setIsGameExists(false);
    }, 3000);
  };

  const CallBackend = async (data: any) => {
    await fetch("http://localhost:3000/admin/addgame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 400) {
          alertBoxTime();
        }
      })
      .catch(() => alert("Error Connecting to Backend..."));
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit(Submit)}>
      {isGameExists && (
        <div className="p-3 alert-box bg-danger text-white fw-bold rounded-3">
          Game Already Exists...
        </div>
      )}
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
          Create Game
        </button>
      </div>
    </form>
  );
};

export default CreateGame;
