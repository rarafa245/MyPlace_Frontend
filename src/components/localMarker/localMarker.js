import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import RemoveModal from './removeModal'

function LocalMarker(props){

    const [ranking, setRanking] = useState()
    const [localID, setlocalID] = useState()

    useEffect(() => {
        
        const stars = []
        for(const i =0; i < props.rating; i++ ) 
            stars.push(<i id="star" className="tiny material-icons">star</i>)
        
        setRanking(stars)
    }, [])

    const x = () => console.log(props.localID)


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
                            <a onClick={() => x()}>Editar</a>
                            <a  className="modal-trigger" 
                                href="#modal1" 
                                onClick={() => setlocalID(props.localID)}>Remover</a>
                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    )

}

export default LocalMarker