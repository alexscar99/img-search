import React from 'react';
import unsplash from '../api/unsplash';
import { PhotoResponse } from '../utils/PhotoResponse';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

interface AppState {
  images: PhotoResponse[];
}

class App extends React.Component<{}, AppState> {
  state = { images: [] };

  onSearchSubmit = async (term: string): Promise<void> => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
