import React, { useState, useEffect, useRef  } from 'react'
import { axiosGetUserCoords } from '../../../services'
import { LocalMarker, LoadingModal } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import {    cleanMapCoordsFlag, 
            setRegisterCoordsFlag, 
            storeMapCoords, 
            cleanSubmitMessage,
            changeCenterCoords } from '../redux'
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { geosearch } from 'esri-leaflet-geocoder'
import M from 'materialize-css/dist/js/materialize.min.js'


function MapComponent() {

    const mapRef = useRef()
    const [zoom, setZoom] = useState(17)
    const [clickMarker, setClickMarker] = useState()                                // Marker after click
    const [userLocals, setUserLocals] = useState()                                 // All user Locals infos

    // Redux
    const dispatch = useDispatch()
    const setCoordsFlag = useSelector( state => state.addLocal.setCoordsFlag )
    const submitMessage = useSelector( state => state.addLocal.submitMessage )
    const submitStatus = useSelector( state => state.addLocal.status )
    const centerLat = useSelector( state => state.changeCenterCoords.lat )
    const centerLng = useSelector( state => state.changeCenterCoords.lng )

    useEffect(() => {

        const { current = {} } = mapRef
        const { leafletElement: map } = current
        const control = geosearch({position: 'topright'})
        control.addTo(map)

        control.on('results', handleOnSearchResults)


        axiosGetUserCoords()
            .then(response => {
                
                const receivedCoords = response.coords

                const userCoords = receivedCoords.map((element, index) => {
                                        return (<LocalMarker name={element.name}
                                                             group={element.group}   
                                                             rating={element.rating}
                                                             x={element.x}           
                                                             y={element.y} 
                                                             notes={element.notes}
                                                             localID={element.localID}
                                                             key={index}
                                                            />)
                                    })

                setUserLocals(userCoords)
            })
        
        return () => {
            control.off('results', handleOnSearchResults)
        }

    }, [])


    function handleOnSearchResults(data) {
        setClickMarker (
            <Marker position={[data.latlng.lat, data.latlng.lng]} >
                <Popup >{data.text}</Popup>
            </Marker>
        )
    }


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

    return (
        <Map    ref={mapRef} 
                onclick={(e) => clickEvent(e)} 
                zoomControl={false} 
                center={[centerLat, centerLng]} 
                zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <ZoomControl className="mb-2" position="bottomright"/>
            {clickMarker}

            {
                (submitMessage) ?   (cleanMessage())
                                :   null                   
            }

            {userLocals}
            <LoadingModal />
        </Map>
    )
}

export default MapComponent