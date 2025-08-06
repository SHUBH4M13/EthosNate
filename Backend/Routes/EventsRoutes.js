import express from "express";
import { HandleGetAllEvents, HandleAddEvent } from "../Controller/Event.js";
const EventRouter = express.Router();

EventRouter.post("/add/event" , HandleAddEvent)
EventRouter.get("/" , HandleGetAllEvents)

export {
    EventRouter
}