import express from "express";
import { HandleGetAllEvents , HandleAddEvent } from "../Controller/Event.js";
const EventRouter = express.Router();

EventRouter.get("/add/event" , HandleAddEvent)
EventRouter.get("/" , HandleGetAllEvents)

module.exports = {
    EventRouter
}