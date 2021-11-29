const { ApolloServer } = require('apollo-server')
const { readFileSync } = require('fs')
const path = require('path')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    getAllCoffees: async (parent, args, context) => {
        return context.prisma.coffee.findMany({
            include: {
                roaster: true
            }
        })
    },
    getAllRoasters: async (parent, args, context) => {
        return context.prisma.roaster.findMany()
    },
  },
  Mutation: {
    createRoaster: async (parent, args, context) => {
        return context.prisma.roaster.create({ data: { ...args.createRoasterInput }})
    },
    createCoffee: async (parent, args, context) => {
        return context.prisma.coffee.create({ data: { ...args.createCoffeeInput }})
    },
  }
}

const server = new ApolloServer({
  typeDefs: readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
      prisma,
  }
})

server
  .listen()
  .then(({ url }) => 
    console.log(`Server is running on ${url}`)
  )