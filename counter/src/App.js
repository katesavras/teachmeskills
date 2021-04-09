import React from 'react'
import './App.css';

import dataJson from './data.json'
import ListItem from './components/ListItem'


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            searchItem: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            data: [...this.state.data, ...dataJson]
        })
    }

    getItems = () => {
        return this.state.data
            .filter((item) => {
                return item.title.toUpperCase().includes(this.state.searchItem.toUpperCase());
            })
            .splice(0, 14)
            .map((item) => (
                <ListItem
                    key={item.title + item.symbol}
                    symbol={item.symbol}
                    title={item.title}>
                </ListItem>
            ));
    };



    handleChangeSearchItem = (event) => {
        this.setState({
            searchItem: event.target.value
        })
    }


    render() {
        return (<div>
            <input value={this.state.searchItem} onChange={this.handleChangeSearchItem} />
            {this.getItems()}
        </div>)
    }
}

export default App;
