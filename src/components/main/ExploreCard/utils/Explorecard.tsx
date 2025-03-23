import AmongUs from "../../../../../public/GamePreviews/AmongUs.jpg";

const Explorecard = () => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 6, 66, 6, 6, 6, 6];

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {arr.map((index) => (
        <div
          key={index}
          className="col d-flex flex-column position-relative mb-4"
        >
          <div className="card rounded-4 overflow-hidden">
            <img
              className="rounded-4 img-fluid"
              src={AmongUs}
              alt=""
              style={{
                objectFit: "cover",
                height: "300px",
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between"
              style={{
                color: "white",
                background: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <ul className="mt-3 list-unstyled p-3 d-flex flex-column justify-content-around align-items-center">
                <li className="mb-2">
                  <p className="m-1 fs-4 fw-bolder">
                    <span className="border-bottom d-inline-block">PC</span>
                  </p>
                </li>
                <li>
                  <button
                    className="btn border border-white text-white fw-bold"
                    style={{
                      background: "transparent",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Follow
                  </button>
                </li>
              </ul>
              <div
                className="rounded-4 p-3"
                style={{ background: "rgba(47, 47, 50, 0.7)" }}
              >
                <ul className="list-unstyled">
                  <li
                    className="d-flex justify-content-between border-bottom fw-bolder mb-1 text-white"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <p className="m-1">Total Games</p>
                    <p className="m-1">30000</p>
                  </li>
                  <li
                    className="d-flex justify-content-between text-white"
                    style={{ fontSize: "0.7rem" }}
                  >
                    <p className="m-1">Grand Theft Auto V</p>
                    <p className="m-1">30000</p>
                  </li>
                  <li
                    className="d-flex justify-content-between text-white"
                    style={{ fontSize: "0.7rem" }}
                  >
                    <p className="m-1">The Witcher 3: Wild Hunt</p>
                    <p className="m-1">30000</p>
                  </li>
                  <li
                    className="d-flex justify-content-between text-white"
                    style={{ fontSize: "0.7rem" }}
                  >
                    <p className="m-1">Portal 2</p>
                    <p className="m-1">30000</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explorecard;
