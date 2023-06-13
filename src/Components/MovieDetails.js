import React from "react";


const MovieDetails = ({selectedMovie}) => {
   

    return(
        <div>
             {
                (selectedMovie!=null) ? (
                    <div className="movie-details">
                        <h1> Movie Details: </h1>
                        <h2>{selectedMovie.name}</h2>
                        <p>{selectedMovie.genere}</p>
                        <p>{selectedMovie.rating}</p>

                 </div>
                ) : (<p>Click on Simething ...</p>)
             }

              
        </div>
    )
}

export default MovieDetails;