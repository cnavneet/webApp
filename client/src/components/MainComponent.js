import React, { Component } from 'react';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "App">
                <div>
                    <Header />
                </div>
            </div>
        );
    }
}

export default Main;