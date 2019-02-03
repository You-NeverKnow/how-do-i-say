import {Button} from "reactstrap"
import React from "react"

const SearchButton = ({handleFind}) => {
  return <Button
                outline
                variant="contained"
                color="secondary"
                block
                onClick={handleFind}>
          <i className="fas fa-search"/>
        </Button>
}

export default SearchButton;
