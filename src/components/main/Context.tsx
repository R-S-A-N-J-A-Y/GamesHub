import { useEffect, useRef, useState } from "react";
import useFetchGame from "../../hooks/useFetchGame";
import Like from "./utils/Like";
import { FaPlaystation } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";

const Context = () => {
  const { data } = useFetchGame();

  //margin for cards if sidebar is removed for tab & mob view
  const [marginL, setMarginL] = useState("");

  // To dynamically adjust the cards in center for mob view
  const containeRef = useRef<HTMLDivElement | null>(null);
  const [itemRow, setItemRow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      //margin Left
      if (window.innerWidth > 1210) setMarginL("300px");
      else if (window.innerWidth >= 992 && window.innerWidth <= 1210)
        setMarginL("200px");
      else setMarginL("0px");

      //itemRow align center
      if (containeRef && containeRef.current) {
        const containerwidth = containeRef.current.clientWidth;
        const ans = Math.floor((containerwidth - 24 - 100) / 300);
        console.log(containerwidth - 24 - 100, ans);

        setItemRow(ans || 1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containeRef}
      className="container-sm-100 p-2 d-flex flex-column gap-3 p-4"
      style={{
        marginTop: "100px",
        marginLeft: marginL,
      }}
    >
      <div className="container p-0 m-0">
        <h1 className="fw-bolder" style={{ fontSize: "50px" }}>
          Hot and Trending
        </h1>
        <h1 className="fs-5 fw-normal">
          Top Games by Popularity and Fresh Releases
        </h1>
      </div>

      <div
        className="container p-0 m-0 d-flex flex-wrap gap-5"
        style={{ justifyContent: itemRow === 1 ? "center" : "start" }}
      >
        {data.length > 0 ? (
          data.map((game, index) => (
            <div
              key={index}
              className="row container p-2 m-0 h-100"
              style={{ minWidth: "280px", maxWidth: "300px" }}
            >
              <div className="container p-0" style={{ height: "250px" }}>
                <img
                  src={game.imageSrc}
                  alt={game.name}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  className="rounded-top-4"
                />
              </div>
              <div
                className="container p-3 d-flex flex-column justify-content-between bg-dark bg-gradient text-light rounded-bottom-4"
                style={{ gap: "15px" }}
              >
                <div
                  className="container p-0 d-flex justify-content-start"
                  style={{ gap: "10px" }}
                >
                  {game.platforms.includes("ps5") && <FaPlaystation />}
                  {game.platforms.includes("xbox") && <FaXbox />}
                  {game.platforms.includes("pc") && <FaWindows />}
                </div>
                <div
                  className="container p-0 fw-medium"
                  style={{ fontSize: "24px", lineHeight: "1.2" }}
                >
                  {game.name}
                </div>
                <div className="container p-0 d-flex justify-content-start">
                  <Like />
                  <p className="m-0 mx-2 p-0">{game.likes}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading games...</p>
        )}
      </div>
    </div>
  );
};

export default Context;
