//common
import { useState } from "react";
import Form from "./Newform/Form";
//resume
import Resumel1 from "./Resumepage/Resumel1";
import './Resumepage/Resumel1.css';


function App() {
  const [form,setform]=useState(false);
  const [data,setdata]=useState([]);
  
  function formfunc(output)
  {
    setdata((prevState)=>{
      return [...prevState,...output];
    });
    
    setform(true);
  }
  if(!form){
  return (
    <div className="img">
      <h2>
        <center>RESUME BUILDER</center>
      </h2>
      <hr></hr>
      <Form formval={formfunc}></Form>
    </div>
  );}
  else{
    return (
      <div className="body">
        <Resumel1 name={data[0]} dob={data[1]} prof={data[2]} obj={data[3]} add={data[4]}
        scl={data[5]} col={data[6]} exp1={data[7]} exp2={data[8]} pr1={data[9]} pr2={data[10]}
        wd={data[11]} ps={data[12]} ach1={data[13]} ach2={data[14]} email={data[15]}
        lip={data[16]} web={data[17]} ph={data[18]} in={data[19]} hob={data[20]}
        />
      </div>
    );
  }
}

export default App;
