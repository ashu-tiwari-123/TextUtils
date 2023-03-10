import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [inputText, setTextLength] = useState("");

  const handlechange = (e) => {
    console.log(text);
    setText(e.target.value);
  };

  const handleup = () => {
    // console.log(text);
    let te = text.toUpperCase();
    setText(te);
    if(!text){
        props.showAlert("No Input Text","warning")
    }
    else{
        props.showAlert("Converted to Uppercase ","success")
    }
  };
  const handlelo = () => {
    // console.log(text);
    let te = text.toLowerCase();
    setText(te);
    if(!text){
        props.showAlert("No Input Text","warning")
    }
    else{
        props.showAlert("Converted to Lowercase ","success")
    }
  };
  const handlecl = () => {
    // console.log(text);
    setText("");
    if(!text){
        props.showAlert("No Input Text","warning")
    }
    else{
        props.showAlert("Cleared ","success")
    }
  };
  const handlecp = () => {
    // console.log(text);
    var Text = document.getElementById("mytext");

    // Select the text field
    Text.select();
    Text.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(Text.value);
    if(!text){
        props.showAlert("No Input Text ","warning")
    }
    else{
        props.showAlert("Copied to Clipboard ","success")
    }
  };
  return (
    <>
      <div className="container" >
        <h1 style={{color: props.mode==="dark"?"white":"black"}}>Enter Your Text To Analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            value={text}
            onChange={handlechange}
            rows="10"
          ></textarea>
        </div>
        <button className={`btn btn-sm btn-${props.mode}`} onClick={handleup}>
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-sm btn-${props.mode} m-2`}
          onClick={handlelo}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-sm btn-${props.mode} m-2`}
          onClick={handlecl}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-sm btn-${props.mode} m-2`}
          onClick={handlecp}
        >
          Copy text
        </button>
      </div>
      <div className="container my-3">
        <h2 style={{color: props.mode==="dark"?"white":"black"}}>
          Your text summary
        </h2>
        <p style={{color: props.mode==="dark"?"white":"black"}}>
          {text.split(" ").filter((element)=>{
            return element.length!==0
          }).length} words and {text.length} characters
        </p>
        <p style={{color: props.mode==="dark"?"white":"black"}}>
          {text.split(" ").filter((element)=>{
            return element.length!==0
          }).length * 0.008} time to read
        </p>
        <h2 style={{color: props.mode==="dark"?"white":"black"}}>
          Your Text Preview
        </h2>
        <p style={{color: props.mode==="dark"?"white":"black"}}>
          {text}
        </p>
      </div>
    </>
  );
}
