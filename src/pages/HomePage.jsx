import { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import axios from 'axios';
import Countries from '../components/Countries';

function HomePage() {
  const [term, setTerm] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,subRegion,capital,tld,currencies,languages,borders`);
            setCountries(response.data);
          } catch (errors) {
            console.log(errors)
        }
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country => 
    (country.name.common.toLowerCase().includes(term.toLowerCase()) && (region === "" ? country : country.region === region))
  );

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
      <Countries countries={filteredCountries} />
    </>
  )
}

export default HomePage