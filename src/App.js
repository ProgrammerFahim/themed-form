import React, { Component } from 'react';
import './App.css';
import googleLogo from './assets/g-logo.png';

class App extends Component {
  state = {
      darkTheme: true
  }

  changeTheme = () => {
    let currentTheme = this.state.darkTheme;
    this.setState({darkTheme: !currentTheme});
  }

  render () {
    let containerClass = "container";
    let toggleClass = "colorChangeToolbar";
    if (this.state.darkTheme) {
        containerClass += " dark-theme";
        toggleClass += " dark-theme";
    } else {    
        containerClass += " light-theme";
        toggleClass += " light-theme";
    }
    
    return [
        <div className={toggleClass}>
            <button class="toggle-theme" onClick={this.changeTheme}>
                <div class="toggle-container">
                    <div class="slider"></div>
                </div>
            </button>
        </div>,
        <div className="App">
            <div className={containerClass}>
                <section className="left">
                    <h1>
                        <span>Learn.</span>
                        <span className="focus">Code.</span>
                        <span>Be a pro.</span>
                    </h1>
                    <p>Join a legion of programmers who always stay at the edge of technological progress</p>
                </section>
                <section className="right">
                    <form>
                        <heading>
                            <h1>Registration</h1>
                            <h2>Become a Linux Expert</h2>
                        </heading>

                        <label for="full-name">Full Name</label>
                        <input type="text" id="full-name" name="name" />
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" />

                        <div className="main-buttons">
                            <button type="button" className="normal-button">Sign Up</button>
                            <a href="/">Already have an account? <span>Log In</span></a>
                        </div>

                        <div className="divider">
                            <p>or</p>
                        </div>

                        <button type="button" className="google-button">
                            <img src={googleLogo} alt="Google logo" />
                            Sign in with Google
                        </button>
                    </form>
                </section>
            </div>
        </div>
    ];
  }
}

export default App;
