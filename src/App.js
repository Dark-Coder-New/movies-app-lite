import React,{useState} from "react";
import MovieDisplay from "./Components/MovieDisplay";
import MovieDetails from "./Components/MovieDetails";


const movies = [
    {name: "Movie 1", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 2", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 3", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 4", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 5", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 6", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 7", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 8", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"},
    {name: "Movie 9", genere: "Action", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRbTBoFGrg08APZDSY-U_Pbpd5PSr_IkL4v9yQWH3lPrmNosNy-P796yr_Jqjh40ABeRCCfd0mkyyoR_GI"}
]

const App = () => {
    let [selectedMovie, setSelectedMovie] = useState(null)
    console.log(selectedMovie)
    

    return(
        <div className="App">
               <MovieDisplay movies={movies}
                addSelectMovies={setSelectedMovie}
               /> 
               <MovieDetails  selectedMovie={selectedMovie}/>
        </div>
    )
}

export default App;