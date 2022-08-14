
const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/sockets_controller');

require('dotenv').config();

class Server {


     constructor() {

          // this.port = 3000;  // puerto
          this.port = process.env.PORT;
          this.app = express(); // server
          // esto lo vmaos a manejar como una propiedad de mi clase 
          // como parametro  le pasamos la apliacion de express
          this.server = require('http').createServer(this.app);
          // este es el servoer que tenemos que levantar
          this.io = require('socket.io')(this.server);

          // eventos de websocket 
          // path  para el manejo de los web sockets 
          this.sockets();

          this.path = {}

          // midleware
          this.midleware();


          // routes
          this.routes();

     }


     // function midleware 
     midleware() {

          this.app.use(cors());


          // direccion publico, para acceder als carpeta publica
          this.app.use(express.static('public'));
     }

     // se creaa dentro del metood ya solo se hace la sintacia dentro del metodo
     // creating  routes 
     routes() {
          // this.app.use(this.oploadPath, require('../routes/opload'));
     }


     sockets() {

          /* 
          1 .-  podemos enviar la instancia de socket
          2 .- podemos crear el callback ya solo hacer la instancia
           */

          // socketController(this.io);
          //hacemos la instacia de la funcion
          this.io.on("connection", socketController);



          // lo demas esta comeentado
          // this.io.on("connection", (socket) => {
          //      console.log('estamos conectados, cliente conecctado');

          //      // receive a message from  the client 
          //      // callback es recivodo como segundo argumento en esta funcion
          //      socket.on('perros', (payload, calback) => {
          //           console.log(payload);
          //           //  el servidor le puede mandar un mensaje al cliente de que todo salio bien
          //           const id = 232323332;
          //           calback(id);
          //           // the message recieved we send  to all clients
          //           //  this.io.emit('enviar-al-cliente', payload);

          //      });

          //      // receive a   message from the client 
          //      const payload = {
          //           name: 'Hola yo soy un robot',
          //           mision: 'matar a los seres humanos',
          //           tiempoMision: '2 años',
          //           orden: ' mark Sackeberg',
          //           financiadoPor: 'Las familiar mas ricas del  mundo'
          //      }

          //      // socket.emit('enviar-al-cliente', payload);

          //      // desconeccion del cliente, mandamos un callback vacio
          //      socket.on('disconnect', () => {
          //           console.log('Cliente desconectado', socket.id);
          //      });
          // })
     }



     // creamos otro metodo para el listen
     listen() {
          this.server.listen(this.port, () => {
               console.log(`Escuchando en el puerto ${this.port}`);
          });
     }
}

module.exports = Server;