import React from "react";
import { Row, Col, Divider } from "antd";
import LoginState from "./component/LoginState"
import "./index.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }
    render() {
        const isLogin = this.state.isLogin;
        return (
            <div id="header">
                <Row id="top">
                    <Col span={4} offset={10}>
                        <div id="blogName">Dystopia</div>
                    </Col>
                    <Col span={4} offset={6}>
                        <LoginState isLogin={isLogin}/>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center" id="nav">
                    <Col span={4}><a>主页</a></Col>
                    <Col span={4}><a>简历</a></Col>
                    <Col span={4}><a>博文</a></Col>
                    {isLogin ? <Col span={4}><a>管理</a></Col>: null}
                    <Col span={4}><a>与我联系</a></Col>
                </Row>
            </div>

        )
    }
}

export default Header;