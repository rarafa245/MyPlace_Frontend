import { 
    SET_MAP_COORDS_FLAG,
    CLEAN_MAP_COORDS_FLAG,
    SET_REGISTER_COORDS_FLAG,
    CLEAN_REGISTER_COORDS_FLAG,
    STORE_MAP_COORDS } from './types'

const initialStore = {
    setCoordsFlag: false,
    registerCoordsFlag: false,
    x: '',
    y: ''
}

const reducer = (state = initialStore, action) => {
    
    switch (action.type) {
        case SET_MAP_COORDS_FLAG:
            return {
                ...state,
                setCoordsFlag: true
            }
        
        case CLEAN_MAP_COORDS_FLAG:
            return {
                ...state,
                setCoordsFlag: false
            }
        
        case SET_REGISTER_COORDS_FLAG:
            return {
                ...state,
                registerCoordsFlag: true
            }
        
        case CLEAN_REGISTER_COORDS_FLAG:
            return {
                ...state,
                registerCoordsFlag: false
            }

        case STORE_MAP_COORDS:
            return {
                ...state,
                x: action.x,
                y: action.y
            }
            
         default:
            return state;
    }

}

export default reducer
