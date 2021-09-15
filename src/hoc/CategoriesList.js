import React from "react";
import Category from "../components/category";
import * as ApiProvider from "../ApiProvider";
import { useState } from "react";

function CategoryList (props) {
    const [categories, setCategories] = useState();

    if (!categories) {
        ApiProvider.GetCategoriesByPage(props.match.params.pageNumber ?? 0, mapCategories);
    }

    // ToDO refactor return part.
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
        setCategories(data.map((category) => (
            <Category
                key={ category.Id }
                category={ category }
            />)
            )
        );
    }
};

export default CategoryList;