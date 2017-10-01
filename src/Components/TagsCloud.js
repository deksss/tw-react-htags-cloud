import React, { Component } from "react";
import Chip from 'material-ui/Chip';

class TagsCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {chipData: [
    ]};
    this.styles = {
      chip: {
        margin: 4,
        minHeight: '',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        border: '2px solid black',
        minHeight: 300,
        padding: 10
      },
    };
  }



  renderHashtag(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.props.deleteHashtag(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    const {hashtags} = this.props;
    console.log(this.props)
    return (
      <div style={this.styles.wrapper}>
        {hashtags.map(this.renderHashtag, this)}
      </div>
    );
  }
}

export default TagsCloud;
