import axios from 'axios';
import youtubeKeys from '../helpers/apiKeys.json';

const apiKeys = youtubeKeys.apiKey;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: `[${apiKeys}]`
  }
})