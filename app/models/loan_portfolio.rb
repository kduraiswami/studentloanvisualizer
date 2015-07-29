class LoanPortfolio < ActiveRecord::Base
	require 'geocoder'
	require "geocoder/railtie"
	Geocoder::Railtie.insert
	geocoded_by :address
	after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }
end
