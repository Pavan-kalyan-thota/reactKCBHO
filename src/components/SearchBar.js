function SearchBar(props){
    return <input type="search" onChange={props.onUpdateSearchTerm}></input>;
}

export default SearchBar;