import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleloClick = () => {
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")

  }
  const handleOnChange = (event) => {
    console.log("hendle on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');


  return (
    <>
      <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="5"></textarea>
            <button className='my-3 btn btn-primary mx-2' onClick={handleUpClick}>Convert Uppercase</button>
            <button className='my-3 btn btn-primary' onClick={handleloClick}>Convert Lowercase</button>
          </div>
        </div>
      </div>
      <div className="div container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  )
}

