import React, { Component } from 'react'
import TopNavBar from './components/TopNavBar'
import SideMenu from './components/SideMenu'

class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <SideMenu />
      </div>
    )
  }
}
export default App
