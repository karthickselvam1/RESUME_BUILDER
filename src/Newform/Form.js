import {useState} from 'react';
import PersonalDetails from "./PersonalDetails";
import Experiencesprojects from "./Experiencesprojects";
import Skills from "./Skills";
import Contactinfo from "./Contactinfos";
import Interests from "./Interests"
import Education from "./Education";

const arr=Array(21).fill('');
function Form(props){

  const [data,setdata]=useState([]);
 
  function valuep(output)
  {
    const exp={
      ...output
    };
    arr[0]=(exp[0]).toUpperCase();
    arr[1]=(exp[1]).toUpperCase();
    arr[2] = (exp[2]).toUpperCase();
    arr[3] = (exp[3]).toUpperCase();
    arr[4] = (exp[4]).toUpperCase();
  };
   function valued(output) {
     const exp = {
       ...output,
     };
     arr[5] = exp[0].toUpperCase();
     arr[6] = exp[1].toUpperCase();
   };
   function exproj(output){
     const exp = {
       ...output,
     };
     arr[7] = exp[0].toUpperCase();
     arr[8] = exp[1].toUpperCase();
     arr[9] = exp[2].toUpperCase();
     arr[10] = exp[3].toUpperCase();
   };
   function skillach(output) {
     const exp = {
       ...output,
     };
    arr[11] = exp[0].toUpperCase();
    arr[12] = exp[1].toUpperCase();
    arr[13] = exp[2].toUpperCase();
    arr[14] = exp[3].toUpperCase();
   };
   function contf(output) {
     const exp = {
       ...output,
     };
     arr[15] = exp[0].toUpperCase();
     arr[16] = exp[1].toUpperCase();
     arr[17] = exp[2].toUpperCase();
     arr[18] = exp[3].toUpperCase();
   };
   function interests(output) {
     const exp = {
       ...output,
     };
     arr[19]=(exp[0]);
     arr[20]=(exp[1]);
   
     setdata(arr);
   };
   function lastlevelup(event)
   {
    event.preventDefault();
    props.formval(data);
   };
    return (
      <div>
        <form onSubmit={lastlevelup}>
          <PersonalDetails valueppers={valuep}></PersonalDetails>
          <Education valueedu={valued}></Education>
          <Experiencesprojects valueproj={exproj}></Experiencesprojects>
          <Skills valskill={skillach}></Skills>
          <Contactinfo continfos={contf}></Contactinfo>
          <Interests valint={interests}></Interests>
          
          <div className="button">
            <center>
              <center><button className="button">SUBMIT</button></center>
            </center>
            
          </div>
        </form>
      </div>
    );
};
export default Form;