import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      // console.log(entries)
      //update dimensions
      entries.forEach(entry => {
        setDimensions(entry.contentRect)
      })
    })
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    }
  }, [ref])
  return dimensions;
}



function Barchart({ data }) {

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef)

  //called once when DOM elements is rendered
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log(dimensions);
    
    if (!dimensions) return;

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))  //discrete, 0-0, 1-60..., should be explicit
      .range([0, dimensions.width])
      .padding(0.5)
    
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([dimensions.height, 0])

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true)
    
    //create x-axis
    const xAxis = axisBottom(xScale)
                      .ticks(data.length) // .tickFormat(index => index + 1);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);
    
    //create y-axis
    const yAxis = axisRight(yScale)

    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);


    // draw the bars
    // console.log(data)
    svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1")  //flip upside down y axis
      .attr("x", (value, index) => xScale(index)) //index refers to data "data"
      .attr("y", -dimensions.height)                
      .attr("width", xScale.bandwidth())      //bandwidth = width of each bar
      .on("mouseenter", (event, value) => {
        console.log(value)
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
        svg.selectAll(".tooltip")
          .data([value])
          .join(enter => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2) 
          
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1)
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => dimensions.height - yScale(value))                     //height = height of svg - actual height
      






  }, [data, dimensions]);


  return (
    <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
      <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      <br/>
    </div>
  );
}

export default Barchart;
