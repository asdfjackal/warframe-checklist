import React, { Component, PropTypes } from 'react';
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

  render(){
    const items = this.props.list.list.map((item) =>
      <Item category={this.props.list.title} item={item} updateFunction={this.props.updateFunction} key={item.title}></Item>
    );

    return (
      <div>
        <p className="toggleButton">
          <button onClick={this.toggleShow} >Show/Hide</button>
        </p>
        <table>
          <colgroup>
            <col className="itemTitle" />
            <col className="itemCheckbox" />
            <col className="itemCheckbox" />
            <col className="itemCheckbox" />
          </colgroup>
          <thead>
            <tr>
              <th>{this.props.list.title}</th>
              <th>Aquired</th>
              <th>Rank 30</th>
              <th>Researched</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.showList ?
              items :
              null
            }
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

ItemList.propTypes = {
  list: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
}

export default ItemList;
