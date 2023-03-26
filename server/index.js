import { startApolloServer } from './app.js'
import dotenv from 'dotenv'
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'
import { connectDB } from './db.js'
 

dotenv.config();

connectDB()

startApolloServer(typeDefs, resolvers)

