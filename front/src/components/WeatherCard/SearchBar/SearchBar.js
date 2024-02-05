import { useState, useContext } from "react";

import SearchBarButton from "./components/SearchBarButton/SearchBarButton";
import SearchBarInput from "./components/SearchBarInput/SearchBarInput";
import { WeatherDataContext } from "../../../contexts/WeatherDataContext/WeatherDataContext";

const SearchBar = () =>
{
    const { searchCity } = useContext( WeatherDataContext );
    const [ input, setInput ] = useState( "" );

    const handleSearch = async () =>
    {
        await searchCity( input );
    };

    return ( <div className="relative h-16 w-1/2 px-2 max-xl:w-2/3 max-lg:w-full max-md:px-0">
        <SearchBarInput input={ input } setInput={ setInput } />
        <SearchBarButton handleSearch={ handleSearch } />
    </div> );
};

export default SearchBar;