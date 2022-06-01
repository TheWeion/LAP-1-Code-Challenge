//
// ─── APP.JS ─────────────────────────────────────────────────────────────────────
//
// Purpose: Configure client-side implementation using SerpApi.
//
// ────────────────────────────────────────────────────────────────────────────────
//

function submitSearch(e){
    // const input = document.querySelector('#search-query').textContent;
    e.preventDefault();
    fetch('http://localhost:4000/')
        .then(r => r.json())
        .then(data => console.log(data))
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

module.exports = {
    submitSearch,
    appendQueries,
    appendQuery
};

//
// ────────────────────────────────────────────────────────────────────────────────
//
