import EventsCollection from '../Model/Events.js';

async function HandleGetAllEvents(req,res){
    const AllEventsArray = await EventsCollection.find({});
    return res.json(AllEventsArray);
}

async function HandleAddEvent(req,res){
    try {
        const body = req.body;

        const deadlineDate = new Date(Date.now() + parseInt(body.duration) * 24 * 60 * 60 * 1000);

        const isAdded = await EventsCollection.create({
            EventTitle: body.title,
            EventDesc: body.description,
            Goal: body.goal,
            ContractAddress : body.ContractAddress,
            Deadline: deadlineDate
        });

        return res.status(201).json({msg: "Event Created"})

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function HandleGetSpecificEvent(req,res){
    try {
        const { _id } = req.params._id;
        const data = await EventsCollection.findById(_id);
        if( !data ) return res.status(404).json({msg: "event not found"});
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({msg : "Error in getting event"})
    }
}

async function HandleUpdateEvent(req,res){
    try {
        const body = req.body;
        
    } catch (error) {
        
    }
}

// async function HandleDeleteEvent(req,res){
//     try {
//         const body = req.body;
//         if( body.Du)
//     } catch (error) {
        
//     }
// }

export {
    HandleGetAllEvents,
    HandleAddEvent,
    HandleGetSpecificEvent,
}