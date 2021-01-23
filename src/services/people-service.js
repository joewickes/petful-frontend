const peopleService = {
  getPeople: () => {
    return fetch('http://localhost:8000/api/people')
      .then(result => {
        return result.json()
      })
  }
}

export default peopleService;