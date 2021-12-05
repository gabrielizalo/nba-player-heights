<h1 align="center">
  <img src="assets/readme-header.jpg" alt="NBA Players by Gabo" />
</h1>

# Motivation

Just a React exercise:

- Write a function that searches through NBA player heights based on user input.
- The raw data is taken from [NBA Player heights from 2008-9](https://www.openintro.org/data/index.php?data=nba_heights).
- The data is served in json format by [the endpoint](https://mach-eight.uc.r.appspot.com/).
- The app will take a single integer input, download the raw data and print a list of all pairs of players whose height
  in inches adds up to the integer input to the application.
- If no matches are found, the application will print "No matches found".

# Tech Stack

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Create React App](https://github.com/facebook/create-react-app): Set up a modern web app by running one command.
- [MachEight Endpoint](https://mach-eight.uc.r.appspot.com/): Heights of all NBA players from the 2008-9 season.
- [HTML5 Boilerplate](https://html5boilerplate.com/): The web’s most popular front-end template
- [MUI React UI framework](https://mui.com/): The React UI library you always wanted.
- [The Real FavIcon Generator](https://realfavicongenerator.net/): Favicon Generator. For real. All browsers. All
  platforms. Your favorite technologies.
- [ESLint](https://eslint.org/): Find and fix problems in your JavaScript code.
- [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/): A mostly reasonable approach to React and JSX.
- [Prettier](https://prettier.io/): An opinionated code formatter.
- [npm packages](https://www.npmjs.com/):
  - [gh-pages](https://www.npmjs.com/package/gh-pages):
    Publish files to a gh-pages branch on GitHub (or any other branch anywhere else).
  - [husky](https://www.npmjs.com/package/husky):
    Husky improves your commits and more 🐶 woof! Used to run Prettier and Linter before every commit.
  - [prop-types](https://www.npmjs.com/package/prop-types):
    Runtime type checking for React props and similar objects.
  - [semantic-release](https://www.npmjs.com/package/semantic-release):
    semantic-release automates the whole package release workflow including: determining the next version number,
    generating the release notes, and publishing the package.

# NBA Credits

- Logo: [NBA Logo Wallpaper](https://wallpapersafari.com/nba-logo-wallpaper-border/)
- Icon: [NBA Icon](https://iconarchive.com/show/button-ui-requests-13-icons-by-blackvariant/NBA-icon.html)
- Wallpaper: [NBA Stars Wallpapers](https://wallpaperaccess.com/nba-stars)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` ~ `npm run predeploy`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run deploy`

Publish build files to [project GitHub Page](https://gabrielizalo.github.io/starwars-planets/).

### `npm run format`

Run Prettier script.

### `npm run lint`

Validate code with eslint rules.
