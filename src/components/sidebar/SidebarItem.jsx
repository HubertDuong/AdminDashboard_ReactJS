import React from 'react'

const SidebarItem = (props) => {

    const activeClassName = props.active ? 'active' : '';

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${activeClassName}`}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default SidebarItem
