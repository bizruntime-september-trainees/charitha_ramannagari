socket.onclose = function (event) {
    // Connection closed.
    // Firstly, check the reason.
     
    if (event.code != 1000) {
       // Error code 1000 means that the connection was closed normally.
       // Try to reconnect.
         
       if (!navigator.onLine) {
          alert("You are offline. Please connect to the Internet and try again.");
       }
    }
 }