import React, { useContext, useEffect } from 'react';
import Store from '../../stores/Store';

import './UserInput.scss';

import { observer } from 'mobx-react-lite';

const UserInput = () => {
    const store = useContext(Store);

    useEffect(() => {

    }, []);

    return (
        <div className="UserInput">
            <input placeholder="Username" value={store.userName} onChange={(e)=>{store.changeUserName(e.target.value)}} type="text" />
        </div>
    );
}

export default observer(UserInput);