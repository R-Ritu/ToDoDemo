import React from 'react';
import { Provider } from 'react-redux';
import ToDoApp from './src'; // Replace with your main app component
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
};

export default App;
