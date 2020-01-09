import React from "react";
import Home from "./pages/Home";
import Register from './pages/Register';
import {Route} from 'react-router-dom';
import Editor from "./pages/Editor";
import ArticleModal from "./components/ArticleModal";
import ProfileLandingPage from './pages/profile/profileLanding'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => <Home {...props} />}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path="/create" component={Editor} />
      <ArticleModal />
      <Route exact path="/profile" component={ProfileLandingPage} />
    </div>
  );
}
export default App;
