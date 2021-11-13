import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
    const [articles, setArticles] = useState([]);

    axiosWithAuth()
        .get('http://localhost:5000/api/articles/')
        .then(resp => {
            console.log(resp)
            setArticles(resp)
        }).catch(err => {
        console.log(err)
    })
    return articles;
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.