const SearchBar = ({ setSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = new FormData(event.target).get("search");
    setSearch(value);
  };

  return (
    <div className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search keyword..." name="search" />
        <button className="searchbutton" type="submit">
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
