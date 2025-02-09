import CountryCard from "./CountryCard"

function Countries({countries}) {
    const renderedCountries = countries.map(country => {
        return <CountryCard key={country.cca3} country={country} />
    })

    return <div className="container countries">{renderedCountries}</div>
}

export default Countries;