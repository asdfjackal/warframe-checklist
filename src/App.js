import React, { Component } from 'react';
import emptyList from './data/empty-list.js';
import listData from './data/list-data.js';
import BrowserCompatability from './components/BrowserCompatability.js';
import ItemList from './components/ItemList.js'
import ComponentItemList from './components/ComponentItemList.js'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.setProperty = this.setProperty.bind(this);
      this.toggleHideMaxRank = this.toggleHideMaxRank.bind(this);
      this.reset = this.reset.bind(this);
      var list = emptyList;
      if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("warframe-item-checklist")){
          list = JSON.parse(localStorage.getItem("warframe-item-checklist"));
        }
      }
      if (list.version !== emptyList.version){
        emptyList.lists.forEach((category) => {
          for( let i = 0; i < category.list.length; i++ ){
            let currentCategory = (list.lists.find(x => x.title === category.title ));
            if (currentCategory === undefined){
              list.lists.push( category );
            }else if( !currentCategory.list[i] ){
              currentCategory.list.push(category.list[i]);
            }else if( currentCategory.list[i].title !== category.list[i].title ){
              currentCategory.list[i].title = category.list[i].title;
            }
          }
        });
        list.lists = list.lists.sort((a,b) => {
          return emptyList.lists.findIndex( x => x.title === a.title) - emptyList.lists.findIndex( x => x.title === b.title);
        })
        list.version = emptyList.version;
      }
      localStorage.setItem("warframe-item-checklist", JSON.stringify( list ));
      this.state = {
        listData,
        list,
        hideMaxRank: true,
      };
  }

  toggleHideMaxRank(){
    let newValue = this.state.hideMaxRank;
    this.setState({hideMaxRank: !newValue});
  }

  setProperty(category, item, property, value) {
    let newList  = this.state.list;
    newList.lists.find(
      x => x.title === category
    ).list.find(
      x => x.title === item
    )[property] = value;
    this.setState({list: newList});

    localStorage.setItem("warframe-item-checklist", JSON.stringify( newList ));
  }

  reset(){
    localStorage.setItem("warframe-item-checklist", JSON.stringify( emptyList ));
    this.setState({ list: emptyList });
  }

  render() {
    const subLists = this.state.list.lists.map((list) => {
        const ListComponent = (list.title === "Frames") ? ComponentItemList : ItemList;
        return <ListComponent
                  list={list}
                  itemDataList={this.state.listData.lists.find(x => x.title === list.title)}
                  hideMaxRank={this.state.hideMaxRank}
                  updateFunction={this.setProperty}
                  key={list.title}>
               </ListComponent>
      }

    );

    return (
      <div className="App">
        <div className="App-header">
          <h2>Warframe Checklist</h2>
          <p>Last Updated For:</p>
          <p>BEASTS OF THE SANCTUARY | 2018.04.21.08.56</p>
        </div>
        <br />
        <i className="alert">Attention Tenno: The developers of this tool are taking a break from Warframe until further notice. If you notice an item is missing please contact asdfJackal on twitter or the github repository and we will add it ASAP. </i><br /><br />

        <i>Please Note: Clearing your Cache or Cookies will delete your progress.</i><br />
        <i>WARNING: I am still fixing bugs and data may sometimes become corrupted or lost</i><br/ >
        <i>If this happens please reset by clicking here: <button onClick={this.reset}>Reset Local Storage</button></i><br/ >
        <p className="App-intro">
          Created by asdfjackal and CommissarXyz<br />
          Major thanks to github users <a href="https://github.com/RylaiSlyfe">RylaiSlyfe</a> and <a href="https://github.com/pgbconfirmit">pgbconfirmit</a> for helping to keep the list up to date!<br />
          Contribute at <a href="https://github.com/asdfjackal/warframe-checklist">github</a> or follow development at <a href="https://twitter.com/asdfJackal">twitter</a>
        </p>
        <BrowserCompatability>
          <div>
            <div className="container">
              <div className="toggleButton"><input type="checkbox" checked={this.state.hideMaxRank} onChange={this.toggleHideMaxRank}/>Hide Max Rank Items</div>
              {subLists}
            </div>
          </div>
        </BrowserCompatability>
      </div>
    );
  }
}

export default App;
