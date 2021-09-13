import React, { useState } from "react";
import ArticlePreview from "../components/articlePreview";
import * as ApiProvider from "../ApiProvider";

function ArticlesList(props) {
    const [articles, setArticles] = useState();

    if (!articles) {
        console.log(props);
        if (props.match.params.categoryId) {
            ApiProvider.GetArticlesByCategoryId(props.match.params.categoryId, props.match.params.pageNumber ?? 0, mapArticles);
        }
        else if (props.match.params.userId) {
            ApiProvider.GetArticlesByUserId(props.match.params.userId, props.match.params.pageNumber ?? 0, mapArticles);
        }
        else {
            ApiProvider.GetArticlesByPage(props.match.params.pageNumber ?? 0, mapArticles);
        }
    }

    return (
        <React.Fragment>
            { articles 
                ? articles.length 
                    ? articles
                    : "page not exist"
                : ""
            }
        </React.Fragment>
    );
    
    function mapArticles(data) {
        console.log("articles data",data);
        setArticles(data.map(article => (
            <ArticlePreview
                key={article.Id + "preview"}
                article={article}
            />)
            )
        );
        console.log("if this repeats, means that useState setter loop happen");
    }
}

export default ArticlesList;