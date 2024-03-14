import React from 'react'
import Navbar from '../../components/layout/Navbar';

import OrderDetails from 'components/cards/InfoCard';
import {Topbar} from '../../components/layout/admin'

const Dashboard = () => {
  console.log("dashboard render")
  return (
    <div>
      <p>dashboard component</p>
      <Topbar/>
      <Navbar/>
      <OrderDetails/>
    </div>
  )
}

export default Dashboard
