import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import PropTypes from 'prop-types';

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
  static propTypes = {
    searchDataSource: PropTypes.array.isRequired,
    addHashtag: PropTypes.func.isRequired,
    sereachTweets: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

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
