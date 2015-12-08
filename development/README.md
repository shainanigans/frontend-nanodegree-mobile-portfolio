# Website Performance Optimisation Portfolio Project

##Building This Project
* Install [Node.js](https://nodejs.org/en/)
* Install NPM by navigating to the project folder in your terminal and running `npm install`
* Install Grunt by running `npm install -g grunt-cli`
* Install the Grunt task dependencies by running:
  * npm install grunt-cli grunt-contrib-watch grunt-autoprefixer
  * npm install grunt-inline-css --save-dev
  * npm install grunt-responsive-images --save-dev
  * npm install grunt-contrib-clean --save-dev
  * npm install grunt-mkdir --save-dev
  * npm install grunt-contrib-uglify --save-dev

##To View
View the project [online](http://shainanigans.github.io/frontend-nanodegree-mobile-portfolio/production) to use Page Speed Insights. Timeline and other Chrome Dev Tools can be used on the online project as well.

##Optimisations
###Index.html
* Removed link to Google Fonts and replaced with Google's CSS for the style (tip from [Using Font Face](https://css-tricks.com/snippets/css/using-font-face/) on CSS-Tricks)
* Added `media` attribute to print stylesheet
* Used Grunt with ImageMagick, followed by ImageOptim to resize and compress images
* Used Grunt with an inline-css task to apply inline CSS to index-build.html and output to a new index.html file
* Moved JS to bottom of page
* Added `async` attribute to all JS (since none of it is critical)
* Minified external JS with Grunt task

###Pizza Project
####HTML
* Implemented `srcset` in pizza.html

####CSS
* Added `will-change` property to background pizza images (`.mover`)

####JavaScript
* Changed all `querySelector`-type methods to `getElementBy`-type methods
* Optimised `resizePizzas()`
  * Removed unnecessary `determineDx()` function
  * Used result of `sizeSwitcher()` to define new `width` of resized pizza
* Optimised `updatePositions()`
  * Moved `items` outside of function
  * Cached variables outside of the `for` loops
  * Created reusable values for `phase` variable using an array
  * Used `transform` instead of `left` CSS property to move background pizzas
* Optimised background pizza creation function
  * Reduced number of background pizzas from 200 to 100
  * Set `left` property for pizzas since `updatePositions()` no longer set it
  * Moved variables out of `for` loop
  * Used DocumentFragments instead of appending to the `div` within the loop

##About
This project is part of Udacity's Front-End Web Developer Nanodegree.
