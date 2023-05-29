import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    const newArray = posts.map((post) => {
        return (
            <Article
              key={post.id}
              title={post.title}
              data={post.data}
              preview={post.preview}
            />
        );
    });
    return<main>{newArray}</main>
}
export default ArticleList;
