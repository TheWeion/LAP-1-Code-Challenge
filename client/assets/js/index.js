//
// ─── INDEX.JS ───────────────────────────────────────────────────────────────────
//
// Purpose: Setup events and selectors for the client-side.
//
// ────────────────────────────────────────────────────────────────────────────────
//

const { submitSearch } = require("./app");

const submitForm = document.querySelector('#search-form');

// Bind event listeners
submitForm.addEventListener('submit', submitSearch());

function foo(e){
    e.preventDefault();
    fetch('http://localhost:4000/')
        .then(r => r.json())
        .then(data => console.log(data))
};
