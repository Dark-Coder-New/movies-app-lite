
import React from 'react';
import abhishek from "../image/abhishek.jpeg";

// const abhishek = require("../image/abhishek.jpeg");


const MovieDisplay = ({movies, addSelectMovies}) => {

    // console.log(movies) // [{}, {}, {}, {}, {}, {}, {}, {}, {}]

      return(
        <div className="movies">
               {/* Iterate over moview data set created above */}
                {
                movies.map((movie) => (
                     <div className="banner" 
                      onClick={()=>addSelectMovies(movie)}
                     >
                        {/* <img src={require("../image/abhishek.jpeg")} alt="movie" /> */}
                        <img src={abhishek} alt="movie" />
                        <h1>{movie.name}</h1>
                    </div>
                ))
               }

              </div>
      )

}




export default MovieDisplay;