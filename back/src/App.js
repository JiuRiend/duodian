import React from 'react';
import '@/assets/css/app/App.css';
import {Router} from 'dva/router';
import {MapRouter,route} from './routes/Index';

function App({history}) {
  return (
    <div className="App">
      <Router history={history}>
        <MapRouter route={route} />
      </Router>
    </div>
  );
}

export default App;
