import React, { Component } from "react";
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
class TagsCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Some'},
      {key: 1, label: 'Body'},
      {key: 2, label: 'One'},
      {key: 3, label: 'Told'},
      {key: 4, label: 'Me'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
        minHeight: '',
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

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderHashtag(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
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
