import * as types from './types'

export const setMode = (mode) => {
    return {
        type: types.SET_MODE,
        data: mode
    }
}

export const setColor = (color) => {
    return {
        type: types.SET_COLOR,
        data: color
    }
}

export const getTheme = () => {
    return {
        type: types.GET_THEME,
    }
}