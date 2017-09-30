import React, { Component } from 'react';
import TagsCloud from '../Components/TagsCloud';
import SearchInput from '../Components/SearchInput';
import SaveButton from '../Components/SaveButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    width: '400px',
  },
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={style.wrapper}>
          <div style={style.container}>
            <SearchInput value="test"/>
            <TagsCloud />
            <SaveButton />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
