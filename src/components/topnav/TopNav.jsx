import React from 'react'
import { Link } from 'react-router-dom'

import './top-nav.css'

import Dropdown from '../dropdown/Dropdown'
import UserToggle from './components/UserToggle'
import NotificationItem from './components/NotificationItem'
import ThemeMenu from '../theme-menu/ThemeMenu'

import userMenu from '../../assets/json-data/user_menus.json'
import notification from '../../assets/json-data/notification.json'

import { currentUser } from './libs/constant'

const renderNotificationItem = (item, index) => {
    return (
        <NotificationItem
            key={index}
            icon={item.icon}
            content={item.content} />
    )
}

const renderFooter = () => {
    return (
        <Link to="/">View All</Link>
    )
}

const renderUserToggle = (user) => {
    return (
        <UserToggle
            image={user.image}
            displayName={user.displayName} />
    )
}

const renderUserMenu = (item, index) => {
    return (
        <Link to="/" key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )
}

const TopNav = (props) => {

    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav_right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(currentUser)}
                        contentData={userMenu}
                        renderItems={renderUserMenu}/>
                </div>
                <div className="topnav_right-item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge="8"
                        contentData={notification}
                        renderItems={renderNotificationItem}
                        renderFooter={renderFooter} />
                </div>
                <div className="topnav_right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
}

export default TopNav

