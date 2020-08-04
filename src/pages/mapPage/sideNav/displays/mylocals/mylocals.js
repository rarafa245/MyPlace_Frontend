import React from 'react'
import { LocalList } from './../../../../../components'
import { useDispatch } from 'react-redux'
import { changeCenterCoords } from '../../../redux'

function MyLocals() {

    const dispatch = useDispatch()


    return (
        <div>
            <ul className="collection">
                <LocalLinks />
                <LocalLinks />
                <LocalLinks />
            </ul>
            <ul className="pagination centerList">
                <li><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
      </div>
    )

}


function LocalLinks() {

    return (
        <div className="row">
            <li className="collection-item">
                <div className="col s8 truncate">local1hdashdaksdhakhdajkhdahdadkjahdawudhaiudhakdhakuwdwha</div>
                <div className="col s4">Nota</div>
            </li>
        </div>
    )

}








export default MyLocals
