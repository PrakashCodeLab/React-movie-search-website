import React from 'react';
import "./Moviecard.scss";
import PlaceholderImage from "../assets/images/15987_aa.jpg";

const Moviecard = ({movie}) => {
  const {Poster,Title, Type,Year,imdbID} = movie;
  return (
    <div  key={imdbID} className="movie-card">
  <div className="movie-card-image">
    <img src={Poster!=='N/A'?Poster :PlaceholderImage} alt={`${Title}`} />
  </div>
  <div className="movie-card-details">
    <h3 className="movie-card-title">{Title}</h3>
    <p className="movie-card-year">{Year}</p>
    <p className="movie-card-type">{Type}</p>
  </div>
</div>

  );
}

export default Moviecard;
