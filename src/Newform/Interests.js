import { useState } from 'react';
import './Form.css';

function Interests(props){
  const [y,sy]=useState('');
  const [z,sz]=useState('');

  function i1(event){
    sy(event.target.value);
  }
  function i2(event){
    sz(event.target.value);
  }
  if (y!=='' && z !== '') {
    const arr5 = [y, z];
    props.valint(arr5);
  }
    return (
      <div className="name-style">
        <h2>INTERESTS:</h2>
        <div className="name-style">
          <div className="col-25">
            <label><b>INTEREST</b></label>
          </div>
          <textarea onBlur={i1} rows="4" cols="45"></textarea>
        </div>
        <div className="name-style">
          <div className="col-25">
            <label><b>HOBBY</b></label>
          </div>
          <textarea onBlur={i2} rows="4" cols="45"></textarea>
        </div>
      </div>
    );
}

export default Interests;