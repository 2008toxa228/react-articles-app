import React from "react";
import "./css/article.css";
import {} from "react-router-dom";
import { /*useState,*/ useEffect } from "react";
import * as ApiProvider from "../ApiProvider";
import { connect } from "react-redux";
import { getArticleView, saveArticle, setArticle, setIsEditing, setIsOwner } from "../redux/actions/actions";

function Article (props) {
    // const [article, setArticle] = useState();
    // const [isEditing, setIsEditing] = useState(false);
    // const [isOwner, setIsOwner] = useState(false);

    let articleId = props.match.params.articleId;

    console.log("article props", props);

    if (!props.article) {
        ApiProvider.GetArticleById(articleId, props.onSetArticle);
    }

    useEffect(() => {
        document.querySelectorAll("textarea").forEach((element) => auto_grow(element))
    });

    return (
        <React.Fragment>
            <button onClick={() => (
                ApiProvider.GetArticleById(articleId, props.onSetArticle),
                props.onSetIsOwner(!props.isOwner),
                props.onSetIsEditing(false)
            )}>
                isOwner: {props.isOwner ? "true" : "false"}
            </button>
            <button onClick={() => props.onSetIsEditing(!props.isEditing)}>
                edit article
            </button>
            <button onClick={() => (ApiProvider.UpdateArticleById(props.article.Id, JSON.stringify(props.article), saveButtonCallback))}>
                save
            </button>
            { props.articleView }
        </React.Fragment>
    );  
};

function saveButtonCallback (result) {
    console.log(result);
    alert(result);
    if (result) {
        setIsEditing(false);
        alert("saved succesfully");
    } else {
        alert("error occured during saving");
    }
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function mapStateToProps(state) {
    // console.log("mapStateToProps(state)", state);
    return {
        article: state.article,
        articleView: state.articleView,
        isEditing: state.isEditing,
        isOwner: state.isOwner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetArticle: article => {dispatch(setArticle(article));dispatch(getArticleView())},
        onSaveArticle: article => dispatch(saveArticle(article)),
        onGetArticleView: () => dispatch(getArticleView()),
        onSetIsEditing: isEditing => dispatch(setIsEditing(isEditing)),
        onSetIsOwner: isOwner => dispatch(setIsOwner(isOwner))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);