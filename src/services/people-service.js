const peopleService = {
  getPeople: () => {
    return fetch('https://tranquil-journey-46938.herokuapp.com/api/people')
      .then(result => {
        return result.json();
      })
  }
}

export default peopleService;