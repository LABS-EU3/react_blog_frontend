import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, Redirect, Switch } from "react-router-dom";
import Editor from "./pages/Editor";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ArticleModal from "./components/ArticleModal";
import ReadArticle from "./pages/ReadArticle";
import AboutUs from "./pages/AboutUs";
import ProtectedRoute from "./components/ProtectedRoute";
import '../src/index.css';
import Interest from "./pages/Final";
import AuthorProfile from "./pages/AuthorProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/editprofile" component={EditProfile} />
        <ProtectedRoute path="/create" component={Editor} />
        <ProtectedRoute path="/feed" component={Feed} />
        <Route path="/article/:id" component={ReadArticle} />
        <Route path="/team" component={AboutUs} />
        <Route path="/author/:id" component={AuthorProfile} />
        <ProtectedRoute path="/final" component={Interest} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <ArticleModal />
    </div>
  );
}
export default App;
