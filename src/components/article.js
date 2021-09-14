import React from "react";
import "./css/article.css";
import {} from "react-router-dom";
import { useState, useEffect } from "react";
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
        <button onClick={() => setIsEditing(!isEditing)}>
            edit article
        </button>
    );

    const saveButton = (
        <React.Fragment>
            <button onClick={() => (ApiProvider.UpdateArticleById(article.Id, JSON.stringify(article), saveButtonCallback))}>
                save
            </button>
            <button onClick={() => (ApiProvider.GetArticleById(articleId, setArticle), setIsEditing(!isEditing))}>
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
                <div>
                    <textarea type="text" onChange={e => changeArticlePreview(e.target.value)}>
                        {article?.Preview} 
                    </textarea>
                </div>
            </div>
            <div>
                description:
                <div>
                    <textarea type="text" onChange={e => changeArticleDescription(e.target.value)}>
                        {article?.Description} 
                    </textarea>
                </div>
            </div>
            <div>
                <textarea type="text" onChange={e => changeArticleContent(e.target.value)}>
                    {article?.Content} 
                </textarea>
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

    useEffect(() => {
        document.querySelectorAll("textarea").forEach((element) => auto_grow(element))
    });

    return (
        <React.Fragment>
            <button onClick={() => (ApiProvider.GetArticleById(articleId, setArticle), setIsOwner(!isOwner), setIsEditing(false))}>
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

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }