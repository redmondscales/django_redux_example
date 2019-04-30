import addComponentToWindow from "~/react_globals/addComponentToWindow"
import { Component } from 'react'

class HeaderComponent extends Component {

    render() {
        return <h1>Text From Django: {this.props.text} </h1>

    }
}

addComponentToWindow(HeaderComponent, 'HeaderComponent');