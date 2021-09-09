import React from "react";
import Main from "../components/main";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";

function Layout (props) {
    return (
        <React.Fragment>            
            <Header headerTitle="//sitename"/>
            <Nav />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;