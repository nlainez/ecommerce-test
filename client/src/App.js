import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LocationList from './components/LocationList';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <LocationList />
    </div>
  );
}

export default App;
