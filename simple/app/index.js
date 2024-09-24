// Imports the Express library to a variable
const express = require("express");

// Create an express server instance
const server = express();

// Defines a GET route in the root of the URL. What is inside of the
// brackets will be run when the line gets executed; when a user
// connects to that route.
server.get("/", (req, res) => {
	res.send("Hello, wolf!");
})

// Starts the server in the port 3000, host 127.0.0.1. Once again, what
// is inside of the brackets will be run when the line gets executed.
server.listen(3000, "127.0.0.1", () => {
	console.log("This should be working and listening on :3000");
})
