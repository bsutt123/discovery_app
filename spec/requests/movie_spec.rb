require 'rails_helper'
require 'json'

RSpec.describe 'Movies API', type: :request do
  describe 'GET /movies/filter', :vcr do
    context 'with correct params' do
      it "responds with results to popular" do
        get '/api/movies/filter?filter=popular'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"].length).not_to be(0)
      end

      it "responds with results to top_rated" do
        get '/api/movies/filter?filter=top_rated'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"].length).not_to be(0)
      end

      it "resonds with results to upcoming"  do
        get '/api/movies/filter?filter=upcoming'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"].length).not_to be(0)
      end
    end

    context "with wrong params" do
      it "does not have results with bad filter" do
        get '/api/movies/filter?filter=hydra'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"]).to be_nil
      end
    end 
  end

  describe 'GET movies/search', :vcr do
    it "responds with results to a good query" do
      get '/api/movies/search?query=Star Wars'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["results"].length).not_to be(0)
    end
  end

  describe 'GET movies/id', :vcr do
    it 'responds with correct values for an id' do
      get '/api/movies/269149'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["title"]).to eq("Zootopia")
    end

    it "responds with status_code 34 on bad id" do
      get '/api/movies/2691499'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["status_code"]).to eq(34)
    end
  end
end