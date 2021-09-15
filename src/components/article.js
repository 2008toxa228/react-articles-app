import React from "react";
import "./css/article.css";
import { useState, useEffect } from "react";
import * as ApiProvider from "../ApiProvider";
import EditingArticle from "../common/components/articleEditingView";
import CommonArticle from "../common/components/articleCommonView";
import { auto_grow } from "../common/articleExtensions";

function Article (props) {
    const [article, setArticle] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    let articleId = props.match.params.articleId;

    if (!article) {
        ApiProvider.GetArticleById(articleId, setArticle);
    }

    useEffect(() => {
        document.querySelectorAll("textarea").forEach((element) => auto_grow(element))
    });
    
    return (
        <React.Fragment>
            <button onClick={ () => (ApiProvider.GetArticleById(articleId, setArticle), setIsOwner(!isOwner), setIsEditing(false)) }>
                isOwner: { isOwner ? "true" : "false" }
            </button>
            { ArticleView() }
        </React.Fragment>
    );

    function ArticleView() {
        return isEditing
            ? <EditingArticle 
                article={ article } 
                setArticle={ setArticle } 
                isOwner={ isOwner }
                isEditing={ isEditing } 
                saveButton={ saveButton() }/>
            : <CommonArticle 
                article={ article } 
                isOwner={ isOwner } 
                isEditing={ isEditing } 
                editButton={ editButton() }/>
    }

    function editButton () {
        return (
            <button onClick={ () => setIsEditing(!isEditing) }>
                edit article
            </button>
        );
    }

    function saveButton () {
        return (
            <React.Fragment>
                <button onClick={ () => (ApiProvider.UpdateArticleById(JSON.stringify(article), saveButtonCallback)) }>
                    save
                </button>
                <button onClick={ () => (ApiProvider.GetArticleById(articleId, setArticle), setIsEditing(!isEditing)) }>
                    discard
                </button>
            </React.Fragment>
        );
    }
    
    function saveButtonCallback (result) {
        if (result) {
            setIsEditing(false);
            alert("saved succesfully");
        } else {
            alert("error occured during saving");
        }
    }
};

export default Article;