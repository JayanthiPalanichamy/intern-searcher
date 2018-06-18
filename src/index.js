import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Searcher from './Searcher';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(<Searcher/>, document.getElementById('root'));



