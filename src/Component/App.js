import React from "react";
import SearchBar from "./SerachBar";
import postcard from "../Api/postcard";

class App extends React.Component {
  onSearchSubmit = async term => {
    const response = await postcard.get("postcode/search", {
      params: {
        q: term
      }
    });
    console.log(response);
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
