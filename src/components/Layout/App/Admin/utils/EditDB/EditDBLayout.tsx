import EditForm from "./EditForm";

const EditDBLayout = () => {
  return (
    <div className="row m-5 p-5 border rounded-3 border-dark gap-4">
      <div className="col-lg-2 p-5 bg-primary-subtle d-flex flex-column justify-content-around border rounded-4 border-dark">
        <button
          className="btn btn-primary p-3"
          onClick={() => (window.location.href = "/admin/editdb/users")}
        >
          Edit Users
        </button>
        <button
          className="btn btn-primary p-3"
          onClick={() => (window.location.href = "/admin/editdb/games")}
        >
          Edit Games
        </button>
      </div>

      <div className="col bg-dark-subtle rounded-4 p-5">
        <EditForm />
      </div>

      <div className="m-0 px-3 py-5 col-lg-2 bg-primary-subtle d-flex flex-column justify-content-between border rounded-4 border-dark">
        <button className="btn btn-primary p-3">Create</button>
        <button className="btn btn-primary p-3">Update</button>
        <button className="btn btn-primary p-3">Delete</button>
        <button className="btn btn-primary p-3">View Card</button>
      </div>
    </div>
  );
};

export default EditDBLayout;
