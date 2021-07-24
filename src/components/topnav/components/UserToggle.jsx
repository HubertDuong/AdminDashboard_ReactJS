import React from 'react'

const UserToggle = (props) => {
    return (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={props.image} alt="the user" />
            </div>
            <div className="topnav__right-user__name">
                {props.displayName}
            </div>
        </div>
    )
}

export default UserToggle