import {Fragment, useState} from "react"
import axios from "axios"
import React from "react"
import {
  Col,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/searchbar"
import SearchButton from "./components/SearchButton"
import Paper from '@material-ui/core/Paper';
import IpaSymbol from "./components/IpaSymbol"

const App = () => {
  // State
  const [userInput, setUserInput] = useState("")
  const [json, setJson] = useState([{
    _id: "12736127361239",
    ch: "a",
    words: [
      {
        word: "man",
        indices: [1]
      },
      {
        word: "woman",
        indices: [3]
      }
    ]
  }])
  
  // Functions
  const handleFind = () => {
    const url = "//localhost:8000/search/"

    const options =  {
        params: {
          q: userInput
        },
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

  const mapObject = (objList) => {
    return objList.map(obj => [obj["_id"], obj["ch"], obj["words"]])
      .map(([id, ch, words]) =>
        <ListGroupItem key={id}>
          <IpaSymbol symbol={ch} words={words}/>
        </ListGroupItem>
      )
  }
  
  return (
    <Fragment>
      <Jumbotron style={{"textAlign": "center"}}>
        <h1>How do I say? æʌeʊɒə </h1>
      </Jumbotron>

      <Container>

        <Row noGutters>
          <Col xs="1"/>

          <Col xs="9" >
            <SearchBar userInput={userInput}
                       handleSearchBar={handleSearchBar}/>
          </Col>

          <Col xs="1" >
            <SearchButton handleFind={handleFind}/>
          </Col>

          <Col xs="1"/>
        </Row>

        <Row style={{"height" : "10vh"}}/>

        <Row>
          <Col xs="1"/>
          <Col xs="9">
            <Paper>
              <ListGroup>
                {mapObject(json)}
              </ListGroup>
            </Paper>
          </Col>
          <Col xs="1"/>

        </Row>
        <Row style={{"height" : "10vh"}}/>
      </Container>

    </Fragment>
  )
}

export default App;