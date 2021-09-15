export function changeArticleDescription (value, article, setArticle) {
    article.Description = value;
    setArticle({...article});
}

export function changeArticlePreview (value, article, setArticle) {
    article.Preview = value;
    setArticle({...article});
}

export function changeArticleContent (value, article, setArticle) {
    article.Content = value;
    setArticle({...article});
}

export function changeArticleName (value, article, setArticle) {
    article.Name = value;
    setArticle({...article});
}

export function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}