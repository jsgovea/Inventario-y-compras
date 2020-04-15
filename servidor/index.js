import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema.js';
import { resolvers } from './data/resolvers';

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
    console.log(`Servidor corriendo en puerto http://localhost:4000${server.graphqlPath}`);
})

// app.get('/', (req, res) => {
//     res.send('Todo listo')
// });

// app.use('/graphql', graphqlHTTP({
//     // que schema va a utilizar
//     schema, 
//     // utilizar graphiql
//     graphiql: true
// }));

// app.listen(8000, () => {
//     console.log('Corriendo el servidor');
    
// })


