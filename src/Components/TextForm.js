import React, { useState, useRef } from "react";

export default function TextForm(props) {

  const handleClick1 = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to UpperCase","success")
  };

  const handleClick2 = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to LowerCase","success")
  };

  const handleClick3 = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Clear Text","success")
  };

  const handleClick4 = () => {
    let newtext = text.split("").reverse().join("");
    setText(newtext);
     props.showAlert("Reverse Text","success")
  };

  const handleClick5 = () => {
    navigator.clipboard.writeText(text);
    setshowMessage("Text copied!");
    setTimeout(() => setshowMessage(""), 3000);
    props.showAlert("Copy to clipboard","success")
  };

  const handleClick6 = async () => {
    const newText = await navigator.clipboard.readText();
    setText(newText);
    setshowMessage("Text pasted!");
    setTimeout(() => setshowMessage(""), 3000);
    props.showAlert("Paste in TextField","success")
  };

 
  const handleClick7 = () => {
    const textarea = textareaRef.current;
    textarea.focus();
    textarea.select();
    setshowMessage("All text selected!");
    setTimeout(() => setshowMessage(""), 3000);
    props.showAlert("Selected All Text","success")
  };


  const handleClick8 = () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) {
      setshowMessage("No text selected!");
      setTimeout(() => setshowMessage(""), 3000);
      return;
    }

    const selectedText = text.substring(start, end);
    navigator.clipboard.writeText(selectedText);

    const newText = text.substring(0, start) + text.substring(end);
    setText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start);
    }, 0);

    setshowMessage(`Cut: "${selectedText}"`);
    setTimeout(() => setshowMessage(""), 3000);
     props.showAlert("Cut Selected All Text","success");
  };

  const handleClick9 = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "text.txt";
    link.click();
    URL.revokeObjectURL(url);
    setshowMessage("File downloaded!");
    setTimeout(() => setshowMessage(""), 3000);
    props.showAlert("Successfully Download the Text","success");
    
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [showMessage, setshowMessage] = useState("");
  const textareaRef = useRef(null);

  const words = text.trim().split(/\s+/).filter(Boolean);

  const hoverStyle = { transition: "0.3s" };

  return (
    <>
      <div className="mb-3"   style={{color:props.mode===`dark`?`white`:`black`}}>
        <label className="form-label" >
          <h1>Enter a Text</h1>
        </label>
        <textarea
          ref={textareaRef}
          className="form-control"
          id="mybox"
          onChange={handleChange}
          rows={7}
          value={text}
          style={{backgroundColor:props.mode===`light`?`white`:`#0D1117`,color:props.mode===`dark`?`white`:`black`,
             border: props.mode === 'light'? '2px solid #ccc': '2px solid #444',
             borderRadius: '8px'

            
          }}
          
        />
      </div>

      <button className="btn btn-primary mx-1"
        onClick={handleClick1}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Convert UpperCase
      </button>

      <button className="btn btn-primary mx-1"
        onClick={handleClick2}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Convert LowerCase
      </button>

      <button className="btn btn-danger mx-1"
        onClick={handleClick3}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Clear Text
      </button>

      <button className="btn btn-warning mx-1"
        onClick={handleClick4}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Reverse
      </button>

      <button className="btn btn-info mx-1"
        onClick={handleClick5}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Copy
      </button>

      <button className="btn btn-success mx-1"
        onClick={handleClick6}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Paste
      </button>

      <button className="btn btn-secondary mx-1"
        onClick={handleClick7}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Select All
      </button>

      <button className="btn btn-warning mx-1"
        onClick={handleClick8}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Cut
      </button>

      <button className="btn btn-success mx-1"
        onClick={handleClick9}
        style={hoverStyle}
        onMouseEnter={(e)=>e.target.style.transform="scale(1.08)"}
        onMouseLeave={(e)=>e.target.style.transform="scale(1)"}>
        Download
      </button>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {showMessage && (
          <label style={{ color: "green", marginTop: "10px" }}>
            {showMessage}
          </label>
        )}
      </div>

      <div className="container my-4"   style={{color:props.mode===`dark`?`white`:`black`}}>
        <h2>Your Text Summery</h2>
        <p>{words.length} words and {text.length} characters</p>
        <p>{text.split(/[".!?"]/).length - 1} Sentences</p>
        <p>{0.008 * words.length} Minutes to Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}