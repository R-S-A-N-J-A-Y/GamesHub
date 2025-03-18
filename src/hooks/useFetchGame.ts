import { useEffect, useState } from "react"

export interface gameObj{
    name: string,
    imageSrc: string;
    likes: number;
    genres: string[];
    releaseDate: string;
    platforms: string[];
};

const useFetchGame = () => {
    const [data, setData] = useState<gameObj []>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch("http://localhost:3000/getgame")
        .then(res => res.json())
        .then(async(data) => {
            setData(data);
            await setTimeout( () => {
                setIsLoading(false);
            }, 3000 );
        })
        .catch(err => {
            setIsLoading(false);
            alert("Error Connecting To Backend...");
            console.warn("Error Loading Genres: ", err.message);
        })
    }, [] );
    // console.log(data);
    return {data, setData, isLoading, setIsLoading};
}

export default useFetchGame;