import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/json-data/sidebar_routes.json'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="the website's logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link key={index} to={item.route}>
                        <div>
                            {item.display_name}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
