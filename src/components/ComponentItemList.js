import React from 'react';
import ItemList from './ItemList.js';
import ComponentItem from './ComponentItem.js';

class ComponentItemList extends ItemList {
  itemList = (items) => {
    return items.map((item) =>
      <ComponentItem category={this.props.list.title}
        item={item}
        itemData={this.props.itemDataList.list.find(x => x.title === item.title)}
        updateFunction={this.props.updateFunction}
        key={item.title}>
      </ComponentItem>
    )
  }

  acquisitionColumns = () => [
      <th key="acquisition">Base Acquisition</th>,
      <th key="components">Component Acquisition</th>
    ]
}

export default ComponentItemList;
