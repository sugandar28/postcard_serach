import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="search...." />
        </form>
      </div>
    );
  }
}

export default SearchBar;
