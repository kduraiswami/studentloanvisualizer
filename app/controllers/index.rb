get '/' do
	javascript_env['loanPortfolio'] = LoanPortfolio.find(2)
	erb :index
end