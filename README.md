# Dicovr App

Discovr is a web app built to help people discover more tv shows and movies that they might enjoy watching. Its simple and intuitive interface helps you get at the heart of what you want to find without having to wade through piles of extras or advertisements.

## Overview

The App has 3 main pages currently...

1. Landing Page
2. Movies View and Search
3. TV Show View and Search

On the pages for finding Movies and Television, you can either show results based on a filter set by The Movies Database, or based on a search input. You can click on the image to be taken to a page with more details about the result.

## Architecture

### Rails API

The backend for the project uses a Rails API to make calls to The Movie Database API. This helps us obscure some information from the browser such as api keys and other requests, as well as creating a frontend neutral backend that can work with any number of different types. 

Currently, the API in Rails is a simply passes the request of the front end onto The Movie Database API and then passes the result back to the frontend. The future of this features will involve memoization of the data incoming from the API as well as ActiveJobs for the most common day to day information to limit the number of times that the Movie Database is hit by our Backend API.

### React Frontend

The Frontend for this project is built entirely using React. Due to the somewhat complex nature of state management in the React world, it also uses React-Redux to store the global state of the project, as well as using redux actions and reducers to decouple components from the state of their parent. Additionally, the Frontend using Redux-Thunk to create actions that allow us to first get information from the API before dispatching actions to the Root Reducer, ensuring that we can maintain the 3 Basic Rules of Redux.

If you are unfamiliar with React-Redux or Redux Thunk you can find the documetation [here](https://redux.js.org/introduction) and [here](https://github.com/gaearon/redux-thunk) respectively.

### Heroku Deployment

Discovr uses Heroku as a deployment mechanism. Its convenient for us because the frontend and backend are served from the same site, CORS is not a concerned and we can avoid a lot of hassle that comes with deploying them to separate sites. Heroku also allows for the use of buildpacks to incorporate both node and ruby builders.

## Local Installation

If you would like to run the project locally, you will need to take a couple steps...

1. Fork and Clone the Repository into your Github. 
2. You will need to install the dependencies for the project. From the apps root directory, run these commands

```
bundle install
cd client
npm install 
```
3. This gem uses `pg` for a development and production database, though currently there are no database features to implement. You will need to configure your computer to have a pg database associated with the project (you can find an example of how to get started [here](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres)) Particularly, you need to give Rails a pg username and password to be able to make a PostGreSQL database on your computer.
4. This gem uses `figaro` to keep environment variables secret. You can visit the [figaro github](https://github.com/laserlemon/figaro) to get more details about using figaro. 
5. In order for you to run and test locally, you will need to get an API key from [The Movie Database](https://www.themoviedb.org/documentation/api) and give your local figaro `application.yml` file a `MOVIE_API_KEY` variable that references your environment variable. If you are a consistent contributor to the project, then you can talk to me and I can let you use my key.
6. Nearly There! Now that everything is installed and setup, you just need to open up 2 separate terminals (we are running a Rails backend and an React frontend) and do 
```
rails s -p 3001
```
from the root of the application. Then inside the client folder run the command
```
npm start 
```
7. You should be able to visit `localhost:3000` and see the app running. If you want to query the Rails API directly, it is being hosted on `localhost:30001`

Thats all you need to do to get the app running locally

## Testing

Currently the testing is done with RSpec for the Rails API. Tests can be found in the spec folder and run with the command

```
rspec spec/<folder of tests here>
```

Currently, in order to limit the number of time you have to hit the API, we use the `vcr` gem (found [here](https://github.com/vcr/vcr)) to store the interactions with the database in cassettes and then use that iteractions for future runs of the test suite. I've chosen to include the cassettes generated in the github so that we can see not only the tests but what the cassette is storing that made the test pass. Currently no private information is stored on any of the cassettes, but if any future work involves an API that returns private data please _*DO NOT*_ commit those cassettes to the repositiory.

## Contributing

If you are interested in making Discovr better, you can visit the Issues tab and see a list of current issues the app is experiencing. The Issues tab will include bugs submitted by uses as well as feature requests.

After you have completed a local installation for the project, please work on branch with a prelabel `feature` if it is for a new feature and `bug` if it is for a bugfix. For example, if I am implementing a new pages feature on the movies list view, I would use a branch name `feature/add-movie-pages`. If I was fixing a broken Tv Show Detail element I would use the branch name of the style `bug/fix-tv-show-detail`. A `hotfix` prefix can be used for branches that include hyper critical bug fixes that need to be incorporated immediately. This will help us identify what exactly your branch is working on as well as when it should be merged into master and deployed.

## Future Work

There is a ton that can be added to the project to help support the app and continue to grow it into the future. These are the top priorities to implement on the front and backend

### Frontend

1. Add pagination to the MoviesList and TvShowList to let user see more than one page of results on any given page.
2. Create views necessary for a show to dive deeper into a TV Series, allowing them to query data for a particular season and episode more closely
3. Add Actor and Actress searching, as well as a cross reference from movies and shows to actors
4. Code Splitting to reduce load times

### Backend

1. Add Memoization to the database to begin limiting the number of api requests
2. Implement User features using Devise or perhaps Devise Authentication Token gems.
3. Create an ActiveJob that crawls The Movie Database API for information while the app is not at request capacity to continue to store more data from The Movie Database API

## Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [PostCSS](https://github.com/postcss)
* [Ruby on Rails](http://rubyonrails.org/)

Special shout out to [Create React App](https://github.com/facebook/create-react-app) for making an amazing Boilerplate that also include the ability to eject and configure how you like. This project used the [alpha release](https://github.com/facebook/create-react-app/issues/3815) of Create React App, and it added some _amazing_ new features that you should check out, including built in support for CSS Modules and other really cool new features. 

