import express, { json, urlencoded } from "express";
import { createServer } from "http";
import {EventRouter} from "./Routes/EventsRoutes.js"
const { ConnectDB } = require("./Connection")
const app = express();
const PORT = 8007;

app.use(json()); 
app.use(urlencoded({ extended: true }));
const server = createServer(app);

ConnectDB('127.0.0.1:27017/EthosNate')

app.use("/" , EventRouter)


server.listen(PORT , () => {
    console.log(`Server started : http://localhost:${PORT}`)
})