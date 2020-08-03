import { combineReducers } from 'redux'
import reducer from './addLocal/reducer'
import reducerCoords from './changeCenterCoords/reducer'

const rootReducer = combineReducers({
    addLocal: reducer,
    changeCenterCoords: reducerCoords
})

export default rootReducer