import React from "react";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import Register from "./pages/RedesignSignup";
import Login from "./pages/RedesignLoginPage";

import { Route, Redirect, Switch } from "react-router-dom";
import Editor from "./pages/Editor";
import DraftEditor from "./pages/DraftEditor";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ArticleModal from "./components/ArticleModal";
import ReadArticle from "./pages/ReadArticle";
import AboutUs from "./pages/AboutUs";
import ProtectedRoute from "./components/ProtectedRoute";
import '../src/index.css';
import Interest from "./pages/Final";
import Search from "./pages/Search";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import AuthorProfile from "./pages/AuthorProfile";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/editprofile" component={EditProfile} />
        <ProtectedRoute path="/create" component={Editor} />
        <ProtectedRoute path="/edit/:id" component={DraftEditor} />
        <ProtectedRoute path="/feed" component={Feed} />
        <ProtectedRoute path="/search" component={Search} />
        <Route path="/article/:id" component={ReadArticle} />
        <Route path="/team" component={AboutUs} />
        <Route path="/author/:id" component={AuthorProfile} />
        <ProtectedRoute path="/final" component={Interest} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <ArticleModal />
    </div>
    </ThemeProvider>
  );
}
export default App;
