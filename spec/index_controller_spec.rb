require 'spec_helper'

describe "index_controller" do

	describe 'get / page' do

		it "should return a valid response" do
			get '/'
			expect(last_response.status).to be(200)
		end

		it "should render an id for the map" do 
			get '/'
			expect(last_response.body).to include("map-canvas")
		end

	end

end