import React, {useState} from "react";


// Dear Ai please genrate 10 voides with thier, name, genere, and rating, and image

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
    let [clickedMovies, setClickedMovies] = useState({})

    

    //  function showMovieDetails(movie){
    //      setClickedMovies(movie)
    //  }

    return(
        <div className="App">
              <div className="movies">
               {/* Iterate over moview data set created above */}
                {
                movies.map((movie) => (
                     <div className="banner" onClick={()=>setClickedMovies(movie)}>
                        <img src="https://static.toiimg.com/photo/msid-95470486/95470486.jpg" alt="movie" />
                        <h1>{movie.name}</h1>
                    </div>
                ))
               }

              </div>


             {/* Display Clicekd movies info */}
             {
                clickedMovies && (
                <div className="movie-details">
                        <h1>{clickedMovies.name}</h1>
                        <p>{clickedMovies.genere}</p>
                        <p>{clickedMovies.rating}</p>

                </div>
                )
              }
        </div>
    )
}


export default App;