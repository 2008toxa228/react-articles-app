import React from "react";
import "./css/articlePreview.css";
import {NavLink} from "react-router-dom";

function ArticlePreview (props) {
    return (
        <div className="articlePreview">
            <div className="articlePreviewName">
                <NavLink to={"/articles/" + props.article.articleId}>{props.article.name}</NavLink>
            </div>
            <div className="articlePreviewPreview">
                <div className="articlePreviewContent">
                    {props.article.preview}
                </div>
            </div>
        </div>
    );
};

export default ArticlePreview;