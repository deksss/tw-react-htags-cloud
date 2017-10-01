import React, { Component } from "react";
import Chip from "material-ui/Chip";
import PropTypes from "prop-types";

const styles = {
  chip: {
    margin: 4,
    minHeight: "",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid"
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    border: "2px solid black",
    minHeight: 300,
    padding: 10
  }
};

class TagsCloud extends Component {
  static propTypes = {
    hashtags: PropTypes.array.isRequired,
    deleteHashtag: PropTypes.func.isRequired
  };

  renderHashtag(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.props.deleteHashtag(data.key)}
        style={styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    const { hashtags } = this.props;
    return (
      <div style={styles.wrapper}>{hashtags.map(this.renderHashtag, this)}</div>
    );
  }
}

export default TagsCloud;
