import React, {useState} from 'react'



export default function TextUtils(props) {
    const [Txt, setTxt] = useState("");

    // const handleonchange = (e)=>{
    //     setText(e.target.value);
    // }
    
    // const namevalue = ()=>{
    //     setName(Text);
    // };

    
    const uppercase = ()=>{
        let newTxt = Txt.toUpperCase()
        setTxt(newTxt)
        console.log("your text was converted to uppercase");
    }

    const lowercase = ()=>{
        let newTxt = Txt.toLowerCase()
        setTxt(newTxt)
        console.log("your text was converted to lowercase");
    }


    const ontextchange = (e)=>{
        setTxt(e.target.value);
    }
    const arrayed = Txt.split(" ").length;

    const clearText = ()=>{
        setTxt("");
    };

    const copyText = ()=>{
        // Txt.select();
        if (Txt !== "") {
            navigator.clipboard.writeText(Txt);
            alert("Text copied to clipboard")
        }
        else {
            alert("What in world will you do by copying nothing?")
        }
    }

    return (
        <>
        <div className="container my-5">
        <div class="mb-3 my-5">
        <h4>Enter text to analyze below:-</h4>
        <textarea className="form-control" value={Txt}id="exampleFormControlTextarea1" rows="3" onChange={ontextchange} placeholder="write your text here..."></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={uppercase}>To uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowercase}>To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
        </div>
        <div className="container">
        <div className="summary my-5">
            <h3>Your text's summary</h3>
            <p className="summary-text">
            Your text have {Txt.split(" ").length} words and {Txt.length} characters.
            </p>
            <p className='analy'>It's going to take {Math.round(arrayed*0.2)} seconds to read the whole text</p>
        </div>
        </div>
        
        </>
    )
}