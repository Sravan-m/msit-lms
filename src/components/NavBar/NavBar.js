import React, { Component } from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {


  render() {
    var isLogined=localStorage.getItem('id')!==null
    const userName='Hi! '+localStorage.getItem('username')
      
    return (
      <div className='navFix'>
      <nav className="navbar fixed-top navbar-expand-sm navbar-colour navbar-dark">
      <div className ="container-fluid">
        <Link className ="navbar-brand" href="#">LMS</Link>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
         aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
        </button>         
    {isLogined && (
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className ="navbar-nav me-auto mb-lg-0">  
                <li className ="nav-item">
                 <Link className ="nav-link" to='#'>Credits</Link>
                 </li>  
                </ul>
                <ul className ="nav navbar-nav ms-auto">
                   
                    <li className ="nav-item">
                        <Link  className ="nav-link " to="#">Course status</Link>
                    </li>
                    <li className ="nav-item">
                      <span className ="nav-link active">{userName}</span>
                  </li>
                  <li className ="nav-item">
                    <Link className ="nav-link " onClick={e=>{localStorage.clear()
                    window.location.replace('/')}}>Logout</Link>
                  </li>
                </ul>    
          </div>)}
      </div>
    </nav>
    </div>
  )
  }
}


export default NavBar;
