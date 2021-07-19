import React, { useRef, useEffect, useState } from 'react';
import { select, arc, pie } from 'd3';
import useResizeObserver from './useResizeObserver';





function GaugeChart({ data }) {

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef)

  //called once when DOM elements is rendered
  useEffect(() => {
    const svg = select(svgRef.current);
    
    if (!dimensions) return;

    const arcGenerator = arc()
      .innerRadius(75)
      .outerRadius(150)
    
    const pieGenerator = pie()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null)     //to avoid jumping colors
    const instructions = pieGenerator(data)
    

    svg.selectAll(".slice")
      .data(instructions)
      .join("path")
      .attr("class", "slice")
      .attr("fill", (instructions, index) => (index === 0? "#ffcc00" : "#eee" ))
      .style("transform", 
        `translate(${dimensions.width / 2}px, ${dimensions.height}px)`
      )
      .attr("d", instructions => arcGenerator(instructions))



    //draw the gauge
  }, [data, dimensions]);


  return (
    <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
      <svg ref={svgRef}>
       
      </svg>
    </div>
  );
}

export default GaugeChart;
