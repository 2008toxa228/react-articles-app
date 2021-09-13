import React from "react";
import "./css/article.css";
import {} from "react-router-dom";
import { useState } from "react";
import * as ApiProvider from "../ApiProvider";

function Article (props) {
    const [article, setArticle] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    let articleId = props.match.params.articleId;

    if (!article) {
        ApiProvider.GetArticleById(articleId, setArticle);
    }

    const editButton = (
        <button onClick={changeIsEditing}>
            edit article
        </button>
    );

    const saveButton = (
        <React.Fragment>
            <button onClick={() => (ApiProvider.UpdateArticleById(article.Id, JSON.stringify(article), saveButtonCallback))}>
                save
            </button>
            <button onClick={() => (ApiProvider.GetArticleById(articleId, setArticle), changeIsEditing())}>
                discard
            </button>
        </React.Fragment>
    );

    const editingArticle = (
        <article>
            <h1>
                <input type="text" 
                    value={article?.Name} 
                    onChange={e => changeArticleName(e.target.value)}
                />
                {isOwner ? saveButton : ""}
            </h1>
            <div className="articleInfo">
                <div>isEditing: {isEditing ? "true" : "false"}</div>
                <div>author: {"soon"}</div>
                <div>date: {article?.Date}</div>
                <div>category: {"soon"}</div>
            </div>            
            <div>
                preview:                 
                <input type="text"
                    value={article?.Preview} 
                    onChange={e => changeArticlePreview(e.target.value)}
                />
            </div>
            <div>
                description:
                <input type="text"
                    value={article?.Description} 
                    onChange={e => changeArticleDescription(e.target.value)}
                />
            </div>
            <div>
                <input type="text" 
                    value={article?.Content} 
                    onChange={e => changeArticleContent(e.target.value)}
                />
            </div>
        </article>
    );

    const commonArticle = (
        <article>
            <h1>{article?.Name} {isOwner ? editButton : ""}</h1>
            <div className="articleInfo">
                <div>isEditing: {isEditing ? "true" : "false"}</div>
                <div>author: {"soon"}</div>
                <div>date: {article?.Date}</div>
                <div>category: {"soon"}</div>
            </div>
            <div>preview: {article?.Preview}</div>
            <div>description: {article?.Description}</div>
            <div>{article?.Content}</div>
        </article>  
    );

    return (
        <React.Fragment>
            <button onClick={changeIsOwner}>
                isOwner: {isOwner ? "true" : "false"}
                <input id={"isOwner" + articleId} 
                    type="checkbox" 
                    style={{display: "none"}}
                />
            </button>
            <input id={"isEditing" + articleId} 
                type="checkbox" 
                style={{display: "none"}} 
            />
            
            { isEditing ? editingArticle : commonArticle }          
        </React.Fragment>
    ); 

    function changeIsEditing() {
        // Хук не работал через setIsEditing(!isEditing), поэтому был установлен костылб в виде невидимого чекбокса, через состояние которого меняется isEditing.
        document.getElementById("isEditing" + articleId).checked = !document.getElementById("isEditing" + articleId).checked;
        setIsEditing(document.getElementById("isEditing" + articleId).checked);
    };
    
    function changeIsOwner() {
        // Сделано через костыль аналогичным образом.
        document.getElementById("isOwner" + articleId).checked = !document.getElementById("isOwner" + articleId).checked;
        setIsOwner(document.getElementById("isOwner" + articleId).checked);
        
        if (isEditing)
        {
            changeIsEditing();
            ApiProvider.GetArticleById(articleId, setArticle);
        }
    };    
    
    function changeArticleDescription (value) {
        article.Description = value;
        setArticle({...article});
    }

    function changeArticlePreview (value) {
        article.Preview = value;
        setArticle({...article});
    }
    
    function changeArticleContent (value) {
        article.Content = value;
        setArticle({...article});
    }

    function changeArticleName (value) {
        article.Name = value;
        setArticle({...article});
    }

    function saveButtonCallback (result) {
        if (result) {
            setIsEditing(false);
            document.getElementById("isEditing" + articleId).checked = false;
            alert("saved succesfully");
        } else {
            alert("error occured during saving");
        }
    }
};

export default Article;