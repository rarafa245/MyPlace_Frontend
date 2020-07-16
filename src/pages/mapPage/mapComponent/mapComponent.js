import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cleanMapCoordsFlag, setRegisterCoordsFlag, storeMapCoords } from '../redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function MapComponent() {

    const position = [-19.9320, -43.9380]
    const dispatch = useDispatch()
    const setCoordsFlag = useSelector( state => state.setCoordsFlag )
    const [clickMarker, setClickMarker] = useState()

    
    const clickEvent = (e) => {

        if (setCoordsFlag) {
            dispatch(cleanMapCoordsFlag())
            dispatch(setRegisterCoordsFlag())
            dispatch(storeMapCoords(e.latlng.lat, e.latlng.lng))
            setClickMarker(
                <Marker position={[e.latlng.lat, e.latlng.lng]} >
                    <Popup >Defina as Informações do Local!</Popup>
                </Marker>
            )
        }
    }

    return(
        <Map onclick={(e) => clickEvent(e)} zoomControl={false} center={position} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>Olha Que Legal!</Popup>
            </Marker>

            {clickMarker}

        </Map>
    )
}

export default MapComponent