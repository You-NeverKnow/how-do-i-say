import {Fragment} from "react"
import React from "react"


const highlightStyles = {
  textDecoration: "underline",
  color: "palevioletred"
}
const HighlightSymbol = ({words}) =>
    words.map(wordOBJ => {
      const {indices, word} = wordOBJ;
      indices.push(word.length);
      return <Fragment>
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
              {' '}
            </Fragment>
    })
export default HighlightSymbol