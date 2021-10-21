# Crealytics Case Study

What the Application does.

- A web page that Parsed and loaded all the items from the provided product feed file (products.csv) into a List, containing Serial Number, title, thumbail img, price, and an after sale price, that is paginated 100 item per page.
- Every Item in the list is expandable upon selection to show the rest of the Images of the selected Item.
- The web page containes a Search Input Field at the top, which dynamically updates our list upon every key press, and have an Autocomplete Feature as well.

The Technologies I've used.

- Material UI
- d3
- react-virtualized
- React
- React Testing Library/ jest

Some of the challenges I've faced and how I've tackled them.

- Parsin a CSV file, using d3 was very helpful.
- Rendering 20k Items into our display, and handling pagination upon filtering, done filter() just before we slice() to show each Item list per page.

## Installation

```bash
npm install
```

or

```bash
yarn
```

## Usage

Used Material UI as a Component Library, d3 for CSV data conversion to JSON, and react-virtualized for handling large Input Autocomplete.

```bash
npm install @mui/material
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @material-ui/core
npm install d3
npm i react-virtualized

```

## Project Hirearchy

- public folder
- src - components
- - views

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Getting Started

## Created the Header Component using Appbar from the Material UI components

## Created Home as our main view, and rendered the Header Component as the First Tag

## Rendered the Home Component as our main View in App.js

## Fixed the Pagination to render 100 Items per page

## Implemented the Search Input Field

## Fixed the Search to work dynamically with the Main Product List Pagination

## Created Search as a Separate Component, while adding to it the Autocomplete UI, using react virutalized and added the onChange

## Functionality as well, on the Search Input Field

## Created a Images Component, and added a Popover Component to be rendered once an Item is selected for Expansion

## Used React testing library using jest to test all of my Components Intial rendering

## Tested the Search Input field value to be changed upon typing

## Tested all of the buttons are working in the ProductList Component. to make sure that we can expand an item, or use the pagination pannel

### `yarn start`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
