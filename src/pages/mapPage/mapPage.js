import React from 'react'
import MapComponent from './mapComponent'
import SideNav from './sideNav'
import { Provider } from 'react-redux'
import store from './redux/store'


function MapPage(props) {

    return(
        <div>
            <Provider store={store} >
                <MapComponent {...props}/>
                <SideNav {...props}/>
            </ Provider>
        </div>
    )
}

export default MapPage