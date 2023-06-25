# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Make sure to `npm install` any dependencies before running the script

Realistically, this has taken me around `25 hours` to complete. With a few issues along the way setting me back a few hours.

### `npm start` to start

# Technologies

- React Typescript
- Ionic
  - Commonly used to produce web apps, but since I am familiar with the framework, and the technology make for easily implementable and already-styled
  - components, I decided to use it for the purpose of not spending too much time on styling, while still haveing some
  - I wanted to use ionic-routing as well, but encountered an issue with it, so I stuck to react-routing
- Tailwind CSS
  - Again, chosen since I am familiar with it. Is great for smaller scale apps, and gives quick access to easy commands to style quickly
- Axios for API access

# Architecture

- My App controls the routing of the web app and handles my API call, where the root of the app is my HomePage. This is the first page the user sees.
- I have another page where the user can view a detailed view of the beer they click. Again, the App handles this routing, where the id of the clicked beer is send as a param.
  - On this, please see the first note.
- My BeerCard is reusable in the way that it takes a prop for the list that renders it. If this prop (`detailedView`) is true, then the BeerCard will render additional data.
- In addition, the BeerList also takes this prop, so that BeerList also is reusable. If not, I would have to create a different list, for the Beer that is in detailed view.
- User is able to go back by clicking the "My Beer Pal" in the top Header, which is also a component. If adding new pages, it will be easy to add new routing in the Header alongside the App.

# Priorities

- I have not spent the most of my time making a visually beautiful setup, but rather making sure my functions and calls work properly
- Therefore, handling my data, and being able to showcase frontend capabilities, and not UI design, has been my main focus

# Notes

1. Creating your own beer, and seeing it in the detailedview is not possible

- My initial thought was that I would use axious in my DetailedViewPage to call the API with the ID given in my params. This mean that I was unable to view my own created beer, because they were not present in the API call, of course.
  The issue with the way I handle the beerArray is that my App serves the array to HomePage and in HomePage I manipulate the array as it is in HomePage, and when I click a button to view a dewtailed beer, I am sent, through props, the original array, which is not manipulated
- This gives issue to adding favourites on another page, which I had in mind as well.
