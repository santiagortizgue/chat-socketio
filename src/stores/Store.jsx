import {action, decorate, observable } from 'mobx';

import { createContext } from 'react';

class Store{
    newMessage = "";

    setMessage = (newMessage)  =>{
        this.newMessage = newMessage;
    }

    arrayMessages = [{
        user: 'Santiago',
        data: 'Hola'
      }, {
        user: 'Restrepo',
        data: 'Hello'
      }];

    addMessage = () => {

        let newArray = this.arrayMessages;
        newArray.push({user: this.userName, data: this.newMessage});
        this.arrayMessages = newArray;

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