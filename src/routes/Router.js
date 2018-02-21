import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../views/About';
import RecipePage from '../views/RecipePage';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={RecipePage} />
        <Route path="/about" component={About} />
        <Route path="/recipe" component={RecipePage} />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
