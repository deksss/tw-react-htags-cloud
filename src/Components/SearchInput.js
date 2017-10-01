import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';

const style = {
  border: '2px solid black',
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  color: 'black',
  display: 'flex',
  alignItems: 'center'
}

class SearchInput extends Component {
  state = {
    value: ''
  };

  handleUpdateInput = (value) => {
    this.setState({
      value: value
    });
    this.props.sereachTweets(value);
  };

  handleNewRequest = (input) => {
    this.setState({value: ''});
    this.props.addHashtag(input);
  };

  render() {
    const {searchDataSource} = this.props;
    return (
      <div style={style}>
        <AutoComplete
          hintText="Hashtag"
          dataSource={searchDataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          searchText={this.state.value}
          onNewRequest={this.handleNewRequest}
        />
        <SearchIcon color={'grey'} />
      </div>
    );
  }
}

export default SearchInput;
