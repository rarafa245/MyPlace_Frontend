import {CHANGE_CENTER_COORDS} from './types'

const initialStore = {
    lat: -19.9320,
    lng: -43.9380
}

const reducerCoords = (state = initialStore, action) => {

    switch (action.type) {
        case CHANGE_CENTER_COORDS:
            console.log('kkkkk')
            return {
                ...state,
                lat: action.lat,
                lng: action.lng
            }
        
        default:
            return state
    }

}

export default reducerCoords