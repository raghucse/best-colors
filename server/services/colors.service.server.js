
module.exports = function (app, eventModel) {
    app.post("/api/user/:hostId/event", createEvent);

    function createEvent(req, res) {
        var hostID = req.params.hostId;
        var newEvent = req.body;
        eventModel.createEventForUser(hostID, newEvent)
            .then(function (event) {
                res.json(event);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

};