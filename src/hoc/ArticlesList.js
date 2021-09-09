import React from "react";
import ArticlePreview from "../components/articlePreview";

function ArticlesList(props) {
    let articles = React.useState.articles;
    
    if (props.match.params.categoryId) {
        let categoryId = props.match.params.categoryId;
        articles = articles.filter(function (article) {
            if (article.categories.includes(categoryId) || article.categories.includes(+categoryId)) {
                return true;
            }
            return false;
        });
    }
    else if (props.match.params.userId) {
        let userId = props.match.params.userId
        articles = articles.filter(function (article) {
            if (article.authors.includes(userId) || article.authors.includes(+userId)) {
                return true;
            }
            return false;
        });
    }

    articles = articles.map((article) => (
        <ArticlePreview
            key={article.key + "preview"}
            article={article}
        />
    ));
    
    return (
        articles
    );
}

export default ArticlesList;