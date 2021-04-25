import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoronaListView from '../CoronaListView';
import DetailView from '../DetailPage';
import './style.scss';



const Home = () => {
  return (
    <Router>
      <Switch>
      <Route path='/detail'>
          <DetailView />
        </Route>
        <Route path='/'>
          <CoronaListView />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default Home;
