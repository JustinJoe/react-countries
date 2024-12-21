import { useNavigate, useParams } from "react-router-dom";

function CountryCard({country}) {
    const {flags, name, population, region, capital} = country;

    const navigate = useNavigate();

    const handleClick = (country) => {
        navigate(`/${country}`)    
    }

    return (
        <div onClick={() => handleClick(name.common)}>
            <img src={flags.svg} alt={flags.alt} />
            <h2>{name.common}</h2>
            <h3>Population: <span>{population.toLocaleString()}</span></h3>
            <h3>Region: <span>{region}</span></h3>
            <h3>Capital: <span>{capital[0]}</span></h3>
        </div>
    )
}

export default CountryCard;