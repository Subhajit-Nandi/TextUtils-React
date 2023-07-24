import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase successfully", "success");
    }

    const handleLowClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase successfully", "success");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);

    }

    const handleCleartextClick = () => {

        let newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }

    const [text, setText] = useState("");


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <br/>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ?'#fcdede':'white'}}  onChange={handleOnChange} value={text} placeholder="Enter Your Text" id="myBox" rows="8" />
                </div>
                <button type="submit" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="submit" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button type="submit" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCleartextClick}>Clear Text</button>
                <button type="submit" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
                <button type="submit" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your Text to preview it here"}</p>
            </div>
        </>
    )
}
