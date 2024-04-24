const socket = new WebSocket('ws://localhost:8080');



socket.onopen = function (event) {
    // Alert the user that they are 
    // connected to the WebSocket server
    alert('You are Connected to WebSocket Server');
};

// Event listener for when a message
//  is received from the server
socket.onmessage = function (event) {
    // Get the output div element
    console.log(event.data);
    // const outputDiv = document
    //     .getElementById('output');
    // // Append a paragraph with the
    // //  received message to the output div
    // outputDiv
    //     .innerHTML += `<p>Received <b>"${event.data}"</b> from server.</p>`;
};

// Event listener for when the 
// WebSocket connection is closed
socket.onclose = function (event) {
    // Log a message when disconnected
    //  from the WebSocket server
    console.log('Disconnected from WebSocket server');
};

// Function to send a message
//  to the WebSocket server
function sendMessage() {
    let id = document
    .getElementById('UID').value;
    // Get the message input element
    const messageInput = document
        .getElementById('messageInput');
    // Get the value of
    // the message input
    const message = messageInput.value;
    // Send the message to 
    // the WebSocket server
    socket.send(message+id);
    // Clear the message input
    messageInput.value = '';
}