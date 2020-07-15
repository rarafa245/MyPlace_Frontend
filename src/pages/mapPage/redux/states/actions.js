import { 
    SET_MAP_COORDS_FLAG,
    CLEAN_MAP_COORDS_FLAG,
    SET_REGISTER_COORDS_FLAG,
    CLEAN_REGISTER_COORDS_FLAG,
    STORE_MAP_COORDS } from './types'

const setMapCoordsFlag = () => ({type: SET_MAP_COORDS_FLAG})
const cleanMapCoordsFlag = () => ({type: CLEAN_MAP_COORDS_FLAG})
const setRegisterCoordsFlag = () => ({type: SET_REGISTER_COORDS_FLAG})
const cleanRegisterCoordsFlag = () => ({type: CLEAN_REGISTER_COORDS_FLAG})

export {
    setMapCoordsFlag,
    cleanMapCoordsFlag,
    setRegisterCoordsFlag,
    cleanRegisterCoordsFlag
}

