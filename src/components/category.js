import React from "react";
import { NavLink } from "react-router-dom";
import "./css/category.css";

function Category (props) {
    return (
        <div className="category">
            <NavLink to={"/articles/category/" + props.category.id}>{props.category.name}</NavLink>
            <div className="categoryDescription">{props.category.description}</div>
        </div>
    );
};

export default Category;