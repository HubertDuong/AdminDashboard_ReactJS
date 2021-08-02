import React from 'react'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

import { themeModeLight } from '../components/theme-menu/libs/constants'
import { chartOptions, topCustomers, latestOrders, orderStatus } from './libs/constant'
import statusCards from '../assets/json-data/status-card-data.json'


const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {
    const currMode = useSelector(state => state.themeReducer.mode)

    return (
        <div>
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div key={index} className="col-6">
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={{
                                ...chartOptions.options,
                                theme: { mode: currMode === themeModeLight ? 'dark' : 'light'}
                            }}
                            series={chartOptions.series}
                            type="line"
                            height="100%" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={renderCustomerHead}
                                bodyData={topCustomers.body}
                                renderBody={renderCustomerBody} />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                 headData={latestOrders.header}
                                 renderHead={renderOrderHead}
                                 bodyData={latestOrders.body}
                                 renderBody={renderOrderBody} />
                        </div>
                        <div className="card_footer">
                        <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
