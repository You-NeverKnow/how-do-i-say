import {Input} from "reactstrap"
import React from "react"

const SearchBar = ({userInput, handleSearchBar, setShow, inputRef}) => {
  return (
    <Input placeholder="Search.."
            value={String(userInput)}
            onChange={handleSearchBar}
            onFocus={() => setShow(false)}
            autoFocus
            innerRef={inputRef}
      />
  )
}

export default SearchBar;
