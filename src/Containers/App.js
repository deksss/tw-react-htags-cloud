import React, { Component } from 'react';
import TagsCloud from '../Components/TagsCloud';
import SearchInput from '../Components/SearchInput';
import SaveButton from '../Components/SaveButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {updateDataInStorage, getDataFromStorage} from "../Api/storage";
import {sereachTweets} from "../Api/twitter";

const style = {
  wrapper: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '600px',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: [],
      searchDataSource: []
    };
  }

  componentDidMount() {
    getDataFromStorage()
        .then((result, reject) => {
          console.log(result);
          console.log(reject);
          if (result) {
            this.setState({ hashtags:  result});
          }
        })
        .catch(e => console.log(e));
  }

  addHashtagHandler = (value) => {
    console.log(value)
    const hashtags = this.state.hashtags;
    const isNotAlreadyAdded = !hashtags.find( htag => htag.label === value);
    if (isNotAlreadyAdded) {
    this.setState({
        hashtags: [
          ...hashtags,
          ...[{key: hashtags.length + 1, label: value}]]
      });
    }
  };

  handleRequestDelete = (key) => {
    const hashtags = this.state.hashtags;
    const tagToDelete = hashtags.map(tag => tag.key).indexOf(key);
    hashtags.splice(tagToDelete, 1);
    this.setState({hashtags: hashtags});
  };

  saveDataToStore = () => {
    const hashtags = this.state.hashtags;
    console.log(hashtags)
    updateDataInStorage(hashtags);
    //error handling
  };

sereachTweets = (value) => {
  if (value) {
    sereachTweets(value).then((resolve, reject) => {
      this.setState({
        searchDataSource: resolve,
      });
      //error handling
    })
  }
}

  render() {
    return (
      <MuiThemeProvider>
        <div style={style.wrapper}>
          <div style={style.container}>
            <SearchInput value=""
            addHashtag={this.addHashtagHandler}
            searchDataSource={this.state.searchDataSource}
            sereachTweets={this.sereachTweets}
            />
            <TagsCloud hashtags={this.state.hashtags}
                       deleteHashtag={this.handleRequestDelete}
            />
            <SaveButton saveTags={this.saveDataToStore} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
