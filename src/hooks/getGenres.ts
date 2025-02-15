// import useFetchGame from "./useFetchGame"

const getGenres = () => {
    // const { data } = useFetchGame();
    // let genresList: Set<string> = new Set();
    // data.forEach( game => {
    //     game.genres.map ( (g: string) => {
    //         genresList.add(g);
    //     } )
    // } )
    return Array.from([ "Action", "Adventure", "Superhero", "Survival", "Horror", "Crime", "mythology", "Western" ]);
}

export default getGenres