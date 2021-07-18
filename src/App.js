import React, { useState, Fragment } from 'react';
import './App.css';
import Barchart from './Barchart';



function App() {

  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75])  //dynamic data


  return (
    <Fragment>
      <Barchart data={data} />
      <br/>
      <button onClick={()=> setData(data.map(value => value + 5))}>Update Data</button>
      <button onClick={()=> setData(data.filter(value => value < 35))}>Filter Data</button>
      <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}>Add data</button>
    </Fragment>
  );
}

export default App;
