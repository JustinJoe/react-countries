import CountryCard from "./CountryCard"

function Countries({countries}) {
    const renderedCountries = countries.map(country => {
        return <CountryCard key={country.cca3} country={country} />
    })

    return <>{renderedCountries}</>
}

export default Countries;