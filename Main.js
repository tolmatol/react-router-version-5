import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
const Main=()=>{
  return (
     <Switch>
      <Route exact path="/" component={Home} />
          <Route exact path="/one" component={PageOne} />
          <Route exact path="/two/" component={PageTwo} />
     </Switch>
  )
}
export default Main;
