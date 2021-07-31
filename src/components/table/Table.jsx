import React from 'react'

import './table.css'

const Table = (props) => {
    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => {
                                            return props.renderHead(item, index)
                                        })
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                                    {
                    props.bodyData && props.renderBody ? (
                        <tbody>
                            {
                                props.bodyData.map((item, index) => {
                                    return props.renderBody(item, index)
                                })
                            }
                        </tbody>
                    ) : null
                }
                </table>
            </div>
        </div>
    )
}

export default Table
