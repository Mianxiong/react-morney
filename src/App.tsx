import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from "styled-components";
import {Tag} from './views/Money/Tag';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route path="/tags" exact>
              <Tags/>
            </Route>
            <Route path="/tags/:id" exact>
              <Tag/>
            </Route>
            <Route path="/money" exact>
              <Money/>
            </Route>
            <Route path="/statistics" exact>
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
  );
}


export default App;
