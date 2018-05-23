import React from 'react';
import Item from './Item.js';

class ComponentItem extends Item {
  acquisitionColumns = () => {
    return (this.props.itemData.components !== undefined) ?
    [
      <td key="acquisition">{this.props.itemData.acquisition}</td>,
      <td key="components">{this.props.itemData.components}</td>
    ]:
    (<td colSpan="2">
      {this.props.itemData.acquisition}
    </td>)
  }
}

export default ComponentItem;
