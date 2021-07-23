import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem'

import './sidebar.css'

import logo from '../../assets/images/logo.jpg'

import sidebarItems from '../../assets/json-data/sidebar_routes.json'

const Sidebar = (props) => {
    const activeItem = sidebarItems.findIndex(item => item.route === props.location.pathname)

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="the website's logo" />
            </div>
            {
                sidebarItems.map((item, index) => (
                    <Link key={index} to={item.route}>
                        <SidebarItem
                            title={item.displayName}
                            icon={item.icon}
                            active={index === activeItem}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
