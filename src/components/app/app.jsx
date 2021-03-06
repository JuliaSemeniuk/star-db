import React from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonalDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonalDetails />
          </div>
        </div>
      </div>
    );
  }
}
