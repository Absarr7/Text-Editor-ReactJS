import React, {useState} from 'react'

export default function TextUtils(props) {

    const [Txt, setTxt] = useState("");
    
    const uppercase = ()=>{
        let newTxt = Txt.toUpperCase()
        setTxt(newTxt)
    }

    const lowercase = ()=>{
        let newTxt = Txt.toLowerCase()
        setTxt(newTxt)
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
            alert("Text copied to clipboard");
        }
        else {
            alert("What in world will you do by copying nothing?")
        }
    }

    return (
        <>
        {/* <div className={`bigcontainer bg-${props.mode} p-5`}> */}
        <div className="container">
        <div className="mb-3 my-5">
        <h4 className={`text-${props.mode==='light'?'dark':'light'}`}>Enter text to analyze below:-</h4>
        <textarea style={{height: "200px"}} className="form-control" value={Txt}id="exampleFormControlTextarea1" rows="3" onChange={ontextchange} placeholder="write your text here..."></textarea>
        </div>
        <button className={`btn btn-primary border-0 bg-${props.mode==='light'?'primary':'warning'} text-${props.mode==='light'?'light':'dark'}`} onClick={uppercase}>To uppercase</button>
        <button className={`btn btn-primary border-0 mx-2 my-1 bg-${props.mode==='light'?'primary':'warning'} text-${props.mode==='light'?'light':'dark'}`} onClick={lowercase}>To Lowercase</button>
        <button className={`btn btn-primary border-0 mx-2 my-1 bg-${props.mode==='light'?'primary':'warning'} text-${props.mode==='light'?'light':'dark'}`} onClick={clearText}>Clear Text</button>
        <button className={`btn btn-primary border-0 mx-2 my-1 bg-${props.mode==='light'?'primary':'warning'} text-${props.mode==='light'?'light':'dark'}`} onClick={copyText}>Copy Text</button>
        </div>
        <div className="container">
        <div className="summary my-5">
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text's summary</h3>
            <p className={`summary-text text-${props.mode==='light'?'dark':'light'}`}>
            Your text have {Txt.split(/\s/).filter((element)=>{return element.length!=0;}).length} words and {Txt.length} characters.
            </p>
            <p className={`analy text-${props.mode==='light'?'dark':'light'}`}>It's going to take {Math.round(arrayed*0.2)} seconds to read the whole text</p>
        </div>
        </div>
        {/* </div> */}
        
        </>
    )
}