import { GET_ARTICLE_VIEW, SAVE_ARTICLE, SET_ARTICLE, SET_ISEDITING, SET_ISOWNER } from "../actions/actionTypes";
import * as ApiProvider from "../../ApiProvider";
import React from "react";
import { setArticle, setIsEditing } from "../actions/actions";

const initialState = {
    article: null,
    articleView: (<React.Fragment/>),
    isEditing: false,
    isOwner: false
}

export default function articleReducer(state = initialState, action) {

    console.log("reducer state", state, action);

    let article = state.article;
    let articleId = state.article?.Id;
    let isEditing = state.isEditing;
    let isOwner = state.isOwner;

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
                title:
                <div>
                    <textarea type="text" defaultValue={article?.Name} onChange={e => changeArticleName(e.target.value)} />
                </div>
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
                    <textarea type="text" defaultValue={article?.Preview} onChange={e => changeArticlePreview(e.target.value)} />
                </div>
            </div>
            <div>
                description:
                <div>
                    <textarea type="text" defaultValue={article?.Description} onChange={e => changeArticleDescription(e.target.value)}/>
                </div>
            </div>
            <div>
                <textarea type="text" defaultValue={article?.Content} onChange={e => changeArticleContent(e.target.value)} />
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

    switch (action.type) {
        case SET_ARTICLE:
            // console.log("setting article", action.payload);
            return {
                article: {...action.payload},
                articleView: (isEditing 
                    ? editingArticle 
                    : commonArticle),
                isEditing: isEditing,
                isOwner: isOwner
            }
        case GET_ARTICLE_VIEW:
            return {
                article: article,
                articleView: (isEditing 
                    ? editingArticle 
                    : commonArticle),
                isEditing: isEditing,
                isOwner: isOwner                
            }
        case SAVE_ARTICLE:
            return {
                article: {...action.payload},
                articleView: (isEditing 
                    ? editingArticle 
                    : commonArticle),
                isEditing: isEditing,
                isOwner: isOwner
            }    
        case SET_ISEDITING:
            return {
                article: article,
                articleView: (isEditing 
                    ? editingArticle 
                    : commonArticle),
                isEditing: action.payload,
                isOwner: isOwner
            }
        case SET_ISOWNER:
            return {
                article: article,
                articleView: (isEditing 
                    ? editingArticle 
                    : commonArticle),
                isEditing: isEditing,
                isOwner: action.payload
            }
        default:
            return state
    }
    
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
            alert("saved succesfully");
        } else {
            alert("error occured during saving");
        }
    }
}