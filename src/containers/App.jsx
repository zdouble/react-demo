import React, { Component } from 'react'
import NavBar from '../components/NavBar'

export default class App extends Component {
    render() {
        let { location } = this.props
        return (
            <div>
                <NavBar location={location}/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
