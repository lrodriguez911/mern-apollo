import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import http from 'http'


const PORT = process.env.PORT

export async function startApolloServer(typeDefs, resolvers) {
    const app = express()
    const httpServer = http.createServer()

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server))

await new Promise(resolve => httpServer.listen({port : PORT || 4000}))
}