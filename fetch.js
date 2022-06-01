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


//
// ─── APP.JS ─────────────────────────────────────────────────────────────────────
//
// Purpose: Configure client-side implementation using SerpApi.
//
// ────────────────────────────────────────────────────────────────────────────────
//

function submitSearch(e){
    e.preventDefault();
    const input = document.querySelector('#search-query').textContent;
    fetch('https://serpapi.com/search.json?engine=google&q=Coffee&google_domain=google.com&gl=uk&hl=en&num=10&api_key=64dee81450e011179f21e323a3eaed6743f56bbcfe6386372c5977677934d5bc')
    .then(r => r.json())
    .then(data => console.log(data['organic_results']))
};

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//

function appendQueries(queries){
    queries.forEach(appendQuery);
};

function appendQuery(queryData){
    const newLi = document.createElement('li');
    newli.className = 'list-group-item list-group-item-action';
    newLi.textContent = `${queryData.title} || ${queryData.link} || ${queryData.snippet}`
    const queriesList = document.querySelector('#search-results');
    queriesList.append(newLi);
};

//
// ─── MODULE EXPORTS ─────────────────────────────────────────────────────────────
//

// module.exports = {
//     submitSearch,
//     appendQueries,
//     appendQuery
// };

//
// ────────────────────────────────────────────────────────────────────────────────
//


fetch('https://serpapi.com/search.json?engine=google&q=Coffee&google_domain=google.com&gl=uk&hl=en&num=10&api_key=64dee81450e011179f21e323a3eaed6743f56bbcfe6386372c5977677934d5bc')
    .then(r => r.json())
    .then(data => console.log(data['organic_results']))
