import React from "react";
import Snackbar from "material-ui/Snackbar";
import PropTypes from "prop-types";

class Msg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000
    };
  }

  static propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={this.state.autoHideDuration}
          onRequestClose={this.props.hide}
        />
      </div>
    );
  }
}

export default Msg;
