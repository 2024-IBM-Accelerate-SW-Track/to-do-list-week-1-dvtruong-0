import React, { Component } from 'react';
import "./About.css";
import profileImage from '../assets/me.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" src={profileImage} alt="Profile picture"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Derek Truong</div>
            <div className="brief_description">
              <p>Hello! I am a current student at Brown University, pursuing a degree in Computer Engineering. I've been inspired by technology and innovation, hoping to work on quantum computers in the future.</p>
              <p>A little more about me: </p>
              <ul>
                <li>I'm from Miami, FL.</li>
                <li>My favorite music genres are rap and R&B.</li>
                <li>I love to play basketball (GO HEAT!) and videogames.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}