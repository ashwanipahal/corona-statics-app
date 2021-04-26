import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import './style.scss';

const LazyCoronaListView = React.lazy(() => import('../CoronaListView'));
const LazyDetailView = React.lazy(() => import('../DetailPage'));

const Home = () => {
  return (
    <Router>
      <Switch>
        {/* Dynamic import of component at route level */}
        <React.Suspense fallback={<Loading />}>
          <Route exact path='/'>
            <LazyCoronaListView />
          </Route>
          <Route path='/detail'>
            <LazyDetailView />
          </Route>
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default Home;
