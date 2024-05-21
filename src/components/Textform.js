import React,{useState} from 'react'

export default function Textform(props) {
    const toUpClick=()=>{
        //console.log('Upper Click was CLicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const toLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","success ");
    }
    const toClrClick=()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text Cleared","success");
    }
    const toConCatClick=()=>{
      let newText=text.concat(" Your Text");
      setText(newText);
    }
    const toCopyClick=()=>{
      navigator.clipboard.writeText(text);
      //document.getSelection().removeAllRanges();
      props.showAlert("Copied to ClipBoard","success");
    }
    const toRemoveClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Space","success");
    }
    const handleOnChange=(event)=>{
        //console.log('on Change');
        setText(event.target.value);
    }
    const [text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'Black':'white'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#b094a7':'white'
        //</div>,color:props.mode==='light'?'Black':'white'
      }}placeholder="Enter Your Text"onChange={handleOnChange} id="MyBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={toUpClick}>UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toLoClick}>LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toClrClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toConCatClick}>Concat</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toRemoveClick}>Remove Extra Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'Black':'white'}}>
      <h2>Your Text Summary:</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
