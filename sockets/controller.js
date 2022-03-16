const socketController = client => {
    console.log('Cliente conectado', client.id);
    
    client.on('send-message', (payload, callback) => {
        const id = '123'
        callback(id);

        client.broadcast.emit('send-message', payload);
    })

}


module.exports = {
    socketController
}

