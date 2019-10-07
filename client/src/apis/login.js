import axios from 'axios';

export default axios.create({
    baseURL: "https://bloodlines.au.auth0.com/oauth/token"
});