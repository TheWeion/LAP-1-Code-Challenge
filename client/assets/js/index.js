//
// ─── INDEX.JS ───────────────────────────────────────────────────────────────────
//
// Purpose: Setup events and selectors for the client-side.
//
// ────────────────────────────────────────────────────────────────────────────────
//

const submitForm = document.querySelector('#search-form');

// Bind event listeners
submitForm.addEventListener('submit', submitSearch);
