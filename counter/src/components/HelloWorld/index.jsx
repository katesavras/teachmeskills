import React from 'react'


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        return (<div className="App">
               <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default HelloWorld;