function FilterRegion({region, onChange}) {
    return (
        <select 
            onChange={onChange} 
            value={region}
        >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default FilterRegion;