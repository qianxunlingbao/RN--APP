import React, { Component } from 'react'
import AppTab from './container/AppTab'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <AppTab />
        )
    }
}