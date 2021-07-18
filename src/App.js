import React, { useRef, useEffect, useState, Fragment } from 'react';
import './App.css';
import { select } from 'd3';


// const data = [10, 20, 30, 45, 100, 30]

function App() {

  const [data, setData] = useState ([10, 20, 30, 45, 100, 30])
  const svgRef = useRef();

  useEffect(() => {
    //called once when DOM elements is rendered
    console.log(svgRef);
    const svg = select(svgRef.current);

    //select all the circles find in svg then sync with data
    svg.selectAll("circle")
      .data(data)
      .join(    //define what you want to do on the element created
        enter => enter.append("circle")
                      .attr("class", "new")
                      .attr("r", value => value)        //radius
                      .attr("cx", value => value * 2)
                      .attr("cy", value => value * 2)
                      .attr("stroke", "red"),           //default fill color is black

        update => update.attr("class", "updated")
                        .attr("r", value => value)        //radius
                        .attr("cx", value => value * 2)
                        .attr("cy", value => value * 2),
                        
        exit => exit.remove()
      );
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
