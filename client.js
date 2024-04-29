const socket2 = new WebSocket("ws://localhost:8079");

socket2.onopen = function (event) {
  console.log("Clients are Connected to App's WebSocket Server");
};

socket2.onmessage = function (event) {
  const message = event.data;
  console.log("Received: %s", message);
  $('#output').text(`Received ${message} from App.`);
};

socket2.onclose = function (event) {
  console.log("Disconnected from App's WebSocket server");
};
