import './Resumel1.css';
import { FaGithub, FaEnvelope} from "react-icons/fa";
import { BsLinkedin, BsFillTelephoneOutboundFill } from "react-icons/bs";

function Resumel1(props){

   
    return (
      <div className="borders">
        <div className='aligning'>
       <h1>
          <b>{props.name}</b>
        </h1>
        <h4>{props.dob}</h4>
        <h4>{props.prof}</h4>
        <h5>{props.add}</h5>
        </div>
        <hr className="hrstyle"></hr>
        <p>
          <b>Linkedin: </b> {props.lip} <BsLinkedin />
        </p>
        <p>
          <b>Website: </b> {props.web} <FaGithub />
        </p>
        <p>
          <b>Email: </b> {props.email} <FaEnvelope />
        </p>
        <p>
          <b>Phone: </b> {props.ph} <BsFillTelephoneOutboundFill />
        </p>
        <hr className="hrstyle1"></hr>
        <h3>SUMMARY</h3>
        <p>{props.obj}</p>
        <hr className="hrstyle1"></hr>
        <h3>EDUCATION</h3>
        <p>
          <b>SCHOOL:</b>
          {props.scl}
        </p>
        <p>
          <b>COLLEGE:</b>
          {props.col}
        </p>
        <hr className="hrstyle1"></hr>
        <h3>EXPERIENCE</h3>
        <li>{props.exp1}</li>
        <li>{props.exp2}</li>
        <hr className="hrstyle1"></hr>
        <h3>PROJECTS</h3>
        <li>{props.pr1}</li>
        <li>{props.pr2}</li>
        <hr className="hrstyle1"></hr>
        <h3>ACHIEVEMENTS</h3>
        <li>{props.ach1}</li>
        <li>{props.ach2}</li>
        <hr className="hrstyle1"></hr>
        <h3>SKILLS</h3>
        <h4>WEB DEVELOPMENT:</h4>
        <p>{props.wd}</p>
        <h4>PROBLEM SOLVING LANGUAGE KNOWN:</h4>
        <p>{props.ps}</p>
        <hr className='hrstyle1'></hr>
        <h4>INTERESTS:</h4>
        <p>{props.in}</p>
        <h4>HOBBIES:</h4>
        <p>{props.hob}</p>
      </div>
    );
}

export default Resumel1;