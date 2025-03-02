import { useForm } from "react-hook-form";

const CreateGame = () => {
  const { register, handleSubmit } = useForm();

  const Submit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className="m-3 p-5 d-flex flex-column gap-3 w-50 bg-dark text-white"
      onSubmit={handleSubmit(Submit)}
    >
      <div>
        <label className="form-label" /> Game Name
        <input type="text" className="form-control" {...register("GameName")} />
      </div>
      <div>
        <label className="form-label" /> Image Src
        <input
          type="text"
          className="form-control"
          {...register("Image Src")}
        />
      </div>
      <div>
        <label className="form-label" /> Genres
        <input type="text" className="form-control" {...register(" Genres")} />
      </div>
      <div>
        <label className="form-label" /> Release Date
        <input
          type="text"
          className="form-control"
          {...register("Release Date")}
        />
      </div>
      <div>
        <label className="form-label" /> Platforms
        <input
          type="text"
          className="form-control"
          {...register("Platforms")}
        />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateGame;
