import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useDispatch } from 'react-redux'
import { setMapCoordsFlag } from '../../../redux'


function GeneralOptions (props) {

    const dispatch = useDispatch()


    const addLocal = () => {

        props.sideNav.close()
        M.toast({html: 'Selecione o Local Desejado no Mapa'})
        dispatch (
            setMapCoordsFlag()
        )
    }


    return (
        <div>
            <li><a href="#!" className="link"><i className="material-icons">cloud</i>Meus Locais</a></li>
            <li><a href="#!" className="link"><i className="material-icons">search</i>Pesquisar Local</a></li>
            <li><div className="divider"></div></li>
            <li><a onClick={() => addLocal()} href="#!" className="link"><i className="material-icons">add</i>Adicionar Local</a></li>
            <li><a href="#!" className="link"><i className="material-icons">account_circle</i>Minha Conta</a></li>
            <li><Link to="/logout" className="link sidenav-trigger"><i className="material-icons">chevron_left</i>Sair</Link></li>
        </div>
    )
}

export default GeneralOptions
