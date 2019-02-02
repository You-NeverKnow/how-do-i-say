import {Fragment, useState} from "react"
import axios from "axios"
import generate from "shortid"
import React from "react"

const App = (props) => {
  // State
  const [userInput, setUserInput] = useState("")
  const [json, setJson] = useState({})

  // Functions
  const handleFind = () => {
    const url = "//localhost:8000/search/"

    const options =  {
        params: {
          q: userInput
        }
      }
    axios.get(url,options)
      .then(res => {
        setUserInput("")
        setJson(res.data)
      })
  }

  const handleSearchBar = (e) => {
    setUserInput(e.target.value)
  }

  const mapObject = (obj) => {
    return Object.keys(obj)
      .map(key => [key, generate()])
      .map(([key, id]) =>
          <li key={id}>{key}: {obj[key]}</li>
          )
  }

  return (
    <Fragment>
    <input
      placeholder="Search.."
      value={String(userInput)}
      onChange={handleSearchBar}
    />
    <button
        variant="contained"
        color="primary"
        onClick={handleFind}>
    Search
    </button>
  <ul>
    {mapObject(json)}
  </ul>
      </Fragment>
  )
}

export default App;