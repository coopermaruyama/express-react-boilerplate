import React from 'react';
import Home from 'app/components/Home';

const App = ({ appStore }) => (
  <div>
    <h1>My App</h1>
    <Home userStore={appStore.userStore} />
  </div>
);

export default App;
