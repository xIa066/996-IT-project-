import React from 'react';
import { Router, Route } from 'react-router-dom';

// page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import GalleryPage from './pages/GalleryPage';
import SocialPage from './pages/SocialPage';
import CreateArtifactPage from './pages/CreateArtifactPage';
import ArtifactsListPage from './pages/ArtifactsListPage';
import ArtifactPage from './pages/ArtifactPage';
import history from './history';

import './index.css'


class App extends React.Component {
   render(){
     return(
      <Router history={history}>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/social" component={SocialPage} />
          <Route path="/create-artifact" component={CreateArtifactPage} />
          <Route path="/artifacts" exact component={ArtifactsListPage} />
          <Route path="/artifacts/view/:id" exact component={ArtifactPage} />
        </div>
      </Router>
     );
   }
}

export default App;
