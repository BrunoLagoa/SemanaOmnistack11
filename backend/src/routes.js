const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// Route SESSIONS
routes.post("/sessions", SessionController.store);

// Route ONGS
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

// Route INCIDENTS
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.destroy);

// Route PROFILE
routes.get("/profile", ProfileController.index);

module.exports = routes;
