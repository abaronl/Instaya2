import React from "react";
import {Link} from 'react-router-dom'

const Navigator = () => {
    return (
    <div>
    <nav className="navbar navbar-expand-md navbar-blue">
        <div className="container-fluid">
          <Link to='/'>
             <img src='/src/assets/logolineal170x50.png' width='100'/>
          </Link>    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" >
                 <li className="nav-item active">
                    <Link className="nav-link" to= '/'> Home </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" to= '/View'> View </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" to= '/Create'> Create </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" to= '/Update'> Update </Link>
                 </li>


            </ul>
          </div>
        </div>
    </nav>
    </div>
    )
}

export default Navigator;