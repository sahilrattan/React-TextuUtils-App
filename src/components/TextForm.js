import React ,{useState,useEffect } from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success")
    }
    const handleloclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to lowercase","success")

  }
  const handlecapclick=()=>{
    let newtext=text[0].toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert("Converted to capitalize","success")

}
     const handleonChange=(event)=>{
        setText(event.target.value)
     }

const handleCopyclick=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied","success")

}
const handleExtraSpaces = () => {
  let newText = text.split(/\s+/).join(" ");
  setText(newText);
  props.showAlert("Extra spaces removed","success")

};     
const handleTextToSpeech = () => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
};
const handleRemoveWord = () => {
  let wordToRemove = prompt("Enter the word to remove:");
  if (wordToRemove) {
      let newText = text.split(' ').filter(word => word.toLowerCase() !== wordToRemove.toLowerCase()).join(' ');
      setText(newText);
  }
};


    const [text,setText] = useState('Enter text here');
    // text="new text"; wrong way to set text 
    // setText("new text"); correct ay to set text 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="container my-3">
                   
                </div><div className="mb-3">
<textarea className="form-control"  value={text}  onChange={handleonChange} id="myBox" rows="8"   style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
<button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handlecapclick}>Capitalize</button>
<button className="btn btn-primary mx-2" onClick={handleCopyclick}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
<button className="btn btn-primary mx-2" onClick={handleTextToSpeech}>Text to audio</button>
<button className="btn btn-primary mx-2" onClick={handleRemoveWord}>Remove word</button>

</div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'042743'}}>
    <h2>Your word summary</h2>
    <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} minutes to read</p>
    <h2>Preview</h2>
    

    <p>{text}</p>
    </div>
    </>
  )
}
