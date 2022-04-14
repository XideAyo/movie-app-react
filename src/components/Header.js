import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const image =require("../image/woman.jpg")

  return (
    <div  style={{borderBottom: "4px solid #fff"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color: "#157347"}}>MOVIEDOM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color: "#fff"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color: "#fff"}}>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" style={{color: "#fff"}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" style={{color: "#fff"}}>Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" style={{color: "#fff"}}>TV Shows</Link>
                    </li>
                </ul>
                <nav className="navbar navbar-light bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={image} alt="Black Woman" width="30" height="30" class="d-inline-block align-text-top dp" />
                            <p style={{marginTop: "10px", display: "inline-block", color: "#fff", fontSize: "20px", fontFamily: "Poppins"}}>Akinwale Ayomide</p>
                        </Link>
                    </div>
                </nav>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header