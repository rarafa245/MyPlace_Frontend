import React from 'react'

function StartNavBar(){
  return (
    <nav className="teal dark-2">
      <div className="nav-wrapper">

        <a href="#!" className="ml-1 brand-logo left"><i className="material-icons">add_location</i>My Place</a>

        <ul id="nav-mobile" className="right">
          <li><a href="sass.html">Log In</a></li>
          <li><a href="badges.html">Sign In</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default StartNavBar
