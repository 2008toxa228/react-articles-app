import React, { useState } from "react";
import ArticlePreview from "../components/articlePreview";
import * as ApiProvider from "../ApiProvider";

function ArticlesList(props) {
    const [articles, setArticles] = useState();

    if (!articles) {
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

    // ToDO refactor return part.
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
        setArticles(data.map(article => (
            <ArticlePreview
                key={ article.Id + "preview" }
                article={ article }
            />)
            )
        );
    }
}

export default ArticlesList;