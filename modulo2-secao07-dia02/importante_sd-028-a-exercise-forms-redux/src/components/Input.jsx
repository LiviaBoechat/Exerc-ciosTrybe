import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        { label }
        <div className="control">
          <input
            className="input"
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ name }
          />
        </div>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
};

export default connect(mapStateToProps)(Input);
