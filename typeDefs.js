import gql from "graphql-tag";

const typeDefs = gql`

  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Query {
    hello: String
    getAllUsers: [User]
    getUser(id: ID): User
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  type Mutation {
    createUser(user: UserInput!): User
    deleteUser(id: ID!): String
    updateUser(id: ID!, user: UserInput): User
  }
`

export default typeDefs;
