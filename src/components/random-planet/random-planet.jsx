import React, { useEffect } from "react";
import { useState } from "react";
import { swapi } from "../../services/swapi-service";
import "./random-planet.css";

const RandomPlanet = () => {
  const [name, setName] = useState(null);
  const [population, setPopulation] = useState(null);
  const [rotationPeriod, setRotationPeriod] = useState(null);
  const [diameter, setDiameter] = useState(null);

  useEffect(() => {
    const getPlanet = async () => {
      swapi.getPlanet(7).then((planet) => {
        setName(planet.name);
        setPopulation(planet.population);
        setRotationPeriod(planet.rotation_period);
        setDiameter(planet.diameter);
      });
    };
    getPlanet();
  }, []);

  return (
    <div>
      {/* <img src={image} alt="#" /> */}
      <div>
        <h4>{name}</h4>
        <ul>
          <li>
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li>
            <span>Rotation Period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li>
            <span>Diametr: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
