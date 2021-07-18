import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select } from 'd3';


// const dats = [5, 25, 35, 15, 50, 11]

function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 60])  //dynamic data
  const svgRef = useRef();

  //called once when DOM elements is rendered
  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);

    //select all the circles find in svg then sync with data
    svg.selectAll("circle")
      .data(data)
      .join("circle")                   //enter, update, exit
      .attr("r", value => value)        //radius
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");           //default fill color is black;
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
