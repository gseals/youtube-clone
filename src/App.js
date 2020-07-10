import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';
import youtube from './api/youtube';
import apifishs from './helpers/apiFishs.json';

const fish = apifishs.youtubefishs.apifish;

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
        maxResults: 6,
        key: `${fish}`,
        q: searchTerm,
      },
    });

    const responseGroup = response.data.items;
    const newList = [];
    for (let i = 0; i < responseGroup.length; i += 1) {
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
