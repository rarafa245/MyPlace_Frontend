import { CHANGE_CENTER_COORDS } from './types'

const changeCenterCoords = (lat, lng) => ({type: CHANGE_CENTER_COORDS,
                                            lat: lat,
                                            lng: lng
                                        })

export {
    changeCenterCoords
}