import SearchBarButton from "./components/SearchBarButton/SearchBarButton";
import SearchBarInput from "./components/SearchBarInput/SearchBarInput";

const SearchBar = () =>
(
    <div className="relative h-16 w-1/2 px-2 max-xl:w-2/3 max-lg:w-full max-md:px-0">
        <SearchBarInput />
        <SearchBarButton />
    </div>
);

export default SearchBar;