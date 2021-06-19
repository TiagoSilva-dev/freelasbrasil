import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>

  )
}