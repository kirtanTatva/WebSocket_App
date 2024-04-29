const WebSocket = require("ws");
const socket = new WebSocket("ws://localhost:8080");
const wss2 = new WebSocket.Server({ port: 8079 });

// Event listener for when the WebSocket client connects to the server
socket.onopen = function (event) {
  console.log("App is connected to Main_App's WebSocket Server");
};

// Event listener for when the WebSocket client receives a message
socket.onmessage = function (event) {
  const receivedData = event.data;
  console.log("Received: %s", receivedData);

  // Broadcast the received message to all clients connected to wss2
  wss2.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(receivedData);
    }
  });
};

// Event listener for when the WebSocket client disconnects from the server
socket.onclose = function (event) {
  console.log("Disconnected from Main_App's WebSocket server");
};

// Event listener for WebSocket server connections
wss2.on("connection", function connection(ws) {
  console.log("Client connected to Broadcast WebSocket server");

  ws.on("close", function () {
    console.log("Client disconnected from Broadcast WebSocket server");
  });
});
