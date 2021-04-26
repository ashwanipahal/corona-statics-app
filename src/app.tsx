import * as React from 'react'
import * as ReactDOM from 'react-dom';
import Home from './components/features/HomePage/HomePage.view';
import { Provider } from 'react-redux';
import { store } from './reduxStore';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>

  );
};

const CoronaStaticsApp = App;

ReactDOM.render(<CoronaStaticsApp />, document.getElementById('root'));
