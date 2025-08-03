const express = require("express");
const app = express();
const PORT = 8000;
const http = require("http")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);



server.listen(PORT , () => {
    console.log(`Server started : http://localhost:${PORT}`)
})