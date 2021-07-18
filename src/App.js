import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select } from 'd3';


function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 60])  //dynamic data
  const svgRef = useRef();

  //called once when DOM elements is rendered
  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);

    
  }, [data]);


  return (
    <Fragment>
      <svg ref={svgRef}></svg>
      <br/>
      <button onClick={()=> setData(data.map(value => value + 5))}>Update Data</button>
      <button onClick={()=> setData(data.filter(value => value < 35))}>Filter Data</button>
    </Fragment>
  );
}

export default App;
