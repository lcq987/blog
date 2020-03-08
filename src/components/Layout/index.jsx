import React from 'react';
import "./index.css";
import Header from "../Header/index";
import Footer from "../Footer/index";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children;
        return (
            <div id="box">
                <div id="left_side"></div>
                <div id="center_area">
                    <Header />
                    <div id="content">{children}</div>
                    <Footer />
                </div>
                <div id="right_side"></div>
            </div>
        )
    }
}

export default Layout;