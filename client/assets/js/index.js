//
// ─── INDEX.JS ───────────────────────────────────────────────────────────────────
//
// Purpose: Setup events and selectors for the client-side.
//
// ────────────────────────────────────────────────────────────────────────────────
//

const btn = document.querySelector('button');
const submitForm = document.querySelector('#search-form');

// Bind event listeners
btn.addEventListener('click', getMessage);
submitForm.addEventListener('submit', submitSearch);
