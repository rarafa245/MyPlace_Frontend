import { 
    SET_MAP_COORDS_FLAG,
    CLEAN_MAP_COORDS_FLAG,
    SET_REGISTER_COORDS_FLAG,
    CLEAN_REGISTER_COORDS_FLAG,
    STORE_MAP_COORDS,
    SET_SUBMIT_MESSAGE,
    CLEAN_SUBMIT_MESSAGE } from './types'

const setMapCoordsFlag = () => ({type: SET_MAP_COORDS_FLAG})
const cleanMapCoordsFlag = () => ({type: CLEAN_MAP_COORDS_FLAG})
const setRegisterCoordsFlag = () => ({type: SET_REGISTER_COORDS_FLAG})
const cleanRegisterCoordsFlag = () => ({type: CLEAN_REGISTER_COORDS_FLAG})

const storeMapCoords = (x, y) => ({type: STORE_MAP_COORDS,
                                    x: x,
                                    y: y
                                })

const setSubmitMessage = (status, message) => ({type: SET_SUBMIT_MESSAGE,
                                                message: message,
                                                status: status
                                                })

const cleanSubmitMessage = () => ({type: SET_SUBMIT_MESSAGE})            

export {
    setMapCoordsFlag,
    cleanMapCoordsFlag,
    setRegisterCoordsFlag,
    cleanRegisterCoordsFlag,
    storeMapCoords,
    setSubmitMessage,
    cleanSubmitMessage
}

