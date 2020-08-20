import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCenterCoords } from '../../../redux'
import { axiosGetCoordsPagination } from './../../../../../services'
import M from 'materialize-css/dist/js/materialize.min.js'

function MyLocals(props) {

    const [locations, setLocations] = useState()
    const [page, setPage] = useState(0)
    const [locationsCount, setlocationsCount] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const elems = document.querySelectorAll('.sidenav')
        const instance = M.Sidenav.init(elems, {onCloseEnd: onClose})[0]
        instance.open()

        axiosGetCoordsPagination(page)
            .then(response => {
                if (response.status) {
                    let RequestCounter = 0
                    const pagination = 5
                    const receivedCoords = response.coords
                    const userCoords = receivedCoords.map((element, index) => {
                        RequestCounter++
                        return (<LocalLinks name={element.name}
                                            rating={element.rating}
                                            x={element.x}
                                            y={element.y}
                                            key={pagination * page + index}
                                        />)
                    })
                    setlocationsCount(RequestCounter)
                    setLocations(userCoords)
                    setLoading(false)
                } else {
                    M.toast({html: 'Ocorreu um erro. Tente Novamente!'})
                    setLoading(false)
                }

            })

    }, [page])

    const onClose = () => props.setMyLocalsFlag(false)
    const nextPage = () => (locationsCount === 5 & !(loading)) && setPage(page + 1)
    const previousPage = () => (0 < page & !(loading)) && setPage(page - 1)


    return (
        <div>
            <div className="row">
                <div className="col s9"><span className="op-3"><b>Locais</b></span></div>
                <div className="col s3 center-align"><span className="op-3"><b>Nota</b></span></div>
            </div>
            <ul className="collection">

              {
                (loading) ? (<div className="progress">
                                <div className="indeterminate"></div>
                            </div>)
                          :
                            (locations)
              }

            </ul>
            <ul className="pagination centerList">
                <li><a onClick={() => previousPage()}><i className="material-icons">chevron_left</i></a></li>
                <li><a onClick={() => nextPage()}><i className="material-icons">chevron_right</i></a></li>
            </ul>
      </div>
    )

}


function LocalLinks(props) {

    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)

    const dispatch = useDispatch()

    const changeLocal = () => {
        dispatch(
            changeCenterCoords(x, y)
        )
    }

    return (
        <div className="row">
            <li className="options" onClick={() => changeLocal()}>
                <div className="col s10 truncate"><span className="op-3">{props.name}</span></div>
                <div className="col s2"><span className="op-3">{props.rating}</span></div>
            </li>
        </div>
    )

}


export default MyLocals
