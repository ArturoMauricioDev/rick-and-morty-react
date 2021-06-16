import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./styles/CardCharacters.css";

export default function CardCharacters(props) {
  return (
    <ul className="list-unstyled">
      {props.items.map((item) => {
        return (
          <li className="container" key={item.id}>
            <div>
              <img className="avatar" src={item.image} alt="" />
            </div>
            <div className="container__info">
              <p className="name">{item.name}</p>
              <p className="twitter">
                <FaTwitter />@{item.name}
              </p>
              <p>{item.species}</p>
              <p>{item.gender}</p>
            </div>
            <div className="container__location">
              <p>{item.origin.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
