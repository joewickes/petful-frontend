import React from 'react';

import '../styles/AdoptionPage.css';

import dogPhoto5 from './../images/dog5.jpg';
import dogPhoto4 from './../images/dog4.jpg';
import dogPhoto3 from './../images/dog3.jpg';
import dogPhoto2 from './../images/dog2.jpg';
import dogPhoto1 from './../images/dog1.jpg';
import catPhoto5 from './../images/cat5.jpg';
import catPhoto4 from './../images/cat4.jpg';
import catPhoto3 from './../images/cat3.jpg';
import catPhoto2 from './../images/cat2.jpg';
import catPhoto1 from './../images/cat1.jpg';
import petsService from './../services/pets-service';
import peopleService from './../services/people-service';

class AdoptionPage extends React.Component {
  state = {
    count: 1,
    addingName: false,
    myName: null,
    listOfNames: ['Loading...'],
    listOfDogObjs: [
      {
        Name: 'Loading...',
        Breed: 'Loading...',
        Gender: 'Loading...',
        Description: 'Loading...',
        Age: 'Loading...',
        'Journey To Us':  'Loading...',
      }
    ],
    listOfCatObjs: [{
      Name: 'Loading...',
      Breed: 'Loading...',
      Gender: 'Loading...',
      Description: 'Loading...',
      Age: 'Loading...',
      'Journey To Us':  'Loading...',
    }],
    dogImages: [
      dogPhoto1,
      dogPhoto2,
      dogPhoto3,
      dogPhoto4,
      dogPhoto5
    ],
    catImages: [
      catPhoto1,
      catPhoto2,
      catPhoto3,
      catPhoto4,
      catPhoto5
    ],
    adoptionMessage: false,
    timeout: null,
  }

  

  intervalID = 0;

  handleInterval = () => {
    return setInterval(() => {
      if (!this.state.listOfNames || this.state.listOfNames[0] !== this.state.myName) {
        const newListOfNames = this.state.listOfNames;
        const newEndingName = newListOfNames.shift();
        newListOfNames.push(newEndingName);

        if (this.state.count % 2 === 0) {
          const newCatImgs = this.state.catImages;
          const newEndCat = newCatImgs.shift();
          newCatImgs.push(newEndCat);

          const newListOfCats = this.state.listOfCatObjs;
          const newEndingCat = newListOfCats.shift();
          newListOfCats.push(newEndingCat);

          this.setState({count: this.state.count + 1, listOfNames: newListOfNames, newListOfCats, catImages: newCatImgs});
        } else {
            const newDogImgs = this.state.dogImages;
            const newEndDog = newDogImgs.shift();
            newDogImgs.push(newEndDog);

            const newListOfDogs = this.state.listOfDogObjs;
            const newEndingDog = newListOfDogs.shift();
            newListOfDogs.push(newEndingDog);

            this.setState({count: this.state.count + 1, listOfNames: newListOfNames, newListOfDogs, dogImages: newDogImgs});
        }
      }
    }, 5000)
  }

  componentDidMount() {
    
    const dogsResult = petsService.getDogs;
    const catsResult = petsService.getCats;
    const peopleResult = peopleService.getPeople;

    return Promise.all([dogsResult(), catsResult(), peopleResult()])
      .then(values => {
        const dogs = [...values[0]];
        const cats = [...values[1]];
        const people = [...values[2]];

        this.setState({listOfDogObjs: dogs, listOfCatObjs: cats, listOfNames: people})
        this.intervalID = this.handleInterval();
      })
    ;
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  adoptDog = (e) => {
    e.preventDefault();
    const newDogImgs = this.state.dogImages;
    const newEndDog = newDogImgs.shift();
    newDogImgs.push(newEndDog);
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
    const newCatImgs = this.state.catImages;
    const newEndCat = newCatImgs.shift();
    newCatImgs.push(newEndCat);
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
          {this.state.listOfDogObjs !== null ? 
          <div className="dog">
            <div className="dog-img">
              <img src={this.state.dogImages[0]} alt="A really good dog" />
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
          : null }
          {this.state.listOfCatObjs !== null ?
          <div className="cat">
            <div className="cat-img">
              <img src={this.state.catImages[0]} alt="A really sophisticated cat" />
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
          : null}
          
        </section>
        <section className="people">
          <div className="people-names">
            <p>Up to Adopt: </p>
            {this.state.listOfNames !== null ?
            <ul className="people-list">
              {this.state.listOfNames.map(name => {
                return (<li key={name}>{name}</li>)
              })}
            </ul>
            : null}
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