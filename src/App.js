import React, { useRef, useEffect } from 'react';
import './App.css';


function App() {

  const svgRef = useRef();

  useEffect(() => {
    //called once when DOM elements is rendered
    console.log(svgRef);
  }, []);

  return (
    <svg ref={svgRef}></svg>
    
  );
}

export default App;
