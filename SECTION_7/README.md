PICS APP
- Want to learn to get feedback from user, need to get search term from user
- How to fetch API, need to use the search term to fetch the API
- Take the fetched images and show them on screen in a list

VERSION 1
- Make a search bar where we use API to find images matching the word

VERSION 2
- Make the images in an even grid

COMPONENTS
- App - instance of SearchBar and ImageList
- SearchBar - Search bar, class component since have to handle state
- ImageList

SearchBar
- When user types in we want to get some reaction
    - Create method onInputChange() 
        - onChange attribute on the input tag
            - Takes in this.onInputChange with no parentheses, so that it is a callback reference to the input, so the input can call it at some time in the future
            - 'event' argument is automatically passed from the input, and we want to access 'event.target.value' which gives whatever typed into input

FLOW 
- User types input
- Callback invoked
- Call setState with new value
- Component rerenders
- Input is told what value is coming in from state

onFormSubmit()
- event.preventDefault will prevent the form from submitting automatically if there is no date
- Arrow function automatically makes sure 'this' is defined for class methods (instead of using bind() and constructor)
- Could also have instead placed the arrow function directly in the 'onSubmit' property

PASS SEARCH INPUT UP TO PARENT ('APP')
- Turn app into class based component and add method 'onSearchSubmit', when searchBar is called then App will pass this method down to it. Then when the user submits the form, onSearchSubmit will be called with what was input.

API
- When search term entered, AJAX (or network) request to Unsplash API (stock images)
- Unsplash will send back JSON records matching requests and can use to post images
- AJAX CLient will make the request (not the React App)
- Make get request with axios 

FLOW
- Component renders itself with no images
- onSearchSubmit method is called
- Request made to unsplash
- Request complete
- Set image data on state of App component (use setState)
- App rerenders to show image (ImageList Component will show them)

HANDLE PROMISE FROM API (ASYNCHRONOUS FUNCTION) WITH ASYNC/AWAIT
- Use async on the method name
- Use await keyword on the response

SET APP STATE
- Add images: [] 
- Setstate in the onSearchSubmit , and will cause the rerender

IMAGELIST
- Call this component in App.js
- Pass in the images found to the component through props from App component

IMAGECARD COMPONENT
- Will need component to load each individual image so we can determine the height of it and use the grid-row-end CSS property to span the certain amount of cells to separate it from its neighbour

FLOW
- Let imageCard render itself and its image
- Rach into DOM and figure out the height of the image
- Set the image height on state to get the component to rerender
- When rendring addign a 'grid-row-end' to make sure the image takes up the appropriate space