# MyReads: A Book Tracking App - Project

Front End Web Developer Nanodegree Program
==========================================

## Table of Contents

* [Description](#description)
* [Instructions](#instructions)
* [Resources](#resources)
* [Create React App](#CreateReactApp)
* [Backend Server](#BackendServer)
* [Important](#important)
* [Contributing](#contributing)

## Description

Project #6 - MyReads is a single page React application that allows users to select and organize books into three categories or bookshelves: Currently Reading, Want To Read, and Read.

## Instructions

To install:
1. Clone or download (ZIP file) the repository using the green clone or download button on the right side of the screen.
2. Navigate to the location of the clone or unZIPped file on your computer via the terminal.
3. Install all project dependencies with `npm install`.
4. Open a new terminal window, cd into the project root folder, - start the development server with `npm start`.

To view click here: [MyReads: A Book Tracking App](https://ypadron.github.io/reactnd-project-myreads-starter/)

## Resources

* [React Docs: Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [React Docs: State and Life Cycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [React Docs: Debounce](https://reactjs.org/docs/faq-functions.html#debounce)
* [React Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [MyReads Walk-Thru by Maeva from EMEA](https://www.youtube.com/watch?v=i6L2jLHV9j8)
* [FEND Project 6 - Walk Through (SHORT) by @RyanWaite.ProjectCoach [FEND, MWS]](https://www.youtube.com/watch?v=N8bU1oWlLwY&feature=youtu.be)
* [FEND P6: Resources](https://www.diigo.com/outliner/fkkvtl/Udacity-MyReads%3A-My-Reads%3A-Book-Tracking-App-Project-(project-%236)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is forked from the starter code for _all_ Udacity students, my version of a popular assignment. Therefore,
I most likely will not accept pull requests.

<!-- For details, check out [CONTRIBUTING.md](CONTRIBUTING.md). -->

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, I TRIED to maintain use of ES6 in the additional JavaScript I wrote.
