import { useEffect, useState } from "react";

const useFetchPlatforms = () => {
    const [ platforms, setPlatforms ] = useState<string []>([]);

    const fetchPlatforms = () => {
        fetch("http://localhost:3000/getPlatform")
        .then(res =>res.json())
        .then( data => setPlatforms(data) )
        .catch( err => {
            console.warn("Error Fetching Platforms: " );
            console.log(err.message);
        } )
    }

    useEffect( () => {
        fetchPlatforms();
    }, [] )

    return {platforms};
}

export default useFetchPlatforms;