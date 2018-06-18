import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './Filter';
import registerServiceWorker from './registerServiceWorker';
import interns from './List'

registerServiceWorker();

const search = document.getElementById("Search");
search.addEventListener('click',filter);

function filter() {
    const data= document.getElementById("nameSearch");

    ReactDOM.render(<Filter interns={interns} data={data.value}/>, document.getElementById('root'));
}


