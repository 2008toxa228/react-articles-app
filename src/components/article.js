import React from "react";
import "./css/article.css";
import {} from "react-router-dom";

function Article (props) {
    let article = React.useState.articles.find(function (element) {
        if (element.articleId === props.match.params.articleId ) {
            return true;
        }
        return false;
    });

    let authors = React.useState.users.filter(function (user) {
        if (article.authors.includes(user.id)) {
            return true;
        }
        return false;
    });

    let categories = React.useState.categories.filter(function (category) {
        if (article.categories.includes(category.id)) {
            return true;
        }
        return false;
    });

    return (
        <article>
            <h1>{article.name}</h1>
            <div className="articleInfo">
                <div>author: {authors.map((author) => author.name).join(", ")}</div>
                <div>date: {article.date}</div>
                <div>category: {categories.map((category) => category.name).join(", ")}</div>
            </div>
            <div>description: {article.description}</div>
            <div>{article.content}</div>
        </article>
    );
};

export default Article;