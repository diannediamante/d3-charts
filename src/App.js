import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';

//line = for line elements


function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 60, 70])  //dynamic data
  const svgRef = useRef();

  //called once when DOM elements is rendered
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))  //discrete, 0-0, 1-60..., should be explicit
      .range([0, 300])
    
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])
    
    const xAxis = axisBottom(xScale)
                    .ticks(data.length)
                    // .tickFormat(index => index + 1);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px")
      .call(xAxis);
    
    const yAxis = axisRight(yScale)

    svg
      .select(".y-axis")
      .style("transform", "translateX(300px")
      .call(yAxis);

    // xAxis(svg.select(".x-axis"));

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      





  }, [data]);


  return (
    <Fragment>
      <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      <br/><br/><br/>
      <button onClick={()=> setData(data.map(value => value + 5))}>Update Data</button>
      {/* <br/> */}
      <button onClick={()=> setData(data.filter(value => value < 35))}>Filter Data</button>
    </Fragment>
  );
}

export default App;
