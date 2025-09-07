/*
    create function >> performSearch(searchTerm, isUserSelected) ✅
    call performSearch inside Button Event Listener ✅
    - performSearch
    1. fetch from github api ✅
    2. if ok, show results ✅
    3. if not ok, show error message ✅
*/

import {
  buttonElement,
  searchInput,
  usersInputElement,
  cardsElement,
  messegeElement,
} from "./scripts/elements.js";

import performSearch from "./scripts/performSearch.js";

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, usersInputElement.checked);
});
