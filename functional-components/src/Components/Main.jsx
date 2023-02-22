import "../Components/Main.css";
import React from "react";

function Main({data1, data2, data3 }) {

  // let text1 = props.data1;
  // let text2 = props.data2;
  // let text3 = props.data3;
  return (
    <div className="gridContainer">
      <div className="intro">
        <p className="text1">{data1}</p>
        <p className="text2">{data2}</p>
        <p className="text3">{data3}</p>
      </div>

          <div className="exploreDiv">
              <p className="explore">EXPLORE</p>
      </div>
    </div>
  );
}

export default Main;
