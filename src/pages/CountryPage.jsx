import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryPage() {
    const [country, setCountry] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
                setCountry(response.data[0])
            } catch (errors) {
                console.log(errors)
            }
        }

        fetchCountry();
    }, [id]);

    if (!country) {
        return <h3>Loading...</h3>
    }

    const {name, flags, population, region, subregion, capital, tld, currencies, languages, borders} = country
        
        
        const nameObj = name.nativeName;
        const nameKeys = Object.keys(nameObj);
        const native = nameObj[nameKeys[nameKeys.length - 1]].common

        const curKeys = Object.keys(currencies)
        const currs = curKeys.map(c => currencies[c].name).join(", ")
        
        const langKeys = Object.keys(languages)
        const langs = langKeys.map(l => languages[l]).join(", ")
 
        const bdrs = borders.map(border => <span>{border}</span>)

    return (
        <>Hello
            <div>
                <img src={flags.svg} alt={flags.alt || `Flag of ${name.common}`} />
                <h2>{name.common}</h2>
                <h3>Native Name: <span>{native}</span></h3>
                <h3>Population: <span>{population.toLocaleString()}</span></h3>
                <h3>Region: <span>{region}</span></h3>
                {<h3>Sub Region: <span>{subregion}</span></h3>}
                <h3>Capital: <span>{capital[0]}</span></h3>
            </div>
            <div>
                <h3>Top Level Domain: <span>{tld.join(", ")}</span></h3>
                <h3>Currencies: <span>{currs}</span></h3>
                <h3>Languages: <span>{langs}</span></h3> 
            </div>
            <div>
                <h3>Border Countries:</h3>
                {borders && <>{borders}</>}
            </div>
        </>
    )
}

export default CountryPage;