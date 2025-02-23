interface Props {
  onClick: (p: string) => void;
}

const SignUp = ({ onClick }: Props) => {
  return (
    <>
      <button
        className="btn btn-primary m-2 position-fixed end-0 top-0"
        onClick={() => onClick("Home")}
      >
        Home
      </button>
      <form className="col p-3 bg-dark-subtle m-5 p-5">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
