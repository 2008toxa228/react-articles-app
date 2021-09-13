import axios from "axios";
import React from "react";

var domain = "https://localhost:44319/";
var apiRoute = "api/articles/";
var pageSize = 10;

export function GetArticleById(id, callback) {
    let requestUrl = domain + apiRoute + `getarticlebyid?id=${id}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetArticlesByPage(page, callback)
{
    let requestUrl = domain + apiRoute + `getarticlespreviews?page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetArticlesByCategoryId(id, page, callback)
{
    let requestUrl = domain + apiRoute + `GetArticlesPreviewsByCategory?categoryId=${id}&page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
        console.log(response);
    })
    .catch((error) => console.warn(error));
    console.log("request sent");
}

export function GetArticlesByUserId(id, page, callback)
{
    let requestUrl = domain + apiRoute + `GetArticlesPreviewsByAuthor?authorId=${id}&page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function UpdateArticleById(id, articleJson, callback) {
    console.log(articleJson);
    let requestUrl = domain + apiRoute + `UpdateArticleById?id=${id}&articleJson=${articleJson}`;
    axios.post(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetCategoriesByPage(page, callback)
{
    let requestUrl = domain + apiRoute + `getcategories?page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetUsersByPage(page, callback)
{
    let requestUrl = domain + apiRoute + `getusers?page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}