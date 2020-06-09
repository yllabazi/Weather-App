import React from 'react';
import InputField from '../elements/InputField';
import SearchBtn from '../elements/SearchBtn';

export default class SearchBar extends React.Component{
  render() {
    return (
      <div className='searchBar'>
        <InputField handleInputChange={this.props.handleInputChange} />
        <SearchBtn handleBtnClick={this.props.handleBtnClick}/>
      </div>
    )
  }
}