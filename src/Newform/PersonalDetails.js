import { useState } from 'react';
import './Form.css';

function PersonalDetails(props) {
   const [a, sa] = useState("");
   const [b, sb] = useState("");
   const [q, sq] = useState("");
   const [c, sj] = useState("");
   const [d,sd] = useState("");

function changename(event)
{
  sa(event.target.value);
}
function changedob(event) {
  sb(event.target.value);
}
function changeobj(event) {
  sj(event.target.value);
}
function changeadd(event) {
  sd(event.target.value);
}
function changeprof(event){
  sq(event.target.value);
}
if(a!=='' && b!=='' && c!=='' && d!=='' && q!=='')
{
  const arr = [a, b, q, c, d];
  props.valueppers(arr);
}
  return (
    <div className="name-style">
      <h2>PERSONAL DETAILS:</h2>
      <div className="name-style">
        <div className="col-25">
          <div className="labelled">
            <label>NAME</label>
          </div>
        </div>
        <div className="labelled">
          <input
            type="text"
            placeholder="karthick"
            onBlur={changename}
          ></input>
        </div>
      </div>
      <div className="name-style">
        <div className="col-25">
          <div className="labelled">
            <label width="100%">DOB</label>
          </div>
        </div>
        <div className="labelled">
          <input
            type="date"
            placeholder="12/3/2020"
            min="2000/01/01"
            max="2025/01/01"
            onBlur={changedob}
          ></input>
      </div>
      </div>
        <br></br>
        <div className="name-style">
          <div className="col-25">
            <div className="labelled">
              <label>PROFESSION</label>
            </div>
          </div>
          <div className="labelled">
            <input
              type="text"
              placeholder="SDE"
              onBlur={changeprof}
            ></input>
          </div>
        </div>
        <br></br>
      <div className="name-style">
        <div className="col-25">
          <div className="labelled">
            <label>OBJECTIVE</label>
          </div>
        </div>
        <textarea onBlur={changeobj} rows="4" cols="45"></textarea>
      </div>
      <div className="name-style">
        <div className="col-25">
          <label>
            <b>ADDRESS</b>
          </label>
        </div>
        <textarea onBlur={changeadd} rows="4" cols="45"></textarea>
      </div>
    </div>
  );
}

export default PersonalDetails;
