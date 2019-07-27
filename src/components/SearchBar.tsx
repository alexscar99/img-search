import React from 'react';

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

interface SearchBarState {
  term: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = { term: '' };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
