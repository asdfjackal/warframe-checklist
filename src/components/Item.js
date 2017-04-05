import React, { Component, PropTypes } from 'react';

class Item extends Component {
  render(){
    return (
      <tr>
        <td>{this.props.item.title}</td>
        <td><input type="checkbox" checked={this.props.item.aquired} onClick={() => this.props.updateFunction(this.props.category, this.props.item.title, "aquired", !this.props.item.aquired)}/></td>
        <td><input type="checkbox" checked={this.props.item.rankThirty} onClick={() => this.props.updateFunction(this.props.category, this.props.item.title, "rankThirty", !this.props.item.rankThirty)}/></td>
        <td><input type="checkbox" checked={this.props.item.researched} onClick={() => this.props.updateFunction(this.props.category, this.props.item.title, "researched", !this.props.item.researched)}/></td>
      </tr>
    );
  }
}

Item.propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
}

export default Item;
