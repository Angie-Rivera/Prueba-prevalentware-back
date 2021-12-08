import conexionBD from './db/db.js';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express'
import { resolversEmpresa } from './modelos/resolvers.js'
import { tipos } from './graphql/tipos.js'


dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolversEmpresa,
})

const app = express();

app.use(express.json())

app.use(cors());

app.listen({ port: process.env.PORT }, async()=>{
  await conexionBD();
  await server.start();

  server.applyMiddleware({ app });
  
  console.log('Escuchando puerto 4000')
});