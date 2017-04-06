import React, { Component, PropTypes } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.toggleAcquired = this.toggleAcquired.bind(this);
    this.toggleRankThirty = this.toggleRankThirty.bind(this);
    this.toggleResearched = this.toggleResearched.bind(this);
  }

  toggleAcquired(){
    this.props.updateFunction(this.props.category, this.props.item.title, "acquired", !this.props.item.acquired)
  }

  toggleRankThirty(){
    this.props.updateFunction(this.props.category, this.props.item.title, "rankThirty", !this.props.item.rankThirty)
  }

  toggleResearched(){
    this.props.updateFunction(this.props.category, this.props.item.title, "researched", !this.props.item.researched)
  }

  render(){
    return (
      <tr>
        <td>
          {this.props.item.title}
          {
            (this.props.itemData.mr) ?
            <span className="itemDetail">MR: {this.props.itemData.mr}</span> :
            <span className="itemDetail">MR: 0</span>
          }
          {
            (this.props.itemData.vaulted) ?
            <span className="itemDetail">Vaulted |&nbsp;</span> :
            null
          }
          {
            (this.props.itemData.unobtainable) ?
            <span className="itemDetail">Unobtainable |&nbsp;</span> :
            null
          }
        </td>
        <td className="itemCheckbox" onClick={this.toggleAcquired}><input type="checkbox" checked={this.props.item.acquired}/></td>
        <td className="itemCheckbox" onClick={this.toggleRankThirty}><input type="checkbox" checked={this.props.item.rankThirty}/></td>
        {
          (this.props.itemData.lab !== undefined) ?
          <td className="itemCheckbox" onClick={this.toggleResearched}>
            <input
              type="checkbox"
              checked={this.props.item.researched}
            />
          </td> :
          <td className="itemCheckbox">
          </td>
        }
        <td>
          {
            this.props.itemData.acquisition
          }
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  itemData: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
}

export default Item;
