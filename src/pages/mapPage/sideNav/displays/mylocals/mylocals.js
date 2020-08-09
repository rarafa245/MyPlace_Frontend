import React, { useState, useEffect } from 'react'
import { LocalList } from './../../../../../components'
import { useDispatch } from 'react-redux'
import { changeCenterCoords } from '../../../redux'
import { axiosGetCoordsPagination } from './../../../../../services'
import M from 'materialize-css/dist/js/materialize.min.js'

function MyLocals(props) {

    const dispatch = useDispatch()
    const [locations, setLocations] = useState()

    useEffect(() => {

        const elems = document.querySelectorAll('.sidenav')  
        const instance = M.Sidenav.init(elems, {onCloseEnd: onClose})[0]
        instance.open()

        axiosGetCoordsPagination(1)
            .then(response => {
                const receivedCoords = response.coords

                const userCoords = receivedCoords.map((element, index) => {
                    return (<LocalLinks name={element.name}   
                                        rating={element.rating}
                                        x={element.x}           
                                        y={element.y} 
                                        key={index}
                                    />)
                })

                setLocations(userCoords)

            })

        return () => instance.close()
        
    }, [])

    const onClose = () => props.setMyLocalsFlag(false)


    return (
        <div>
            <ul className="collection">
                {locations}
            </ul>
            <ul className="pagination centerList">
                <li><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
      </div>
    )

}


function LocalLinks(props) {

    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)

    return (
        <div className="row">
            <li className="collection-item">
                <div className="col s8 truncate">{props.name}</div>
                <div className="col s4">{props.rating}</div>
            </li>
        </div>
    )

}








export default MyLocals
