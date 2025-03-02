import { useEffect, useState } from "react"

const useFetchGame = () => {
    const [data, setData] = useState<any []>([]);
    useEffect( () => {
        fetch("http://localhost:3000/getgame")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log("Error Loading Genres: ", err.message))
    }, [] );
    console.log(data);
    return {data};
}

export default useFetchGame;