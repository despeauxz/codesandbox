import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createTypeormConn } from "./createTypeormConn";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./modules/user/UserResolver";

const startServer = async () => {
    await createTypeormConn();

    const app = express();
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        })
    });

    server.applyMiddleware({ app }); // app is from an existing express app

    app.listen({ port: 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    );
};

startServer();
