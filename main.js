const makeWS = () => {
    var socket = new WebSocket("ws://terrogram.ru:3779");
    socket.onopen = () => {
        const send = obj => socket.send(JSON.stringify(obj));
        
        const worker = () => {
            send(conv);
        }

        var conv = {
            event : 'conversation',
            content : 'Привет!',
        }

        var auth = {
            event : 'auth',
            name : 'NoDDoser',
            password: '12345',
        }

        send(auth);
        setInterval(worker, 500);
    }
}

var connections = [];

for (var i = 0; i < 100; i++) {
    connections.push(makeWS());
}