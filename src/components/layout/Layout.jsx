import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'

const Layout = () => {
    return (
        <Router>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props}/>
                    <div className="layout__content">
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