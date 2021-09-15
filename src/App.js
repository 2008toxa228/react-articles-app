import './App.css';
import React from 'react';
import Layout from './hoc/Layout';
import {Route, Switch, Redirect} from "react-router-dom";
import Article from './components/article';
import ArticlesList from './hoc/ArticlesList';
import CategoryList from './hoc/CategoriesList';
import UsersList from './hoc/UsersList';
import User from './components/user';

function App() {
    return (
        <Layout>
            <Switch>
                <Route forceRefresh path="/articles" exact component={ ArticlesList } />
                <Route path="/articles/:articleId" exact component={ Article }/>
                <Route path="/articles/category/:categoryId" exact component={ ArticlesList }/>
                <Route path="/articles/user/:userId" exact component={ ArticlesList }/>

                <Route path="/categories" exact component={ CategoryList }/>

                <Route path="/users" exact component={ UsersList }/>
                <Route path="/users/:userId" exact component={ User }/>
                <Redirect from={ "/" } to={ "/articles" } />
            </Switch>
        </Layout>
    );
}

export default App;
