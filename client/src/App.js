import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LocationList from './components/LocationList';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <LocationList />
        </div>
      </Provider>
    );
  };
}

export default App;
