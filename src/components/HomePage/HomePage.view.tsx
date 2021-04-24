import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CoronaListView from '../CoronaListView';
import './style.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "roboto", "condensed", "sans-serif"
    ].join(','),
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/'>
            <CoronaListView />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Home;
