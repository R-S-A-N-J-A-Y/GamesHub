import { useEffect, useState } from "react"

const useFetchGame = () => {
    const [data, setData] = useState<any []>([]);
    useEffect( () => {
        fetch("/Data/gameCard.json")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log("Error Loading Genres: ", err.message))
    }, [] );
    return {data};
}

export default useFetchGame;