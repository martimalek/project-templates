import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import * as typeDefs from './schema.graphql';

// Create a schema and a root resolver
export const schema = makeExecutableSchema({
    typeDefs,
});

export const rootValue = {
    books: [
        {
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
        },
        {
            title: "The Wise Man's Fear",
            author: "Patrick Rothfuss",
        },
    ],
};