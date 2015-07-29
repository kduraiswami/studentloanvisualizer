This is a tool to help visualize student loan lenders throughout the nation and evaluate how healthy their loan portfolio is in relation to default.

The Steps to Running this Application Are: 

1. clone or fork repository down
From commandline in project root directory:
3. run be bundle install
4. run be rake:db create
5. run be rake:db migrate
6. run be rake:db seed (this may take time to seed and geocode 1800 items)
7. run be shotgun config.ru 
8. go to localhost://9393 to view project

Technologies Used: 

Sinatra with ActiveRecord for this application
The Roo gem to parse the excel file into ruby objects in the seed file
The Geocoder gem to create the longitude and latitude on creation of LoanPortfolio objects
The Google Maps API with custom markers and styling 

Points of note:

The logic to create usable ruby objects in the db/seeds.rb file and use of string interpolation to create one field for address<br>
Use of Geocoder gem on creation of LoanPortfolio objects.<br>
Logic in public/js/application.js file to plot all Loan Portfolios with information windows.<br>

Using the Application: 
The markers on the map are each a geocoded location of a Loan Portfolio of a specific institution. Clicking on a marker will show an institution name as well as the default rate and outstanding principal of its loan portfolio. I tried to take the perspective of a user trying to understand which specific institutions are under the most duress from borrowers. 

Feedback is much appreciated! 
