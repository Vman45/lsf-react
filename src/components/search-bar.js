import React, { Component } from 'react'

export default class SearchBar extends Component {
  focus = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <nav
        className="navbar is-fixed-top is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item control search">
            <input
              v-model="query"
              onClick={this.focus}
              id="search"
              placeholder="comment signer…"
              className="input search"
              autoFocus
              autoComplete="off"
              type="text"
              data-e2e="search-bar-input"
            />
          </div>
          <label
            htmlFor="search"
            className="navbar-item is-paddingless is-hidden-mobile"
          >
            <span data-e2e="search-bar-result-count"> count </span>
            <span>&nbsp;Résultats</span>
          </label>
        </div>
      </nav>
    )
  }
}
