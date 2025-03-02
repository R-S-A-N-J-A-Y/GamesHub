const GamesLayout = () => {
  return (
    <div className="d-flex justify-content-start gap-3 m-3">
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games/create")}
      >
        Create
      </button>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games/update")}
      >
        Update
      </button>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games/delete")}
      >
        Delete
      </button>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games/patch")}
      >
        Patch
      </button>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/admin/editdb/games/view")}
      >
        View card
      </button>
    </div>
  );
};

export default GamesLayout;
