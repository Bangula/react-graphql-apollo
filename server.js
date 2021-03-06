const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();

const schema = require("./schema");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
