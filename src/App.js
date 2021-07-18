import React, { useState, Fragment } from 'react';
import './App.css';
// import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';
import Barchart from './Barchart';

//line = for line elements


function App() {

  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75])  //dynamic data
  // const svgRef = useRef();

  // //called once when DOM elements is rendered
  // useEffect(() => {
  //   const svg = select(svgRef.current);

  //   const xScale = scaleBand()
  //     .domain(data.map((value, index) => index))  //discrete, 0-0, 1-60..., should be explicit
  //     .range([0, 300])
  //     .padding(0.5)
    
  //   const yScale = scaleLinear()
  //     .domain([0, 150])
  //     .range([150, 0])

  //   const colorScale = scaleLinear()
  //     .domain([75, 100, 150])
  //     .range(["green", "orange", "red"])
  //     .clamp(true)
    
  //   //create x-axis
  //   const xAxis = axisBottom(xScale)
  //                     .ticks(data.length) // .tickFormat(index => index + 1);

  //   svg
  //     .select(".x-axis")
  //     .style("transform", "translateY(150px")
  //     .call(xAxis);
    
  //   //create y-axis
  //   const yAxis = axisRight(yScale)

  //   svg
  //     .select(".y-axis")
  //     .style("transform", "translateX(300px")
  //     .call(yAxis);


  //   // draw the bars
  //   // console.log(data)
  //   svg.selectAll(".bar")
  //     .data(data)
  //     .join("rect")
  //     .attr("class", "bar")
  //     .style("transform", "scale(1, -1")  //flip upside down y axis
  //     .attr("x", (value, index) => xScale(index)) //index refers to data "data"
  //     .attr("y", -150)                
  //     .attr("width", xScale.bandwidth())      //bandwidth = width of each bar
  //     .on("mouseenter", (event, value) => {
  //       console.log(value)
  //       const index = svg.selectAll(".bar").nodes().indexOf(event.target);
  //       svg.selectAll(".tooltip")
  //         .data([value])
  //         .join(enter => enter.append("text").attr("y", yScale(value) - 4))
  //         .attr("class", "tooltip")
  //         .text(value)
  //         .attr("x", xScale(index) + xScale.bandwidth() / 2) 
          
  //         .attr("text-anchor", "middle")
  //         .transition()
  //         .attr("y", yScale(value) - 8)
  //         .attr("opacity", 1)
  //     })
  //     .on("mouseleave", () => svg.select(".tooltip").remove())
  //     .transition()
  //     .attr("fill", colorScale)
  //     .attr("height", value => 150 - yScale(value))                     //height = height of svg - actual height
      






  // }, [data]);


  return (
    <Fragment>
      {/* <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg> */}
      <Barchart data={data} />
      <br/>
      <button onClick={()=> setData(data.map(value => value + 5))}>Update Data</button>
      <button onClick={()=> setData(data.filter(value => value < 35))}>Filter Data</button>
      <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}>Add data</button>
    </Fragment>
  );
}

export default App;
