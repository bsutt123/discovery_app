require 'json'

class MoviesController < ApplicationController
  include HTTParty
  
  base_uri "https://api.themoviedb.org/3"
  #GET videos based on a filter
  def filter

    #define the params coming into the request
    filter_param = params["filter"]
    page = params["page"] || 1

    #generate response with HTTParty
    response = self.class.get("/movie/#{filter_param}?api_key=#{ENV["MOVIE_API_KEY"]}&region=US&page=#{page}&include_adult=false")

    #parse and render the response 
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end

  def search
    #define parameters of the search
    query = params["query"]
    page = params["page"] || 1

    #generate a response based on the params given
    response = self.class.get("/search/movie?api_key=#{ENV["MOVIE_API_KEY"]}&language=en-US&query=#{query}&page=#{page}&include_adult=false")

    #parse and rener search response
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end
end