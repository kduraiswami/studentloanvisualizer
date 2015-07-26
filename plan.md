The most boring way for me to do this is: 

I can put a pin on every address that if you click will give the information associated with that university

one value add could be a heat map, but that would make it difficult to single in on what the specific college in question is

as a user I want to see on a map where in a state loans are in repayment vs default

I can click on a marker and get this information in an unstyled way

First thing will be to render a map on the page

next thing will be to seed the db and create ruby objects of the LoanPortfolio 
- the schema for the LoanPortfolio Model is as follows:


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

technologies used - 
Sinatra
AR
JS
MapCanvas



steps - 

Lets create a blank sinatra skeleton
lets look at my past project and put the same canvas on for maps
lets do research on how to import an xls file into ruby objects
lets post to google all 1800 of my markers with the text box of info





