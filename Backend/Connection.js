import mongoose from "mongoose";

async function ConnectDB(url){
    return mongoose.connect(url)
    .then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log("Failed to Connect to Database");
    })
}

module.exports = {
    ConnectDB,
}