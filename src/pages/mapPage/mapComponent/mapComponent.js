import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cleanMapCoordsFlag, setRegisterCoordsFlag } from '../redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function MapComponent() {

    const position = [-19.9320, -43.9380]
    const dispatch = useDispatch()
    const setCoordsFlag = useSelector( state => state.setCoordsFlag )
    const x = useSelector( state => state )

    
    const clickEvent = (e) => {
        if (setCoordsFlag) {
            alert(`${e.latlng.lat} , ${e.latlng.lng}`)
            dispatch(cleanMapCoordsFlag())
            dispatch(setRegisterCoordsFlag())
        }
        console.log(x)
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
        </Map>
    )
}

export default MapComponent