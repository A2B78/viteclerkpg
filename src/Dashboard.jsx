import React from 'react'
import ProfileCard from './components/Cards/ProfileCard'
import Thero from './components/Heros/Thero'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Thero />
      <ProfileCard />
    </div>
  )
}

export default Dashboard
