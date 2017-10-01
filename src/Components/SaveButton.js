import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import SaveIcon from "material-ui/svg-icons/content/save";
import PropTypes from "prop-types";

const style = {
  border: "2px solid black",
  alignSelf: "flex-end",
  marginTop: 10,
  borderRadius: 10
};

class SaveButton extends Component {
  static propTypes = {
    saveTags: PropTypes.func.isRequired
  };

  render() {
    return (
      <FlatButton
        style={style}
        label="Save"
        labelPosition="after"
        icon={<SaveIcon />}
        onClick={this.props.saveTags}
      />
    );
  }
}

export default SaveButton;
