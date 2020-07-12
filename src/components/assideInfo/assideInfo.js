import React from 'react'

function AssideInfo() {
  return (
    <div className="container">
      <img className="circle responsive-img mt-1 mt-m-3" src={require('../../assets/mapImg.jpg')} />
      <p className="center-align"><b>Store locations, make comments and access whenever you want!</b></p>
      <p className="center-align"><b>With your own interactive map, select desired positions and insert markers. Create your own list of desired establishments!</b></p>

        <div className="center-align">
          <a className="waves-effect waves-light btn teal dark-2"><i className="material-icons right">cloud</i>REGISTER</a>
        </div>
    
    </div>

  )
}

export default AssideInfo
