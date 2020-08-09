import React, { useState, useEffect } from 'react'
import { LocalList } from './../../../../../components'
import { useDispatch } from 'react-redux'
import { changeCenterCoords } from '../../../redux'
import { axiosGetCoordsPagination } from './../../../../../services'
import M from 'materialize-css/dist/js/materialize.min.js'

function MyLocals(props) {

    const dispatch = useDispatch()
    const [locations, setLocations] = useState()
    const [sideNav, setSideNav] = useState()

    useEffect(() => {

        const elems = document.querySelectorAll('.sidenav')  
        const instance = M.Sidenav.init(elems, {onCloseEnd: onClose})[0]
        instance.open()
        setSideNav(instance)

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
            <li className="options">
                <div className="col s10 truncate"><span className="op-3">{props.name}</span></div>
                <div className="col s2"><span className="op-3">{props.rating}</span></div>
            </li>
        </div>
    )

}


export default React.memo(MyLocals)