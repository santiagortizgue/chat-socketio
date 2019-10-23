import { action, decorate, observable } from 'mobx';

import { createContext } from 'react';

import io from 'socket.io-client';

class Store {

    //heroku
    SocketIo = io('http://172.30.195.229:3006');

    constructor() {

        this.SocketIo.on('update messages', (messages) => {
            this.arrayMessages = messages;
            console.log(messages);
        });
    }


    newMessage = "";

    setMessage = (newMessage) => {
        this.newMessage = newMessage;
    }

    arrayMessages = [];



    addMessage = () => {
        this.SocketIo.emit('new message', { user: this.userName, message: this.newMessage });

        this.newMessage = "";
    }

    userName = "";

    changeUserName = (value) => {
        this.userName = value;
    }
}

decorate(Store, {
    newMessage: observable,
    arrayMessages: observable,
    addMessage: action,
    setMessage: action,
    userName: observable,
    changeUserName: action
});

const store = new Store();

export default createContext(store);