import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {sereachTweets} from "../Api/twitter";

const style = {
  border: '2px solid black',
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
}

class SearchInput extends Component {
  state = {
    dataSource: [],
    value: ''
  };

  handleUpdateInput = (value) => {
    /*
    sereachTweets(value).then((resolve, reject) => {
      console.log(reject);
      console.log(resolve);
      const htags = getUniqHtags(resolve, value);
      console.log(htags);
      this.setState({
        dataSource: htags,
      });
    }
   );
   */
    if (value && value !== this.state.value) {
      sereachTweets(value).then((resolve, reject) => {
        this.setState({
          dataSource: resolve,
          value: value
        });
      })
    }

  };

  render() {
    return (
      <div style={style}>
        <AutoComplete
          hintText="Hashtag"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          onNewRequest={e => this.setState({value: e}) }
        />
      </div>
    );
  }
}

export default SearchInput;
