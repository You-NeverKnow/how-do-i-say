import {Fragment} from "react"
import React from "react"
import {Col, Container, Row} from "reactstrap"


const highlightStyles = {
  textDecoration: "underline",
  color: "palevioletred"
}

const HighlightWord = ({word, indices}) =>
  <Col xs={1}>
      {word.slice(0, indices[0])}
      {
        indices.map((index, idx) =>
            <Fragment>
              <span style={highlightStyles}>
                {word[index]}
              </span>
              {word.slice(index + 1, indices[idx + 1])}
            </Fragment>)
      }
  </Col>

const HighlightSymbol = ({words}) =>
    <Container>
      <Row noGutters width={12}>{
        words.map(wordOBJ => {
          const {indices, word} = wordOBJ;
          return <Fragment>
                    <HighlightWord word={word} indices = {indices}/>
                    <Col xs ={1}/>
                </Fragment>
        })
        }
      </Row>
    </Container>

export default HighlightSymbol