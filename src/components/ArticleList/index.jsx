import React from "react";
import { List, Tag, Divider } from "antd";

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = {
            "鸡汤": "orange",
            "励志": "green",
            "希望": "geekblue"
        }
        const data = this.props.data;
        console.log(data)
        return (
            <div style={{ paddingRight: "48px" }}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        // <List.Item>
                        //     <List.Item.Meta
                        //         title={<a><h2>{item.title}</h2></a>}
                        //         description={item.description.map(tag=>(
                        //             <Tag color={color[tag]}>{tag}</Tag>
                        //         ))}
                        //     />
                        //     {item.content}
                        // </List.Item>
                        <div>
                            <a><h1>{item.title}</h1></a>
                            <div style={{marginBottom: "12px"}}>
                                {item.description.map(tag=>(
                                     <Tag color={color[tag]}>{tag}</Tag>
                                ))}
                            </div>
                            <div>{item.content}</div>
                            <Divider />
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default ArticleList;