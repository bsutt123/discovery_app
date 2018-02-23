Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #routes that connect the api to popular get requests from The Movie DB
  get '/movies/popular', to: 'movies#popular'
  get '/movies/top_rated', to: 'movies#top_rated'
  get '/movies/upcoming', to: 'movies#upcoming'

  #create a route for the search parameter
  get '/movies/search', to: 'movies#search'
end
