import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function MapComponent() {

    const position = [-19.9320, -43.9380]

    const clickEvent = (e) => {
        console.log(e.latlng.lat , e.latlng.lng)
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