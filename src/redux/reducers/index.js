import { combineReducers } from 'redux'

import * as types from '../actions/types'

export const themeReducer = (state = {}, action) => {
    switch (action.type) {
        case types.SET_MODE:
            return {
                ...state,
                mode: action.data
            }
        case types.SET_COLOR:
            return {
                ...state,
                color: action.data
            }
        default:
            return {
                ...state
            }
    }
}

const rootReducer = combineReducers({themeReducer})

export default rootReducer