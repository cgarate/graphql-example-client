import { gql } from "apollo-boost";

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`;

const addAuthorMutation = gql`
  mutation($name: String!, $age: Int!){
    addAuthor(name:$name, age: $age){
      name
      age
    }
  }
`;

export { addBookMutation, addAuthorMutation };