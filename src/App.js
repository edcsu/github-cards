import React, { useState }  from 'react';
import './App.css';
import CardList from './Components/CardListComponent';
import FormComponent from './Components/FormComponent';
import testData from './data/seed'

function App() {
  const [state] = useState(testData);
  const addNewProfile = (profileData) => {
    this.setState(prevState =>({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  return (
    <div className="App">
      <h1 className="page-header">
        Github page profiles
      </h1>
      <FormComponent onSubmit={addNewProfile} />
      <CardList profiles={state} />
    </div>
  );
}

export default App;
