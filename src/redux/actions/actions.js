import { SET_ISEDITING, SET_ISOWNER, GET_ARTICLE_VIEW, SAVE_ARTICLE, SET_ARTICLE } from "./actionTypes"

export function setArticle(article) {
    return {
        type: SET_ARTICLE,
        payload: article
    }
}

export function getArticleView() {
    return {
        type: GET_ARTICLE_VIEW
    };
}

export function saveArticle(article) {
    return {
        type: SAVE_ARTICLE,
        payload: article
    }
}

export function setIsEditing(isEditing = false) {
    return {
        type: SET_ISEDITING,
        payload: isEditing
    }
}

export function setIsOwner(isOwner = false) {
    return {
        type: SET_ISOWNER,
        payload: isOwner
    }
}