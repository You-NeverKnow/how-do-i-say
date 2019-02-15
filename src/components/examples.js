import {Col, ListGroup, ListGroupItem, Row} from "reactstrap"
import {Fragment} from "react"
import React from "react"
import Paper from '@material-ui/core/Paper';
import IpaSymbol from "./IpaSymbol"

const Examples = ({chars}) => {
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
            <Row>
                <Col xs="1"/>
                <Col xs="9">
                    <Paper>
                        <ListGroup>
                            {mapObject(chars)}
                        </ListGroup>
                    </Paper>
                </Col>
                <Col xs="2" />

            </Row>
        </Fragment>
    )
}

export default Examples