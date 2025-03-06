import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../../../../../styles/AlertBox.css";

const DeleteGame = () => {
  const { register, handleSubmit, reset } = useForm<{ id: string }>();
  const [isNotExist, setNotExist] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const Submit = (data: { id: string }) => {
    console.log(data);
    CallBackend(data);
    reset();
  };

  const alertBoxTimeDanger = () => {
    setNotExist(true);
    setTimeout(() => {
      setNotExist(false);
    }, 3000);
  };

  const alertBoxTimePrimary = () => {
    setIsDeleted(true);
    setTimeout(() => {
      setIsDeleted(false);
    }, 3000);
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
          alertBoxTimeDanger();
          return null;
        } else {
          alertBoxTimePrimary();
          return res.json();
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => alert("Error Connecting with Backend..."));
  };

  return (
    <div className="d-flex flex-column gap-4">
      {isNotExist && (
        <div className="p-3 alert-box bg-danger text-white fw-bold rounded-3">
          Game Not Exists...
        </div>
      )}
      {isDeleted && (
        <div className="p-3 alert-box bg-primary text-white fw-bold rounded-3">
          Game Deleted Successfull...
        </div>
      )}
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
