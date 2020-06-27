// Imports
//#region Modules
import { FunctionalComponent, h } from 'preact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from 'store';
//#endregion
//#region Components
import { AppFrameHeader } from './view/FrameHeader';
import { AppFrameContent } from './view/FrameContents';
import { PageHome } from 'routes/Home';
//#endregion
//#region Assets
import "assets/styles/global.scss"
import "assets/styles/frame.scss"
//#endregion


export const App = () => {

  return (
    <div className="app-root">
      {/* <Provider store={store}> */}
      <AppFrame />
      {/* </Provider> */}
    </div>
  )
}

const AppFrame: FunctionalComponent = () => {

  return (
    <div className="app-frame">
      <Router>

        <AppFrameContent>
          <Route path="/" component={PageHome} exact />
        </AppFrameContent>

        <AppFrameHeader/>

      </Router>
    </div>
  )
}