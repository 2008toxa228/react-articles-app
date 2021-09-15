import PropTypes from "prop-types";

function CommonArticle (props) {
    return (
        <article>
            <h1>
                { props.article?.Name } { props.isOwner ? props.editButton : "" }
            </h1>
            <div className="articleInfo">
                <div>isEditing: { props.isEditing ? "true" : "false" }</div>
                <div>author: { "soon" }</div>
                <div>date: { props.article?.Date }</div>
                <div>category: { "soon" }</div>
            </div>
            <div>preview: { props.article?.Preview }</div>
            <div>description: { props.article?.Description }</div>
            <div>{ props.article?.Content }</div>
        </article> 
    );
}

CommonArticle.propTypes = {
    article: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.object
    ]),
    isOwner: PropTypes.bool.isRequired, 
    isEditing: PropTypes.bool.isRequired, 
    editButton: PropTypes.element.isRequired
}

export default CommonArticle;