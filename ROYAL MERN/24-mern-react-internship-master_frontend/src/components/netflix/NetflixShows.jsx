import React from "react";
import { Link } from "react-router-dom";
export const NetflixShows = () => {
  return (
    <div>
      <h1>NetflixShows</h1>
      <ul>
        <li>
          <Link to="/netflix/shows/detail/101">Money Heist</Link>
        </li>
        <li>
          <Link to="/netflix/shows/detail/102">Stranger Things</Link>
        </li>
      </ul>
    </div>
  );
};
