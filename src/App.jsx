// Import necessary dependencies
import { useState } from 'react'                              // IMPORT 'useState' HOOK FROM REACT LIBRARY
import './App.css'                                            // IMPORT STYLESHEET FOR APP COMPONENT
import { BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';

// Import your components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList.jsx';
import BlogPost from './pages/BlogPost.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define routes */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={BlogList} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;