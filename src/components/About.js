import React from 'react'

export default function About(props) {

    return (
    <>
    <div className={`acc  py-5 bg-${props.mode}`}>
    <div className={`container bg-${props.mode}`}>
    <div className="accordion" id="accordionExample">
  <div className={`accordion-item bg-${props.mode}`}>
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Founders of Text Analyzer
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show text-${props.mode==='light'?'dark':'light'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This incredibly productive app</strong> Is made by an excellent person named <code>Absar Ahmad</code> He started learning web development a year ago and have made advances to react, slowly and steadily. He stopped coding in between for 5 months, but now his passion has pulled him again towards coding, development and programming.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Use of Text Analyzer
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse text-${props.mode==='light'?'dark':'light'}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>Text analyzer is an insanely productive app</strong> That helps it's users to convert their text to uppercase, lowercase. It has the ability to count the characters and words in a given text. 
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How it has been made
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode==='light'?'dark':'light'}`} >
        <strong>I've put all my heart in building Text Analyzer</strong> <code>When there's a will, there's a way.</code> I used reactJS to build Text Analyzer, I used Bootstrap, hooks, States and routes to build this insane app. Enough of my stupid words, lol.
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </>
  )
}
