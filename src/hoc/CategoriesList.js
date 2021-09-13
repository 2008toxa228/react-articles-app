import React from "react";
import Category from "../components/category";
import * as ApiProvider from "../ApiProvider";
import { useState } from "react";

function CategoryList (props) {
    const [categories, setCategories] = useState();

    if (!categories) {
        ApiProvider.GetCategoriesByPage(props.match.params.pageNumber ?? 0, mapCategories);
    }

    return (
        <React.Fragment>
            { categories 
                ? categories.length 
                    ? categories
                    : "page not exist"
                : ""
            }
        </React.Fragment>
    );
    
    function mapCategories(data) {
        console.log(data);
        setCategories(data.map((category) => (
            <Category
                key={category.Id}
                category={category}
            />)
            )
        );
        console.log("if this repeats, means that useState setter loop happen");
    }
};

export default CategoryList;