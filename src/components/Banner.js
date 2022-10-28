import React from "react";
import './Global.css';
import './Banner.css'

export default class Carousel extends React.Component {
    render() {
        return (
            <div className="banner_top">
            
                <h1>A warm welcome!</h1>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button className="CTAbtn">Call to action</button>


            </div>
        );
    }
} 