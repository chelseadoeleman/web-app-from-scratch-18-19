# Web App From Scratch @cmda-minor-web 18-19

**During this project I had to create an web application, that gets the data from a API. The most important part is getting the data asynchronous**

![Unsplash Api]()


## Table of Contents
* [How to install](#how-to-install) 
* [Walktrough the application](#walk-trough-the-application) 
* [Learning process](#learning-process)
* [Resources](#resources)
* [Credits](#credits)
* [Checklist](#checklist)
* [License](#license)

## How to install

Before installing make sure you have installed the latest version of node.js
Choose or make a new directory.
Load the template into your directory.
```bash
git clone https://github.com/chelseadoeleman/web-app-from-scratch-18-19.git
```

Make sure you are in the right directory 
```bash
cd web-app-from-scratch-18-19
```

Check if you have the latest version of npm.
Install the dependencies in [package.json](./client/package.json)
```bash
npm install
```

There isn't a server build behind it yet. But feel free to do so. 


## Walktrough the application

In the application you can scroll through a slider, to see different images that can be found on [unsplash](https://unsplash.com/).Next to the unsplash image slider you can find a map of the world. When clicking on an image, you will get redirected to that location where the photo was either uploaded or taken. Depending on what location the author has given their photo(s). 

![The Application]()

## Learning process

Before this assignment I've worked once with an api. So although I knew what to do I always have trouble getting started. However when I retrieved the data everything ran smoothly. I had fun while making the image slider. And because I wanted to do more with the slider I decided to look at another API. This time mapbox. Getting started went quite smoothly and adding a search bar to. However I had trouble with assigning the location to the searchbox. Together with Maikel I finally figured it out and now it's up and running! I do want to add pinmarks in the future, but before I can do this I have to get my location in longitude and latitude... 


## Resources

**API**
* [Unsplash](https://unsplash.com/developers)
* [Mapbox](https://www.mapbox.com/)

**Resources**
* [Unsplash developers](https://unsplash.com/developers)
* [Unsplash documentation](https://unsplash.com/documentation)
* [Unsplash github](https://github.com/unsplash/unsplash-js)
* [Unsplash mapbox query](https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#query)
* [Unsplash geocoder](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/)

## Credits

*   **Maikel:** For helping with mapbox.
*   **Tim:** For helping with the header, to be able to send more requests.

## Checklist
[x] Find an API of your interest
[x] Retrieve data from the API asynchronous. 
[x] Store data in an object (without parse, because data object are not defined as a string)
[x] Show images in a slider
[x] Add a little bit of styling to the application
[x] Retrieve more pages/results from the API. 
[ ]   Add snappoints to the images
[x] Add another API (mapbox)
[x] Add location from image into mapbox
[ ]   Convert location to longitude and latitude
[ ]   Add pins to the location on the map
[ ]   Remove pop-up message when location is unknown with hover over image
[x] Write a readme.md

## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).
