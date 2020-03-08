import React from 'react';
import {Button} from 'antd';

export default function LoginState(props){
    const {isLogin} = props;
    return(
        <div>
            {isLogin?<Button type="danger">退出</Button>:<Button type="primary">登录</Button>}
        </div>
    )
}