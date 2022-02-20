import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
import  '../app-header/app-header.css';
import '../search-panel/search-panel.css';
import '../post-status-filter/post-status-filter.css';
import '../post-list-item/post-list-item.css';
import '../post-list/post-list.css';
import '../post-add-form/post-add-form.css';

const App = () => {
    return (
    <div className="app">
        <AppHeader/>
        <div className='search-panel'>
            <SearchPanel/>
            <PostStatusFilter/>
        </div> 
        <PostList/>
        <PostAddForm/>
    </div>
    )
}

export default App;