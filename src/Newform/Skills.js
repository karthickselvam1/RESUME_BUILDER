import { useState } from 'react';
import './Form.css';

function Skills(props){

    const [k,sk]=useState('');
    const [l,sl]=useState('');
    const [m,sm]=useState('');
    const [n, sn] = useState("");

    function s1(event){
      sk(event.target.value);
    }
    function s2(event) {
      sl(event.target.value);
    }
    function a1(event) {
      sm(event.target.value);
    }
    function a2(event) {
      sn(event.target.value);
    }
    if(k!=='' && l!=='' && m!=='' && n!=='')
    {
      const arr3 = [k, l, m, n];
      props.valskill(arr3);
    }
    return (
      <div className="name-style">
        <h2>SKILLS AND ACHIEVEMENTS</h2>
        <div className="name-style">
          <div className="col-25">
            <label className="label"><b>WEB DEVELOPMENT:</b></label>
          </div>
          <textarea onBlur={s1} rows="4" cols="45"></textarea>
        </div>
        <div className="name-style">
          <div className="col-25">
            <label><b>PROBLEM SOLVING:</b></label>
          </div>
          <textarea onBlur={s2} rows="4" cols="45"></textarea>
        </div>
        <div className="name-style">
          <div className="col-25">
            <label><b>ACHIEVEMENT-1</b></label>
          </div>
          <textarea onBlur={a1} rows="4" cols="45"></textarea>
        </div>
        <div className="name-style">
          <div className="col-25">
            <label><b>ACHIEVEMENT-2</b></label>
          </div>
          <textarea onBlur={a2} rows="4" cols="45"></textarea>
        </div>
      </div>
    );
}

export default Skills;