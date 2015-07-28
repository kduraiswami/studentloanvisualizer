require 'roo'
require 'open-uri'
require 'pp'

excel_student_loan_portfolios = Roo::Spreadsheet.open('db/loanportfoliodata.xlsx')
excel_student_loan_portfolios = Roo::Excelx.new("db/loanportfoliodata.xlsx")

raw_student_loan_portfolios = []

excel_student_loan_portfolios.each_row_streaming do |row|
	raw_student_loan_portfolios << row
end

raw_student_loan_portfolios.each do |individual_loan|
	LoanPortfolio.create(
		"institution_name" => individual_loan[2].value,
		"address" => "#{individual_loan[3].value}" + ' ' + "#{individual_loan[4].value}" + ', '+ "#{individual_loan[5].value}" + ' ' + "#{individual_loan[6].value}", 
		"borrowers_in_repayment" => individual_loan[7].value,
		"borrowers_in_default" => individual_loan[8].value,
		"default_rate" => individual_loan[9].value,
		"total_borrowers_default" => individual_loan[10].value,
		"outstanding_principal" => individual_loan[11].value,
		)
end
