# Crealytics Case Study Description

## What the Application does

- A web page that Parsed and loaded all the items from the provided product feed file (products.csv) into a List, containing Serial Number, title, thumbail img, price, and an after sale price, that is paginated 100 item per page.
- Every Item in the list is expandable upon selection to show the rest of the Images of the selected Item.
- The web page containes a Search Input Field at the top, which dynamically updates our list upon every key press, and have an Autocomplete Feature as well.

## Technologies

- Material UI
- d3
- react-virtualized
- React
- React Testing Library/ jest
- JavaScript
- React hooks

## Some of the challenges I've faced and how I've tackled them

- Parsin a CSV file, using d3 was very helpful.
- Rendering 20k Items into our display, and handling pagination upon filtering, done filter() just before we slice() to show each Item list per page.

## Project Installation

```bash
git clone https://github.com/Rottabx/crealytics.git
cd crealytics
yarn 
```

## To Start the App

```bash
yarn start
```

## For Running the Tests

```bash
yarn test
```

## For Building

```bash
yarn test
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

## Project Hierarchy
```bash
  crealytics    
    ├─ public
    │  ├─ favicon.ico
    │  ├─ index.html
    │  ├─ data
    │     ├─ products.csv
    ├─ src                   ### root Folder
    │  ├─ index.js           ### project index
    │  ├─ components         ### used to group all the project components
    │  │  ├─ Header.js       ### Our Header
    │  │  ├─ Images.js       ### Images Pop Up
    │  │  ├─ ProductList.js  ### Our List of Items
    │  │  ├─ Search.js       ### Our Search Input Field
    │  ├─ tests              ### Tests folder folder
    │  │  ├─ Header.test.js    
    │  │  ├─ Home.test.js      
    │  │  ├─ Images.test.js   
    │  │  └─ ProductList.test.js 
    │  │  └─ Search.test.js
    │  ├─ views              ### views folder
    │  │  └─ Home.js         ### Our Home Component
    │  │─ App.css
    │  │─ App.js
    │  │─ reportWebVitals
    │  │─ setupTests.js
    ├─ .gitignore 
    ├─ node_modules
    ├─ package.json
    ├─ README.md
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://www.crealytics.com"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-Crealytee-red" alt="Crealytee" /> </a>
  