import React, { useState, useEffect } from 'react'
import { GeneralOptions, AddCoordForm } from './displays'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useSelector, useDispatch } from 'react-redux'
import { setMapCoordsFlag,
        cleanMapCoordsFlag,
        setRegisterCoordsFlag,
        cleanRegisterCoordsFlag } from '../redux'


function SideNav(){

    const [sideNav, setSideNav] = useState()
    const [expandNav, setExpandNav] = useState('')
    const [activeIcon, setActiveIcon] = useState('')
    const registerCoordsFlag = useSelector( state => state.registerCoordsFlag )

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
        <div>
            <ul id="slide-out" className={`sidenav ${expandNav}`}>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={require('../../../assets/backgroundNav.jpg')} />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name">{localStorage.getItem('username')}</span></a>
                        <a href="#email"><span className="white-text email">{localStorage.getItem('email')}</span></a>
                    </div>
                </li>

                {
                    (registerCoordsFlag) ?  (<AddCoordForm  sideNav={sideNav} 
                                                            setExpandNav={setExpandNav}
                                                            setActiveIcon={setActiveIcon}/>)
                                        : 
                                            (<GeneralOptions sideNav={sideNav} />)
                }

            </ul>

            <a  data-target="slide-out" 
                className={`btn-floating btn-large ${activeIcon} floatButton teal dark-2 sidenav-trigger `}>
                <i className="material-icons">menu</i>
            </a>
        </div>
    )

}

export default SideNav