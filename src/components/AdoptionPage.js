import React from 'react';

import '../styles/AdoptionPage.css';

class AdoptionPage extends React.Component {
  state = {
    addingName: false,
    myName: null,
    listOfNames: null,
  }

  startAddingName = () => {
    this.setState({addingName: true});
  }

  addNameToList = (e) => {
    e.preventDefault();
    this.setState(({}))
  }


  render() {
    return (
      <main>
        <section className="meet-the-pets">
          <h1>Let's Meet the Pets!</h1>
        </section>
        <section className="pets">
          <div className="dog">
            <div className="dog-img">
              <img src='#' alt="A really good dog" />
            </div>
            <div className="dog-info">
              <ul className="dog-info-list">
                <li>Name:</li>
                <li>Breed:</li>
                <li>Gender:</li>
                <li>Description:</li>
                <li>Age:</li>
                <li>Journey To Us:</li>
              </ul>
            </div>
          </div>
          <div className="cat">
            <div className="cat-img">
              <img src='#' alt="A really sophisticated cat" />
            </div>
            <div className="cat-info">
              <ul className="cat-info-list">
                <li>Name:</li>
                <li>Breed:</li>
                <li>Gender:</li>
                <li>Description:</li>
                <li>Age:</li>
                <li>Journey To Us:</li>
              </ul>
            </div>
            <div className="cat-info">
            </div>
          </div>
        </section>
        <section className="people">
          <div className="people-names">
            <p>Up to Adopt: </p>
            <ul className="people-list">
              <li>person1</li>
              <li>person2</li>
            </ul>
          </div>
          <div className="add-my-name">
            {this.state.addingName ? <form className="add-name-form" onSubmit={this.addNameToList}>
              <input type="text" placeholder="Your Name" />
            </form> : null}
            {this.state.myName || this.state.addingName ? null : <button class="add-my-name-btn" onClick={this.startAddingName}>Add My Name</button>}
          </div>
        </section>

      </main>
      
    );
  }
}

export default AdoptionPage;