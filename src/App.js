import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

//line = for line elements


function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 60, 70])  //dynamic data
  const svgRef = useRef();

  //called once when DOM elements is rendered
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300])
    
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])
    
    const xAxis = axisBottom(xScale);

    svg.select(".x-axis")
      .style("transform", "translateY(150px")
      .call(xAxis);

    // xAxis(svg.select(".x-axis"));


    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);


    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue")


  }, [data]);


  return (
    <Fragment>
      <svg ref={svgRef}>
        <g className="x-axis"></g>
      </svg>
      <br/>
      <button onClick={()=> setData(data.map(value => value + 5))}>Update Data</button>
      <button onClick={()=> setData(data.filter(value => value < 35))}>Filter Data</button>
    </Fragment>
  );
}

export default App;
