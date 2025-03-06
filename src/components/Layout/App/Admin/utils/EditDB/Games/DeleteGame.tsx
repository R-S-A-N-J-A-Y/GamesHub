import { useForm } from "react-hook-form";

const DeleteGame = () => {
  const { register, handleSubmit } = useForm<{ id: string }>();

  const Submit = (data: { id: string }) => {
    console.log(data);
    CallBackend(data);
  };

  const CallBackend = async (data: { id: string }) => {
    console.log(data.id);
    await fetch(`http://localhost:3000/admin/deleteGameById/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 400) {
          const result = await res.text();
          console.log(result);
          return null;
        }
        return res.json();
      })
      .then((res) => console.log(res))
      .catch(() => alert("Error Connecting with Backend..."));
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
    </div>
  );
};

export default DeleteGame;
