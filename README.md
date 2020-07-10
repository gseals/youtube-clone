This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) following this [tutorial](https://youtu.be/VPVzx1ZOVuw).

# YouTube Clone Version 1

## Description

* This application pulls data from the [YouTube API](https://developers.google.com/youtube/v3/getting-started) and, based on the code written, returns the top 5 results from the query. The code also allows an initial query to be returned in the ComponentDidMount and that result is set to 'nashville software school.'

## Demo Link

* [Check out the Project](https://gseals.github.io/youtube-clone)

## Technologies Used

* [Axios 0.19.2](https://www.npmjs.com/package/axios)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
* [ESLint 14.2.0](https://eslint.org/)
* [HTML5](https://html.spec.whatwg.org/multipage/)
* [JavaScript](https://www.javascript.com/)
* [Material-UI Core 4.11.0](https://material-ui.com/)
* [ReactDOM 16.13.1](https://www.npmjs.com/package/react-dom)
* [ReactJS 16.13.1](https://reactjs.org/docs/create-a-new-react-app.html)

## Screenshots

### Landing Page
![Landing Page](https://raw.githubusercontent.com/gseals/youtube-clone/master/screenshots/Landing%20Page.png)

### New Search Results
![New Search Results](https://raw.githubusercontent.com/gseals/youtube-clone/master/screenshots/New%20Search%20Results.png)

## How to Run

* Clone down this project from [GitHub](https://github.com/gseals/youtube-clone)
* Install [http-server](https://www.npmjs.com/package/http-server) from npm.
* In your browser, navigate to [https://localhost:3000/](https://localhost:3000/)

## Contributors

[Gabriel Seals](https://github.com/gseals)

## Notes
* Review: another FANTASTIC tutorial.

* The first result of the array that returns is the channel on youtube and the channel is not a video so it does not play. I worked around this issue by creating an empty array, using a for loop over the original response from youtube and, for each item whose id.kind was not youtube#channel, I pushed that into a new array and then setState to that new array. JS for the win!