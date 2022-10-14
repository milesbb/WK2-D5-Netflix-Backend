import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import {
  badRequestHandler,
  genericServerErrorHandler,
  notFoundHandler,
  unauthorizedHandler,
} from "./errorHandlers.js";

const server = express();
const port = process.env.PORT || 3001;
// const publicFolderPath = join(process.cwd(), "./public/img/");

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

server.use(express.json());

server.use(badRequestHandler);
server.use(unauthorizedHandler);
server.use(notFoundHandler);
server.use(genericServerErrorHandler);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log("Server is up and running on port " + port);
});
