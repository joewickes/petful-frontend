import React from 'react';

import '../styles/AdoptionPage.css';

class AdoptionPage extends React.Component {
  state = {
    addingName: false,
    myName: null,
    listOfNames: ['name1', 'name2', 'name3', 'name4', 'name5'],
  }

  startAddingName = () => {
    this.setState({addingName: true});
  }

  updateTextValue = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({myName: e.target.value})
  }

  addNameToList = (e) => {
    e.preventDefault();
    const newListOfNames = this.state.listOfNames;
    newListOfNames.unshift(this.state.myName);
    this.setState(({addingName: false, listOfNames: newListOfNames}))
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
            {this.state.listOfNames[0] !== this.state.myName ? null 
            : <div className="adopt-button-container">
              <button>Adopt</button>
            </div>}
            
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
            {this.state.listOfNames[0] !== this.state.myName ? null 
            : <div className="adopt-button-container">
              <button>Adopt</button>
            </div>}
          </div>
          
        </section>
        <section className="people">
          <div className="people-names">
            <p>Up to Adopt: </p>
            <ul className="people-list">
              {this.state.listOfNames.map(name => {
                return (<li key={name}>{name}</li>)
              })}
            </ul>
          </div>
          <div className="add-my-name">
            {this.state.addingName ? <form className="add-name-form" onSubmit={this.addNameToList}>
              <input onChange={this.updateTextValue} className="add-name-text-box" type="text" placeholder="Your Name" />
            </form> : null}
            {this.state.myName || this.state.addingName ? null : <button className="add-my-name-btn" onClick={this.startAddingName}>Add My Name</button>}
          </div>
        </section>

      </main>
      
    );
  }
}

export default AdoptionPage;