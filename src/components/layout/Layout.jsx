import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import * as actions from '../../redux/actions/index'
import { themeMode, colorMode } from '../theme-menu/libs/constants'

const Layout = () => {
    const dispatch = useDispatch()
    const themeReducer = useSelector(state => state.themeReducer)

    console.log(themeReducer)

    useEffect(() => {
        const themeClass = localStorage.getItem(themeMode)
        const colorClass = localStorage.getItem(colorMode)

        dispatch(actions.setMode(themeClass))
        dispatch(actions.setColor(colorClass))
    }, [dispatch])

    return (
        <Router>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </Router>
    )
}

export default Layout
