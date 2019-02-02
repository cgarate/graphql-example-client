import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, getBooksQuery } from "../queries/queries";
import { addBookMutation } from "../mutations/mutations";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  displayAuthors() {
    const data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  _onChangeHandler(event, key) {
    this.setState({[key]: event.target.value})
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={this._onChangeHandler.bind(this, 'name')}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={this._onChangeHandler.bind(this, 'genre')}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={this._onChangeHandler.bind(this, 'authorId')}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
