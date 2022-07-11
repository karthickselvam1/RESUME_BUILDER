import { useState } from 'react';
import './Form.css';

function Education(props){

  const [e, se] = useState('');
  const [f, sf] = useState('');
  
  function changeedu(event){
    se(event.target.value);
  }
  function changeaf(event){
   sf(event.target.value);
  }
  if(e!=='' && f!=='')
  {
    const arr1 = [e, f];
    props.valueedu(arr1);
  }
  
    return (
      <div className="name-style">
        <h2>EDUCATION</h2>
        <div className="name-style">
          <div className="col-25">
            <label><b>SCHOOL</b></label>
          </div>
          <textarea onBlur={changeedu} rows="4" cols="45"></textarea>
        </div>
        <div className="name-style">
          <div className="col-25">
            <label><b>COLLEGE</b></label>
          </div>
          <textarea onBlur={changeaf} rows="4" cols="45"></textarea>
        </div>
      </div>
    );
}

export default Education;