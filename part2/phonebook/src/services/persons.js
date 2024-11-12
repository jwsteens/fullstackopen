import axios from "axios"
const address = "10.10.1.228"

const getAllPersons = () => {
  return axios
    .get(`http://${address}:3001/persons`)
    .then(res => res.data)
}

const createPerson = personObject => {
  return axios
    .post(`http://${address}:3001/persons`, personObject)
    .then(res => res.data)
}

const deletePerson = async id => {
  return axios
    .delete(`http://${address}:3001/persons/${id}`)
    .then(_ => {
      getAllPersons()
      .then(res => res.data)
    })
}

const updatePerson = async ( id, personObject ) => {
  return axios
    .put(`http://${address}:3001/persons/${id}`, personObject)
    .then(res => {
      return res.data
    })
}

export default { getAllPersons, createPerson, deletePerson, updatePerson }