as a user I want to see on a map where in a state student loans are in repayment vs default

Logic Steps: 
Render a normal google map (done)
create loan portfolio model (migration)
import xls file into a rake:seed task (done)
seed db properly (done)
Need to combine string of address into one field (done)
Need to use geocoder to create a lat-lng for this address to post to google(done)
create JS ENV variable on layout file(done)

place marker for one loan portfolio

pass json object with all locations on index route
create markers as part of map initialize function
markers will include text associated with loan portfolio
location will come from a combine string of the addresses provided

Visual Steps: 
good icon for the marker placers
good zoom and center of map over the US
create a thorough and nice readme.md

Next Step: 
Pass json object with one loan portfolio and post to google for one marker

post to google the markers just like I did with sisfly and probably use a custom icon and maybe legend to denote a loan_portfolio location

steps - 

lets do research on how to import an xls file into ruby objects
lets post to google all 1800 of my markers with the text box of info
write some rspec/jasmine tests





