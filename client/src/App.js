import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import GalleryPage from './pages/GalleryPage';
import SocialPage from './pages/SocialPage';

import './index.css'

class App extends React.Component {
   render(){
     return(
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/social" component={SocialPage} />
        </div>
      </BrowserRouter>
     );
   }
}

export default App;
