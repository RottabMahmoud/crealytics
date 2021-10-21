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

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

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

- public folder, - data.
- src, - components, - views, - tests.
- - The App.js is rendering our Home.js Component, which is our main view.
- - The Home.js renders both a Header.js containing the web page header, and the ProductList.js, which is our list of Products.
- - The ProductList.js renders the Search.js, which is our Search Input Field, and the Images.js Component, which is rendered upon any Item Selection.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="crealytics.com"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-Crealytee-red" alt="Crealytee" /> </a>
