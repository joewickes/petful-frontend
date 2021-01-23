import React from 'react';

import '../styles/AdoptionPage.css';

import dogPhoto from './../images/helena-lopes-wNRutxmyR8w-unsplash.jpg';
import catPhoto from './../images/sophia-ayame-yak7zIjk8mg-unsplash.jpg';

class AdoptionPage extends React.Component {
  state = {
    count: 1,
    addingName: false,
    myName: null,
    listOfNames: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'],
    listOfDogObjs: [
      {Name: 'Freddy', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '5yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Bertha', Breed: 'Golden Retriever', Gender: 'Female', Description: 'A beautiful golden color, happy and kind', Age: '6yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'George', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '7yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Cassidy', Breed: 'Golden Retriever', Gender: 'Female', Description: 'A beautiful golden color, happy and kind', Age: '3yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Bucky', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '1yo', 'Journey To Us': 'Found wandering outside our door'}
    ],
    listOfCatObjs: [
      {Name: 'Paul', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '1yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Peggy', Breed: 'Calico', Gender: 'Female', Description: 'A beautiful speckled color, happy and mischevious', Age: '3yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Frank', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '7yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Katniss', Breed: 'Calico', Gender: 'Female', Description: 'A beautiful speckled color, happy and mischevious', Age: '5yo', 'Journey To Us': 'Found wandering outside our door'},
      {Name: 'Steve', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '2yo', 'Journey To Us': 'Found wandering outside our door'}
    ],
    adoptionMessage: false,
    timeout: null,
  }

  handleInterval = () => {
    return setInterval(() => {
      if (this.state.listOfNames[0] !== this.state.myName) {
        const newListOfNames = this.state.listOfNames;
        const newEndingName = newListOfNames.shift();
        newListOfNames.push(newEndingName);

        if (this.state.count % 2 === 0) {

          const newListOfCats = this.state.listOfCatObjs;
          const newEndingCat = newListOfCats.shift();
          newListOfCats.push(newEndingCat);

          this.setState({count: this.state.count + 1, listOfNames: newListOfNames, newListOfCats});
        } else {
            const newListOfDogs = this.state.listOfDogObjs;
            const newEndingDog = newListOfDogs.shift();
            newListOfDogs.push(newEndingDog);

            this.setState({count: this.state.count + 1, listOfNames: newListOfNames, newListOfDogs});
        }
      }
    }, 5000)
  }

  componentDidMount() {
    this.handleInterval();
  }

  adoptDog = (e) => {
    e.preventDefault();
    const newDogsObjs = this.state.listOfDogObjs;
    const adoptedDog = newDogsObjs.shift();
    newDogsObjs.push(adoptedDog);
    const newListOfNames = this.state.listOfNames;
    newListOfNames.shift();

    this.setState({
      myName: null, 
      listOfDogObjs: newDogsObjs,
      adoptionMessage: true,
    })
  }

  adoptCat= (e) => {
    e.preventDefault();
    const newCatsObjs = this.state.listOfCatObjs;
    const adoptedCat = newCatsObjs.shift();
    newCatsObjs.push(adoptedCat);
    const newListOfNames = this.state.listOfNames;
    newListOfNames.shift();

    this.setState({
      myName: null, 
      listOfCatObjs: newCatsObjs,
      adoptionMessage: true,
    })
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
    newListOfNames.push(this.state.myName);
    this.setState(({addingName: false, listOfNames: newListOfNames}))
  }


  render() {

    return (
      <main>
        <section className="meet-the-pets">
          {this.state.adoptionMessage ? <h1>You have successfully adopted your pet!</h1> 
          : <h1>Let's Meet the Pets!</h1>}
        </section>
        <section className="pets">
          
          <div className="dog">
            <div className="dog-img">
              <img src={dogPhoto} alt="A really good dog" />
            </div>
            <div className="dog-info">
              <ul className="dog-info-list">
                <li><b>Name:</b> {this.state.listOfDogObjs[0].Name}</li>
                <li><b>Breed:</b> {this.state.listOfDogObjs[0].Breed}</li>
                <li><b>Gender:</b> {this.state.listOfDogObjs[0].Gender}</li>
                <li><b>Description:</b> {this.state.listOfDogObjs[0].Description}</li>
                <li><b>Age:</b> {this.state.listOfDogObjs[0].Age}</li>
                <li><b>Journey To Us:</b> {this.state.listOfDogObjs[0]['Journey To Us']}</li>
              </ul>
            </div>
            {this.state.listOfNames[0] !== this.state.myName ? null 
            : <div className="adopt-button-container">
              <button onClick={this.adoptDog}>Adopt</button>
            </div>}
            
          </div>
          <div className="cat">
            <div className="cat-img">
              <img src={catPhoto} alt="A really sophisticated cat" />
            </div>
            <div className="cat-info">
              <ul className="cat-info-list">
                <li><b>Name:</b> {this.state.listOfCatObjs[0].Name}</li>
                <li><b>Breed:</b> {this.state.listOfCatObjs[0].Breed}</li>
                <li><b>Gender:</b> {this.state.listOfCatObjs[0].Gender}</li>
                <li><b>Description:</b> {this.state.listOfCatObjs[0].Description}</li>
                <li><b>Age:</b> {this.state.listOfCatObjs[0].Age}</li>
                <li><b>Journey To Us:</b> {this.state.listOfCatObjs[0]['Journey To Us']}</li>
              </ul>
            </div>
            {this.state.listOfNames[0] !== this.state.myName ? null 
            : <div className="adopt-button-container">
              <button onClick={this.adoptCat}>Adopt</button>
            </div>}
          </div>
          
        </section>
        <section className="people">
          <div className="people-names">
            <p>Up to Adopt: </p>
            <ul className="people-list">
              {this.state.listOfNames.slice(0,6).map(name => {
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