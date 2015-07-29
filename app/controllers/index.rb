get '/' do
	javascript_env['loanPortfolio'] = LoanPortfolio.all
	erb :index
end