// Imports the Express library to a variable
const express = require("express");

// Imports our route handler
const router = require("./router");

// Create an Express server instance
const server = express();

// Defines a GET route in the root of the URL. What is inside of the
// brackets will be run when the line gets executed; when a user
// connects to that route.
server.get("/", (req, res) => {
	res.send("Hello, wolf!");
})

// The method `use()` of an Express instance allows to load
// "middleware" code into specific routes. In this case we're telling
// Express to load the `router` whenever a user connects to the server
// in either / or a route that includes / (every route does).
server.use("/", router);

// Starts the server in the port 3000, host 127.0.0.1. Once again, what
// is inside of the brackets will be run when the line gets executed.
server.listen(3000, "127.0.0.1", () => {
	console.log("This should be working and listening on :3000");
})
