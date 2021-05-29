import { createStore, combineReducers } from 'redux'
import { recordingsReducer } from './reducers/recordingsReducer'
import { soundsReducer } from './reducers/soundsReducer'

const reducer = combineReducers({
    soundsReducer,
    recordingsReducer
})

export const store = createStore(reducer)