import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home'
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import PostDetail from "./components/Blog/components/PostDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "78vh" }}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/post:id" component={PostDetail}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
