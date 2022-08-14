


// hacmeosl coneccion del cliente

/* 
on   => para escuchar los eventso 
socket.on('connect') => se dispara cuando tenemos una coneccion
sockeet.on('disconnect')   =>  escucha si el servidor esta desconectao la cual podemos  manda un mensaje 
   en la consola

 */

// refrencia de  html  
// le pasamos la referencia 
const lblOnline = document.querySelector('#lblOnline');
const lblOfline = document.querySelector('#lblOfline');

// refrecence input mesaje
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.getElementById('btnEnviar');

const socket = io();

// lister algo que estan escuchando que pasa 
socket.on('connect', () => {
     console.log('Estamos conectados con el servidos ');

     // hacemos una configuracio
     lblOfline.style.display = 'none';
     lblOnline.style.display = '';
});


// hacemos una configuracio
socket.on('enviar-al-cliente', (payload) => {
     console.log(payload);
});


socket.on('disconnect', () => {
     console.log('estamos desconectados al servidor');
     lblOnline.style.display = 'none';
     lblOfline.style.display = '';
});




// cremso un evnto para el boton 
btnEnviar.addEventListener('click', () => {
     const mensaje = txtMensaje.value;
     console.log(mensaje);
     // lo mas comun es enviar objetos 
     const payload = {
          mensaje,
          id: '12345',
          fecha: new Date().getTime()
     }

     // perros es el nombre del evento
     // podmeos mandar un tercer argumento la cual es un callback, que recive los que nosotros mandamos 
     socket.emit('perros', payload, (id) => {
          console.log('desde el server', id);  // en este caso nos madno el id desde el servidor
     });
});