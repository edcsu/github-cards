import React, { useState }  from 'react';
import './App.css';
import CardList from './Components/CardListComponent';
import FormComponent from './Components/FormComponent';
import testData from './data/seed'

function App() {
  const [state] = useState(testData);
  
  return (
    <div className="App">
      <h1 className="page-header">
        Github page profiles
      </h1>
      <FormComponent />
      <CardList profiles={state} />
    </div>
  );
}

export default App;
