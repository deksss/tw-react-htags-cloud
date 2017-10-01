import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {sereachTweets} from "../Api/twitter";

const style = {
  border: '2px solid black',
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  color: 'black',
}

class SearchInput extends Component {
  state = {
    dataSource: [],
    value: ''
  };

  handleUpdateInput = (value) => {
    const oldValue = this.state.value;
    this.setState({
      value: value
    });
    if (value && value !== oldValue) {
      sereachTweets(value).then((resolve, reject) => {
        this.setState({
          dataSource: resolve,
        });
      })
    }
  };

  handleNewRequest = (input) => {
    this.setState({value: ''});
    this.props.addHashtag(input);
  };

  render() {
    return (
      <div style={style}>
        <AutoComplete
          hintText="Hashtag"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          searchText={this.state.value}
          onNewRequest={this.handleNewRequest}
        />
      </div>
    );
  }
}

export default SearchInput;
