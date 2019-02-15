import {Fragment, useImperativeHandle, useRef, useState} from "react"
import axios from "axios"
import React from "react"
import {
    Col,
    Container,
    Jumbotron,
    ListGroupItem,
    Row
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/searchbar"
import SearchButton from "./components/SearchButton"
import IpaSymbol from "./components/IpaSymbol"
import 'react-simple-keyboard/build/css/index.css';
import './css/animate.css'
import ShowExamplesOrType from "./components/showExamplesOrType"

const App = () => {

    // State
    const [userInput, setUserInput] = useState("")
    const [json, setJson] = useState([])
    const [show, setShow] = useState(false)

    // Functions
    const handleFind = () => {
        const url = "//localhost:8000/search/"
        setShow(true)
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
    const inputRef = useRef();
    return (
        <Fragment>
            <Jumbotron style={{"textAlign": "center", "backgroundColor": "#e2a1c2"}}>
                <h1>How do I say?</h1>
            </Jumbotron>

            <Container>
                <Row noGutters>
                    <Col xs="1"/>
                    <Col xs="9" >
                        <SearchBar userInput={userInput}
                                   handleSearchBar={handleSearchBar} setShow={setShow}
                                   inputRef={inputRef}
                        />
                    </Col>
                    <Col xs="1" >
                        <SearchButton handleFind={handleFind}/>
                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row style={{"height" : "10vh"}}/>
                    <ShowExamplesOrType show={show} chars={json}
                                        setUserInput={setUserInput} userInput={userInput}
                                        inputRef={inputRef}
                    />
                <Row style={{"height" : "10vh"}}/>
            </Container>
        </Fragment>
    )
}

export default App;