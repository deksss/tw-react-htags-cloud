import React, { Component } from 'react';
import TagsCloud from '../Components/TagsCloud';
import SearchInput from '../Components/SearchInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <SearchInput value="test"/>
          <TagsCloud />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
