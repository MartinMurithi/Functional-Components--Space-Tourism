import Nav from "./Components/Nav";
import React from "react";
import "../src/App.css"
import Main from "./Components/Main";
import data from "./Components/Data.js"

function App() {

  return (
    <div className="App">
      <Nav />
      <Main data1={data.intro} data2={ data.text} data3={data.outro} />
    </div>
  );
}

export default App;
