This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) following this [tutorial](https://youtu.be/VPVzx1ZOVuw).

# YouTube Clone Version 1

## Description

* This application...

## Demo Link

* Check out the Project

## Technologies Used

complete this list
add eslint
note the workaround you had to do

* [Axios 0.19.2](https://www.npmjs.com/package/axios)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
* [ESLint 14.0.0](https://eslint.org/)
* [HTML5](https://html.spec.whatwg.org/multipage/)
* [JavaScript](https://www.javascript.com/)
* [Material-UI Core 4.11.0](https://material-ui.com/)
* [ReactDOM 16.13.1](https://www.npmjs.com/package/react-dom)
* [ReactJS 16.13.1](https://reactjs.org/docs/create-a-new-react-app.html)

## Screenshots

### Landing Page
![Landing Page]()

### New Search Results
![New Search Results]()


## How to Run

* Clone down this project from [GitHub](https://github.com/gseals/youtube-clone)
* Install [http-server](https://www.npmjs.com/package/http-server) from npm.
* In your browser, navigate to [https://localhost:3000/](https://localhost:3000/)

## Contributors

[Gabriel Seals](https://github.com/gseals)

## Notes
* Review: another FANTASTIC tutorial.

* The first result of the array that returns is the channel and the channel is not a video so it does not play. I worked around this issue by creating an empty array, for looping over the original response from youtube and, for each item whose id.kind was not youtube#channel, I pushed that into a new array and then setState to that new array. JS for the win!