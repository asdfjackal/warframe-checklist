import React, { Component } from 'react';
import emptyList from './data/empty-list.js';
import listData from './data/list-data.js';
import BrowserCompatability from './components/BrowserCompatability.js';
import ItemList from './components/ItemList.js'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.setProperty = this.setProperty.bind(this);
      var list = emptyList;
      if (typeof(Storage) !== "undefined") {
        if(localStorage.list !== undefined){
          list = JSON.parse(localStorage.getItem("list"));
        }
      }
      this.state = {
        listData,
        list,
      };
  }

  setProperty(category, item, property, value) {
    let newList  = this.state.list;
    newList.lists.find(
      x => x.title === category
    ).list.find(
      x => x.title === item
    )[property] = value;
    this.setState({list: newList});

    localStorage.setItem("list", JSON.stringify( newList ));
  }

  render() {
    const subLists = this.state.list.lists.map((list) =>
      <ItemList list={list} updateFunction={this.setProperty} key={list.title}></ItemList>
    );

    return (
      <div className="App">
        <div className="App-header">
          <h2>Warframe Checklist</h2>
          <p>Last Updated For:</p>
          <p>OCTAVIA'S ANTHEM | 2017.04.03.16.04</p>
        </div>
        <p className="App-intro">
        </p>
        <BrowserCompatability>
          <div className="container">{subLists}</div>
        </BrowserCompatability>
      </div>
    );
  }
}

export default App;
