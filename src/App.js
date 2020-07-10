import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';
import youtube from './api/youtube';
import apiKeys from './helpers/apiKeys.json';

const key = apiKeys.youtubeKeys.apiKey;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('nashville software school');
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: `${key}`,
        q: searchTerm,
      },
    });

    const responseGroup = response.data.items;
    const newList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < responseGroup.length; i++) {
      if (responseGroup[i].id.kind !== 'youtube#channel') {
        newList.push(responseGroup[i]);
      }
    }

    this.setState({ videos: newList, selectedVideo: newList[0] });
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
