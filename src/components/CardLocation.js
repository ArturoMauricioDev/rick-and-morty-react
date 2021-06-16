import React from "react";
import "./styles/CardLocation.css";

export default function CardCharacters(props) {
  return (
    <ul className="list-unstyled">
      {props.items.map((item) => {
        return (
          <li className="container-location" key={item.id}>
            <div>
              <p className="location-name">{item.name}</p>
            </div>
            <div className="container-location__info">
              <p>{item.type}</p>
              <p>{item.dimension}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
