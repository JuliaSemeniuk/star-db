import React from "react";
import "./header.css";
export default class PersonalDetails extends React.Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <div>
          <h4>R2-D2</h4>
          <ul>
            <li>
              <span>Gender</span>
              <span>male</span>
            </li>
            <li>
              <span>Birth Year</span>
              <span>43</span>
            </li>
            <li>
              <span>Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
