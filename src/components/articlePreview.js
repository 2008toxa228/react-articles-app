import React from "react";
import "./css/articlePreview.css";
import {NavLink} from "react-router-dom";

function ArticlePreview (props) {
    return (
        <div className="articlePreview">
            <div className="articlePreviewName">
                <NavLink to={"/articles/" + props.article.Id}>{props.article.Name}</NavLink>
            </div>
            <div className="articlePreviewPreview">
                <div className="articlePreviewContent">
                    {props.article.Preview}
                </div>
            </div>
        </div>
    );
};

export default ArticlePreview;