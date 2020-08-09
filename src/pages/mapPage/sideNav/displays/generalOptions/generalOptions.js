import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useDispatch } from 'react-redux'
import { setMapCoordsFlag } from '../../../redux'


function GeneralOptions (props) {
    /* Add Coords Options Component
        :name   - options: General Options in Side Nav
        :props  - sideNav: Instance of Navbar  - expand : open() / close: close()
    */
   

    const dispatch = useDispatch()


    const addLocal = () => {

        const elems = document.querySelectorAll('.sidenav')
        const instance = M.Sidenav.init(elems, {})[0]
        instance.close()

        M.toast({html: 'Selecione o Local Desejado no Mapa'})
        dispatch (setMapCoordsFlag())
    }

    const close = () => {
        const elems = document.querySelectorAll('.sidenav')
        const instance = M.Sidenav.init(elems, {})[0]
        instance.destroy()
    }


    return (
        <div name="options">
            <li><a onClick={() => props.setMyLocalsFlag(true)} className="link"><i className="material-icons">cloud</i>Meus Locais</a></li>
            <li><a href="#!" className="link"><i className="material-icons">search</i>Pesquisar Local</a></li>
            <li><div className="divider"></div></li>
            <li><a onClick={() => addLocal()} className="link"><i className="material-icons">add</i>Adicionar Local</a></li>
            <li><a href="#!" className="link"><i className="material-icons">account_circle</i>Minha Conta</a></li>
            <li><Link to="/logout" onClick={() => close()} className="link sidenav-trigger"><i className="material-icons">chevron_left</i>Sair</Link></li>
        </div>
    )
}

export default GeneralOptions
