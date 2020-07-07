import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function MapComponent() {

    const position = [-19.9320, -43.9380]

    return(
        <Map zoomControl={false} center={position} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>OOOOI Bela!<br />Olha Que Legal!</Popup>
            </Marker>
        </Map>
    )
}

export default MapComponent