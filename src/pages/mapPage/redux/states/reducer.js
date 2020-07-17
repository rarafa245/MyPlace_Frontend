import { 
    SET_MAP_COORDS_FLAG,
    CLEAN_MAP_COORDS_FLAG,
    SET_REGISTER_COORDS_FLAG,
    CLEAN_REGISTER_COORDS_FLAG,
    STORE_MAP_COORDS,
    SET_SUBMIT_MESSAGE,
    CLEAN_SUBMIT_MESSAGE } from './types'

const initialStore = {
    setCoordsFlag: false,
    registerCoordsFlag: false,
    x: '',
    y: '',
    submitMessage: '',
    status: false,
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
        
        case SET_SUBMIT_MESSAGE:
            return {
                ...state,
                submitMessage: action.message,
                status: action.status,
                x: '',
                y: ''
            }
        
        case CLEAN_SUBMIT_MESSAGE:
            return {
                ...state,
                submitMessage: ''
            }
            
         default:
            return state;
    }

}

export default reducer
