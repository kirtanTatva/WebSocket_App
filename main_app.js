const WebSocket = require("ws");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", function connection(ws) {
  console.log("App connected to Main_App's WebSocket Server");

  ws.on("message", function incoming(message) {
    console.log("Received message:", message);
  });

  ws.on("close", function () {
    console.log("App disconnected");
  });
});
// Create an API endpoint to receive data
app.post("/data", (req, res) => {
  var receivedData = req.body.message;
  console.log("main_app started");

  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(receivedData);
    }
  });

  res.status(200).json({ message: "Data received successfully" });
});
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
