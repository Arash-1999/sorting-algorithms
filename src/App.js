import { useState } from "react";

import Chart from "./Chart/Chart";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

import Sorts from "./sort.json";

// function for generatin random array
const randomArr = (len, min = 100, max = 1000) => {
  let result = [];
  for(let i = 0; i < len; i++) {
    result[i] = Math.floor(Math.random() * (max - min)) + min - 1;
  };
  return result
};

const App = () => {
  // states
  const [nav, setNav] = useState(false);
  const [type, setType] = useState("bubble-sort");
  const [list, setList] = useState(randomArr(50));
  
  // event handlers
  const navHandler = () => {
    let newState = !nav;
    setNav(newState);
  };
  const selectMethod = (e) => {
    setType(e.target.value);
  };
  const createNewArr = () => {
    setList(randomArr(50));
  };

  let desc = (
    <div className="nav__desc">
      <p>{Sorts[type]["bigO"]}</p>
      <p>{Sorts[type]["desc"]}</p>
    </div>
  );

  return (
    <section className="main">
      <Header navHandler={navHandler}/>
      <Nav 
        open={nav} 
        type={type} 
        selectMethod={selectMethod}
        genNew={createNewArr}
        description={desc}
      />
      <Chart list={list} type={type}/>
    </section>
  );
}

export default App;
