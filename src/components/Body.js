import React from "react";
import Banner from "./Banner";
import Item from "./Item";
import './Body.css';
import './Global.css';


export default class Body extends React.Component{

    render() {
        return(
            <div className="body">
                <div className="banner">
                    <Banner />
                    <div className="item">
                    <Item />
            
                    </div>
                </div>
            </div>
        );
    }
}