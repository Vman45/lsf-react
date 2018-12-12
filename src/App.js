import React, { Component } from 'react'
import './App.css'

import SearchBar from './components/search-bar'
import Entries from './vocabulaire/entries'

class App extends Component {
  render() {
    return (
      <div id="top">
        <SearchBar data-e2e="search-bar" />
        <Entries />
      </div>
    )
  }
}

export default App
