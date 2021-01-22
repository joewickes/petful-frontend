import React from 'react';

import {NavLink} from 'react-router-dom';

import '../styles/HomePage.css';
import mainPhoto from './../images/priscilla-du-preez-qtkpOxCpl0Y-unsplash.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <main>
        <section className="welcome-to-petful">
          <h1>Welcome to Petful!</h1>
        </section>
        <div className="main-photo" >
          <img src={mainPhoto} alt="Dog and cat hanging out on a bench" />
        </div>
        <section className="how-it-works">
          <h2>How our adoption process works:</h2>
          <ul>
          <li>You can adopt a cat, or a dog, or both!</li>
          <li>However, you may only adopt the animal that came to the shelter first.</li>
          <li>You will be put into a list so that you can adopt when it's your turn!</li>
          </ul>
          <div className="start-adopting-now-btn">
            <NavLink to="/adoption"><button>Start Adopting Now</button></NavLink>
          </div>
        </section>

      </main>
    );
  }
}

export default HomePage;