import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import cors from 'cors';
import connectDB from './db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectDB();

async function startServer() {
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    
    await server.start();
    
    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server)
    );
    app.use('*', (req, res) => res.status(404).send('NO funcou'));
    
  app.listen(3000, () => {
    console.log("Server is running on port", 3000);
  });
}

startServer();
