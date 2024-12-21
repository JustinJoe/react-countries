function SearchCountry({onChange, term}) {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='search' 
                placeholder='Search for country' 
                value={term} 
                onChange={onChange} 
            />
        </form>        
    )
}