import Examples from "./examples"
import React, {Fragment} from "react"
import Keyboard from 'react-simple-keyboard';

const ShowExamplesOrType = ({show, chars, userInput, setUserInput, inputRef}) => {
    const onKeyPress = (button, inputRef) => {
        setUserInput(userInput + button)
        inputRef.current.focus()
    }
    if (show) {
        return <Examples chars = {chars}/>
    } else {
        return <Keyboard style={{justifyContent: "center"}}
                        layout={{
                            default: [
                                "ɑ æ ð d͡ʒ ʃ",
                                "ə ɚ ɛ ɪ ɫ",
                                "ŋ θ ʊ ɺ ʌ"
                            ]
                        }}
                        onKeyPress={button => onKeyPress(button, inputRef)}
                />
    }
}

export default ShowExamplesOrType