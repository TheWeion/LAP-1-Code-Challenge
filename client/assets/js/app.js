//
// ─── APP.JS ─────────────────────────────────────────────────────────────────────
//
// Purpose: Configure client-side implementation using SerpApi.
//
// ────────────────────────────────────────────────────────────────────────────────
//

function submitSearch(e){
    e.preventDefault();
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("64dee81450e011179f21e323a3eaed6743f56bbcfe6386372c5977677934d5bc");
    const input = document.querySelector('#search-query').textContent;
    const params = {
        engine: "google",
        q: input.toString()
    };

    const callback = function(data) {
        console.log(data['organic_results']);
        appendQueries(data['organic_results']);
    };

// Show result as JSON
search.json(params, callback);
};

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//

function appendQueries(queries){
    queries.forEach(appendQuery);
};

function appendQuery(queryData){
    const newLi = document.createElement('li');
    newLi.textContent = `${queryData.title} || ${queryData.link} || ${queryData.snippet}`
    const queriesList = document.querySelector('ul');
    queriesList.append(newLi);
};

//
// ─── MODULE EXPORTS ─────────────────────────────────────────────────────────────
//

module.exports = {
    submitSearch,
    appendQueries,
    appendQuery
};

//
// ────────────────────────────────────────────────────────────────────────────────
//
