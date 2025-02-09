import { FaSearch } from "react-icons/fa";

function SearchCountry({term, onChange}) {
    return (
        <>
            <FaSearch className="search-icon"/>
            <input 
                className="filter"
                type="search"
                placeholder="Search for a country..."
                value={term}
                onChange={onChange}
            />
        </>
    )
}

export default SearchCountry;