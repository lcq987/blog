import React from "react";
import { Row, Col, Divider } from "antd";
import { GithubOutlined, WechatFilled } from "@ant-design/icons";
import "./index.css"

export default function Footer() {
   function toGithub(){
        window.location="https://github.com/lcq987";
    }
    return (
        <div id="footer">
            <Divider />
            <Row justify="center" gutter={[0, 16]}>
                <Col span={2} >
                    <div id="github" onClick={toGithub}><GithubOutlined style={{fontSize: "40px"}}/></div>
                </Col>
                <Col span={2}>
                    <div id="wechat"><WechatFilled style={{fontSize: "40px"}}/></div>
                </Col>
            </Row>
            <Row justify="center" gutter={[0, 16]}>
                <Col>
                    Copyright © Website of Lu Changqi from 2019.
                </Col>
            </Row>
        </div>
    )
}