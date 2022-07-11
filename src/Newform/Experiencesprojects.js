import { useState } from 'react';
import './Form.css';

function Experiencesprojects(props){
  
  const [g,sg]=useState('');
  const [h,sh]=useState('');
  const [i,si]=useState('');
  const [j,sj]=useState('');

  function p1(event){
    sg(event.target.value);
  }
  function p2(event) {
    sh(event.target.value);
  }
  function p3(event) {
    si(event.target.value);
  }
  function p4(event) {
    sj(event.target.value);
  }
  if(g!=='' && h!=='' && i!=='' && j!=='')
  {
     const arr2 = [g, h, i, j];
     props.valueproj(arr2);
  }
   return (
     <div className="name-style">
       <h2>EXPERIENCES AND PROJECTS:</h2>
       <div className="name-style">
         <div className="col-25">
           <label><b>EXPERIENCE-1</b></label>
         </div>
         <textarea onBlur={p1} rows="4" cols="45"></textarea>
       </div>
       <div className="name-style">
         <div className="col-25">
           <label><b>EXPERIENCE-2</b></label>
         </div>
         <textarea onBlur={p2} rows="4" cols="45"></textarea>
       </div>
       <div className="name-style">
         <div className="col-25">
           <label><b>PROJECT-1</b></label>
         </div>
         <div className='labelled'>
         <input type="text" placeholder="project-1" onBlur={p3}></input>
         </div>
       </div>
       <div className="name-style">
         <div className="col-25">
          <div className='labelled'>
           <label><b>PROJECT-2</b></label>
           </div>
         </div>
         <div className='labelled'>
         <input type="text" placeholder="project-2" onBlur={p4}></input>
         </div>
       </div>
     </div>
   ); 
}

export default Experiencesprojects;