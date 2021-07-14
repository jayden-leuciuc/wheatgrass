import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/ContactPage';
import ErrorPage from './pages/404/404.component';
import GetStartedPage from './pages/getStartedPage/GetStartedPage.component';
import FaqPage from './pages/FAQ/FaqPage.component';
import DevelopersPage from './pages/developers/DevelopersPage';
import DownloadPage from './pages/download/DownloadPage';

import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
          <Route exact path='/developers'>
            <DevelopersPage />
          </Route>
          <Route exact path='/download'>
            <DownloadPage />
          </Route>
          <Route exact path='/faq'>
            <FaqPage />
          </Route>
          <Route exact path='/get-started'>
            <GetStartedPage />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
