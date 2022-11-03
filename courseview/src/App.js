import * as React from "react"
import * as ReactDOM from "react-dom"
import Drop from "./components/Drop"
import CardContainer from "./components/CardContainer";
import DropdownSearchContainer from "./components/DropdownSearchContainer";


export default function App() {
  var showCards = false;
  return (
    <div>
      <h1>Clemson University CourseView</h1>
      <div>
        <DropdownSearchContainer/>
        <div className="cardContainerDiv" id="cardContainerDivision">
          <CardContainer/>
        </div>
      </div>
    </div>
  );
};
