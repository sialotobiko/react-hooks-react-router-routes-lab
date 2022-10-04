import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((movie)=> (
    <div key={movie.name}>
    {movie.name}
    
    <ul>
      {movie.movies.map((name)=><li key={name}>{name}</li>)}
    </ul>
    </div>))}
  </div>
  )
}

export default Actors;
