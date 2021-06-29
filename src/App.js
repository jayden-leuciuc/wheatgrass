import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/Contact.component';
import ErrorPage from './pages/404/404.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
