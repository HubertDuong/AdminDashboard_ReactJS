import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './theme-menu.css'

import { clickOutSideRef } from '../libs/service'
import * as actions from '../../redux/actions/index'
import { themeMode, colorMode, mode_settings, color_settings } from './libs/constants'

const ThemeMenu = () => {
    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)
    const dispatch = useDispatch()
    const [currMode, setCurrMode] = useState('light')
    const [currColor, setCurrColor] = useState('blue')

    useEffect(() => {
        const themeClass = mode_settings.find(m => m.class === localStorage.getItem(themeMode))
        const colorClass = color_settings.find(m => m.class === localStorage.getItem(colorMode))

        themeClass && setCurrMode(themeClass.id)
        colorClass && setCurrColor(colorClass.id)
    }, [])

    clickOutSideRef(menu_ref, menu_toggle_ref)

    const handleActiveMenu = () => menu_ref.current.classList.add('active')
    const handleCloseMenu = () => menu_ref.current.classList.remove('active')

    const handleSetMode = (mode) => {
        setCurrMode(mode.id)
        localStorage.setItem(themeMode, mode.class)
        dispatch(actions.setMode(mode.class))
    }

    const handleSetColor = (color) => {
        setCurrColor(color.id)
        localStorage.setItem(colorMode, color.class)
        dispatch(actions.setColor(color.class))
    }

    return (
        <div>
            <div ref={menu_toggle_ref} className="dropdown__toggle" onClick={handleActiveMenu}>
                <i className="bx bx-palette"></i>
            </div>
            <div ref={menu_ref} className="theme-menu">
                <h4>theme settings</h4>
                <button className="theme-menu__close" onClick={handleCloseMenu}>
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-menu__select">
                    <span>Choose mode</span>
                    <ul className="mode-list">
                        {
                            mode_settings.map((item, index) => (
                                <li key={index} onClick={() => handleSetMode(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>Choose mode</span>
                    <ul className="mode-list">
                        {
                            color_settings.map((item, index) => (
                                <li key={index} onClick={() => handleSetColor(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThemeMenu
