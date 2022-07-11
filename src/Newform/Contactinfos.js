import { useState } from 'react';
import './Form.css';

function Contactinfo(props){
  const [q,sq]=useState('');
  const [w,sw]=useState('');
  const [r,sr]=useState('');
  const [t, st] = useState("");
  function c1(event)
  {
    sq(event.target.value);
  }
   function c2(event) {
     sw(event.target.value);
   }
    function c3(event) {
      sr(event.target.value);
    }
     function c4(event) {
       st(event.target.value);
      //  const arr4=[q,w,r,t];
      //  props.continfos(arr4);
     }
     if(q!=='' && w!=='' && r!=='' && t!=='')
     {
      const arr4 = [q, w, r, t];
      props.continfos(arr4);
     }
    return (
      <div className="name-style">
        <h2>CONTACT INFORMATION:</h2>
        <div className="name-style">
          <div className="col-25">
            <div className='labelled'>
            <label>E-MAIL</label>
            </div>
          </div>
          <div className='labelled'>
          <input type="text" placeholder="@gmail.com" onBlur={c1}></input>
          </div>
        </div>
        <div className="name-style">
          <div className="col-25">
            <div className='labelled'>
            <label>LINKEDIN PROFILE</label>
            </div>
          </div>
          <div className='labelled'>
          <input type="text" placeholder="linkedin/.com" onBlur={c2}></input>
          </div>
        </div>
        <div className="name-style">
          <div className="col-25">
            <div className='labelled'>
            <label>GITHUB</label>
            </div>
          </div>
          <div className='labelled'>
          <input type="text" placeholder="https://..." onBlur={c3}></input>
          </div>
        </div>
        <div className="name-style">
          <div className="col-25">
            <div className='labelled'>
            <label>MOBILE-NO</label>
            </div>
          </div>
          <div className='labelled'>
          <input type="number" placeholder="9786547321" onBlur={c4}></input>
          </div>
      </div>
      </div>
    );
}

export default Contactinfo;