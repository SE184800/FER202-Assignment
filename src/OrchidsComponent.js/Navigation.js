import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                <li><a className='active'href='#home'>Home</a></li>
                <li><a href='#News'>News</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
