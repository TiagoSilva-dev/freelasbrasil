import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>

  )
}