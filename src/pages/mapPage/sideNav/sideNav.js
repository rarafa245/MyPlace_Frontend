import React, { useState, useEffect } from 'react'
import { GeneralOptions, AddCoordForm, MyLocals } from './displays'
import { useSelector } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'



function SideNav(){
    /* SideNav Component
        :name   - sidenav : All the SideNav structure
                - userPanel : Panel for user Infos (Image, Username, Email)
                - options: options in SideNav (displays)
                - button: expand SidevBar button
    */


    const [sideNav, setSideNav] = useState()   
    const [expandNav, setExpandNav] = useState('')                                           // SideNav instance in Materialize
    const [activeIcon, setActiveIcon] = useState('')                                         // Active: null / disable: disabled
    const registerCoordsFlag = useSelector( state => state.addLocal.registerCoordsFlag )     // Flag to Register Coordinates
    const [myLocalsFlag, setMyLocalsFlag] = useState(false)

    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav')  
        const instance = M.Sidenav.init(elems, {})[0]
        setSideNav(instance)

        return () => {
            instance.close()
            instance.destroy()
        }

    }, [])


    return (
        <div id="sidenav">
            <ul id="slide-out" className={`scroll sidenav ${expandNav}`}>
                <li name="userPanel">
                    <div className="user-view">
                        <div className="background">
                            <img src={require('../../../assets/backgroundNav.jpg')} />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name">{localStorage.getItem('username')}</span></a>
                        <a href="#email"><span className="white-text email">{localStorage.getItem('email')}</span></a>
                    </div>
                </li>

                <div name="options">
                    {
                        (registerCoordsFlag) ?  (<AddCoordForm  sideNav={sideNav}
                                                                setExpandNav={setExpandNav}
                                                                setActiveIcon={setActiveIcon}/>)
                                             : 

                        (myLocalsFlag)       ? (<MyLocals />)
                            
                                             : (<GeneralOptions sideNav={sideNav} 
                                                                setMyLocalsFlag={setMyLocalsFlag}/>)

                    }

                    
                </div>
                
            </ul>

            <a  name="icon"
                data-target="slide-out" 
                className={`btn-floating mt-2 btn-large ${activeIcon} floatButton teal dark-2 sidenav-trigger `}>
                <i className="material-icons">menu</i>
            </a>
        </div>
    )

}

export default SideNav