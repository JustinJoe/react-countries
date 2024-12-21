function SearchCountry({term, onChange}) {
    return (
        <input 
            type="search"
            placeholder="Search for country"
            value={term}
            onChange={onChange}
        />
    )
}

export default SearchCountry;