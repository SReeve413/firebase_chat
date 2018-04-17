import React, {Component} from 'react';
import MessageList from './components/MessageList'

import MessageBox from './components/MessageBox'
import Header from './components/Header'
import firebase from 'firebase'


class App extends Component {
    constructor(props) {
        super(props)
        const config = {
            apiKey: "AIzaSyCi-FJPhilRhEpsTN7dltOQdvxC9PqELBY",
            authDomain: "fir-chat-169e0.firebaseapp.com",
            databaseURL: "https://fir-chat-169e0.firebaseio.com",
            projectId: "fir-chat-169e0",
            storageBucket: "",
            messagingSenderId: "489203017475"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <React.Fragment>
                <Header title="Simple Firebase App"/>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageList db={firebase} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
