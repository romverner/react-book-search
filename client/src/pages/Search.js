import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Col from "../components/Col";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md sm-12">
            <Jumbotron>
                <h1>Search Books!</h1>
            </Jumbotron>
            
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              books={this.state.books}
            />
            <SearchResults results={this.state.results} />
          
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Search;
