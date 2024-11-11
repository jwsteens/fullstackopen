import axios from "axios"

const getAllPersons = () => {
  return axios
    .get('http://localhost:3001/persons')
    .then(res => res.data)
}

const createPerson = personObject => {
  return axios
    .post("http://localhost:3001/persons", personObject)
    .then(res => res.data)
}

const deletePerson = async id => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(_ => {
      getAllPersons()
      .then(res => res.data)
    })
}

const updatePerson = async ( id, personObject ) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, personObject)
    .then(res => {
      return res.data
    })
}

export default { getAllPersons, createPerson, deletePerson, updatePerson }