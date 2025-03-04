const EditForm = () => {
  return (
    <form className="d-flex flex-column gap-3">
      <div>
        <label className="form-label">Sample </label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Sample </label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Sample </label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Sample </label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Sample </label>
        <input type="text" className="form-control" />
      </div>
      <div>
        <button className="btn btn-primary p-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditForm;
