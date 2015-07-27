as a user I want to see on a map where in a state student loans are in repayment vs default

Logic Steps: 
Render a normal google map (done)
create loan portfolio model (migration)
import xls file into a rake:seed task
seed db properly
pass json object with all locations on index route
create JS ENV variable on layout file
create markers as part of map initialize function
markers will include text associated with loan portfolio
location will come from a combine string of the addresses provided

Visual Steps: 
good icon for the marker placers
good zoom and center of map over the US



next thing will be to seed the db and create ruby objects of the LoanPortfolio 
the schema for the LoanPortfolio Model is as follows:


t.string institution_name
t.string address
t.string city
t.string St
t.string ZIP
t.string borrowers_in_repayment
t.string borrowers_in_default
t.string default_rate
t.string total_borrowers_default
t.string oustanding_principal

I will post to google the markers just like I did with sisfly and probably use a custom icon and maybe legend to denote a loan_portfolio location

steps - 

lets do research on how to import an xls file into ruby objects
lets post to google all 1800 of my markers with the text box of info
write some rspec/jasmine tests





