import React from 'react'
import { Marker, Popup } from 'react-leaflet'

function LocalMarker(props){

    return (
        <Marker position={[props.x, props.y]}>
            <Popup >Posição x: {props.x} | y: {props.y}</Popup>
        </Marker>
    )

}

export default LocalMarker