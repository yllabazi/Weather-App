import React from "react";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    )
  }
}

