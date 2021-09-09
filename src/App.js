// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './hoc/Layout';
import ArticlePreview from './components/articlePreview';
import {Route, Switch, Redirect} from "react-router-dom";
import Article from './components/article';
import Category from './components/category';
import ArticlesList from './hoc/ArticlesList';
import CategoryList from './hoc/CategoriesList';
import UsersList from './hoc/UsersList';
import User from './components/user';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/articles" exact component={ArticlesList} />
        <Route path="/categories" exact render={() => <CategoryList categories={React.useState.categories}/>}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/users/:userId" exact component={User}/>
        <Route path="/articles/:articleId" exact component={Article}/>
        <Route path="/articles/category/:categoryId" exact component={ArticlesList}/>
        <Route path="/articles/user/:userId" exact component={ArticlesList}/>
        <Redirect from={"/"} to={"/articles"} />
      </Switch>
    </Layout>
  );
}

export default App;
