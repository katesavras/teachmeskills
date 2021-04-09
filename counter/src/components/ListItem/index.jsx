import React from 'react'


class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div className="App">
               <p>{this.props.symbol}:{this.props.title}</p>
            </div>
        )
    }
}

export default ListItem;