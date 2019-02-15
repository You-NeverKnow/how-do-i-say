import {Input} from "reactstrap"
import React from "react"

const SearchBar = ({userInput, handleSearchBar, setShow}) => {
  return (
    <Input placeholder="Search.."
            value={String(userInput)}
            onChange={handleSearchBar}
            onFocus={() => setShow(false)}
      />
  )
}

export default SearchBar;
