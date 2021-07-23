import React from 'react'
import { Link } from 'react-router-dom'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'
import NotificationItem from './NotificationItem'

import notification from '../../assets/json-data/notification.json'

const TopNav = (props) => {

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
            <Link to='/'>View All</Link>
        )
    }

    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type='text' placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav_right-item">
                    <Dropdown
                        icon='bx bx-user' />
                </div>
                <div className="topnav_right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='8'
                        contentData={notification}
                        renderItems={renderNotificationItem}
                        renderFooter={renderFooter} />
                </div>
                <div className="topnav_right-item">
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default TopNav

