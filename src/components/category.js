import React from 'react';
import { NavLink } from "react-router-dom";
import "./css/category.css";

function Category (props) {
    return (
        <div className="category">
            <NavLink to={ "/articles/category/" + props.category.Id }>
                { props.category.Name }
            </NavLink>
            <div className="categoryDescription">{ props.category.Description }</div>
        </div>
    );
};

export default Category;