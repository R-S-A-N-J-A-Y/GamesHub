import { useEffect, useState } from "react";
import useFetchGame, { gameObj } from "./useFetchGame";

const useFetchByOrder = () => {
  const { data, setData, isLoading, setIsLoading } = useFetchGame();
  const [gameData, setGameData] = useState<gameObj[]>([]);
  
  const [orderBy, setOrderBy] = useState("clear");
  const [platform, setPlatform] = useState("");

  const [genre, setGenre] = useState("");

  //Setting the Game Data.
  useEffect(() => {
    if (data) {
      setGameData([...data]);
    }
  }, [data]);

  //set the isLoading, and calling the request calling function.
  useEffect(() => {
    if (platform || orderBy || genre) {
      setIsLoading(true);
      console.log("platform: " + platform, "OrderBy: " + orderBy, "Genre: " + genre);
      fetchGamesByFilters();
    }
  }, [platform, orderBy, genre]);

  // calling the Backend.
  const fetchGamesByFilters = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/getgameby?platform=${platform}&orderBy=${orderBy}&genre=${genre}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
      setTimeout(() => setIsLoading(false), 3000);
    } catch (error) {
      console.error("Failed to Connect to the Backend...", error);
    }
  };

  return { gameData, isLoading, orderBy, setOrderBy, platform, setPlatform, genre, setGenre };
};

export default useFetchByOrder;
