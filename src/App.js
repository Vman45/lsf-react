import React, { Component } from 'react'
import './App.css'

import SearchBar from './components/search-bar'

class App extends Component {
  render() {
    return (
      <div id="top">
        <SearchBar data-e2e="search-bar" />
      </div>
    )
  }
}

export default App
