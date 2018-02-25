require 'json'

class MoviesController < ApplicationController
  include HTTParty
  
  base_uri "https://api.themoviedb.org/3"
  #GET popular movies
  def popular
    response = self.class.get("/movie/popular?api_key=#{ENV["MOVIE_API_KEY"]}")
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end

  def upcoming
    response = self.class.get("/movie/upcoming?api_key=#{ENV["MOVIE_API_KEY"]}")
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end

  def latest
    response = self.class.get("/movie/latest?api_key=#{ENV["MOVIE_API_KEY"]}")
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end

  def top_rated
    response = self.class.get("/movie/top_rated?api_key=#{ENV["MOVIE_API_KEY"]}")
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end

  def search
    query = params["query"]
    response = self.class.get("/search/movie?api_key=#{ENV["MOVIE_API_KEY"]}&language=en-US&query=#{query}&page=1&include_adult=false")
    parsed_response = JSON.parse(response.body)
    render json: parsed_response
  end
end