import express from 'express';

import { middleware } from '@infrastructure/graphql/middleware';

// Create a server
const app = express();

// Use GraphQL middleware
app.use(middleware);

// Start the server
app.listen(8080, () => console.log("Server started on port 8080"));
