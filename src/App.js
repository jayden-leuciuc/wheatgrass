import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import * as Page from './pages/pageExport';
import * as Component from './components/componentExport';

import './App.scss';
import { TemplatePage } from './components/componentExport';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <TemplatePage componentProp={<Page.HomePage />} />
          </Route>
          <Route exact path='/about'>
            <TemplatePage componentProp={<Component.About />} />
          </Route>
          <Route exact path='/contact'>
            <Page.ContactPage />
          </Route>
          <Route exact path='/careers'>
            <Page.CareersPage />
          </Route>
          <Route exact path='/developers'>
            <Page.DevelopersPage />
          </Route>
          <Route exact path='/download'>
            <Page.DownloadPage />
          </Route>
          <Route exact path='/faq'>
            <Page.FaqPage />
          </Route>
          <Route exact path='/get-started'>
            <Page.GetStartedPage />
          </Route>
          <Route path='*'>
            <Page.ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
