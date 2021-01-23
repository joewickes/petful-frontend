const petsService = {
  getCats: () => {
    return fetch('https://tranquil-journey-46938.herokuapp.com/api/cats')
      .then(result => {
        return result.json();
      })
    ;
  },
  getDogs: () => {
    return fetch('https://tranquil-journey-46938.herokuapp.com/api/dogs')
      .then(result => {
        return result.json();
      })
    ;
  }
}

export default petsService;