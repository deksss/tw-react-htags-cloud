import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {sereachTweets, getUniqHtags} from "../Api/twitter";

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
