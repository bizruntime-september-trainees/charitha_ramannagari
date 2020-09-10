socket.onmessage = function(event) {
   if(event.data instanceof ArrayBuffer ){
      var buffer = event.data;
      console.log(“Received arraybuffer”);
   }
}