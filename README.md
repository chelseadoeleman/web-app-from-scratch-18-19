# Web App From Scratch @cmda-minor-web 18-19

**During this project I had to create an web application, that gets the data from a API. The most important part is getting the data asynchronous**

![Unsplash Api]()

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

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

In the application you can scroll through a slider, to see different images that can be found on [unsplash]().
Next to the unsplash image slider you can find a map of the world. When clicking on an image, you will get redirected to that location where the photo was either uploaded or taken. Depending on what location the author gave their photo. 

## Learning process

## Resources

https://unsplash.com/developers
https://unsplash.com/documentation
https://github.com/unsplash/unsplash-js
https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#query
https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/

## Credits

## Checklist
[ x ]   Find an API of your interest
[ x ]   Retrieve data from the API asynchronous. 
[ x ]   Store data in an object (without parse, because data object are not defined as a string)
[ x ]   Show images in a slider
[ x ]   Add a little bit of styling to the application
[   ]   Add snappoints to the images
[ x ]   Add another API (mapbox)
[ x ]   Add location from image into mapbox
[   ]   Convert location to longitude and latitude
[   ]   Add pins to the location on the map
[   ]   Remove pop-up message when location is unknown with hover over image
[ x ]   Write a readme.md

## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).
