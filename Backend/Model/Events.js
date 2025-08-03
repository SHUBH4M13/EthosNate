import mongoose from "mongoose";

const EventScehma = new mongoose.Schema({
  EventTitle: {
    type: String,
    required: true,
  },
  EventDesc: {
    type: String,
    required: true,
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin"
  },
  Goal:{
    type: String,
    required: true,
  },
  Raised:{
    type: String,
    required: true,
  },
  isCompleted:{
    type: bool,
    default: false,
    required: true,
  },
} , {timestamps: true} );


const EventsCollection = mongoose.model("EventsCollection" , EventScehma);

module.exports = Events;