function sendMessage() {
    var message = $('#messageInput').val();
    var data = {
        "message":message 
    };
    $.ajax({
        url: 'http://127.0.0.1:3000/data/',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(response) {
            // Handle the response from the server
            console.log(response);
        }
    });
    
}