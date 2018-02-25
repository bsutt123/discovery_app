Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    scope '/movies' do
      #create scopes for common types
      get '/popular', to: 'movies#popular'
      get '/top_rated', to: 'movies#top_rated'
      get '/upcoming', to: 'movies#upcoming'
    
      #create a route for the search parameter
      get '/search', to: 'movies#search'
    end

    scope '/tv_shows' do 
      get '/popular', to: 'tv_shows#popular'
      get '/top_rated', to: 'tv_shows#top_rated'
      get '/upcoming', to: 'tv_shows#upcoming'

      get '/search', to: 'tv_shows#search'
    end
  end
end
