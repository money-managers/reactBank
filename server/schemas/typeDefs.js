const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    deposits: [String]
    expenses: [String]
}

type Expense {
    expId: ID
    name: String
    amount: Int
}

type Deposit {
    depId: ID
    name: String
    amount: Int
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeDeposit(depId: ID): User
    removeExpense(expId: ID): User
}
`;

module.exports = typeDefs;