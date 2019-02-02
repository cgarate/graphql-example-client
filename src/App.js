import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

//Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Carlos' Reading List</h1>
          <BookList />
          <AddBook />
          <AddAuthor />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
