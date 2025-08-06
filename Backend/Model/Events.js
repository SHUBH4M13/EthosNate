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
  // CreatedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Admin"
  // },
  ContractAddress:{
    type: String,
    required: true,
  },
  Goal:{
    type: String,
    required: true,
  },
  Raised:{
    type: String,
    required: true,
    default: "0"
  },
  isCompleted:{
    type: Boolean,
    default: false,
    required: true,
  },
  Deadline:{
    type: Date,
    required: true
  }
} , {timestamps: true} );


const EventsCollection = mongoose.model("EventsCollection" , EventScehma);

export default EventsCollection;