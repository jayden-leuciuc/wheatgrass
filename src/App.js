import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Component from './components/componentExport';

import './App.scss';
import { TemplatePage } from './components/componentExport';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <TemplatePage componentProp={<Component.HomePage />} />
          </Route>
          <Route exact path='/about'>
            <TemplatePage componentProp={<Component.About />} />
          </Route>
          <Route exact path='/contact'>
            <TemplatePage componentProp={<Component.Contact />} />
          </Route>
          <Route exact path='/careers'>
            <TemplatePage componentProp={<Component.Careers />} />
          </Route>
          <Route exact path='/developers'>
            <TemplatePage componentProp={<Component.Developers />} />
          </Route>
          <Route exact path='/download'>
            <TemplatePage componentProp={<Component.Download />} />
          </Route>
          <Route exact path='/faq'>
            <TemplatePage componentProp={<Component.Faq />} />
          </Route>
          <Route exact path='/get-started'>
            <TemplatePage componentProp={<Component.GetStarted />} />
          </Route>
          <Route path='*'>
            <TemplatePage componentProp={<Component.Error404 />} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
