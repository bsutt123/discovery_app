require 'rails_helper'

RSpec.describe 'TV_Api', type: :request do
  describe 'GET /tv/filter', :vcr do
    context 'with correct params' do
      it "responds with results to popular" do
        get '/api/tv/filter?filter=popular'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"].length).not_to be(0)
      end

      it "responds with results to top_rated" do
        get '/api/tv/filter?filter=top_rated'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"].length).not_to be(0)
      end

    end

    context "with wrong params" do
      it "does not have results with bad filter" do
        get '/api/tv/filter?filter=hydra'
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["results"]).to be_nil
      end
    end 
  end

  describe 'GET tv/search', :vcr do
    it "responds with results to a good query" do
      get '/api/tv/search?query=Star Wars'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["results"].length).not_to be(0)
    end
  end

  describe 'GET tv/id', :vcr do
    it 'responds with correct values for an id', :vcr do
      get '/api/tv/1412'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["name"]).to eq("Arrow")
    end

    it "responds with status_code 34 on bad id" do
      get '/api/tv/2691499'
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["status_code"]).to eq(34)
    end
  end
end