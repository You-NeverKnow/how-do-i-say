import {Input} from "reactstrap"
import React from "react"

const SearchBar = ({userInput, handleSearchBar}) => {
  return (
    <Input placeholder="Search.."
            value={String(userInput)}
            onChange={handleSearchBar}
      />
  )
}

export default SearchBar;
