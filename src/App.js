import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountdownTimer from "./component/CountdownTimer";
import './App.css';
import NewsSource from "./component/NewsSource";

class App extends Component {
    render() {
        return(
            <div className="App">
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
