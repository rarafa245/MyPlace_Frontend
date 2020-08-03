/* store:   - setCoordsFlag: (false)
            - registerCoordsFlag: (false)
            - x: ('')
            - y: ('')
            - submitMessage: ('')
            - status: (false)
*/

import { createStore } from 'redux'
import rootReducer from './combineReducers'

const store = createStore(rootReducer)

export default store
