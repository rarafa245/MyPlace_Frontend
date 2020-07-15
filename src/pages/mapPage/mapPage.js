import React, { useEffect } from 'react'
import MapComponent from './mapComponent'
import SideNav from './sideNav'
import { Provider } from 'react-redux'
import store from './redux/store'


function MapPage() {

    return(
        <div>
            <Provider store={store} >
                <MapComponent />
                <SideNav />
            </ Provider>
        </div>
    )
}

export default MapPage