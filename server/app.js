import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server'
import cors from 'cors'


export async function startApolloServer() {
    const app = express()

const server = new ApolloServer({
    typeDefs: '',
    resolvers: ()=>{

    }
})
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server))
}