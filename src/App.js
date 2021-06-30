import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/Contact.component';
import ErrorPage from './pages/404/404.component';
import GetStartedPage from './pages/getStartedPage/GetStartedPage.component';
import FaqPage from './pages/FAQ/FaqPage.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/get-started'>
          <GetStartedPage />
        </Route>
        <Route exact path='/faq'>
          <FaqPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
