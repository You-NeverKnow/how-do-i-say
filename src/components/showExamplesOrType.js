import Examples from "./examples"
import React, {Fragment} from "react"
import Keyboard from 'react-simple-keyboard';

const ShowExamplesOrType = ({show, chars}) => {
    if (show) {
        return <Examples chars = {chars}/>
    } else {
        return (
            <Keyboard />
        )
    }
}

export default ShowExamplesOrType