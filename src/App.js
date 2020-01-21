import React from "react";
import Home from "./pages/Home";
import Register from './pages/Register';
import {Route} from 'react-router-dom';
import Editor from "./pages/Editor";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import ArticleModal from "./components/ArticleModal";
import ReadArticle from './pages/ReadArticle';
import AboutUs from "./pages/AboutUs";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => <Home {...props} />}/>
      <Route path='/register' component={Register}/>
      <Route path="/profile" component={Profile} />
      <Route path="/create" component={Editor} />
      <Route path="/feed" component={Feed} />
      <Route path="/read" component={ReadArticle}/>
      <Route path="/team" component={AboutUs}/>
      <Route path="/editprofile" component={EditProfile}/>
      <ArticleModal />
    </div>
  );
}
export default App;
