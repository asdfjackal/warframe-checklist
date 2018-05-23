import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';

class ItemList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showList: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(){
    this.setState({
      showList: !this.state.showList
    });
  }

  progress(){
    let total = this.props.list.list.length;
    let researchTotal = this.props.itemDataList.list.filter((item) => {
      return item.lab;
    }).length;
    let acquired = this.props.list.list.filter((item) => {
      return item.acquired;
    }).length;
    let rankThirty = this.props.list.list.filter((item) => {
      return item.rankThirty;
    }).length;
    let researched = this.props.list.list.filter((item) => {
      return item.researched;
    }).length;
    return <div>{acquired}/{total} Acquired | {rankThirty}/{total} Rank 30 | {researched}/{researchTotal} Researched</div>;
  }

  itemList = (items) => {
    return items.map((item) =>
      <Item category={this.props.list.title}
        item={item}
        itemData={this.props.itemDataList.list.find(x => x.title === item.title)}
        updateFunction={this.props.updateFunction}
        key={item.title}>
      </Item>
    )
  }

  acquisitionColumns = () => (
      <th>Acquisition</th>
    )

  render(){
    let items = this.props.list.list.sort((a, b) => {
      if (a.title < b.title){
        return -1;
      }
      if (a.title > b.title){
        return 1;
      }
      return 0;
    });
    if( this.props.hideMaxRank ){
      items = items.filter((item) => {
        return !item.rankThirty;
      });
    }

    return (
      <div>
        <h3>{this.props.list.title}</h3>
        {this.progress()}
        <div className="toggleButton"><button className="showHide" onClick={this.toggleShow} >Show/Hide</button></div>
        <hr />
        {
          this.state.showList ?
          <table>
            <colgroup>
              <col className="itemTitle" />
              <col className="itemCheckbox" />
              <col className="itemCheckbox" />
              <col className="itemCheckbox" />
              <col className="itemAcquisition" />
            </colgroup>
            <thead>
              <tr>
                <th>Item</th>
                <th className="itemCheckbox">Aquired(<span className="tooltip" title="Check this box when your have finished fabricating the item of have aquired it by other means">?</span>)</th>
                <th className="itemCheckbox">Rank 30</th>
                <th className="itemCheckbox">Researched(<span className="tooltip" title="Check this when your clan has finished researching the item">?</span>)</th>
                {this.acquisitionColumns()}
              </tr>
            </thead>
            <tbody>
              {this.itemList(items)}
            </tbody>
          </table>:
          null
        }
      </div>
    );
  }
}

ItemList.propTypes = {
  list: PropTypes.object.isRequired,
  itemDataList: PropTypes.object.isRequired,
  hideMaxRank: PropTypes.bool.isRequired,
  updateFunction: PropTypes.func.isRequired,
}

export default ItemList;
