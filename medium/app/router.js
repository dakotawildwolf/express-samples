// Imports the Express library to a variable
const express = require("express");

// Create an express **router** instance
const router = express.Router();

// This route replies to GET method in /
router.get("/", (req, res) => {
	res.send("Hello, wolf!");
})

// This route replies to a POST method and prints the content of the
// `body` in the terminal
router.post("/", (req, res) => {
	console.log(req.body);
	res.send("What did you send...?");
})

// This route replies to a DELETE method in /file, but sends back a
// 403 Forbidden HTTP code
router.delete("/file", (req, res) => {
	res.status(403).send("Don't know you, don't care");
})

// This route acts as a "catch-all", it replies to all of the methods
// and routes with a 404 Not Found code.
//
// Since this is the last defined route, it will only be executed if
// no other route is executed.
router.all("*", (req, res) => {
	res.status(404).send("File not found... woops?");
})

// Exports the instance of the router so it can be called from
// `index.js`
module.exports = { router };
