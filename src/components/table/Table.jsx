import React, { useState } from 'react'

import './table.css'

const Table = (props) => {

    const { headData, bodyData } = props;
    const pageSize = Number(props.pageSize);

    const initialDataShow = pageSize && bodyData ? bodyData.slice(0, pageSize) : bodyData
    const [dataShow, setDataShow] = useState(initialDataShow)
    const [currPage, setCurrPage] = useState(1)

    let totalPages = 1
    let range = []

    if(!!pageSize) {
        const totalItems = bodyData.length;
        let page = Math.floor(totalItems / pageSize)
        totalPages = totalItems % pageSize === 0 ? page : page + 1
        range = [...Array(totalPages).keys()]
    }

    const selectedPage = page => {
        const start = pageSize * (page -1)
        const end = start + pageSize

        setCurrPage(page)
        setDataShow(bodyData.slice(start, end))
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        headData.map((item, index) => {
                                            return props.renderHead(item, index)
                                        })
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                                    {
                    dataShow && props.renderBody ? (
                        <tbody>
                            {
                                dataShow.map((item, index) => {
                                    return props.renderBody(item, index)
                                })
                            }
                        </tbody>
                    ) : null
                }
                </table>
                {
                    totalPages > 1 ? (
                        <div className="table__pagination">
                            {
                                range.map((item, index) => {
                                    const page = item + 1;
                                    return (
                                        <div key={index} className={`table__pagination-item ${currPage === page ? 'active' : ''}`}
                                            onClick={() => selectedPage(page)}>
                                            {page}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Table
