import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select, line, curveCardinal } from 'd3';

//line = for line elements


function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 60, 70])  //dynamic data
  const svgRef = useRef();

  //called once when DOM elements is rendered
  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(curveCardinal)


    svg.selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue")


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
