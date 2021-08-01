import React from 'react'
import Table from '../components/table/Table'

import { customerTableHead } from './constant'
import customerList from '../assets/json-data/customers-list.json'

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                pageSize={10}
                                headData={customerTableHead}
                                renderHead={renderHead}
                                bodyData={customerList}
                                renderBody={renderBody} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
