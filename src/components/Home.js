import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

export default class Home extends React.Component{

    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}