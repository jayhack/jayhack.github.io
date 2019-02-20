import React, { Component } from "react";
import headshot from "./images/headshot.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <div className="photo-panel">
          <img className="headshot" src={headshot} />
        </div>
        <div className="text-panel">
          <div className="content-container">
            <h1>Jay Hack</h1>
            <div className="paragraph">
              <span>
                I'm an AI enthusiast and mathemagician excited about building
                impactful products and organizations.
              </span>
            </div>
            <div className="paragraph">
              <span>
                I'm currently the co-founder and CEO at{" "}
                <a href="https://angel.co/mira-ai/jobs">Mira</a>, building the
                beauty shopping experience of the future with{" "}
                <a href="https://www.linkedin.com/in/brandon-garcia-28555850/">
                  Brandon Garcia
                </a>{" "}
                and our amazing team.
              </span>
            </div>
            <div className="paragraph">
              <span>
                Previously, I built intelligent data systems at{" "}
                <a href="https://www.palantir.com/">Palantir</a>, ran a data
                science consulting firm and studied CS/AI at Stanford.
              </span>
            </div>
            <h2>Connect with me</h2>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/jayhack/">
                <i class="fab fa-linkedin-in" size="lg" />
              </a>

              <a href="https://angel.co/_jayhack_">
                <i class="fab fa-angellist" size="lg" />
              </a>

              <a href="https://angel.co/_jayhack_">
                <i class="fab fa-github" size="lg" />
              </a>

              <a href="https://www.youtube.com/channel/UCZpfeh2D4vYm8k4MjlaRvvA/">
                <i class="fab fa-youtube" size="lg" />
              </a>

              <a href="https://twitter.com/_jayhack_">
                <i class="fab fa-twitter" size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
