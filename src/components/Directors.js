import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((movie) => 
    <div key={movie.name}>
{movie.name}
<ul>
  {movie.movies.map((movy) => (
    <li key={movy}>{movy}</li>
  ))}
</ul>
    </div>
    )}
    
  </div>;
}

export default Directors;
