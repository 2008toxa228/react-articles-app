import PropTypes from "prop-types";
import { changeArticleContent, changeArticleDescription, changeArticleName, changeArticlePreview } from "../articleExtensions";

function EditingArticle (props) {
    return (
        <article>
            <h1>
                <textarea 
                    type="text" 
                    defaultValue={ props.article?.Name } 
                    onChange={ e => changeArticleName(e.target.value, props.article, props.setArticle) }/>
                { props.isOwner ? props.saveButton : "" }
            </h1>
            <div className="articleInfo">
                <div>isEditing: { props.isEditing ? "true" : "false" }</div>
                <div>author: { "soon" }</div>
                <div>date: { props.article?.Date }</div>
                <div>category: { "soon" }</div>
            </div>            
            <div>
                preview:
                <div>
                    <textarea 
                        type="text" 
                        defaultValue={ props.article?.Preview } 
                        onChange={ e => changeArticlePreview(e.target.value, props.article, props.setArticle) }/>
                </div>
            </div>
            <div>
                description:
                <div>
                    <textarea 
                        type="text" 
                        defaultValue={ props.article?.Description } 
                        onChange={ e => changeArticleDescription(e.target.value, props.article, props.setArticle) }/>
                </div>
            </div>
            <div>
                <textarea 
                    type="text" 
                    defaultValue={ props.article?.Content } 
                    onChange={ e => changeArticleContent(e.target.value, props.article, props.setArticle) }/>
            </div>
        </article>
    );
}

EditingArticle.propTypes = {
    article: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.object
    ]),
    setArticle: PropTypes.func.isRequired, 
    isOwner: PropTypes.bool.isRequired, 
    isEditing: PropTypes.bool.isRequired, 
    saveButton: PropTypes.element.isRequired
}

export default EditingArticle;