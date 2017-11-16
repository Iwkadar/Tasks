import React from "react";
import { Route } from 'react-router-dom';

import c from './pages';

class App extends React.Component {
  render() {
    return(
      <div>
        <div className="container-fluid wrapper">
          <Route exact path='/' component={c.Collection} />
        </div>
      </div>
    );
  }
}

export default App;
