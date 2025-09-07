import getMessege from "./getMessege.js";
import setLoadingState from "./setLoadingState.js";
import setMessege from "./setMessege.js";
import setSearchResult from "./setSearchResult.js";

const USERS_API = "https://api.github.com/search/users?q=";

const performSearch = (searchTerm, isUserSelected) => {
  getMessege() && setMessege("");
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessege("Please fill out the search field 👆");
    return;
  }

  setLoadingState(true);

  fetch(`${USERS_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false));
};

export default performSearch;
