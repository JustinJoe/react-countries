import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';

function App() {
  const [term, setTerm] = useState('');
  const [region, setRegion] = useState('')

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  }

  return (
    <>
      <Filter 
        term={term} 
        onTermChange={handleTermChange} 
        region={region}
        onRegionChange={handleRegionChange}
      />
    </>
  )
}

export default App
