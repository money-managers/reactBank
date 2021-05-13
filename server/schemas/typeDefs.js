const { gql } = require('apollo-server-express');

const typeDefs = gql`
input ExpenseInput {
    expId: ID
    name:String
    amount: Int
}

input DepositInput {
    depId: ID
    name: String
    amount: Int
}

type User {
    _id: ID
    username: String
    email: String
    deposits: [Deposit]
    expenses: [Expense]
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
    addDeposit(input: depInput): User
    addExpense(input: expInput): User
    removeDeposit(depId: ID): User
    removeExpense(expId: ID): User
}
`;