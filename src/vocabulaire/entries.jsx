import React, { Component } from 'react'

const vocabulaire = [
  {
    key: 'abandonner',
    video: 'videos/abandonner.webm'
  },
  {
    key: 'abbaye',
    video: 'videos/abbaye.webm'
  },
  {
    key: 'abdiquer',
    video: 'videos/abdiquer.webm'
  }
]

export default class Entries extends Component {
  play = mot => console.log(`play ${mot}`)
  render() {
    const mots = vocabulaire.map(mot => {
      return (
        <li key={mot.key} className="index_content--item has-bottom-margin">
          <a href="#{mot.key}" onClick={() => this.play(mot)} id={mot.key}>
            {mot.key}
          </a>
        </li>
      )
    })

    return (
      <ul className="index_content is-unstyled" data-e2e="entries">
        {mots}
      </ul>
    )
  }
}
