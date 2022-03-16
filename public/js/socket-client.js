
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

const textSend = document.querySelector('#textSend') 
const btnSend = document.querySelector('#btnSend')

const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})


socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

socket.on('send-message', (payload) => {
    console.log('Mensaje recibido: ', payload);
})


btnSend.addEventListener('click', () => {
    const message = textSend.value;
    socket.emit('send-message', message, (id) => {
        console.log('Desde el server ', id);
    });
})
