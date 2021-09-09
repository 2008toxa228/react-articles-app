import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const application = (
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);

React.useState = {
  articles: [
    {
      articleId: "article1",
      key: "a1", 
      name: "article1", 
      preview: "article1 preview", 
      description: "article1 description",
      content: "article1 Content",
      categories: [1, 2],
      authors: [1],
      date: "date1"
    },
    {
      articleId: "article2",
      key: "a2", 
      name: "article2", 
      preview: "article2 preview", 
      description: "article2 description",
      content: "article2 Content",
      categories: [2],
      authors: [1, 2],
      date: "date2"
    }
  ],
  categories: [
    {
      id: 1,
      name: "category1",
      description: "category1 description<br>category1 contains only article1"
    },
    {
      id: 2,
      name: "category2",
      description: "category2 description category2<br>contains article1 and article2"
    }
  ],
  users: [
    {
      id: 1,
      name: "user1"
    },
    {
      id: 2,
      name: "user2"
    }
  ]
};

ReactDOM.render(
  application,
  document.getElementById('root')
);