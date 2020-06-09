import React from 'react';

export default class InputField extends React.Component {
  render() {
    return (
        <input onChange={this.props.handleInputChange} className='inputField' placeholder='Enter location...' />
    )
  }
}