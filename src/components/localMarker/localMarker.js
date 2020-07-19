import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'

function LocalMarker(props){

    const [ranking, setRanking] = useState()

    useEffect(() => {
        
        const stars = []
        for(const i =0; i < props.rating; i++ ) 
            stars.push(<i id="star" className="tiny material-icons">star</i>)
        
        setRanking(stars)
    }, [])

    return (
        <Marker position={[props.x, props.y]}>
            <Popup>
                <div className="col s12 m12 z-depth-2">
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text">
                            <span className="card-title">{props.name}</span>
                            <ul>
                                <li><b>Grupo:</b> {props.group}</li>
                                <li><p id="ranking"><b>Ranking:</b> {ranking}</p></li>
                            </ul>
                            <p><b>Notas:</b> {props.notes}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Editar</a>
                            <a href="#">Remover</a>
                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )

}

export default LocalMarker