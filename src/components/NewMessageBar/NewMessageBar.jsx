import React, { useContext, useEffect } from 'react';
import Store from '../../stores/Store';

import './NewMessageBar.scss';

import { observer } from 'mobx-react-lite';

const NewMessageBar = () => {
    const store = useContext(Store);

    useEffect(() => {

    }, []);

    const handleMessage = (e) => {
        store.setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        if (store.newMessage !== '' && store.userName !== '')
            store.addMessage();
    }

    return (
        <div className="NewMessageBar">
            <input placeholder="Message..." value={store.newMessage} onChange={handleMessage} type="text" />
            <button onClick={sendMessage} type="submit">Enviar</button>
        </div>
    );
}

export default observer(NewMessageBar);