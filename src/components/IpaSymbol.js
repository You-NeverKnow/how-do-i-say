import Paper from "@material-ui/core/Paper/Paper"
import {Col, Container, Row} from "reactstrap"
import React, {Fragment} from "react"
import HighlightSymbol from "./highlightSymbol"


const wordsStyles = {
  height: "100%",
  width : "100%",
  fontSize: 20,
  padding: 20
}

const symbolStyles = {
  "fontSize": 50
}


const IpaSymbol = ({symbol, words}) => {
  return (
    <Fragment>
      <Container>
        <Row >
          <Col xs={1} style={symbolStyles}>
            {symbol}
          </Col>

          <Col lg={11}>
            <Paper style={wordsStyles}>
              <HighlightSymbol words={words}/>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default IpaSymbol;