import express, { json, urlencoded } from "express";
import { createServer } from "http";
import { EventRouter } from "./Routes/EventsRoutes.js";
import { ConnectDB } from "./Connection.js";
import cors from "cors";

const app = express();
const PORT = 8007;


app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(json()); 
app.use(urlencoded({ extended: true }));

const server = createServer(app);

ConnectDB('mongodb://127.0.0.1:27017/EthosNate')

app.use("/" , EventRouter)


server.listen(PORT , () => {
    console.log(`Server started : http://localhost:${PORT}`)
})