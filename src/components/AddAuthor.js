import React, { Component } from "react";
import { graphql } from "react-apollo";
import { addAuthorMutation } from "../mutations/mutations";

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addAuthorMutation({
      variables: {
        name: this.state.name,
        age: this.state.age
      }
    });
  }

  render() {
    return (
      <form id="add-author" onSubmit={this.submitForm}>
        <div className="field">
          <label>Author name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Age:</label>
          <input
            type="text"
            onChange={e => this.setState({ age: Number(e.target.value) })}
          />
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(addAuthorMutation, { name: "addAuthorMutation" })(
  AddAuthor
);
