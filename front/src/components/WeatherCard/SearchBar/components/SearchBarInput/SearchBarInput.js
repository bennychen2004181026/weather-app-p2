const SearchBarInput = ( { input, setInput } ) => (
    <input
        type="text"
        placeholder="Search for a city"
        className="absolute h-full w-full outline-none text-2xl px-4 rounded-2xl max-xs:text-xl"
        value={ input }
        onChange={ ( e ) => setInput( e.target.value ) }
    />
);
export default SearchBarInput;