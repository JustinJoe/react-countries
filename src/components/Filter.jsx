import FilterRegion from "./FilterRegion";
import SearchCountry from "./SearchCountry";

function Filter({term, onTermChange, region, onRegionChange}) {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <SearchCountry term={term} onChange={onTermChange} />
            </div>
            <div>
                <FilterRegion region={region} onChange={onRegionChange} />
            </div>
        </form>
    )
}

export default Filter;