import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountdownTimer from "./component/CountdownTimer";
import './css/App.css';
import NewsSource from "./component/NewsSource";
import {Helmet} from "react-helmet";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Helmet>
                    <link rel="icon" href="https://covid19.go.id/storage/app/media/logo-satgas.png" type="image/png"/>
                    <title>Menuju Indonesia Tanpa Covid-19</title>
                </Helmet>
                <div className="main-title shadow-sm">
                    <h1 className="text-center">
                        Menuju Indonesia Tanpa Covid-19 Dalam
                    </h1>
                </div>
                <CountdownTimer />
                <NewsSource />
            </div>
        );
}
}

export default App;
