const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'OPTIONS'],
    },
});

server.listen(PORT, () => {
    io.on('connection', (socket) => {
        console.log('HOPPAAAAAAAA');
        console.log(socket);
    });
});
