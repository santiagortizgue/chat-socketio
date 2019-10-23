import React, { useEffect, useContext } from 'react';
import './App.scss';
import NewMessageBar from '../NewMessageBar/NewMessageBar';
import Store from '../../stores/Store';

import { observer } from 'mobx-react-lite';
import UserInput from '../UserInput/UserInput';

const App = () => {
  const store = useContext(Store);

  useEffect(() => {

  }, []);

  return (
    <div className="App">

      <UserInput />

      <div className="App-cont">
        {store.arrayMessages.map((elem, i) => {
          return (
            <div key={i} className="Message">
              <h3>{elem.user}</h3>
              <p>{elem.message}</p>
            </div>
          )
        })}
      </div>

      <NewMessageBar />
    </div>
  );
}

export default observer(App);