import { useEffect, useState } from "react";
import useFetchGame, { gameObj } from "./useFetchGame";

const useGameData = () => {
  const { data, setData, isLoading, setIsLoading } = useFetchGame();
  const [gameData, setGameData] = useState<gameObj[]>([]);
  const [orderBy, setOrderBy] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (data) {
      setGameData([...data]);
    }
  }, [data]);

  useEffect(() => {
    if (platform || orderBy || genre) {
      setIsLoading(true);
      fetchGamesByFilters();
    }
  }, [platform, orderBy, genre]);

  const fetchGamesByFilters = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/getgameby?platform=${platform}&orderBy=${orderBy}&genre=${genre}`
      );
      const result = await response.json();
      setData(result);
      setTimeout(() => setIsLoading(false), 3000);
    } catch (error) {
      console.error("Failed to Connect to the Backend...", error);
    }
  };

  return { gameData, isLoading, orderBy, setOrderBy, platform, setPlatform, setGenre };
};

export default useGameData;
