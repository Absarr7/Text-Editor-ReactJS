import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">Absar Ahmad</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}>About</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-3">
        <input className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleGreenMode}/>
        <label className={`form-check-label text-${props.mode==='light'?'sucess':'light'}`} htmlFor="flexSwitchCheckDefault">Green mode</label>
      </div>
      {/* 2nd switch */}
      <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
