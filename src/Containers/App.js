import React, { Component } from 'react';
import TagsCloud from '../Components/TagsCloud';
import SearchInput from '../Components/SearchInput';
import SaveButton from '../Components/SaveButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {sereachTweets, getUniqHtags} from "../Api/twitter";
//import {updateDataInStorage, getDataFromStorage} from "./Api/storage";

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
      hashtags: []
    };
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

  render() {
    return (
      <MuiThemeProvider>
        <div style={style.wrapper}>
          <div style={style.container}>
            <SearchInput value="" addHashtag={this.addHashtagHandler}/>
            <TagsCloud hashtags={this.state.hashtags} />
            <SaveButton />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
