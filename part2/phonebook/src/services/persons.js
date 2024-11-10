import axios from "axios"

const getAllPersons = async () => {
  return axios
    .get('http://localhost:3001/persons')
    .then(res => res.data)
}

const createPerson = (personObject) => {
  return axios
    .post("http://localhost:3001/persons", personObject)
    .then(res => res.data)
}

export default { getAllPersons, createPerson }