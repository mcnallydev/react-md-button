import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonTag } from './style';

class Button extends Component {

  onClick = () => {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  }

  /**
   * To set primary prop
   * @return {Boolean}
   */
  isPrimary() {
    return (this.props.primary && this.props.disabled === false)
  }

  /**
   * React Component render
   */
  render() {
    return (
      <ButtonTag primary={this.isPrimary()} onClick={this.onClick}>{this.props.label}</ButtonTag>
    );
  }
}

/**
 * React Component defaultProps
 */
Button.defaultProps = {
  disabled: false,
  label: '',
  primary: false,
};

/**
 * React Component propTypes
 */
Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
