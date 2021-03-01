import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Salutation({ fname, lname }) {
  return (
    <h1>
      Hello {fname} {lname}
    </h1>
  );
}

function SaluteAll() {

  let [counter, setCounter] = useState(0);


  // let [info, setInfo] = useState([
  //   { fname: "Anuj", lname: "Garg" },
  //   { fname: "Mohit", lname: "Sharma" },
  //   { fname: "Abhishek", lname: "Kumar" },
  // ]);

  // let [infoSecond, setInfoSecond] = useState([]);

  // let shift = () => {
  //   // console.log("Clicked");
  //   if(info.length > 0){
  //     let item = info.pop();
  //     infoSecond.push(item);
  //   }

  //   setInfo(info);
  //   // setInfoSecond(infoSecond);
   
  // }

  let update = ()=>{
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={update}>Click me</button>

      <h1>{counter}</h1>

      {/* <h1>List One</h1>
      <div>
        {info.map(({ fname, lname }, index) => {
          return <Salutation fname={fname} lname={lname} key={index}/>;
        })}
      </div>
      <h1>List Two</h1>
      <div>
        {infoSecond.map(({ fname, lname }, index) => {
          return <Salutation fname={fname} lname={lname} key={index}/>;
        })}
      </div> */}
    </div>
  );
}

ReactDOM.render(<SaluteAll />, document.getElementById("root"));
