import React, { useRef, useEffect } from 'react';
import './App.css';
import { select } from 'd3';


function App() {

  const svgRef = useRef();

  useEffect(() => {
    //called once when DOM elements is rendered
    console.log(svgRef);
    const svg = select(svgRef.current);
  }, []);

  return (
    <svg ref={svgRef}></svg>
    
  );
}

export default App;
