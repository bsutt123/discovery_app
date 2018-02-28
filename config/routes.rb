Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    scope '/movies' do
      #create route to display filtered movies
      get '/filter', to: 'movies#filter'
    
      #create a route to search for movies
      get '/search', to: 'movies#search'
    end

    scope '/tv' do 
      #create a route to show filtere tv_shows
      get '/filter', to: 'tv_shows#filter'

      #create a route to search for tv_shows
      get '/search', to: 'tv_shows#search'
    end
  end
end
