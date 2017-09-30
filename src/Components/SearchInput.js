import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const style = {
  border: '2px solid black',
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
}

class SearchInput extends Component {
  state = {
    dataSource: [],

  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div style={style}>
        <AutoComplete
          hintText="Type hashtag"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
        />
      </div>
    );
  }
}

export default SearchInput;
