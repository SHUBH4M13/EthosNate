const EventsCollection = require('../Model/Events')

async function HandleGetAllEvents(req,res){
    const AllEventsArray = await EventsCollection.find({});
    return AllEventsArray;
}

async function HandleAddEvent(req,res){
    try {
        const body = req.body;

        if( !newEvent ){
            return res.status(500).json({ error: "Internal server error" })
        }
        
        const isAdded = await EventsCollection.create({
            EventTitle: body.EventTitle,
            EventDesc: body.EventDesc,
            Goal: body.Goal,
            Deadline: body.Deadline
        });

        return res.status(201).json({msg: "Event Created"})

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

// async function HandleUpdateEvent(req,res){
//     try {
//         const body = req.body;
//     } catch (error) {
        
//     }
// }

// async function HandleDeleteEvent(req,res){
//     try {
//         const body = req.body;
//         if( body.Du)
//     } catch (error) {
        
//     }
// }

export default {
    HandleGetAllEvents,
    HandleAddEvent,
}