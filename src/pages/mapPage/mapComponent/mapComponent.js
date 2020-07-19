import React, { useState, useEffect  } from 'react'
import { axiosGetUserCoords } from '../../../services'
import { LocalMarker } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import { cleanMapCoordsFlag, setRegisterCoordsFlag, storeMapCoords, cleanSubmitMessage } from '../redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import M from 'materialize-css/dist/js/materialize.min.js'

function MapComponent() {

    const position = [-19.9320, -43.9380]                       // Start Coordinates
    const [clickMarker, setClickMarker] = useState()            // Marker after click
    const [userLocals, setUserLocals] = useState()              // All user Locals infos

    // Redux
    const dispatch = useDispatch()
    const setCoordsFlag = useSelector( state => state.setCoordsFlag )
    const submitMessage = useSelector( state => state.submitMessage )
    const submitStatus = useSelector( state => state.status )

    useEffect(() => {
        axiosGetUserCoords()
            .then(response => {
                const userCoords = []
                const receivedCoords = response.coords

                receivedCoords.forEach((element, index) => {
                    userCoords.push(<LocalMarker    key={index}     
                                                    name={element.name}
                                                    group={element.group}   
                                                    rating={element.rating}
                                                    x={element.x}           
                                                    y={element.y} 
                                                    notes={element.notes}
                                                    />)
                })

                setUserLocals(userCoords)
            })
    }, [])


    const cleanMessage = () => {

        (submitStatus) ? M.toast({ html: submitMessage, completeCallback: () => window.location.reload() })
                       : M.toast({ html: submitMessage})

        dispatch(cleanSubmitMessage())
    }

    
    const clickEvent = (e) => {

        if (setCoordsFlag) {
            dispatch(cleanMapCoordsFlag())
            dispatch(setRegisterCoordsFlag())
            dispatch(storeMapCoords(e.latlng.lat, e.latlng.lng))
            setClickMarker (
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

            {clickMarker}

            {
                (submitMessage) ?   (cleanMessage())
                                :   null                   
            }

            {userLocals}
        </Map>
    )
}

export default MapComponent