import React from "react";
import { Row, Col, Card, Calendar, Carousel } from "antd";
import ArticleList from "../../components/ArticleList/index"
import MideaContent from "./component/MideaContent";
import bg1 from "../../assets/img/bg1.jpg";
import bg2 from "../../assets/img/bg2.jpg";
import bg3 from "../../assets/img/bg3.jpg";
import bg4 from "../../assets/img/bg4.jpg";

import "./index.css"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = [
            {
                title: "React使用心得",
                img: bg1,
            },
            {
                title: "Webpack打包博客项目",
                img: bg2,
            },
            {
                title: "《你不知道的JavaScript》读后感",
                img: bg3,
            },
            {
                title: "React Hook实践总结",
                img: bg4,
            }
        ];
        const data = [
            {
                title: "文章一",
                description: ["鸡汤", "励志", "希望"],
                content: "我们坐着喝着啤酒，阳光洒在肩头，觉得是个自由人。即使是一瞬间的感觉，也让人充满了希望，拥有了爱和喜悦，发现自己真的是一个人，哪怕狼狈不堪，哪怕刻骨铭心。万物之中，希望最美；最美之物，永不凋零。"
            },
            {
                title: "文章二",
                description: ["鸡汤", "励志", "希望"],
                content: "我们坐着喝着啤酒，阳光洒在肩头，觉得是个自由人。即使是一瞬间的感觉，也让人充满了希望，拥有了爱和喜悦，发现自己真的是一个人，哪怕狼狈不堪，哪怕刻骨铭心。万物之中，希望最美；最美之物，永不凋零。"
            },
            {
                title: "文章三",
                description: ["鸡汤", "励志", "希望"],
                content: "我们坐着喝着啤酒，阳光洒在肩头，觉得是个自由人。即使是一瞬间的感觉，也让人充满了希望，拥有了爱和喜悦，发现自己真的是一个人，哪怕狼狈不堪，哪怕刻骨铭心。万物之中，希望最美；最美之物，永不凋零。"
            }
        ]
        return (
            <div>
                <Carousel autoplay effect="fade">
                    {content.map((item) => {
                        return (
                            <MideaContent title={item.title} img={item.img} />
                        )
                    })}
                </Carousel>
                <Row style={{ marginTop: "24px" }}>
                    <Col span={17}>
                        <ArticleList data={data}/>
                    </Col>
                    <Col span={7}>
                        <div style={{ height: "200px", backgroundColor: "#999999" }}></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomePage;