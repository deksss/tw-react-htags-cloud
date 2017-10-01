import React, { Component } from "react";
import TagsCloud from "../Components/TagsCloud";
import SearchInput from "../Components/SearchInput";
import SaveButton from "../Components/SaveButton";
import Msg from "../Components/Msg";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { updateDataInStorage, getDataFromStorage } from "../Api/storage";
import { sereachTweets } from "../Api/twitter";

const style = {
  wrapper: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    width: "600px"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: [],
      searchDataSource: [],
      showMsg: false,
      msgText: ""
    };
  }

  componentDidMount() {
    getDataFromStorage()
      .then((result, reject) => {
        if (result) {
          this.setState({ hashtags: result });
        }
        if (reject) {
          this.setState({ showMsg: true, msgText: reject });
        }
      })
      .catch(e =>
        this.setState({ showMsg: true, msgText: `Problems with App42': ${e}` })
      );
  }

  addHashtagHandler = value => {
    const hashtags = this.state.hashtags;
    const isNotAlreadyAdded = !hashtags.find(htag => htag.label === value);
    if (isNotAlreadyAdded) {
      this.setState({
        hashtags: [...hashtags, ...[{ key: hashtags.length + 1, label: value }]]
      });
    }
  };

  handleRequestDelete = key => {
    const hashtags = this.state.hashtags;
    const tagToDelete = hashtags.map(tag => tag.key).indexOf(key);
    hashtags.splice(tagToDelete, 1);
    this.setState({ hashtags: hashtags });
  };

  saveDataToStore = () => {
    const hashtags = this.state.hashtags;
    console.log(hashtags);
    updateDataInStorage(hashtags)
      .then((result, reject) => {
        if (result) {
          this.setState({ showMsg: true, msgText: "Data updated in Cloud" });
        }
        if (reject) {
          this.setState({ showMsg: true, msgText: reject });
        }
      })
      .catch(e =>
        this.setState({ showMsg: true, msgText: `Problems with App42': ${e}` })
      );
  };

  sereachTweets = value => {
    if (value) {
      sereachTweets(value)
        .then((resolve, reject) => {
          if (resolve) {
            this.setState({
              searchDataSource: resolve
            });
          } else {
            this.setState({ showMsg: true, msgText: reject });
          }
        })
        .catch(e =>
          this.setState({
            showMsg: true,
            msgText: `Problems in twitter API: ${e}`
          })
        );
    }
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={style.wrapper}>
          <div style={style.container}>
            <SearchInput
              value=""
              addHashtag={this.addHashtagHandler}
              searchDataSource={this.state.searchDataSource}
              sereachTweets={this.sereachTweets}
            />
            <TagsCloud
              hashtags={this.state.hashtags}
              deleteHashtag={this.handleRequestDelete}
            />
            <SaveButton saveTags={this.saveDataToStore} />
          </div>
          <Msg
            message={this.state.msgText}
            open={this.state.showMsg}
            hide={() => this.setState({ showMsg: false, msgText: "" })}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
