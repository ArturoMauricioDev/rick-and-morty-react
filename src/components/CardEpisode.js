import React from "react";
import "./styles/CardEpisode.css";

export default function CardEpisode(props) {
  return (
    <ul className="list-unstyled">
      {props.items.map((item) => {
        return (
          <li className="container-episode" key={item.id}>
            <div>
              <h2>{`Episode ${item.id}`}</h2>
              <p className="name-episode">{item.name}</p>
            </div>
            <div className="container-episode__info">
              <p>{item.episode}</p>
              <p>{item.air_date}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
