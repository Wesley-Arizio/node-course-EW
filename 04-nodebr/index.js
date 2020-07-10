// Event Emitter

// Cada interação é um evento
// manipulação a partir de evento

// Promises executam uma unica vez.
// Eventos são para ações continuas.


const EventEmitter = require('events');

class Action extends EventEmitter {

}

const action = new Action();

const event = 'user:click';

action.on(event, click => {
    console.log(click);
});

action.emit(event, "start counting");

let count = 0;

setInterval( () => {
    action.emit(event, (count++) );
}, 1000);

