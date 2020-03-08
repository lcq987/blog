import React from "react";
import Layout from "../../components/Layout/index";
import HomePage from "../HomePage/index";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <HomePage/>
            </Layout>
        )
    }
}

export default App;