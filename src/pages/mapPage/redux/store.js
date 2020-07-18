/* store:   - setCoordsFlag: (false)
            - registerCoordsFlag: (false)
            - x: ('')
            - y: ('')
            - submitMessage: ('')
            - status: (false)
*/

import { createStore } from 'redux'
import reducer from './states/reducer'

const store = createStore(reducer)

export default store
