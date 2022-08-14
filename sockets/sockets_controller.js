

const socketController = (socket) => {
     console.log('Cliente conectado', socket.id);

     // desconeccion del cliente, mandamos un callback vacio
     socket.on('disconnect', () => {
          console.log('Cliente desconectado', socket.id);
     });

     socket.on('perros', (payload, calbacks) => {

          console.log(payload);
          //  el servidor le puede mandar un mensaje al cliente de que todo salio bien
          const id = 232323332;
          calbacks(id);
          // the message recieved we send  to all clients
          //  io.emit('enviar-al-cliente', payload);

          // broadcast  send the message to all clients 
          socket.broadcast.emit('enviar-al-cliente', payload);


     });

     // receive a   message from the client 
     const payload = {
          name: 'Hola yo soy un robot',
          mision: 'matar a los seres humanos',
          tiempoMision: '2 años',
          orden: ' mark Sackeberg',
          financiadoPor: 'Las familiar mas ricas del  mundo'
     }

     // socket.emit('enviar-al-cliente', payload);


}


//  1 .- como parametro re recive la  instacia del socket io


// const socketController = (io) => {


// // / lo demas esta comeentado
//           io.on("connection", (socket) => {
//                console.log('estamos conectados, cliente conecctado');

//                // receive a message from  the client 
//                // callback es recivodo como segundo argumento en esta funcion
//                socket.on('perros', (payload, calback) => {
//                     console.log(payload);
//                     //  el servidor le puede mandar un mensaje al cliente de que todo salio bien
//                     const id = 232323332;
//                     calback(id);
//                     // the message recieved we send  to all clients
//                     //  io.emit('enviar-al-cliente', payload);

//                });

//                // receive a   message from the client 
//                const payload = {
//                     name: 'Hola yo soy un robot',
//                     mision: 'matar a los seres humanos',
//                     tiempoMision: '2 años',
//                     orden: ' mark Sackeberg',
//                     financiadoPor: 'Las familiar mas ricas del  mundo'
//                }

//                // socket.emit('enviar-al-cliente', payload);

//                // desconeccion del cliente, mandamos un callback vacio
//                socket.on('disconnect', () => {
//                     console.log('Cliente desconectado', socket.id);
//                });
//           })

// }



module.exports = {
     socketController
}





