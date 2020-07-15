import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMapCoordsFlag } from '../redux'
import M from 'materialize-css/dist/js/materialize.min.js'

function SideNav(){

    const [sideNav, setSideNav] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav')  
        const instance = M.Sidenav.init(elems, {})[0]
        setSideNav(instance)

        return () => {
            instance.close()
            instance.destroy()
        }

    }, [])

    const addLocal = () => {

        sideNav.close()
        M.toast({html: 'Selecione o Local Desejado no Mapa'})
        dispatch(
            setMapCoordsFlag()
        )
    }

    return (
        <div>
            <div>
                <ul id="slide-out" className="sidenav">
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
                    <li><a href="#!" className="link"><i className="material-icons">cloud</i>Meus Locais</a></li>
                    <li><a href="#!" className="link"><i className="material-icons">search</i>Pesquisar Local</a></li>
                    <li><div className="divider"></div></li>
                    <li><a onClick={() => addLocal()} href="#!" className="link"><i className="material-icons">add</i>Adicionar Local</a></li>
                    <li><a href="#!" className="link"><i className="material-icons">account_circle</i>Minha Conta</a></li>
                    <li><Link to="/logout" className="link sidenav-trigger"><i className="material-icons">chevron_left</i>Sair</Link></li>
                </ul>

                <a  data-target="slide-out" 
                    className="btn-floating btn-large floatButton teal dark-2 sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>  
        </div>
    )

}

export default SideNav