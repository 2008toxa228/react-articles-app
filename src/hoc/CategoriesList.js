import React from "react";
import Category from "../components/category";

function CategoryList (props) {
    return (
        props.categories.map((category) => (
            <Category
                key={category.id + category.name}
                category={category}
            />
        ))
    );
};

export default CategoryList;