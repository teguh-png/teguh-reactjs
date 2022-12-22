import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";

export default class Portfolio extends React.Component {

    render () {
        return (
            <div>
                <NavBar/>
                <About/>
                <Contact/>
            </div>
        )
    }
}