import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <Form 
        className="d-flex" 
        style={{ height: "60px", margin: "50px" }}
      >
        <input 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          value={this.props.searchTerm} 
          onChange={this.props.handleSearchInputChange} 
          className="form-control btn-outline-success"
        />
        <Button variant="outline-success" style={{ width: "100px" }} type="submit" onClick={this.props.handleSearchSubmit} >
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
