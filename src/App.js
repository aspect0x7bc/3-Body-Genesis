import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './pages/Home'
import About from './pages/About'
import Tokens from './pages/Tokens'
import Mint from './pages/Mint'
import Wander from './pages/Wander'

import Navbar from './components/Navbar'

import ConnectionProvider from './containers/ConnectionProvider'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <Provider store={store}>
      <ConnectionProvider>
        <Router>
          <Navbar toggle={toggleSidebar} />
          <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tokens" exact component={Tokens} />
            <Route path="/mint" exact component={Mint} />
            <Route path="/wander" exact component={Wander} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Router>
      </ConnectionProvider>
    </Provider>
  )
}

export default App