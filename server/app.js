import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import http from 'http'


const PORT = process.env.PORT || 4000

export async function startApolloServer(typeDefs, resolvers) {
const app = express()
const httpServer = http.createServer(app)

app.get('/', (req, res) =>{
    res.send("Welcome to my API whit graphql")
})
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server))

await new Promise(resolve => httpServer.listen({port : PORT}, resolve))
console.log(`Server ready at http://localhost/${PORT}/graphql`);
}