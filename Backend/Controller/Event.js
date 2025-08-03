import EventsCollection from "../Model/Events"
import mongoose from "mongoose"

async function HandleGetAllEvents(req,res){
    const AllEventsArray = await EventsCollection.find({});
    return AllEventsArray;
}

async function HandleUpdateEvent(req,res){
    const {raised , } = req.body;


}