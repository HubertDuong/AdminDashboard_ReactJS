import React from 'react'

const NotificationItem = (props) => {
    return (
        <div className="notification-item">
            <i className={props.icon}></i>
            <span>{props.content}</span>
        </div>
    )
}

export default NotificationItem
