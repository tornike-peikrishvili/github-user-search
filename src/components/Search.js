import searchStyles from "./Search.module.css";
import searchImg from "../assets/icon-search.svg";

function Search(props) {
  const handleGetTag = (e) => {
    props.setGetTag(e.target.value);
  };

  return (
    <div
      id={`${props.theme === "light" ? searchStyles.dark : searchStyles.light}`}
      className={searchStyles.container}
    >
      <form className={searchStyles.searchFrom}>
        <img className={searchStyles.searchLogo} src={searchImg} />
        <input
          onChange={handleGetTag}
          placeholder="Search GitHub username…"
          className={searchStyles.searchInput}
        ></input>
        <p
          style={{
            color: props.login === props.getTag || null ? "transparent" : "red",
          }}
          className={searchStyles.noResult}
        >
          No Result
        </p>
        <button
          onClick={props.handleOnClick}
          className={searchStyles.searchBtn}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
