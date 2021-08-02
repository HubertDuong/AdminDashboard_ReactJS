import React, { useRef } from 'react'
import { clickOutSideRef } from '../libs/service'

import './dropdown.css'

const Dropdown = (props) => {

    const refDropdownToggel = useRef(null)
    const refDropdownContent = useRef(null)

    clickOutSideRef(refDropdownContent, refDropdownToggel)

    return (
        <div className="dropdown">
            <button ref={refDropdownToggel} className="dropdown__toggle">
                {
                    props.icon ? (<i className={props.icon}></i>) : ''
                }
                {
                    props.badge ? (<span className="dropdown__toggle-badge">{props.badge}</span>) : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={refDropdownContent} className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => {
                        return props.renderItems(item, index)
                    }) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {
                                props.renderFooter()
                            }
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown
