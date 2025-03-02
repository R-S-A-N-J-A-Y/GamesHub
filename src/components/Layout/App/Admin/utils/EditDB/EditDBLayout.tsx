const EditDBLayout = () => {
  return (
    <div className="m-3 p-2 d-flex justify-content-start gap-2">
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/users")}
      >
        Edit Users
      </button>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games")}
      >
        Edit Games
      </button>
    </div>
  );
};

export default EditDBLayout;
