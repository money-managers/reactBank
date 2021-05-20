const  { User, Deposit, Expense } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const Transaction = require('../models/transaction');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({})
                    .select('-__v -password')
                    .populate('transactions')

                return userData;
            }
            throw new AuthenticationError('You must be logged in')
        },
        users: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({
                    populate: 'transactions'
                });
                return user;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
          },
        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
        },
        addTransaction: async (parent, args) => {
            const transaction = await Transaction.create(args);
            return transaction;
        }
    }
}

module.exports = resolvers;