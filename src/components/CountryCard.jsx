function CountryCard({country}) {
    const {flags, name, population, region, capital} = country;

    return (
        <>
            <img src={flags.svg} alt={flags.alt} />
            <h2>{name.common}</h2>
            <h3>Population: <span>{population.toLocaleString()}</span></h3>
            <h3>Region: <span>{region}</span></h3>
            <h3>Capital: <span>{capital[0]}</span></h3>
        </>
    )
}

export default CountryCard;