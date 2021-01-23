const petsService = {
  getCats: () => {
    return fetch('http://localhost:8000/api/cats')
      .then(result => {
        return result.json();
      })
    ;
  },
  getDogs: () => {
    return fetch('http://localhost:8000/api/dogs')
      .then(result => {
        return result.json();
      })
    ;
  }
}

export default petsService;